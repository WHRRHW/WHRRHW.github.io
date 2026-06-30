const projects = [
  {
    id: "autofill",
    title: "AutoFill",
    category: "软件/电脑应用",
    intro: "自动提取结构化信息填表。",
    tech: ["CustomTkinter", "python-docx", "pdfplumber", "openai SDK", "docxtpl", "pydantic"],
    github: "https://github.com/WHRRHW/AutoFill-",
    coverImage: "./assets/covers/autofill-cover.png",
    images: [
      "./assets/screenshots/autofill/autofill-01.png",
      "./assets/screenshots/autofill/autofill-02.png"
    ],
    downloads: [{ label: "查看下载说明", href: "https://github.com/WHRRHW/AutoFill-" }],
    cover: "linear-gradient(135deg, #bec6b3 0%, #f5f6f3 42%, #9ca78f 100%)",
    initials: "AF",
    details: "面向业务人员的 Windows 桌面工具，围绕源文档解析、结构化抽取、模板变量匹配和 DOCX 渲染形成完整工作流。"
  },
  {
    id: "unitask",
    title: "UniTask AI",
    category: "软件/App",
    intro: "面向大学生的智能任务与课表管理应用。",
    tech: ["uni-app", "Vue3", "Spring Boot", "MyBatis-Plus", "MySQL", "JWT", "OCR/ASR/Vision/LLM"],
    github: "https://github.com/WHRRHW/UniTask_AI-",
    coverImage: "./assets/covers/unitask-ai-cover.png",
    images: [
      "./assets/screenshots/unitask/unitask-01.jpg",
      "./assets/screenshots/unitask/unitask-02.jpg",
      "./assets/screenshots/unitask/unitask-03.jpg",
      "./assets/screenshots/unitask/unitask-04.jpg",
      "./assets/screenshots/unitask/unitask-05.jpg",
      "./assets/screenshots/unitask/unitask-06.jpg",
      "./assets/screenshots/unitask/unitask-07.jpg",
      "./assets/screenshots/unitask/unitask-08.jpg",
      "./assets/screenshots/unitask/unitask-09.jpg",
      "./assets/screenshots/unitask/unitask-10.jpg"
    ],
    downloads: [{ label: "查看下载说明", href: "https://github.com/WHRRHW/UniTask_AI-" }],
    cover: "linear-gradient(135deg, #f5f6f3 0%, #b9c9d4 46%, #bec6b3 100%)",
    initials: "UT",
    details: "支持任务管理、课表管理、智能导入和用户鉴权，后端统一调用 OCR、ASR、Vision 与 LLM 服务。"
  },
  {
    id: "spooky-castle",
    title: "Spooky Castle",
    category: "游戏",
    intro: "一款西欧双人解谜探险小游戏。",
    tech: ["Unity", "Windows Build", "Game Jam"],
    github: "https://github.com/WHRRHW/gamejam-spooky-castle",
    coverImage: "./assets/covers/spooky-castle-cover.png",
    images: [
      "./assets/screenshots/spooky/spooky-01.png",
      "./assets/screenshots/spooky/spooky-02.png",
      "./assets/screenshots/spooky/spooky-03.png",
      "./assets/screenshots/spooky/spooky-04.png",
      "./assets/screenshots/spooky/spooky-05.png",
      "./assets/screenshots/spooky/spooky-06.png"
    ],
    downloads: [{ label: "查看下载说明", href: "https://github.com/WHRRHW/gamejam-spooky-castle" }],
    cover: "linear-gradient(135deg, #0b1103 0%, #67705e 45%, #c8cabf 100%)",
    initials: "SC",
    details: "Game Jam 作品，提供 Windows 可玩包，适合通过本地下载体验双人解谜与探险流程。"
  },
  {
    id: "smart-review",
    title: "Smart Review Assistant",
    category: "AI 工作流",
    intro: "AI 辅助学习排程项目。",
    tech: ["Vue 3", "Vite", "Spring Boot", "MCP-style APIs"],
    github: "https://github.com/WHRRHW/smart-review-assistant",
    video: "./assets/videos/smart-review-demo.mp4",
    coverImage: "./assets/covers/smart-review-assistant-cover.png",
    images: ["./assets/screenshots/smart-review/smart-review-01.png"],
    downloads: [],
    cover: "linear-gradient(135deg, #d8ddd3 0%, #f5f6f3 40%, #8b9a78 100%)",
    initials: "SR",
    details: "包含 Vue/Vite 前端和 Spring Boot 后端，通过智能排程与工作流接口辅助学习复习计划管理。"
  },
  {
    id: "ambers-last-night",
    title: "Amber's Last Night",
    category: "游戏",
    intro: "已打包为 Windows 程序的 Unity 课程游戏项目。",
    tech: ["Unity", "Windows Installer", "Coursework Game"],
    github: "https://github.com/WHRRHW/ambers-last-night",
    coverImage: "./assets/covers/ambers-last-night-cover.png",
    images: [
      "./assets/screenshots/ambers/ambers-01.jpg",
      "./assets/screenshots/ambers/ambers-02.jpg",
      "./assets/screenshots/ambers/ambers-03.jpg",
      "./assets/screenshots/ambers/ambers-04.jpg",
      "./assets/screenshots/ambers/ambers-05.jpg"
    ],
    downloads: [{ label: "查看下载说明", href: "https://github.com/WHRRHW/ambers-last-night" }],
    cover: "linear-gradient(135deg, #11150f 0%, #31402e 35%, #bec6b3 100%)",
    initials: "AL",
    details: "大二下游戏课设项目，已打包为 Windows 安装程序，并提供截图展示游戏画面与玩法。"
  },
  {
    id: "ooad-service-design",
    title: "OOAD 售后与服务模块设计",
    category: "软件/设计类",
    intro: "围绕售后服务流程、工单生命周期和模块架构展开的 OOAD 设计文档。",
    tech: ["OOAD", "UML", "模块设计", "概要设计", "售后服务流程"],
    github: "",
    coverImage: "./assets/covers/ooad-service-design-cover.png",
    images: [],
    downloads: [{ label: "下载设计文档", href: "./assets/docs/ooad-service-design.pdf" }],
    cover: "linear-gradient(135deg, #c6cfbd 0%, #f7f8f5 48%, #9ba88f 100%)",
    initials: "OO",
    details: "该项目聚焦售后与服务模块的业务建模和系统设计，包含需求分析、用例建模、领域模型、交互设计、流程设计、架构设计和数据库设计等内容。"
  }
];

