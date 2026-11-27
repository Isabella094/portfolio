(() => {
  const projectId = document.body.dataset.project;
  const base = projectId ? '../' : '';
  let language = 'zh';
  try { language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh'; } catch {}
  const labels = {
    zh: { title: '作品集', greeting: '您好，我是林湘庭，這是我的', back: '返回作品集', goal: '專題目標', features: '功能與流程', technology: '使用技術', contribution: '實作與參與', results: '成果', visuals: '作品畫面', enlarge: '點擊放大', close: '關閉', report: '完整金融專題報告', read: '閱讀 PDF', download: '下載 PDF' },
    en: { title: 'Portfolio', greeting: 'Hello, I’m Hsiang-Ting Lin. This is my', back: 'Back to portfolio', goal: 'Project goal', features: 'Features and workflow', technology: 'Technology', contribution: 'Implementation and participation', results: 'Results', visuals: 'Project visuals', enlarge: 'Enlarge image', close: 'Close', report: 'Full finance project report', read: 'Read PDF', download: 'Download PDF' }
  };
  const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const main = document.querySelector('main');
  const dialog = document.createElement('dialog');
  dialog.className = 'image-viewer';
  document.body.append(dialog);
  function render() {
    const text = labels[language];
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    document.querySelector('.skip').textContent = language === 'zh' ? '跳至作品內容' : 'Skip to content';
    const brand = document.querySelector('.brand');
    const brandText = language === 'zh' ? '資料科學作品集' : 'Data Science Portfolio';
    brand.innerHTML = `<i aria-hidden="true"></i>${brandText}`;
    brand.setAttribute('aria-label', brandText);
    document.querySelector('footer').innerHTML = '<span>PORTFOLIO</span>';
    dialog.innerHTML = `<form method="dialog"><button class="close-button">${text.close} ×</button></form><img alt=""><p></p>`;
    const project = PROJECTS.find(item => item.id === projectId);
    if (!projectId) {
      document.title = text.title;
      main.innerHTML = `<section class="intro"><p>${text.greeting}</p><h1>${text.title}</h1></section><div class="project-grid">${PROJECTS.map(item => `<a class="project-card" href="projects/${escape(item.id)}.html"><img src="${escape(item.image)}" alt="${escape(item.imageAlt[language])}"><div class="card-title"><h2>${escape(item.title[language])}</h2><span class="card-arrow" aria-hidden="true">→</span></div></a>`).join('')}</div>`;
      return;
    }
    if (!project) { main.innerHTML = `<a href="../index.html">${text.back}</a>`; return; }
    document.title = project.title[language] + ' | ' + text.title;
    const paragraphs = ['goal', 'features', 'technology', 'contribution', 'results'].map(key => `<section class="copy-section"><h2>${text[key]}</h2><p>${escape(project[key][language])}</p></section>`).join('');
    const renderGallery = (figures, offset = 0) => figures.map((figure, index) => `<figure><button class="image-button" type="button" data-image="${index + offset}" aria-label="${text.enlarge} — ${escape(figure.alt[language])}"><img loading="lazy" src="${base + escape(figure.src)}" alt="${escape(figure.alt[language])}"></button><figcaption>${escape(figure.alt[language])}</figcaption></figure>`).join('');
    const figures = project.gallery || [];
    const assistant = project.assistant;
    const allFigures = [...figures, ...(assistant?.gallery || [])];
    const gallery = renderGallery(figures);
    const assistantSection = assistant ? `<section class="gallery" aria-labelledby="assistant-title">
      <h2 id="assistant-title">${escape(assistant.title[language])}</h2>
      <p>${escape(assistant.description[language])}</p>
      ${renderGallery(assistant.gallery, figures.length)}
    </section>` : '';
    const report = projectId === 'portfolio-ml' ? `<section class="report"><h2>${text.report}</h2><p><a href="../assets/reports/finance-final.pdf" target="_blank" rel="noopener">${text.read} ↗</a><a href="../assets/reports/finance-final.pdf" download>${text.download} ↓</a></p></section>` : '';
    main.innerHTML = `<a class="back" href="../index.html">← ${text.back}</a><article class="project-detail"><h1>${escape(project.title[language])}</h1>${paragraphs}<section class="gallery"><h2>${text.visuals}</h2>${gallery}</section>${assistantSection}${report}</article><a class="back" href="../index.html">← ${text.back}</a>`;
    main.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
      const figure = allFigures[Number(button.dataset.image)];
      const image = dialog.querySelector('img');
      image.src = base + figure.src;
      image.alt = figure.alt[language];
      dialog.querySelector('p').textContent = figure.alt[language];
      dialog.showModal();
    }));
  }
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    language = button.dataset.lang;
    try { localStorage.setItem('portfolio-language', language); } catch {}
    render();
  }));
  render();
})();
