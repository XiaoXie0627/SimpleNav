# FastNav 开发任务清单

> 基于PRD文档的完整开发任务列表
> 最后更新：2026年3月28日

---

## Phase 0: 项目初始化

- [ ] **0.1** 使用Astro脚手架初始化项目
  ```bash
  npm create astro@latest fastnav -- --template basics --install --git --typescript strict
  ```
- [ ] **0.2** 安装核心依赖
  ```bash
  pnpm add @astrojs/react @astrojs/tailwind @astrojs/auth
  pnpm add react react-dom @types/react @types/react-dom
  pnpm add fuse.js nano-stores overlayscrollbars overlayscrollbars-react
  pnpm add -D tailwindcss postcss autoprefixer
  ```
- [ ] **0.3** 安装开发工具链
  ```bash
  pnpm add -D eslint prettier husky lint-staged
  ```
- [ ] **0.4** 配置 .nvmrc (Node.js v22.14.0)
- [ ] **0.5** 配置 ESLint + Prettier
- [ ] **0.6** 配置 Husky + lint-staged
- [ ] **0.7** 配置 TypeScript strict 模式

---

## Phase 1: 基础架构搭建

### 1.1 项目目录结构
- [ ] **1.1.1** 创建 src/components/ 目录结构
  - astro/ (Astro组件)
  - react/common/ (通用React组件)
  - react/widgets/ (卡片组件)
  - react/admin/ (管理后台组件)
  - react/ui/ (UI基础组件)
- [ ] **1.1.2** 创建 src/pages/ 页面结构
  - admin/ (管理后台页面)
  - api/ (API端点)
  - category/[id].astro (分类详情页)
- [ ] **1.1.3** 创建 src/stores/ 状态管理目录
- [ ] **1.1.4** 创建 src/types/ 类型定义目录
- [ ] **1.1.5** 创建 src/hooks/ 自定义Hooks目录
- [ ] **1.1.6** 创建 src/constants/ 常量目录

### 1.2 基础配置文件
- [ ] **1.2.1** astro.config.mjs - Astro配置
- [ ] **1.2.2** tailwind.config.mjs - Tailwind配置
- [ ] **1.2.3** tsconfig.json - TypeScript配置
- [ ] **1.2.4** .env.example - 环境变量模板

---

## Phase 2: 类型定义与数据模型

- [ ] **2.1** src/types/navigation.ts - 导航数据类型
  ```typescript
  NavigationData, NavigationItem, NavigationSubCategory, NavigationSubItem, IconType
  ```
- [ ] **2.2** src/types/site.ts - 站点配置类型
  ```typescript
  SiteConfig, SearchEngine, DailyQuote
  ```
- [ ] **2.3** src/types/resource.ts - 资源数据类型
  ```typescript
  ResourceSection, ResourceItem
  ```
- [ ] **2.4** src/types/widget.ts - 卡片组件类型
  ```typescript
  BaseCard, CountdownCard, TextCard, ClockCard, LinkCard, WidgetContainer
  ```
- [ ] **2.5** src/types/api.ts - API响应类型
  ```typescript
  ApiErrorResponse, ApiSuccessResponse
  ```

---

## Phase 3: 工具函数与Lib

- [ ] **3.1** src/lib/utils.ts - 通用工具函数
- [ ] **3.2** src/lib/github.ts - GitHub API封装
- [ ] **3.3** src/lib/retry.ts - 重试策略
- [ ] **3.4** src/lib/auth.ts - Auth.js配置
- [ ] **3.5** src/lib/icon-resolver.ts - 图标路径解析

---

## Phase 4: 状态管理 (Nano Stores)

- [ ] **4.1** src/stores/index.ts - 状态树根节点
- [ ] **4.2** src/stores/search.ts - 搜索状态
  ```typescript
  searchQuery, searchResults, isSearchFocused, searchHistory
  ```
- [ ] **4.3** src/stores/theme.ts - 主题状态
  ```typescript
  theme, systemTheme
  ```
- [ ] **4.4** src/stores/navigation.ts - 导航状态
  ```typescript
  activeCategory, sidebarOpen
  ```
- [ ] **4.5** src/stores/ui.ts - UI状态
  ```typescript
  isLoading, toasts, scrollToTopVisible
  ```

---

## Phase 5: 布局与基础组件

### 5.1 Astro布局组件
- [ ] **5.1.1** src/layouts/Layout.astro - 根布局
- [ ] **5.1.2** src/layouts/AdminLayout.astro - 管理后台布局