const filters = ["全部", ...new Set(projects.map((project) => project.category))];
let activeFilter = "全部";

const filterRoot = document.querySelector("#filters");
const gridRoot = document.querySelector("#projectGrid");
const modal = document.querySelector("#projectModal");
const modalBody = document.querySelector("#modalBody");

function renderFilters() {
  filterRoot.innerHTML = filters
    .map((filter) => `<button class="filter-btn ${filter === activeFilter ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>`)
    .join("");
}

function getCoverMarkup(project) {
  if (project.coverImage) {
    return `<div class="cover image-cover generated-cover"><img src="${project.coverImage}" alt="${project.title} 项目封面" loading="lazy"></div>`;
  }

  if (project.images?.length) {
    return `<div class="cover image-cover"><img src="${project.images[0]}" alt="${project.title} 项目截图" loading="lazy"><b>${project.initials}</b></div>`;
  }

  return `<div class="cover" style="--cover: ${project.cover}"><b>${project.initials}</b></div>`;
}

function renderProjects() {
  const visibleProjects =
    activeFilter === "全部" ? projects : projects.filter((project) => project.category === activeFilter);

  gridRoot.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card">
          ${getCoverMarkup(project)}
          <div class="project-body">
            <div>
              <div class="project-meta">
                <span class="tag">${project.category}</span>
                ${project.images?.length ? `<span class="tag">${project.images.length} 张截图</span>` : ""}
                ${project.video ? '<span class="tag">视频演示</span>' : ""}
                ${project.downloads.length ? '<span class="tag">下载说明</span>' : ""}
              </div>
              <h3>${project.title}</h3>
              <p>${project.intro}</p>
              <div class="tech-list">
                ${project.tech.slice(0, 4).map((item) => `<span class="tag">${item}</span>`).join("")}
              </div>
            </div>
            <div class="card-actions">
              ${project.github ? `<a class="btn primary" href="${project.github}" target="_blank" rel="noreferrer">GitHub 仓库</a>` : ""}
              <button class="btn" type="button" data-project="${project.id}">查看详情</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function getGalleryMarkup(project) {
  if (!project.images?.length) {
    return `<div class="media-placeholder" style="background: ${project.cover}">${project.initials}</div>`;
  }

  return `
    <div class="gallery" data-gallery="${project.id}">
      <div class="gallery-main">
        <img src="${project.images[0]}" alt="${project.title} 当前展示截图">
        ${project.images.length > 1 ? `
          <button class="gallery-nav prev" type="button" data-gallery-step="-1" aria-label="上一张">‹</button>
          <button class="gallery-nav next" type="button" data-gallery-step="1" aria-label="下一张">›</button>
        ` : ""}
      </div>
      <div class="gallery-thumbs" aria-label="${project.title} 截图列表">
        ${project.images
          .map((image, index) => `<button class="thumb ${index === 0 ? "active" : ""}" type="button" data-image="${image}" aria-label="查看第 ${index + 1} 张截图"><img src="${image}" alt="" loading="lazy"></button>`)
          .join("")}
      </div>
    </div>
  `;
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const video = project.video
    ? `<div class="video-block"><p class="media-title">视频演示</p><video src="${project.video}" controls preload="metadata"></video></div>`
    : "";

  modalBody.innerHTML = `
    <div class="modal-layout">
      <div class="modal-media">
        ${video}
        <div class="gallery-block">
          <p class="media-title">项目截图</p>
          ${getGalleryMarkup(project)}
        </div>
      </div>
      <div class="modal-copy">
        <p class="section-kicker">${project.category}</p>
        <h3 id="modalTitle">${project.title}</h3>
        <p>${project.details}</p>
        <div class="tech-list">
          ${project.tech.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
        <div class="modal-actions">
          ${project.github ? `<a class="btn primary" href="${project.github}" target="_blank" rel="noreferrer">打开 GitHub</a>` : ""}
          ${project.video ? `<a class="btn" href="${project.video}" target="_blank">打开视频</a>` : ""}
          ${project.downloads.map((download) => `<a class="btn" href="${download.href}" target="_blank" rel="noreferrer">${download.label}</a>`).join("")}
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const video = modal.querySelector("video");
  if (video) video.pause();
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

filterRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderProjects();
});

gridRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  openProject(button.dataset.project);
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close]")) {
    closeModal();
    return;
  }

  const thumb = event.target.closest("[data-image]");
  const stepButton = event.target.closest("[data-gallery-step]");

  if (!thumb && !stepButton) return;

  const gallery = (thumb || stepButton).closest(".gallery");
  const mainImage = gallery.querySelector(".gallery-main img");
  const thumbs = [...gallery.querySelectorAll(".thumb")];
  let targetThumb = thumb;

  if (stepButton) {
    const currentIndex = thumbs.findIndex((item) => item.classList.contains("active"));
    const nextIndex = (currentIndex + Number(stepButton.dataset.galleryStep) + thumbs.length) % thumbs.length;
    targetThumb = thumbs[nextIndex];
  }

  mainImage.src = targetThumb.dataset.image;
  thumbs.forEach((item) => item.classList.remove("active"));
  targetThumb.classList.add("active");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

renderFilters();
renderProjects();
