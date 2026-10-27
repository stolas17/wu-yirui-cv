# 吴奕芮 / Wu Yirui — 双语简历网站

纯 HTML + CSS + JavaScript 构建的双语（中/EN）个人简历网站，无任何框架与构建工具，可直接双击打开。

## 目录结构

```
docs/
├── index.html              # 页面（唯一入口）
├── css/
│   └── style.css           # 样式（响应式，移动端优先）
├── js/
│   └── main.js             # 语言切换、问答交互、菜单、复制等
├── assets/
│   ├── portrait.png        # 证件照
│   └── cv-wu-yirui.pdf     # PDF 简历（下载按钮指向此文件）
└── README.md
```

页面内所有链接均为相对路径（`#锚点`、`assets/...`、`css/...`、`js/...`），整个 `docs/` 文件夹一起移动不会失效。

## 本地预览

直接用浏览器打开 `index.html` 即可；或在 `docs/` 目录下运行：

```bash
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 部署到 GitHub Pages（免费）

1. 新建一个 GitHub 仓库，把本 `docs/` 文件夹上传到仓库根目录。
2. 仓库 **Settings → Pages → Build and deployment → Source: Deploy from a branch**。
3. Branch 选择 `main`，文件夹选择 `/docs`，保存。
4. 稍等片刻即可获得 `https://<用户名>.github.io/<仓库名>/` 的在线地址。

## 内容维护

- **改文字**：大部分文案在 `js/main.js` 顶部的 `I18N` 字典中，`zh` 与 `en` 各一份，按 key 对照修改即可。
- **换 PDF**：用新的 PDF 替换 `assets/cv-wu-yirui.pdf`（保持文件名不变）。
- **换照片**：替换 `assets/portrait.png`。
- **语言默认值**：默认中文；访客的语言选择会保存在浏览器 localStorage 中。

## 板块与语言功能对照

| 板块 | 语言功能 |
| --- | --- |
| Hero（姓名 + 标语） | 身份与开场 |
| About / Education / Skills | Informative（信息功能：客观履历） |
| Experience（重点经历 + 实习 + 在校） | Expressive（表情功能：经历与个人收获） |
| Let's chat（问答留言） | Phatic（交际功能：交互对话） |
| CV Download + Contact | Appellative（感召功能：下载简历、联系入口） |
