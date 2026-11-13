# 版面设计 · 移动端原型合集

本仓库收录两个相互独立的移动端 Web 原型，以及「阅见序章」的设计系统文档。所有页面均为纯前端实现，业务数据使用写死的 Mock，不依赖后端服务。

## 仓库结构

| 路径 | 内容 |
|---|---|
| `index.html`、`css/`、`js/` | 阅见序章 · 首页静态原型（纯 HTML/CSS/JS） |
| `初版风格预测/` | 阅见序章 Web 端设计系统（`MASTER.md` 为唯一设计依据，`style-preview.html` 为风格样张） |
| `再版设计原型/` | 知行学伴 · 暗黑风格移动端原型（React + Tailwind + ECharts，7 页） |

## 阅见序章

学生端图书馆服务原型（座位平面图、个人课表、AI 助手「小阅」）。

**预览**：直接双击根目录 `index.html`，无需安装依赖或启动服务。

设计口径以 `初版风格预测/MASTER.md` 为准：Swiss Style 骨架、390 × 844 移动画幅、克制留白与单一强调绿。

## 知行学伴（再版设计原型）

面向学习场景的 AI 学伴原型。页面包括：Planner Hub 对话中枢、学习任务、空窗规划、学情分析、资料知识库、图书馆座位图、我的，底部导航为「首页 · 订座 · 分析 · 我的」。

视觉规范：`#2a2a2a → #0a0a0a` 渐变底色，琥珀橙 `#ff7a00` 作为唯一强调色，顶部白雾光晕层，卡片统一使用毛玻璃。

### 直接预览

双击 `再版设计原型/preview.html` 即可离线打开，无需安装依赖或启动服务。

如需通过本地服务访问：

```bash
cd 再版设计原型
python -m http.server 8123
# 浏览器打开 http://127.0.0.1:8123/preview.html
```

### 修改页面后重新构建

```bash
cd 再版设计原型
npm install
npm run build:preview
```

该命令用 Babel Standalone 把 `src/preview-app.jsx` 编译为 `preview.js`，再用 Tailwind CLI 生成 `preview.css`。构建后请把 `preview.html` 中引用的 `?v=N` 版本号递增，避免浏览器继续使用缓存旧版。

### 单文件分享版

用于微信等外发场景，把 CSS、JS 与图表库全部内联进一个 html：

```bash
cd 再版设计原型
npm run build:single
node scripts/verify-single.cjs
```

产物输出到 `dist/知行学伴-原型.html`，单个文件即可离线打开。`dist/` 属于构建产物，不纳入版本库。

### 工程化入口（可选）

`再版设计原型/` 同时保留 Vite 工程，可执行 `npm run dev` / `npm run build`。当前开发机器的 esbuild 原生二进制无法运行，因此日常交付走上面的静态预览链路；模块化源码位于 `src/pages`、`src/components`、`src/data`，与预览层 `src/preview-app.jsx` 保持同构。

## 技术栈

- React 18（函数组件 + Hooks）
- Tailwind CSS 3（预编译为静态 `preview.css`）
- ECharts 5（雷达图、面积折线图）
- lucide-react（图标）
- Babel Standalone（仅构建期 JSX 转译）

## 说明

`node_modules/`、`dist/`、`build/` 等依赖与构建产物不纳入版本库，规则见 `.gitignore`。