### 5.2 UI基础组件 (shadcn/ui)
- [ ] **5.2.1** Button.tsx - 按钮组件
- [ ] **5.2.2** Card.tsx - 卡片容器
- [ ] **5.2.3** Dialog.tsx - 弹窗组件
- [ ] **5.2.4** Toast.tsx - 通知组件
- [ ] **5.2.5** Input.tsx - 输入框
- [ ] **5.2.6** Select.tsx - 下拉选择
- [ ] **5.2.7** EmptyState.tsx - 空状态组件

### 5.3 常用React组件
- [ ] **5.3.1** SearchBar.tsx - 网络搜索栏
- [ ] **5.3.2** ThemeToggle.tsx - 主题切换
- [ ] **5.3.3** TimeDisplay.tsx - 时间显示
- [ ] **5.3.4** DailyQuote.tsx - 每日一言
- [ ] **5.3.5** ContextMenu.tsx - 右键菜单
- [ ] **5.3.6** BackToTop.tsx - 返回顶部按钮
- [ ] **5.3.7** ScrollToTop.tsx - 滚动条组件(OverlayScrollbars)

---

## Phase 6: 页面组件

### 6.1 Astro组件
- [ ] **6.1.1** NavigationCard.astro - 导航卡片
- [ ] **6.1.2** Sidebar.astro - 侧边栏
- [ ] **6.1.3** Header.astro - 顶部导航栏
- [ ] **6.1.4** Footer.astro - 页脚
- [ ] **6.1.5** NavSearch.astro - 导航搜索栏

### 6.2 页面文件
- [ ] **6.2.1** src/pages/index.astro - 首页重定向
- [ ] **6.2.2** src/pages/category/[id].astro - 分类详情页

---

## Phase 7: 管理后台页面

- [ ] **7.1** src/pages/admin/index.astro - 管理后台首页
- [ ] **7.2** src/pages/admin/navigation.astro - 导航管理页面
- [ ] **7.3** src/pages/admin/site.astro - 站点设置页面
- [ ] **7.4** src/pages/admin/resources.astro - 资源管理页面
- [ ] **7.5** src/pages/admin/widget.astro - 卡片管理页面
- [ ] **7.6** src/pages/admin/data.astro - 数据管理页面

---

## Phase 8: 管理后台React组件

- [ ] **8.1** DragList.tsx - 拖拽列表
- [ ] **8.2** NavigationEditor.tsx - 导航编辑器
- [ ] **8.3** ResourceEditor.tsx - 资源编辑器
- [ ] **8.4** SiteConfigForm.tsx - 站点配置表单
- [ ] **8.5** JsonEditor.tsx - JSON编辑器(Monaco)
- [ ] **8.6** WidgetEditor.tsx - 卡片编辑器

---

## Phase 9: 卡片组件(Widgets)

- [ ] **9.1** CountdownWidget.tsx - 倒数日卡片
- [ ] **9.2** TextWidget.tsx - 文本卡片
- [ ] **9.3** ClockWidget.tsx - 时钟卡片
- [ ] **9.4** LinkWidget.tsx - 链接卡片
- [ ] **9.5** WidgetContainer.tsx - 卡片容器

---

## Phase 10: API端点

### 10.1 导航API
- [ ] **10.1.1** src/pages/api/navigation/index.ts
- [ ] **10.1.2** src/pages/api/navigation/[id]/index.ts
- [ ] **10.1.3** src/pages/api/navigation/[id]/categories/index.ts
- [ ] **10.1.4** src/pages/api/navigation/[id]/categories/[catId].ts
- [ ] **10.1.5** src/pages/api/navigation/[id]/items/index.ts
- [ ] **10.1.6** src/pages/api/navigation/[id]/items/[itemId].ts
- [ ] **10.1.7** src/pages/api/navigation/reorder.ts
- [ ] **10.1.8** src/pages/api/navigation/batch.ts
- [ ] **10.1.9** src/pages/api/navigation/search.ts
- [ ] **10.1.10** src/pages/api/navigation/export.ts
- [ ] **10.1.11** src/pages/api/navigation/import.ts
- [ ] **10.1.12** src/pages/api/navigation/restore.ts
- [ ] **10.1.13** src/pages/api/navigation/check-default.ts

### 10.2 资源API
- [ ] **10.2.1** src/pages/api/resource/index.ts
- [ ] **10.2.2** src/pages/api/resource/[id].ts
- [ ] **10.2.3** src/pages/api/resource/sections/index.ts
- [ ] **10.2.4** src/pages/api/resource/sections/[sectionId].ts
- [ ] **10.2.5** src/pages/api/resource/batch.ts
- [ ] **10.2.6** src/pages/api/resource/check-references.ts

### 10.3 站点配置API
- [ ] **10.3.1** src/pages/api/site-config/index.ts
- [ ] **10.3.2** src/pages/api/site-config/reset.ts

### 10.4 卡片API
- [ ] **10.4.1** src/pages/api/widget/index.ts
- [ ] **10.4.2** src/pages/api/widget/[id].ts
- [ ] **10.4.3** src/pages/api/widget/reorder.ts
- [ ] **10.4.4** src/pages/api/widget/batch.ts

### 10.5 其他API
- [ ] **10.5.1** src/pages/api/data/export.ts
- [ ] **10.5.2** src/pages/api/data/import.ts
- [ ] **10.5.3** src/pages/api/upload/icon.ts
- [ ] **10.5.4** src/pages/api/health.ts

---

## Phase 11: 中间件与认证

- [ ] **11.1** src/middleware.ts - 路由保护中间件
- [ ] **11.2** 认证回调处理

---

## Phase 12: 样式系统

- [ ] **12.1** src/styles/global.css - 全局样式
- [ ] **12.2** src/styles/material-design.css - MD3设计系统CSS变量
- [ ] **12.3** 主题切换样式
- [ ] **12.4** 滚动条样式
- [ ] **12.5** 动画过渡样式(Swup)

---

## Phase 13: Swup页面过渡

- [ ] **13.1** 配置Swup实例
- [ ] **13.2** 实现Fade过渡效果
- [ ] **13.3** 实现Slide过渡效果
- [ ] **13.4** 实现Scroll插件
- [ ] **13.5** 加载指示器动画

---

## Phase 14: 键盘快捷键系统

- [ ] **14.1** 全局快捷键注册
- [ ] **14.2** 搜索快捷键(Ctrl+K, /)
- [ ] **14.3** ikjl导航快捷键
- [ ] **14.4** 数字键快速跳转
- [ ] **14.5** 快捷键帮助弹窗

---

## Phase 15: 搜索功能

- [ ] **15.1** Fuse.js配置与初始化
- [ ] **15.2** 搜索历史记录(localStorage)
- [ ] **15.3** 搜索结果下拉展示
- [ ] **15.4** 搜索防抖优化

---

## Phase 16: 部署配置

- [ ] **16.1** Vercel适配器配置
- [ ] **16.2** Cloudflare适配器配置
- [ ] **16.3** Docker配置(可选)

---

## Phase 17: 测试与优化

- [ ] **17.1** 单元测试
- [ ] **17.2** E2E测试
- [ ] **17.3** 性能优化
- [ ] **17.4** Lighthouse评分优化

---

## 任务统计

| 阶段 | 任务数 |
|------|--------|
| Phase 0: 项目初始化 | 7 |
| Phase 1: 基础架构 | 12 |
| Phase 2: 类型定义 | 5 |
| Phase 3: 工具函数 | 5 |
| Phase 4: 状态管理 | 5 |
| Phase 5: 布局组件 | 15 |
| Phase 6: 页面组件 | 7 |
| Phase 7: 管理后台 | 6 |
| Phase 8: 后台组件 | 6 |
| Phase 9: 卡片组件 | 5 |
| Phase 10: API端点 | 24 |
| Phase 11: 中间件 | 2 |
| Phase 12: 样式系统 | 5 |
| Phase 13: Swup动画 | 5 |
| Phase 14: 快捷键 | 5 |
| Phase 15: 搜索功能 | 4 |
| Phase 16: 部署配置 | 3 |
| Phase 17: 测试优化 | 4 |
| **总计** | **115** |

---

## 开发顺序建议

1. **Phase 0-1**: 项目初始化 + 基础架构
2. **Phase 2-4**: 数据层（类型、工具、状态）
3. **Phase 5**: 基础UI组件
4. **Phase 6**: 公开页面
5. **Phase 10**: API端点（与Phase 6并行）
6. **Phase 7-8**: 管理后台
7. **Phase 9**: 卡片组件
8. **Phase 12-13**: 样式与动画
9. **Phase 14-15**: 交互功能
10. **Phase 16-17**: 部署与测试
