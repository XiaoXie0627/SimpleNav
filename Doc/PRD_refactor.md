# FastNav 产品需求文档（PRD）

## 文档信息

| 项目         | 内容                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| **项目名称** | FastNav                                                                                                   |
| **项目类型** | 现代化导航管理平台 / 书签管理系统                                                                         |
| **版本号**   | 2.0.0                                                                                                     |
| **文档状态** | 技术架构升级                                                                                              |
| **创建日期** | 2026年3月27日                                                                                             |
| **最后更新** | 2026年3月29日                                                                                             |
| **变更说明** | UI优化：侧边栏一级二级分类层级分明；时间日期位置调整；滚动条滑块样式；搜索结果MD3风格；移动端卡片紧凑显示 |

---

## 1. 产品概述

### 1.1 产品背景

FastNav 是一个基于 **Astro 框架**构建的现代化导航管理平台，专为个人和团队打造的书签管理和导航门户解决方案。该项目采用 GitHub 作为数据存储后端，通过 GitHub OAuth 进行用户认证，提供安全、可靠的导航数据管理体验。

在数字化时代，管理和访问常用网站书签成为提升工作效率的关键。传统的浏览器书签管理存在跨设备同步困难、界面简陋、功能单一等问题。FastNav 通过现代化的 Web 技术和云端存储，为用户提供了一个美观、实用且易于管理的导航门户。

### 1.2 产品定位

FastNav 的产品定位如下：

- **目标用户**：个人用户、开发者、设计师、内容创作者以及需要管理大量书签的任何用户
- **核心价值**：提供一个美观、响应式、安全且易于管理的导航门户解决方案
- **差异化优势**：利用 GitHub 作为数据存储后端，实现数据版本控制和跨设备同步

### 1.3 产品愿景

打造一个现代化、可扩展、用户友好的导航管理平台，让用户能够轻松管理和访问常用网站，同时为开发者提供完整的二次开发接口和扩展能力。

---

## 2. 产品功能架构

### 2.1 功能模块总览

FastNav 产品的功能模块可以分为以下几个主要部分：

| 模块             | 功能描述                                 | 优先级 | 架构说明                    |
| ---------------- | ---------------------------------------- | ------ | --------------------------- |
| **用户认证模块** | GitHub OAuth 登录、用户会话管理          | P0     | Astro Middleware + Auth.js  |
| **导航展示模块** | 分类展示、项目卡片、搜索功能、侧边栏导航 | P0     | 静态页面 + React Islands    |
| **分类页面模块** | 分类独立页面、路由跳转、分类导航         | P0     | Astro 静态路由              |
| **网络搜索栏**   | Chrome风格搜索框、Bing/Google切换        | P0     | React Island                |
| **每日一言**     | 每日文本轮播、换行符分隔                 | P1     | React Island                |
| **时间显示**     | 实时时钟+日期显示                        | P1     | React Island                |
| **右键菜单**     | 自定义右键菜单、新窗口/新标签打开        | P1     | React Island                |
| **导航管理模块** | 分类管理、子分类管理、项目管理、拖拽排序 | P0     | React Islands + API 端点    |
| **卡片组件模块** | 倒数日、文本卡片、时钟卡片、链接卡片     | P1     | React Islands + Nano Stores |
| **资源管理模块** | 资源分类管理、资源项目管理               | P1     | React Islands + API 端点    |
| **站点配置模块** | 站点基本信息、主题配置、导航链接设置     | P1     | Astro Actions 表单          |
| **数据管理模块** | JSON编辑器、数据导入导出、数据恢复       | P2     | Monaco Editor 集成          |
| **扩展功能**     | 浏览器插件（V2.0）                       | P2     | -                           |

---

### 2.2 功能模块详细说明

#### 2.2.1 用户认证模块

**功能描述**

用户认证模块负责处理用户的登录和会话管理，确保只有授权用户才能访问管理功能。

**核心功能**

1. **GitHub OAuth 登录**
   - 用户通过 GitHub 账户进行身份验证
   - 支持 OAuth 2.0 协议
   - 使用 Auth.js 作为认证解决方案
   - 回调地址：`/auth/callback/github`

2. **会话管理**
   - 使用 Auth.js 内置 JWT 会话存储
   - 会话有效期管理
   - 自动刷新机制

3. **用户权限控制**
   - 登录用户可访问管理后台
   - 未登录用户仅可查看导航页面
   - 管理员功能保护（Middleware 中间件）

**技术实现**

- 认证框架：Auth.js (astro-auth)
- 运行环境：SSR + Edge
- 中间件保护：Middleware
- 权限验证：Auth.js Session + Middleware

#### 2.2.2 导航展示模块

**功能描述**

导航展示模块是用户访问导航门户时看到的主要界面，负责以美观、便捷的方式展示所有导航项目。

**核心功能**

1. **分类展示**
   - 一级分类：以卡片形式展示在页面主体区域
   - 二级分类：在一级分类下以子分类形式展示
   - 支持分类图标展示
   - 支持分类启用/禁用状态

2. **项目卡片**
   - 显示网站图标
   - 显示网站标题
   - 显示网站描述
   - 支持点击跳转 默认当前窗口新标签打开

3. **网络搜索栏**
   - 位置：顶部居中，Chrome 风格设计
   - 搜索引擎支持：BingCN、Google
   - Tab 快捷键：切换搜索引擎
   - 回车：跳转到搜索引擎结果页
   - 用户可在站点配置中添加自定义搜索源

4. **导航搜索栏**
   - 位置：侧边栏"分类"列表上方
   - 功能：搜索本地导航项目
   - 快捷键：Ctrl+F 跳转到导航搜索框
   - Fuse.js 模糊搜索，实时过滤

5. **搜索功能**

6. **侧边栏导航**
   - 桌面端常驻侧边栏
   - 移动端可折叠/展开
   - 快速跳转功能
   - 导航搜索栏：位于分类列表上方，搜索本地导航项目
   - 分类列表：直接展示一级分类名称，点击一级分类可展开显示二级分类，无需显示"分类"标题

7. **主题切换**
   - 深色/浅色/系统主题
   - 主题持久化存储（localStorage）
   - 实时切换无需刷新

8. **页面过渡动画**
   - 使用 Swup 实现流畅的页面过渡
   - 淡入淡出、流畅的页面过渡效果
   - 无刷新切换页面

9. **自定义滚动条**
   - 使用 OverlayScrollbars
   - 跨浏览器兼容
   - 美观且不影响布局

10. **悬浮显示**
    - 鼠标悬浮颜色淡深，用户可观
    - 鼠标悬浮显示网站描述
11. **快捷键支持**
    - /跳转网络搜索框
    - Ctrl+f 跳转到导航搜索框
    - 支持全键盘操作，在页面中通过ikjl控制上下左右移动选中
    - 选中后支持enter键在新标签页打开
12. **一键到顶**

- 支持每个页面的右下角固定 "🔝"箭头 支持点击快速返回滑动条顶部

**界面布局**

```
┌─────────────────────────────────────────────────────────────┐
│ Logo │  10:30    │         🔍 搜索网络...        │  🌓 │ ⚙️ │ 🔗 │
│      │ 3月29日   │                            │      │    │    │
├──────────┬──────────────────────────────────────────────────┤
│          │                                                  │
│ 侧边栏  │  ┌──────────────────────────────────────────┐   │
│ 导航    │  │  网站链接显示区                         │   │
│          │  │  ┌────────┐  ┌────────┐           │   │
│ 一级分类1│  │  │ 卡片1   │  │ 卡片1   │           │   │
│  ├二级分类│  │  └────────┘  └────────┘           │   │
│  └二级分类│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐ │   │
│ 一级分类2│  │  │网站1  │  │网站1  │  │网站2  │  │网站1  │ │   │
│ 一级分类3│  │  └──────┘  └──────┘  └──────┘  └──────┘ │   │
│          │  └──────────────────────────────────────────┘   │
│          │                                                  │
└──────────┴──────────────────────────────────────────────────┘
```

##### 布局说明：

1.  **顶部通栏**：
    - 左侧：时间日期显示（固定不随页面滚动）
      - 时间：页面固定元素，每个页面一致
      - 日期：位于时间下方
    - 中间：搜索框（居中，固定不随页面滚动）
    - 右侧：功能按钮组（明暗切换、设置、源码）
    - 顶部栏固定定位，不随页面滚动变化
2.  **侧边栏导航区**：
    - 固定左侧，包含站内搜索入口
    - 直接展示一级分类名称（无"分类"标题）
    - 一级分类和二级分类层级分明，一级分类突出显示
    - 点击一级分类可展开/收起二级分类
    - 点击二级分类可跳转到对应分类页面并定位到该二级分类区域
3.  **主内容区**：
    - 网站链接和卡片展示区
    - 支持点击二级分类跳转并定位

**响应式设计**

- 移动端（< 640px）：
  - 隐藏侧边栏，使用汉堡菜单
  - 导航卡片区域：单列布局，卡片高度缩小，行高更紧凑
  - 卡片内边距减少，字号缩小
- 平板端（640px - 1024px）：侧边栏可折叠
- 桌面端（> 1024px）：侧边栏常驻

**移动端导航卡片样式调整**：

```css
@media (max-width: 640px) {
  .nav-card {
    padding: 12px;
    min-height: 48px;
  }
  .nav-card__icon {
    width: 32px;
    height: 32px;
  }
  .nav-card__title {
    font-size: 13px;
  }
}
```

**技术实现**

- 首页：静态生成 (SSG)，构建时获取数据
- 搜索：Fuse.js + React Island (`client:load`)
- 主题：React Island (`client:load`)
- 侧边栏：静态 Astro 组件
- 页面过渡：Swup动画过渡

#### 2.2.3 分类页面模块

**功能描述**

分类页面模块实现每个一级分类对应一个独立的静态展示页面，支持通过 URL 进行访问。

**核心功能**

1. **路由配置**
   - 访问路径：`/category/:id`，如 `/category/1` 或 `/category/common`
   - 首页重定向：`/` 自动重定向到默认分类（通过分类ID）
   - 支持英文ID或数字ID

2. **页面展示**
   - 显示对应分类下的所有项目
   - 保持统一的页面布局和样式

**技术实现**

- 路由处理：Astro 静态路由 `pages/category/[id].astro`
- 数据获取：构建时根据ID获取对应分类数据
- 重定向：Middleware 或客户端重定向

#### 2.2.4 网络搜索栏

**功能描述**

网络搜索栏提供类似 Google Chrome 的搜索体验，支持多种搜索引擎。

**核心功能**

1. **搜索栏 UI**
   - 位置：顶部居中
   - 样式：Chrome 风格，圆角胶囊形状
   - 占位符文字提示

2. **搜索引擎**
   - 支持 Bing（默认）、Google
   - Tab 快捷键：切换搜索引擎
   - 站点配置中可添加自定义搜索引擎

3. **搜索行为**
   - 输入关键词后回车：跳转到搜索引擎结果页
   - 显示当前选中的搜索引擎图标

4. **搜索历史记录**
   - 保存最近 5 条搜索记录到 localStorage
   - 聚焦搜索框时显示历史记录下拉列表
   - 支持点击历史记录快速搜索
   - 支持清除单条或全部历史

5. **搜索结果显示**
   - 搜索结果以卡片形式显示在搜索栏下方
   - 结果浮层在最上层显示（z-index: 50）
   - 支持键盘上下键导航结果
   - Enter 键确认选中结果

**数据模型**

```typescript
interface SearchEngine {
  id: string
  name: string
  url: string
  icon: string
}

interface SearchHistory {
  query: string // 搜索词
  engine: string // 搜索引擎ID
  timestamp: number // 时间戳
}
```

**技术实现**

- 组件：React Island (`client:load`)
- 状态管理：Nano Stores
- 快捷键：Tab 切换、Enter 提交、↑↓导航
- 存储：localStorage（搜索历史）

#### 2.2.5 每日一言

**功能描述**

每日一言模块在页面底部展示一条每日轮播的文本内容。

**核心功能**

1. **文本配置**
   - 在 site.json 中配置文本列表
   - 以换行符分隔多条文本

2. **展示规则**
   - 支持三种展示模式：
     - `random`：每日随机选择（默认）
     - `sequential`：按顺序轮播
     - `fixed`：固定显示第一条
   - 位置：页面底部通栏展示

3. **数据存储**

```typescript
interface DailyQuote {
  enabled: boolean
  quotes: string[]
  displayMode: 'random' | 'sequential' | 'fixed' // 展示模式
}
```

**技术实现**

- 组件：React Island (`client:load`)
- 随机算法：基于日期的伪随机（保证每日一致）
- 顺序模式：基于天数取模
- 数据源：site.json

#### 2.2.6 时间显示

**功能描述**

时间显示模块在页面顶部固定位置居中靠上方实时展示当前时间和日期。

**核心功能**

1. **时间显示**
   - 格式：`HH:mm`（如 `00:06`）
   - 每秒更新
   - 字体加粗显示

2. **日期显示**
   - 格式：`M月D日 星期X 农历XX`
   - 显示公历日期、星期、农历日期
   - 正常字重显示

**技术实现**

- 组件：React Island (`client:load`)
- 位置：固定在页面顶部居中靠上方
- 实时更新：setInterval 每秒更新
- 农历计算：dayjs 插件

#### 2.2.7 右键菜单

**功能描述**

右键菜单模块在导航项目上提供自定义右键菜单，支持多种操作。

**核心功能**

1. **菜单选项**
   - 新窗口打开
   - 新标签页打开
   - 复制链接地址

2. **配置开关**
   - 站点配置中可开启/关闭右键菜单
   - 站点配置中可开启/关闭复制链接功能
   - 默认开启

**技术实现**

- 组件：React Island (`client:only`)
- 事件处理：contextmenu 事件拦截
- 位置跟随：跟随鼠标位置
- 复制功能：navigator.clipboard API

#### 2.2.7.1 返回顶部按钮

**功能描述**

提供一键返回页面顶部的浮动按钮。

**核心功能**

1. **显示条件**
   - 页面滚动超过 300px 时显示
   - 位于页面右下角

2. **样式设计**
   - 圆形按钮，向上箭头图标
   - 半透明背景，悬停时变实色
   - 平滑滚动动画

**技术实现**

- 组件：Astro 静态组件
- 显示逻辑：滚动事件监听
- 动画：CSS transition + scroll-behavior: smooth

#### 2.2.8 键盘快捷键

**功能描述**

提供键盘快捷键支持，提升用户操作效率。

**快捷键列表**

| 快捷键     | 功能              | 作用范围           |
| ---------- | ----------------- | ------------------ |
| `Ctrl + K` | 打开全局搜索      | 全局               |
| `Ctrl + F` | 跳转到导航搜索框  | 全局               |
| `/`        | 跳转到网络搜索框  | 全局（非输入状态） |
| `Ctrl + /` | 打开快捷键帮助    | 全局               |
| `Escape`   | 关闭弹窗/搜索结果 | 全局               |
| `↑/↓`      | 导航搜索结果      | 搜索框激活时       |
| `Enter`    | 确认选中/打开链接 | 搜索框激活时       |
| `Tab`      | 切换搜索引擎      | 搜索框激活时       |
| `i`        | 上移选中项        | 全局（非输入状态） |
| `k`        | 下移选中项        | 全局（非输入状态） |
| `j`        | 左移选中项        | 全局（非输入状态） |
| `l`        | 右移选中项        | 全局（非输入状态） |
| `1-9`      | 快速跳转一级分类  | 全局（非输入状态） |
| `Ctrl + N` | 新建项目          | 管理后台           |
| `Ctrl + S` | 保存当前编辑      | 管理后台           |
| `Ctrl + Z` | 撤销上一步操作    | 管理后台           |

**快捷键帮助弹窗**

显示所有可用快捷键的列表，通过 `Ctrl + /` 或 `?` 打开。

**ikjl 导航系统**

使用 `i/k/j/l` 键模拟方向键导航：

- `i` - 上移（↑）
- `k` - 下移（↓）
- `j` - 左移（←）
- `l` - 右移（→）

适用于在导航卡片间快速切换选中状态。

**数字键快速跳转**

按数字键 1-9 可快速跳转到对应位置的一级分类：

- `1` 跳转到第 1 个分类
- `2` 跳转到第 2 个分类
- 以此类推...

**技术实现**

- 组件：React Island (`client:load`)
- 事件监听：keydown 事件
- 冲突处理：输入框中禁用快捷键
- 数字键：仅在非输入状态生效
- ikjl键：仅在非输入状态生效

#### 2.2.9 导航管理模块

**功能描述**

导航管理模块提供完整的后台管理功能，允许管理员对导航分类和项目进行增删改查操作。

**核心功能**

1. **分类管理**
   - 创建一级分类
   - 编辑分类标题、图标、描述
   - 启用/禁用分类
   - 删除分类（二次确认）
   - 分类拖拽排序（支持撤销）

2. **子分类管理**
   - 在一级分类下创建子分类
   - 编辑子分类属性
   - 子分类拖拽排序（支持撤销）

3. **项目管理**
   - 在分类/子分类下添加项目
   - 编辑项目标题、链接、描述、图标
   - 启用/禁用项目
   - 删除项目（二次确认）
   - 项目拖拽排序（支持撤销）

4. **图标管理**
   - 支持本地图片上传（存储到GitHub仓库assets目录）
   - 支持远程URL图标
   - 支持预定义图标（Lucide Icons）
   - 图标预览功能

**操作安全机制**

| 操作类型  | 安全机制     | 实现方式                     |
| --------- | ------------ | ---------------------------- |
| 删除操作  | 二次确认弹窗 | 显示被删除项名称，确认后执行 |
| 批量删除  | 二次确认弹窗 | 显示删除数量，确认后执行     |
| 拖拽排序  | 支持撤销     | 保存前序状态，Ctrl+Z撤销     |
| 启用/禁用 | 即时生效     | 无需确认，可再次切换         |
| 编辑保存  | 自动保存     | 表单失焦或点击保存时保存     |

**删除确认弹窗设计**：

```tsx
interface DeleteConfirmProps {
  title: string // 弹窗标题
  itemName: string // 被删除项名称
  itemCount?: number // 批量删除时的数量
  onConfirm: () => void // 确认回调
  onCancel: () => void // 取消回调
}
```

**拖拽排序撤销机制**：

```typescript
// 保存排序历史（最多保存10步）
const sortHistory: NavigationItem[][] = []
const MAX_HISTORY = 10

function handleReorder(newOrder: NavigationItem[]) {
  // 保存当前状态到历史
  sortHistory.push([...currentItems])
  if (sortHistory.length > MAX_HISTORY) {
    sortHistory.shift()
  }
  // 更新为新状态
  setCurrentItems(newOrder)
}

function undoSort() {
  if (sortHistory.length > 0) {
    const previousState = sortHistory.pop()
    setCurrentItems(previousState)
  }
}
```

**数据模型**

```typescript
interface NavigationData {
  navigationItems: NavigationItem[]
}

interface NavigationItem {
  id: string // 唯一标识符
  title: string // 分类标题
  icon?: string // 分类图标
  description?: string // 分类描述
  items: NavigationSubItem[] // 直接项目列表
  subCategories: NavigationSubCategory[] // 子分类列表
  enabled: boolean // 是否启用
  order: number // 排序序号
}

interface NavigationSubCategory {
  id: string // 唯一标识符
  title: string // 子分类标题
  items: NavigationSubItem[] // 项目列表
  enabled?: boolean // 是否启用
  order: number // 排序序号
}

interface NavigationSubItem {
  id: string // 唯一标识符
  title: string // 项目标题
  href: string // 链接地址
  description?: string // 项目描述
  icon?: string // 图标路径
  enabled: boolean // 是否启用
  order: number // 排序序号
}

type IconType = 'local' | 'remote' | 'lucide' | 'default'

function resolveIconPath(icon?: string): { type: IconType; path: string } {
  if (!icon) return { type: 'default', path: '/assets/images/default-icon.svg' }
  if (icon.startsWith('/assets/')) return { type: 'local', path: icon }
  if (icon.startsWith('http')) return { type: 'remote', path: icon }
  return { type: 'lucide', path: icon } // Lucide图标名称
}
```

**API 接口**

| 接口                                      | 方法   | 描述                            | 认证 | 渲染模式 |
| ----------------------------------------- | ------ | ------------------------------- | ---- | -------- |
| `/api/navigation`                         | GET    | 获取导航数据                    | 公开 | SSR      |
| `/api/navigation`                         | POST   | 保存导航数据                    | 需要 | SSR      |
| `/api/navigation/[id]`                    | GET    | 获取单个分类                    | 公开 | SSR      |
| `/api/navigation/[id]`                    | PUT    | 更新分类                        | 需要 | SSR      |
| `/api/navigation/[id]`                    | DELETE | 删除分类                        | 需要 | SSR      |
| `/api/navigation/[id]/categories`         | GET    | 获取子分类列表                  | 公开 | SSR      |
| `/api/navigation/[id]/categories`         | POST   | 添加子分类                      | 需要 | SSR      |
| `/api/navigation/[id]/categories/[catId]` | GET    | 获取单个子分类                  | 公开 | SSR      |
| `/api/navigation/[id]/categories/[catId]` | PUT    | 更新子分类                      | 需要 | SSR      |
| `/api/navigation/[id]/categories/[catId]` | DELETE | 删除子分类                      | 需要 | SSR      |
| `/api/navigation/[id]/items`              | GET    | 获取项目列表                    | 公开 | SSR      |
| `/api/navigation/[id]/items`              | POST   | 添加项目                        | 需要 | SSR      |
| `/api/navigation/[id]/items/[itemId]`     | GET    | 获取单个项目                    | 公开 | SSR      |
| `/api/navigation/[id]/items/[itemId]`     | PUT    | 更新项目                        | 需要 | SSR      |
| `/api/navigation/[id]/items/[itemId]`     | DELETE | 删除项目                        | 需要 | SSR      |
| `/api/navigation/reorder`                 | POST   | 拖拽排序                        | 需要 | SSR      |
| `/api/navigation/batch`                   | POST   | 批量操作（批量删除、启用/禁用） | 需要 | SSR      |
| `/api/navigation/search`                  | GET    | 搜索导航项目                    | 公开 | SSR      |
| `/api/navigation/export`                  | GET    | 导出导航数据                    | 需要 | SSR      |
| `/api/navigation/import`                  | POST   | 导入导航数据                    | 需要 | SSR      |
| `/api/navigation/restore`                 | POST   | 恢复默认数据                    | 需要 | SSR      |
| `/api/navigation/check-default`           | GET    | 检查默认文件状态                | 需要 | SSR      |
| `/api/upload/icon`                        | POST   | 上传图标文件                    | 需要 | SSR      |
| `/api/health`                             | GET    | 健康检查                        | 公开 | SSR      |

**技术实现**

- 表单：React Hook Form + Zod 验证（复杂表单）
- 拖拽：dnd-kit + React Island (`client:only`)
- 数据获取：Astro SSR (实时) + 客户端 SWR (缓存)
- 乐观更新：拖拽排序时先更新UI再请求API

#### 2.2.9 资源管理模块

**功能描述**

资源管理模块用于管理网站的其他资源内容，如推荐工具、素材网站等。

**核心功能**

1. **资源分类管理**
   - 创建资源分类
   - 编辑分类属性
   - 删除分类

2. **资源项目管理**
   - 添加资源项目
   - 编辑资源属性
   - 删除资源

**数据模型**

```typescript
interface ResourceSection {
  id: string // 唯一标识符
  title: string // 分类标题
  items: ResourceItem[] // 资源项目列表
}

interface ResourceItem {
  title: string // 资源标题
  description: string // 资源描述
  icon: string // 资源图标
  url: string // 资源链接
}
```

**API 接口**

| 接口                                 | 方法   | 描述             | 认证 | 渲染模式 |
| ------------------------------------ | ------ | ---------------- | ---- | -------- |
| `/api/resource`                      | GET    | 获取资源数据     | 公开 | SSR      |
| `/api/resource`                      | POST   | 添加资源         | 需要 | SSR      |
| `/api/resource/[id]`                 | GET    | 获取单个资源     | 公开 | SSR      |
| `/api/resource/[id]`                 | PUT    | 更新资源         | 需要 | SSR      |
| `/api/resource/[id]`                 | DELETE | 删除资源         | 需要 | SSR      |
| `/api/resource/sections`             | GET    | 获取资源分类列表 | 公开 | SSR      |
| `/api/resource/sections`             | POST   | 添加资源分类     | 需要 | SSR      |
| `/api/resource/sections/[sectionId]` | GET    | 获取单个分类     | 公开 | SSR      |
| `/api/resource/sections/[sectionId]` | PUT    | 更新分类         | 需要 | SSR      |
| `/api/resource/sections/[sectionId]` | DELETE | 删除分类         | 需要 | SSR      |
| `/api/resource/batch`                | POST   | 批量操作         | 需要 | SSR      |
| `/api/resource/check-references`     | GET    | 检查引用         | 需要 | SSR      |

**技术实现**

- 表单处理：React Hook Form + Zod 验证
- UI：React Islands (`client:load`)
- 数据持久化：GitHub REST API (Octokit)

#### 2.2.10 站点配置模块

**功能描述**

站点配置模块允许管理员配置网站的基本信息、外观样式和导航行为。

**核心功能**

1. **基本信息配置**
   - 网站标题
   - 网站描述
   - 网站关键词
   - 默认分类（首页重定向目标）

2. **外观配置**
   - Logo 图片
   - Favicon 图标
   - 主题模式（浅色/深色/跟随系统）
   - 背景图片（可选）
   - 背景透明度

3. **导航配置**
   - 链接打开方式（默认当前窗口新标签页打开）
   - 悬停效果选择（default/glass/lift/tilt）

4. **搜索引擎配置**
   - 默认搜索引擎选择
   - 自定义搜索引擎列表（支持 Bing、Google 等）
   - 添加自定义搜索源
   - 搜索历史记录开关

5. **每日一言配置**
   - 开启/关闭
   - 文本内容（以换行符分隔多条）
   - 展示模式（随机/顺序/固定）

6. **右键菜单配置**
   - 开启/关闭自定义右键菜单
   - 复制链接功能开关

**数据模型**

```typescript
interface SiteConfig {
  basic: {
    title: string // 网站标题
    description: string // 网站描述
    keywords: string // 网站关键词
    defaultCategory: string // 默认分类
  }
  appearance: {
    logo: string // Logo 路径
    favicon: string // Favicon 路径
    theme: 'light' | 'dark' | 'system' // 主题模式
    backgroundImage?: string // 背景图片路径
    backgroundOpacity?: number // 背景透明度 (0-1)
  }
  navigation: {
    linkTarget: '_blank' | '_self' // 链接打开方式
    hoverEffect: 'default' | 'glass' | 'lift' | 'tilt' // 悬停效果
  }
  search: {
    defaultEngine: string // 默认搜索引擎 ID
    engines: SearchEngine[] // 搜索引擎列表
    enableHistory: boolean // 是否启用搜索历史
    maxHistoryItems: number // 最大历史记录数
  }
  dailyQuote: {
    enabled: boolean // 是否开启
    quotes: string[] // 文本列表（换行符分隔）
    displayMode: 'random' | 'sequential' | 'fixed' // 展示模式
  }
  contextMenu: {
    enabled: boolean // 是否开启右键菜单
    enableCopyLink: boolean // 是否启用复制链接
  }
}

interface SearchEngine {
  id: string // 搜索引擎 ID
  name: string // 搜索引擎名称
  url: string // 搜索 URL 模板
  icon: string // 图标路径
}
```

**API 接口**

| 接口                     | 方法 | 描述           | 认证 | 渲染模式 |
| ------------------------ | ---- | -------------- | ---- | -------- |
| `/api/site-config`       | GET  | 获取站点配置   | 公开 | SSR      |
| `/api/site-config`       | POST | 保存站点配置   | 需要 | SSR      |
| `/api/site-config/reset` | POST | 重置为默认配置 | 需要 | SSR      |

**技术实现**

- 表单处理：React Hook Form + Zod 验证
- 页面渲染：SSR 动态渲染
- 图片上传：Astro API 端点处理

#### 2.2.11 数据管理模块

**功能描述**

数据管理模块提供高级数据操作功能，包括 JSON 编辑器、数据导入导出和数据同步。

**核心功能**

1. **JSON 编辑器**
   - Monaco Editor 集成
   - 语法高亮
   - 代码补全
   - 格式验证

2. **数据导入导出**
   - 导出全部数据为 JSON 文件（包含导航、站点配置、资源、卡片）
   - 导入 JSON 文件恢复数据
   - 导入前数据格式验证
   - 导入冲突处理（覆盖/合并）

3. **数据同步**
   - 修改后自动同步到 GitHub 仓库
   - 手动触发同步按钮
   - 同步状态显示（成功/失败/进行中）

**API 接口**

| 接口                      | 方法 | 描述              | 认证 |
| ------------------------- | ---- | ----------------- | ---- |
| `/api/data/export`        | GET  | 导出全部数据      | 需要 |
| `/api/data/export/[type]` | GET  | 导出指定类型数据  | 需要 |
| `/api/data/import`        | POST | 导入数据          | 需要 |
| `/api/data/sync`          | POST | 手动同步到 GitHub | 需要 |

**导出数据类型**

| 类型       | 文件名                         | 内容     |
| ---------- | ------------------------------ | -------- |
| all        | fastnav-backup-all.json        | 全部数据 |
| navigation | fastnav-backup-navigation.json | 导航数据 |
| site       | fastnav-backup-site.json       | 站点配置 |
| resource   | fastnav-backup-resource.json   | 资源数据 |
| widget     | fastnav-backup-widget.json     | 卡片数据 |

**技术实现**

- 编辑器：Monaco Editor (`client:only`)
- 数据验证：Zod Schema
- 文件下载：Blob + URL.createObjectURL
- 同步：Octokit REST API

#### 2.2.12 卡片组件模块

**功能描述**

卡片组件模块提供类似于手机桌面小组件（Widgets）的功能，允许用户在导航页面中展示自定义的卡片内容，如倒数日、文本显示、时钟等个性化组件。

**核心功能**

1. **倒数日卡片**
   - 设置目标日期
   - 显示倒计时天数
   - 支持纪念日/倒计时两种模式
   - 自定义卡片标题和背景色
   - 过期提醒显示

2. **文本卡片**
   - 自定义文本内容
   - 支持多行文本
   - 文字大小/颜色自定义
   - 背景色/透明度设置

3. **时钟卡片**
   - 实时显示当前时间
   - 支持数字/模拟时钟样式
   - 显示日期/星期
   - 时区设置

4. **链接卡片**
   - 快捷链接入口
   - 图标+标题展示
   - 与导航项目类似但更简洁

**实现阶段规划**

| 阶段     | 卡片类型           | 优先级 | 说明                           |
| -------- | ------------------ | ------ | ------------------------------ |
| 第一阶段 | 链接卡片           | P0     | 与导航项目功能重叠，可复用组件 |
| 第二阶段 | 时钟卡片、文本卡片 | P1     | 简单组件，快速实现             |
| 第三阶段 | 倒数日卡片         | P2     | 复杂逻辑，延后实现             |

**卡片布局设计**

```
┌─────────────────────────────────────────────────────────────┐
│  导航分类区                                                   │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │  倒数日     │  │   文本卡片   │  │   时钟卡片   │          │
│  │  距离考试   │  │  欢迎访问   │  │   10:30     │          │
│  │   15天      │  │  我的导航   │  │  2026-03-27 │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│  导航项目区                                                   │
└─────────────────────────────────────────────────────────────┘
```

**数据模型**

```typescript
// 卡片组件基类
interface BaseCard {
  id: string // 唯一标识符
  type: 'countdown' | 'text' | 'clock' | 'link' // 卡片类型
  title?: string // 卡片标题
  enabled: boolean // 是否启用
  position?: number // 排序位置
}

// 倒数日卡片
interface CountdownCard extends BaseCard {
  type: 'countdown'
  targetDate: string // 目标日期 (ISO 8601)
  mode: 'countdown' | 'anniversary' // 倒计时/纪念日模式
  backgroundColor?: string // 背景色
  textColor?: string // 文字颜色
}

// 文本卡片
interface TextCard extends BaseCard {
  type: 'text'
  content: string // 文本内容
  fontSize?: 'small' | 'medium' | 'large' // 字体大小
  textColor?: string // 文字颜色
  backgroundColor?: string // 背景色
  backgroundOpacity?: number // 背景透明度 (0-1)
}

// 时钟卡片
interface ClockCard extends BaseCard {
  type: 'clock'
  format: 'digital' | 'analog' // 时钟样式
  showDate?: boolean // 是否显示日期
  timezone?: string // 时区
}

// 链接卡片
interface LinkCard extends BaseCard {
  type: 'link'
  href: string // 跳转链接
  icon?: string // 图标
}

// 卡片联合类型
type WidgetCard = CountdownCard | TextCard | ClockCard | LinkCard

// 卡片容器
interface WidgetContainer {
  id: string // 容器唯一标识
  title?: string // 容器标题（如"小组件"）
  cards: WidgetCard[] // 卡片列表
  enabled?: boolean // 是否启用
  columns?: number // 显示列数 (1-4)
}
```

**组件结构**

```
WidgetCard/
├── CountdownWidget.tsx    # 倒数日组件
├── TextWidget.tsx        # 文本组件
├── ClockWidget.tsx       # 时钟组件
├── LinkWidget.tsx       # 链接组件
├── WidgetContainer.tsx  # 卡片容器
└── WidgetEditor.tsx     # 卡片编辑表单
```

**API 接口**

| 接口                  | 方法   | 描述         | 认证 |
| --------------------- | ------ | ------------ | ---- |
| `/api/widget`         | GET    | 获取卡片数据 | 公开 |
| `/api/widget`         | POST   | 添加卡片     | 需要 |
| `/api/widget/[id]`    | GET    | 获取单个卡片 | 公开 |
| `/api/widget/[id]`    | PUT    | 更新卡片     | 需要 |
| `/api/widget/[id]`    | DELETE | 删除卡片     | 需要 |
| `/api/widget/reorder` | POST   | 卡片排序     | 需要 |
| `/api/widget/batch`   | POST   | 批量操作     | 需要 |

**技术实现**

- 组件渲染：React Island (`client:load`)
- 实时更新：时钟卡片每秒刷新
- 状态管理：Nano Stores + SWR
- 数据持久化：GitHub JSON 文件
- 日期计算：dayjs (轻量级日期处理)

**管理后台界面**

- 卡片列表展示（网格布局）
- 添加卡片按钮（选择类型）
- 编辑卡片弹窗
- 拖拽排序支持
- 实时预览效果

#### 2.2.13 扩展功能

**浏览器插件（V2.0）**

- 项目配套浏览器扩展插件
- 一键收藏网站
- 智能识别网站信息
- 实时同步数据
- 支持 Chrome、Firefox、Edge

---

## 3. 用户界面设计

### 3.1 页面结构

#### 3.1.1 首页（导航门户）

**路由说明**

| 路由            | 描述                               |
| --------------- | ---------------------------------- |
| `/`             | 重定向到默认分类页面（通过分类ID） |
| `/category/:id` | 分类详情页，`:id` 为分类ID         |

**首页重定向逻辑**

- 用户访问根路径 `/` 时，自动重定向到默认分类页面
- 默认分类可在站点配置中指定（使用分类ID）
- 其他分类通过 `/category/:id` 访问

#### 3.1.2 分类详情页

访问地址：`/category/:id`

功能：展示指定分类下的所有项目

主要元素：

- 顶部时间和日期显示
- 顶部网络搜索栏（居中，Chrome 风格）
- 侧边栏导航（桌面端）
  - 导航搜索栏（位于"分类"列表上方，搜索本地项目）
  - 分类导航列表
- 分类标题和项目卡片区域
- 每日一言（页面底部通栏展示）
- 主题切换、GitHub 链接、设置跳转

#### 3.1.3 管理后台首页

#### 3.1.2 管理后台首页

访问地址：`/admin`

功能：管理后台概览和统计数据

主要元素：

- 统计卡片（分类总数、一级分类、二级分类、站点总数）
- 功能导航卡片（站点设置、导航管理、资源管理）
- 刷新统计按钮

#### 3.1.3 站点设置页面

访问地址：`/admin/site`

功能：配置站点基本信息

表单字段：

- 网站标题（输入框）
- 网站描述（文本域）
- 网站关键词（输入框）
- Logo 图片（图片上传）
- Favicon（图片上传）
- 主题模式（下拉选择：浅色/深色/系统）
- 链接打开方式（单选：新窗口/当前窗口）

#### 3.1.4 导航管理页面

访问地址：`/admin/navigation`

功能：管理导航分类和项目

功能区域：

- 分类列表展示
- 分类操作（添加、编辑、删除、排序）
- 子分类管理
- 项目管理
- 图标选择器

#### 3.1.5 资源管理页面

访问地址：`/admin/resources`

功能：管理资源内容

功能区域：

- 资源分类列表
- 资源项目列表
- 添加/编辑/删除操作

#### 3.1.6 数据管理页面

访问地址：``/admin/data`

功能：高级数据操作

功能区域：

- JSON 编辑器
- 数据预览
- 保存/重置按钮

#### 3.1.7 卡片设置页面

- 弹出默认样式选择
- 选择后支持修改

### 3.2 设计规范

设计规范遵循 UIPrompt.md 文件中的 **Google Design (Material Design 3)** 风格。

#### 3.2.1 色彩系统 - Material You

**Primary 系列**

| 变量                 | 浅色模式 | 深色模式 | 用途             |
| -------------------- | -------- | -------- | ---------------- |
| Primary              | #6750A4  | #D0BCFF  | 主要按钮、链接   |
| On-Primary           | #FFFFFF  | #381E72  | Primary 上的文字 |
| Primary-Container    | #EADDFF  | #4F378B  | 主要容器背景     |
| On-Primary-Container | #21005D  | #EADDFF  | 容器内文字       |

**Secondary 系列**

| 变量                   | 浅色模式 | 深色模式 | 用途               |
| ---------------------- | -------- | -------- | ------------------ |
| Secondary              | #625B71  | #CCC2DC  | 次要按钮           |
| On-Secondary           | #FFFFFF  | #332D41  | Secondary 上的文字 |
| Secondary-Container    | #E8DEF8  | #4A4458  | 次要容器背景       |
| On-Secondary-Container | #1D192B  | #E8DEF8  | 容器内文字         |

**Surface 层级系统**

| 变量                   | 浅色模式 | 深色模式 | 用途     |
| ---------------------- | -------- | -------- | -------- |
| Surface                | #FFFBFE  | #1C1B1F  | 主背景   |
| Surface-Container      | #F3EDF7  | #211F26  | 卡片背景 |
| Surface-Container-High | #ECE6F0  | #2B2930  | 浮层背景 |
| Surface-Variant        | #E7E0EC  | #49454F  | 次要背景 |

**文本和边框**

| 变量               | 浅色模式 | 深色模式 | 用途     |
| ------------------ | -------- | -------- | -------- |
| On-Surface         | #1C1B1F  | #E6E1E5  | 主文字   |
| On-Surface-Variant | #49454F  | #CAC4D0  | 次要文字 |
| Outline            | #79747E  | #938F99  | 边框     |
| Outline-Variant    | #CAC4D0  | #49454F  | 次要边框 |

#### 3.2.2 圆角系统

| 元素      | 圆角值 | 说明         |
| --------- | ------ | ------------ |
| 按钮/Chip | 9999px | 胶囊形       |
| 卡片      | 16px   | 标准卡片     |
| 输入框    | 4px    | 紧凑设计     |
| 图标按钮  | 50%    | 圆形按钮     |
| FAB       | 16px   | 悬浮按钮     |
| 搜索栏    | 9999px | 胶囊形搜索框 |

#### 3.2.3 阴影系统 - Elevation

| 级别        | 样式                   | 用途       |
| ----------- | ---------------------- | ---------- |
| Elevation 0 | 无阴影                 | 平铺背景   |
| Elevation 1 | 0 1px 2px + 0 1px 3px  | 卡片默认   |
| Elevation 2 | 0 1px 2px + 0 2px 6px  | 卡片 hover |
| Elevation 3 | 0 4px 8px + 0 1px 3px  | 悬浮按钮   |
| Elevation 4 | 0 6px 10px + 0 2px 3px | 弹窗/菜单  |

#### 3.2.4 字体系统

**排版层级**

| 级别            | 字号 | 字重 | 行高 | 字间距 | 用途     |
| --------------- | ---- | ---- | ---- | ------ | -------- |
| Display Small   | 36px | 400  | 44px | 0      | 大标题   |
| Headline Medium | 28px | 400  | 36px | 0      | 页面标题 |
| Title Large     | 22px | 500  | 28px | 0      | 卡片标题 |
| Title Small     | 14px | 500  | 20px | 0.1px  | 小标题   |
| Body Large      | 16px | 400  | 24px | 0.5px  | 正文     |
| Body Medium     | 14px | 400  | 20px | 0.25px | 描述     |
| Label Large     | 14px | 500  | 20px | 0.1px  | 按钮     |
| Label Medium    | 12px | 500  | 16px | 0.5px  | 标签     |

**字体选择**

- 主字体：Inter（或 system-ui 备选）
- 代码字体：Roboto Mono（用于 JSON 编辑器、金额等）

#### 3.2.5 按钮系统

**5 种按钮变体**

| 类型     | 背景                  | 文字                   | 边框        | 用途     |
| -------- | --------------------- | ---------------------- | ----------- | -------- |
| Filled   | Primary               | On-Primary             | 无          | 主要操作 |
| Tonal    | Secondary-Container   | On-Secondary-Container | 无          | 次要操作 |
| Outlined | 透明                  | Primary                | 1px Outline | 中等强调 |
| Text     | 无                    | Primary                | 无          | 文字链接 |
| Elevated | Surface-Container-Low | Primary                | 无          | 浮层按钮 |

**Icon Button 变体**

| 类型     | 背景                | 图标颜色               | 用途     |
| -------- | ------------------- | ---------------------- | -------- |
| Standard | transparent         | On-Surface-Variant     | 通用     |
| Filled   | Primary             | On-Primary             | 重要操作 |
| Tonal    | Secondary-Container | On-Secondary-Container | 次要操作 |
| Outlined | transparent         | On-Surface-Variant     | 需要边框 |

#### 3.2.6 组件库

- 基于 Radix UI 构建
- 使用 shadcn/ui 组件风格
- Tailwind CSS 样式系统
- 图标：Lucide React（Material Symbols 备选）

#### 3.2.7 动效系统

**缓动曲线**

| 类型                  | 曲线                            | 用途 |
| --------------------- | ------------------------------- | ---- |
| Standard              | cubic-bezier(0.2, 0, 0, 1)      | 默认 |
| Emphasized            | cubic-bezier(0.2, 0, 0, 1)      | 强调 |
| Emphasized-Decelerate | cubic-bezier(0.05, 0.7, 0.1, 1) | 滑入 |
| Emphasized-Accelerate | cubic-bezier(0.3, 0, 0.8, 0.15) | 滑出 |

**时长**

| 类型   | 时长  | 用途     |
| ------ | ----- | -------- |
| Short  | 200ms | 交互反馈 |
| Medium | 400ms | 组件动画 |
| Long   | 600ms | 页面过渡 |

**交互效果**

- 卡片 hover：阴影加深 Elevation 1 → 2 + translateY(-4px)
- 按钮 click：scale(0.98)
- 搜索栏 focus：box-shadow Primary 色

#### 3.2.8 响应式断点

| 断点 | 宽度   | 描述     | 布局调整      |
| ---- | ------ | -------- | ------------- |
| sm   | 640px  | 手机横屏 | 单列布局      |
| md   | 768px  | 平板     | 双列布局      |
| lg   | 1024px | 桌面     | 侧边栏+内容区 |
| xl   | 1280px | 大桌面   | 三列布局      |
| 2xl  | 1536px | 超大桌面 | 最大宽度约束  |

#### 3.2.9 骨架屏设计

**使用场景**：数据加载中显示骨架屏，提升用户体验

**导航卡片骨架屏**：

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--skeleton-base) 25%,
    var(--skeleton-highlight) 50%,
    var(--skeleton-base) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 12px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

**骨架屏组件**：

| 组件     | 骨架屏形状                   | 尺寸             |
| -------- | ---------------------------- | ---------------- |
| 导航卡片 | 圆角矩形 + 图标圆形 + 文字条 | 200x80px         |
| 侧边栏项 | 圆形 + 文字条                | 100%宽度         |
| 搜索栏   | 圆角矩形                     | 100%宽度，48px高 |
| 时间显示 | 文字条                       | 200x40px         |

#### 3.2.10 空状态设计

**使用场景**：无数据时显示友好提示

| 场景       | 空状态内容              | 操作引导             |
| ---------- | ----------------------- | -------------------- |
| 无导航分类 | 图标 + "暂无分类"       | "点击添加第一个分类" |
| 无导航项目 | 图标 + "暂无项目"       | "点击添加项目"       |
| 搜索无结果 | 图标 + "未找到相关内容" | "尝试其他关键词"     |
| 无卡片组件 | 图标 + "暂无卡片"       | "点击添加卡片"       |
| 无资源     | 图标 + "暂无资源"       | "点击添加资源"       |

**空状态组件结构**：

```tsx
interface EmptyStateProps {
  icon: ReactNode // 图标
  title: string // 标题
  description?: string // 描述
  action?: {
    label: string
    onClick: () => void
  }
}
```

#### 3.2.11 暗色模式配色

**MD3暗色模式标准配色**：

| 语义     | 浅色模式 | 暗色模式 |
| -------- | -------- | -------- |
| 主背景   | #FFFBFE  | #1C1B1F  |
| 次背景   | #F3EDF7  | #2B2930  |
| 卡片背景 | #FFFFFF  | #2B2930  |
| 主色调   | #6750A4  | #D0BCFF  |
| 主文字   | #1C1B1F  | #E6E1E5  |
| 次文字   | #49454F  | #CAC4D0  |
| 边框     | #79747E  | #938F99  |
| 错误色   | #B3261E  | #F2B8B5  |

**CSS变量定义**：

```css
:root {
  /* 浅色模式 */
  --color-background: #fffbfe;
  --color-surface: #f3edf7;
  --color-on-surface: #1c1b1f;
  --color-primary: #6750a4;
}

[data-theme='dark'] {
  /* 暗色模式 */
  --color-background: #1c1b1f;
  --color-surface: #2b2930;
  --color-on-surface: #e6e1e5;
  --color-primary: #d0bcff;
}
```

**主题切换动画**：

```css
* {
  transition:
    background-color 0.3s ease,
    color 0.2s ease;
}
```

#### 3.2.12 无障碍访问(a11y)

| 要求       | 实现方式                                       |
| ---------- | ---------------------------------------------- |
| 语义化HTML | 使用 `<nav>`, `<main>`, `<article>` 等语义标签 |
| ARIA标签   | 按钮添加 `aria-label`，图标添加 `aria-hidden`  |
| 键盘导航   | 支持 Tab/Shift+Tab 导航，Enter 激活            |
| 焦点管理   | 弹窗打开时焦点锁定，关闭后焦点还原             |
| 颜色对比   | 文字与背景对比度 ≥ 4.5:1                       |
| 屏幕阅读器 | 图片添加 `alt`，表单添加 `label`               |

#### 3.2.13 自定义滚动条(OverlayScrollbars)

**库选择**：OverlayScrollbars

**安装**：

```bash
pnpm add overlayscrollbars overlayscrollbars-react
```

**配置选项**：

```typescript
const scrollbarOptions = {
  scrollbars: {
    autoHide: 'scroll', // 滚动时显示，停止后隐藏
    autoHideDelay: 800, // 隐藏延迟（毫秒）
    dragScroll: true, // 支持拖拽滚动
    clickScroll: false, // 禁用点击滚动
  },
  overflow: {
    x: 'hidden', // 隐藏横向滚动条
    y: 'scroll', // 显示纵向滚动条
  },
}
```

**样式自定义**：

```css
/* 自定义滚动条轨道 */
.os-scrollbar {
  --os-size: 20px; /* 滚动条宽度 */
  --os-padding-perpendicular: 4px;
  --os-padding-axis: 4px;
}

/* 自定义滚动条滑块 - 滑块样式 */
.os-scrollbar-handle {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  min-width: 20px;
  min-height: 20px;
}

.os-scrollbar-handle:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* 暗色模式 */
[data-theme='dark'] .os-scrollbar-handle {
  background: rgba(255, 255, 255, 0.15);
}

[data-theme='dark'] .os-scrollbar-handle:hover {
  background: rgba(255, 255, 255, 0.3);
}
```

**使用场景**：

| 组件         | 滚动条行为         |
| ------------ | ------------------ |
| 侧边栏       | 垂直滚动，自动隐藏 |
| 导航卡片区域 | 垂直滚动，自动隐藏 |
| 管理后台列表 | 垂直滚动，常驻显示 |
| 弹窗内容     | 垂直滚动，自动隐藏 |

**技术实现**：

- 组件：React Island (`client:load`)
- 包装：OverlayScrollbarsComponent
- 主题适配：跟随系统主题切换

### 3.3 组件详细UI设计

#### 3.3.1 导航项目卡片

**布局结构**：

```
┌─────────────────────────────────┐
│  [图标]   标题                   │
│          描述文字（可选）        │
└─────────────────────────────────┘
```

**尺寸规格**：

| 属性     | 值      | 说明           |
| -------- | ------- | -------------- |
| 宽度     | 100%    | 自适应容器     |
| 最小高度 | 64px    | 包含图标和标题 |
| 内边距   | 16px    | 四周           |
| 图标尺寸 | 24x24px | 标准图标       |
| 图标圆角 | 8px     | 图标容器       |

**样式规格**：

```css
.navigation-card {
  /* 基础样式 */
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  background: var(--surface-container);
  cursor: pointer;

  /* 过渡动画 */
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
}

/* 四种悬停效果 */
.navigation-card.hover-default:hover {
  background: var(--surface-container-high);
}

.navigation-card.hover-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.navigation-card.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.navigation-card.hover-tilt:hover {
  transform: perspective(500px) rotateX(5deg);
}
```

**文字样式**：

| 元素 | 字号 | 字重 | 颜色               |
| ---- | ---- | ---- | ------------------ |
| 标题 | 14px | 500  | On-Surface         |
| 描述 | 12px | 400  | On-Surface-Variant |

#### 3.3.2 导航搜索栏

**布局结构**：

```
┌─────────────────────────────────┐
│  [🔍]  搜索导航项目...          │
└─────────────────────────────────┘
```

**尺寸规格**：

| 属性     | 值      | 说明           |
| -------- | ------- | -------------- |
| 宽度     | 100%    | 侧边栏宽度     |
| 高度     | 40px    | 标准输入框高度 |
| 内边距   | 12px    | 左右           |
| 图标尺寸 | 16x16px | 搜索图标       |
| 圆角     | 8px     | 小圆角         |

**样式规格**：

```css
.nav-search-input {
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid var(--outline-variant);
  border-radius: 8px;
  background: var(--surface);
  font-size: 14px;
}

.nav-search-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px var(--primary-container);
}

.nav-search-input::placeholder {
  color: var(--on-surface-variant);
}
```

**搜索结果下拉**：

| 属性     | 值                                        |
| -------- | ----------------------------------------- |
| 位置     | 输入框下方                                |
| 最大高度 | 300px                                     |
| 圆角     | 16px（MD3风格）                           |
| 阴影     | Elevation 3                               |
| 滚动     | 超出高度时滚动                            |
| 样式     | MD3风格，小正方形卡片区域，与背景区分明显 |

**搜索结果项样式**：

```css
.search-result-item {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  padding: 12px;
  background: var(--surface-container);
  border-radius: 16px;
}

.search-result-item:hover {
  background: var(--surface-container-high);
}
```

#### 3.3.3 网络搜索栏

**布局结构**：

```
┌──────────────────────────────────────────────┐
│  [Bing ▼]  搜索内容...              [🔍]    │
└──────────────────────────────────────────────┘
```

**尺寸规格**：

| 属性   | 值          | 说明           |
| ------ | ----------- | -------------- |
| 宽度   | 600px (max) | 最大宽度       |
| 高度   | 48px        | 标准搜索栏高度 |
| 内边距 | 16px        | 左右           |
| 圆角   | 9999px      | 胶囊形         |

**样式规格**：

```css
.network-search-bar {
  width: 100%;
  max-width: 600px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 9999px;
  background: var(--surface-container);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.network-search-bar:focus-within {
  box-shadow:
    0 0 0 2px var(--primary),
    0 4px 8px rgba(0, 0, 0, 0.15);
}
```

**搜索引擎切换器**：

| 属性     | 值           |
| -------- | ------------ |
| 位置     | 搜索栏左侧   |
| 尺寸     | 24x24px 图标 |
| 切换方式 | Tab 键或点击 |

**搜索历史下拉**：

| 属性     | 值         |
| -------- | ---------- |
| 位置     | 搜索栏下方 |
| 最大显示 | 5条        |
| 圆角     | 12px       |
| 每项高度 | 40px       |

#### 3.3.4 每日一言组件

**布局结构**：

```
┌─────────────────────────────────────────────────────────────┐
│                    "这里是每日一言的内容"                    │
└─────────────────────────────────────────────────────────────┘
```

**尺寸规格**：

| 属性     | 值        | 说明         |
| -------- | --------- | ------------ |
| 位置     | 页面底部  | 通栏展示     |
| 高度     | 48px      | 标准高度     |
| 内边距   | 16px 24px | 上下 左右    |
| 文字居中 | 是        | 水平垂直居中 |

**样式规格**：

```css
.daily-quote {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  background: var(--surface-variant);
  color: var(--on-surface-variant);
  font-size: 14px;
  font-style: italic;
  text-align: center;
}

/* 淡入动画 */
.daily-quote-enter {
  opacity: 0;
  transform: translateY(10px);
}

.daily-quote-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
}
```

**文字样式**：

| 属性     | 值                 |
| -------- | ------------------ |
| 字号     | 14px               |
| 字重     | 400                |
| 字体样式 | italic             |
| 颜色     | On-Surface-Variant |
| 最大宽度 | 80%                |

#### 3.3.5 时间显示组件

**布局结构**：

```
┌─────────────────────────┐
│       10:30             │
│  2026年3月28日 星期六    │
└─────────────────────────┘
```

**尺寸规格**：

| 属性 | 值           | 说明         |
| ---- | ------------ | ------------ |
| 位置 | 页面顶部固定 | 居中靠上方   |
| 宽度 | 自适应       | 根据内容调整 |
| 高度 | 60px         | 包含时间日期 |

**样式规格**：

```css
.time-display {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 10;
}

.time-display-time {
  font-size: 28px;
  font-weight: 700;
  color: var(--on-surface);
  font-family: 'Inter', monospace;
}

.time-display-date {
  font-size: 14px;
  font-weight: 400;
  color: var(--on-surface-variant);
}
```

**文字样式**：

| 元素 | 字号 | 字重        | 颜色               |
| ---- | ---- | ----------- | ------------------ |
| 时间 | 28px | 700（加粗） | On-Surface         |
| 日期 | 14px | 400（正常） | On-Surface-Variant |

#### 3.3.6 侧边栏组件

**布局结构**：

```
┌──────────────┐
│  导航搜索栏   │
├──────────────┤
│  ○ 一级分类1 │
│    ◇ 二级分类 │
│    ◇ 二级分类 │
│  ○ 一级分类2 │
│  ○ 一级分类3 │
│  ...         │
└──────────────┘
```

**尺寸规格**：

| 属性           | 值    | 说明               |
| -------------- | ----- | ------------------ |
| 宽度           | 240px | 固定宽度           |
| 最小高度       | 100vh | 全高               |
| 内边距         | 16px  | 四周               |
| 一级分类项高度 | 44px  | 每项，突出显示     |
| 二级分类项高度 | 36px  | 每项（展开时显示） |

**样式规格**：

```css
.sidebar {
  width: 240px;
  height: 100vh;
  padding: 16px;
  background: var(--surface);
  border-right: 1px solid var(--outline-variant);
}

/* 一级分类 - 突出显示 */
.sidebar-category-item {
  height: 44px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  border-radius: 10px;
  background: var(--surface-container);
  font-weight: 600;
  cursor: pointer;
}

/* 二级分类 - 缩进区分 */
.sidebar-subcategory-item {
  height: 36px;
  padding-left: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: var(--on-surface-variant);
}
```

**说明**：

- 一级分类和二级分类通过高度、背景色、字重区分
- 不使用"|-"符号，通过视觉层级差异区分
- 一级分类：更大高度、背景色突出、粗体
- 二级分类：缩进、较细字体、较浅颜色
  background: var(--surface-container);
  }

.sidebar-category-item.active {
background: var(--primary-container);
color: var(--on-primary-container);
}

.sidebar-subcategory {
padding-left: 24px;
height: 32px;
}

.sidebar-subcategory-item {
height: 32px;
display: flex;
align-items: center;
padding: 0 12px;
border-radius: 6px;
font-size: 13px;
color: var(--on-surface-variant);
cursor: pointer;
}

.sidebar-subcategory-item:hover {
background: var(--surface-container);
}

```

┌──────────────┐
│ 导航搜索栏 │
├──────────────┤
│ 分类 1 │
│ 分类 2 │
│ 分类 3 │
│ ... │
├──────────────┤
│ 主题切换 │
│ 设置 │
└──────────────┘

```

**尺寸规格**：

| 属性       | 值    | 说明     |
| ---------- | ----- | -------- |
| 宽度       | 240px | 固定宽度 |
| 最小高度   | 100vh | 全高     |
| 内边距     | 16px  | 四周     |
| 分类项高度 | 40px  | 每项     |

**样式规格**：

```css
.sidebar {
  width: 240px;
  height: 100vh;
  padding: 16px;
  background: var(--surface);
  border-right: 1px solid var(--outline-variant);
}

.sidebar-category-item {
  height: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  border-radius: 8px;
  cursor: pointer;
}

.sidebar-category-item:hover {
  background: var(--surface-container);
}

.sidebar-category-item.active {
  background: var(--primary-container);
  color: var(--on-primary-container);
}
```

**响应式行为**：

| 断点  | 行为                     |
| ----- | ------------------------ |
| < md  | 隐藏侧边栏，显示汉堡菜单 |
| >= md | 常驻显示                 |

#### 3.3.7 页面过渡动画(Swup)

**库选择**：Swup + @swup/插件

**安装**：

```bash
pnpm add swup @swup/fade-plugin @swup/slide-plugin @swup/scroll-plugin
```

**过渡类型**：

| 过渡类型 | 效果     | 使用场景     |
| -------- | -------- | ------------ |
| Fade     | 淡入淡出 | 默认过渡效果 |
| Slide    | 滑动切换 | 分类页面切换 |
| Scroll   | 平滑滚动 | 锚点跳转     |

**配置选项**：

```typescript
import Swup from 'swup'
import SwupFadePlugin from '@swup/fade-plugin'
import SwupSlidePlugin from '@swup/slide-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'

const swup = new Swup({
  containers: ['#swup'], // 过渡容器
  animationSelector: '[class*="swup"]', // 动画选择器
  cache: true, // 启用缓存
  preload: true, // 预加载
  plugins: [
    new SwupFadePlugin({
      duration: 300, // 动画时长
    }),
    new SwupSlidePlugin({
      direction: 'to-right', // 滑动方向
    }),
    new SwupScrollPlugin(),
  ],
})
```

**动画类名**：

```css
/* 过渡容器 */
#swup {
  transition: opacity 0.3s ease;
}

/* 进入动画 */
.swup-animation-enter {
  opacity: 0;
  transform: translateX(20px);
}

/* 进入动画激活 */
.swup-animation-enter-active {
  opacity: 1;
  transform: translateX(0);
}

/* 退出动画 */
.swup-animation-leave {
  opacity: 1;
  transform: translateX(0);
}

/* 退出动画激活 */
.swup-animation-leave-active {
  opacity: 0;
  transform: translateX(-20px);
}
```

**过渡动画规则**：

| 页面类型          | 过渡方向         | 时长  |
| ----------------- | ---------------- | ----- |
| 首页 → 分类页     | Fade             | 300ms |
| 分类页 → 分类页   | Slide Right/Left | 400ms |
| 公开页 → 管理后台 | Fade             | 300ms |
| 管理后台内部      | None             | 0ms   |

**加载状态**：

```css
/* 加载指示器 */
.swup-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary);
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.swup-loading.is-loading {
  transform: scaleX(1);
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.01% {
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
```

**技术实现**：

- 组件：Astro 布局组件集成
- 触发：链接点击自动触发
- 排除规则：外部链接、锚点、新窗口打开不触发

---

## 4. 技术架构

### 4.1 技术栈

| 技术类别     | 技术名称                | 版本   | 用途                  | 说明                         |
| ------------ | ----------------------- | ------ | --------------------- | ---------------------------- |
| **框架**     | **Astro**               | 5.x    | 核心框架              | Islands Architecture         |
| **UI 库**    | React                   | 18.x   | Islands 交互组件      | 按需 hydration               |
| **语言**     | TypeScript              | 5.x    | 类型安全的 JavaScript | strict 模式                  |
| **样式**     | Tailwind CSS            | 4.x    | 原子化 CSS 框架       | PostCSS 集成                 |
| **认证**     | **Auth.js**             | Latest | 身份认证解决方案      | GitHub OAuth                 |
| **组件**     | Radix UI                | Latest | 无障碍 UI 组件库      | shadcn/ui 基础               |
| **图标**     | Lucide React            | Latest | 现代图标库            | -                            |
| **数据获取** | **Astro 原生**          | -      | SSG/SSR 数据获取      | 🔄 移除 SWR                  |
| **状态管理** | **Nano Stores**         | Latest | UI 状态管理           | 🔄 Astro 原生                |
| **表单**     | **Astro Actions + Zod** | Latest | 表单处理与验证        | 类型安全                     |
| **拖拽**     | **dnd-kit**             | Latest | 拖拽排序功能          | 🔄 从 @hello-pangea/dnd 升级 |
| **编辑器**   | Monaco Editor           | Latest | JSON 编辑器           | -                            |
| **搜索**     | **Fuse.js**             | Latest | 模糊搜索解决方案      | + 优化配置                   |
| **图片**     | Astro Image             | Latest | 图片优化处理          | Sharp 服务端                 |
| **动画**     | Swup                    | Latest | 页面过渡动画          |
| **滚动条**   | OverlayScrollbars       | Latest | 自定义滚动条          |
| **UI 设计**  | shadcn/ui               | Latest | UI 组件库             | React 组件库                 |
| **部署**     | Vercel/Cloudflare       | Latest | 边缘计算平台          | 混合渲染                     |

---

### 4.2 架构模式

FastNav 采用 **Astro Islands Architecture**（群岛架构）：

```
┌─────────────────────────────────────────────────────────────────┐
│                        Astro 页面                                │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  静态 HTML   │  │  React       │  │  React       │          │
│  │  (0 JS)      │  │  Island      │  │  Island      │          │
│  │              │  │  client:load │  │  client:only │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
├─────────────────────────────────────────────────────────────────┤
│                      预渲染 (SSG) + SSR                         │
└─────────────────────────────────────────────────────────────────┘
```

| 页面类型     | 渲染模式           | JavaScript           |
| ------------ | ------------------ | -------------------- |
| 首页（公开） | ISR (增量静态再生) | 仅搜索组件 (Fuse.js) |
| 分类页面     | ISR                | 仅搜索组件           |
| 管理后台     | SSR (动态)         | 完整 React           |
| 登录页       | SSG + 客户端       | 仅认证组件           |

**组件加载策略**

| 策略                  | 说明                     | 使用场景                   | 示例组件                     |
| --------------------- | ------------------------ | -------------------------- | ---------------------------- |
| `client:load`         | 页面加载时立即 hydration | 核心交互组件，需要立即可用 | SearchBar、ThemeToggle       |
| `client:idle`         | 浏览器空闲时 hydration   | 非关键交互组件，可以延迟   | DailyQuote、TimeDisplay      |
| `client:visible`      | 组件进入视口时 hydration | 滚动后才可见的组件         | WidgetContainer、ContextMenu |
| `client:media`        | 匹配媒体查询时 hydration | 特定设备才需要的组件       | 移动端菜单                   |
| `client:only="react"` | 仅客户端渲染，无SSR      | 依赖浏览器API的组件        | DragList、MonacoEditor       |

**各模块组件加载策略**

| 模块     | 组件            | 加载策略         | 说明                       |
| -------- | --------------- | ---------------- | -------------------------- |
| 导航展示 | SearchBar       | `client:load`    | 搜索功能需要立即可用       |
| 导航展示 | ThemeToggle     | `client:load`    | 主题切换影响视觉体验       |
| 导航展示 | DailyQuote      | `client:idle`    | 每日一言可延迟加载         |
| 导航展示 | TimeDisplay     | `client:idle`    | 时间显示可延迟加载         |
| 导航展示 | ContextMenu     | `client:visible` | 右键菜单在滚动后加载       |
| 卡片组件 | WidgetContainer | `client:visible` | 卡片容器在滚动后加载       |
| 卡片组件 | ClockWidget     | `client:visible` | 时钟卡片每秒刷新，按需加载 |
| 管理后台 | DragList        | `client:only`    | 拖拽列表依赖DOM操作        |
| 管理后台 | JsonEditor      | `client:only`    | Monaco编辑器仅客户端可用   |

---

### 4.3 项目结构

```
FastNav/
├── src/
│   ├── components/               # 组件目录
│   │   ├── astro/               # Astro 组件
│   │   │   ├── Search.astro         # 搜索栏
│   │   │   ├── NavigationCard.astro # 导航卡片
│   │   │   ├── Sidebar.astro       # 侧边栏
│   │   │   └── Footer.astro        # 页脚
│   │   ├── react/              # React Islands
│   │   │   ├── common/         # 通用组件
│   │   │   │   ├── SearchBar.tsx
│   │   │   │   ├── ThemeToggle.tsx
│   │   │   │   ├── TimeDisplay.tsx
│   │   │   │   ├── DailyQuote.tsx
│   │   │   │   └── ContextMenu.tsx
│   │   │   ├── widgets/        # 卡片组件
│   │   │   │   ├── CountdownWidget.tsx
│   │   │   │   ├── TextWidget.tsx
│   │   │   │   ├── ClockWidget.tsx
│   │   │   │   ├── LinkWidget.tsx
│   │   │   │   ├── WidgetContainer.tsx
│   │   │   │   └── WidgetEditor.tsx
│   │   │   ├── admin/          # 管理后台组件
│   │   │   │   ├── DragList.tsx
│   │   │   │   ├── NavigationEditor.tsx
│   │   │   │   ├── ResourceEditor.tsx
│   │   │   │   └── JsonEditor.tsx
│   │   │   └── ui/             # UI基础组件
│   │   │       ├── Button.tsx
│   │   │       ├── Card.tsx
│   │   │       ├── Dialog.tsx
│   │   │       └── Toast.tsx
│   │   └── ui/                 # shadcn/ui 组件
│   ├── layouts/
│   │   ├── Layout.astro        # 根布局
│   │   └── AdminLayout.astro   # 管理后台布局
│   ├── pages/
│   │   ├── index.astro         # 首页 (ISR)
│   │   ├── category/
│   │   │   └── [id].astro      # 分类详情页 (ISR)
│   │   ├── admin/              # 管理后台 (SSR)
│   │   │   ├── index.astro
│   │   │   ├── navigation.astro
│   │   │   ├── site.astro
│   │   │   ├── resources.astro
│   │   │   ├── widget.astro
│   │   │   └── data.astro
│   │   ├── api/                # API 端点
│   │   │   ├── navigation/
│   │   │   │   ├── index.ts    # GET/POST
│   │   │   │   ├── [id]/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── categories/
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   └── [catId].ts
│   │   │   │   │   └── items/
│   │   │   │   │       ├── index.ts
│   │   │   │   │       └── [itemId].ts
│   │   │   │   ├── reorder.ts
│   │   │   │   ├── batch.ts
│   │   │   │   ├── search.ts
│   │   │   │   ├── export.ts
│   │   │   │   └── import.ts
│   │   │   ├── resource/
│   │   │   │   ├── index.ts
│   │   │   │   ├── [id].ts
│   │   │   │   ├── sections/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── [sectionId].ts
│   │   │   │   └── check-references.ts
│   │   │   ├── site-config/
│   │   │   │   ├── index.ts
│   │   │   │   └── reset.ts
│   │   │   ├── widget/
│   │   │   │   ├── index.ts
│   │   │   │   ├── [id].ts
│   │   │   │   ├── reorder.ts
│   │   │   │   └── batch.ts
│   │   │   ├── data/
│   │   │   │   ├── export.ts
│   │   │   │   └── import.ts
│   │   │   ├── upload/
│   │   │   │   └── icon.ts
│   │   │   └── health.ts
│   │   └── auth/
│   │       ├── signin.astro
│   │       └── callback.astro
│   ├── lib/                    # 工具函数
│   │   ├── auth.ts             # Auth.js 配置
│   │   ├── github.ts           # GitHub API 封装
│   │   ├── buffer-utils.ts     # 缓冲区工具
│   │   ├── utils.ts            # 通用工具
│   │   └── retry.ts            # 重试策略
│   ├── stores/                 # Nano Stores 状态管理
│   │   ├── index.ts            # 状态树根节点
│   │   ├── search.ts           # 搜索状态
│   │   ├── theme.ts            # 主题状态
│   │   ├── navigation.ts       # 导航状态
│   │   ├── widget.ts           # 卡片状态
│   │   └── ui.ts               # UI 状态
│   ├── hooks/                  # React Hooks
│   │   ├── useSearch.ts
│   │   ├── useTheme.ts
│   │   ├── useNavigation.ts
│   │   ├── useDebounce.ts
│   │   └── useToast.ts
│   ├── types/                  # TypeScript 类型定义
│   │   ├── navigation.ts
│   │   ├── site.ts
│   │   ├── resource.ts
│   │   ├── widget.ts
│   │   └── api.ts
│   ├── constants/              # 常量定义
│   │   ├── routes.ts
│   │   ├── api.ts
│   │   └── defaults.ts
│   ├── styles/
│   │   ├── global.css          # 全局样式
│   │   └── material-design.css # MD3 设计系统
│   └── middleware.ts           # Astro Middleware
├── public/                     # 静态资源
│   ├── assets/
│   │   └── images/
│   │       ├── logos/          # 网站图标
│   │       ├── search/         # 搜索引擎图标
│   │       └── default-icon.svg
│   ├── icons/                  # SVG 图标
│   └── favicon.webp
├── tests/                      # 测试目录
│   ├── unit/                   # 单元测试
│   ├── integration/            # 集成测试
│   └── e2e/                    # 端到端测试
├── scripts/                    # 构建脚本
│   ├── build.sh
│   └── deploy.sh
├── astro.config.mjs            # Astro 配置
├── tailwind.config.mjs         # Tailwind 配置
├── tsconfig.json               # TypeScript 配置
├── package.json
├── .env.example                # 环境变量示例
└── README.md
```

---

### 4.4 数据流架构

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   用户浏览器    │ ───► │   Astro         │ ───► │   GitHub        │
│                 │      │   应用程序      │      │   仓库          │
│                 │ ◄─── │                 │ ◄─── │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
        │                        │                        │
        │                        ▼                        │
        │                ┌─────────────────┐              │
        │                │   Islands       │              │
        │                │   (React)       │              │
        │                └─────────────────┘              │
        │                        │                        │
        ▼                        ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   静态 HTML     │      │   API Endpoints  │      │   REST API      │
│   (SSG)         │      │   (SSR)         │      │   Octokit       │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

---

### 4.5 API 端点设计

Astro 框架下的 API 端点实现：

```typescript
// src/pages/api/navigation.ts
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }) => {
  const data = await getFileContent('FastNav/content/navigation.json')
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const POST: APIRoute = async ({ request }) => {
  const session = await auth(request)
  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }
  const data = await request.json()
  await validateAndSave(data, session.accessToken)
  return new Response(JSON.stringify({ success: true }))
}
```

| 接口              | 方法 | 描述         | 认证 | 渲染模式 |
| ----------------- | ---- | ------------ | ---- | -------- |
| `/api/navigation` | GET  | 获取导航数据 | 公开 | SSR      |
| `/api/navigation` | POST | 保存导航数据 | 需要 | SSR      |
| `/api/navigation` | PUT  | 更新导航数据 | 需要 | SSR      |
| `/api/site`       | GET  | 获取站点配置 | 公开 | SSR      |
| `/api/site`       | POST | 保存站点配置 | 需要 | SSR      |
| `/api/resource`   | GET  | 获取资源数据 | 公开 | SSR      |
| `/api/resource`   | POST | 添加资源     | 需要 | SSR      |

---

### 4.6 表单处理方案

采用 **Astro Actions** 处理表单提交：

```typescript
// src/pages/admin/site.astro
---
import { actions } from 'astro:actions'
import { z } from 'astro:zod'

const siteSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  theme: z.enum(['light', 'dark', 'system'])
})

export const actions = {
  saveSite: async ({ request }) => {
    const formData = await request.formData()
    const data = siteSchema.parse(Object.fromEntries(formData))
    await saveToGitHub('FastNav/content/site.json', data)
    return { success: true }
  }
}
---
<form action={actions.saveSite} method="POST">
  <!-- 表单字段 -->
</form>
```

---

### 4.7 认证方案

使用 **Auth.js** (原 NextAuth.js)：

```typescript
// src/auth.ts
import { GitHub } from 'auth-astro/providers'
import { defineConfig } from 'auth-astro'

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_SECRET,
      authorization: { params: { scope: 'repo' } },
    }),
  ],
  middleware: {
    protect: ['/admin'],
  },
})
```

| 功能       | 方案                      | 说明             |
| ---------- | ------------------------- | ---------------- |
| OAuth 登录 | Auth.js + GitHub Provider | 请求 repo 权限   |
| 会话管理   | Auth.js 内置              | JWT 存储         |
| 路由保护   | Middleware                | 保护 /admin 路径 |
| 边缘支持   | Vercel Edge / Cloudflare  | 适配器支持       |

---

## 5. 核心模块设计

### 5.1 用户认证模块

**技术实现**

- 认证框架：Auth.js (astro-auth)
- 运行环境：SSR + Edge
- 中间件保护：Middleware

### 5.2 导航展示模块

**技术实现**

- 首页：ISR增量静态再生（revalidate: 300秒）+ 客户端SWR实时同步
- 分类页面：ISR增量静态再生（revalidate: 300秒）
- 搜索：Fuse.js + React Island (`client:load`)
- 主题：React Island (`client:load`)
- 侧边栏：静态 Astro 组件

**数据更新策略**

| 场景               | 方案             | 说明                                   |
| ------------------ | ---------------- | -------------------------------------- |
| 用户访问页面       | ISR缓存（300秒） | 5分钟内使用缓存，超时后后台重新生成    |
| 管理后台修改数据   | API调用          | 实时更新GitHub仓库，同时清除ISR缓存    |
| 客户端需要最新数据 | SWR轮询（60秒）  | 每60秒检查数据更新，窗口聚焦时重新验证 |
| 数据版本回滚       | Git操作          | 通过GitHub API恢复历史版本             |

**GitHub API速率限制优化**

| 优化策略    | 说明                                |
| ----------- | ----------------------------------- |
| ISR时间调整 | 从60秒改为300秒，减少80%的API调用   |
| SWR时间调整 | 从30秒改为60秒，减少50%的客户端轮询 |
| 请求去重    | 相同请求在1秒内只发送一次           |
| 缓存共享    | 多个用户共享ISR缓存，而非各自请求   |
| 速率监控    | 记录API调用次数，接近限制时告警     |

**GitHub API限制说明**：

- 认证用户：5000次/小时
- 未认证用户：60次/小时
- 建议保留20%余量，实际使用上限4000次/小时

### 5.3 导航管理模块

**技术实现**

- 表单：React Hook Form + Zod 验证（复杂表单）
- 拖拽：dnd-kit + React Island (`client:only`)
- 数据获取：Astro SSR (实时) + 客户端 SWR (缓存，60秒)
- 乐观更新：拖拽排序时先更新UI再请求API

---

## 6. 数据存储设计

### 6.1 GitHub 数据仓库结构

项目使用 GitHub 仓库作为数据存储后端，数据文件位于仓库根目录的 `FastNav/content/` 目录下。

```
your-data-repo/
└── FastNav/
    └── content/
        ├── navigation.json      # 导航数据
        ├── site.json             # 站点配置
        ├── resource-metadata.json # 资源元数据
        ├── widget.json          # 卡片组件数据
        └── assets/               # 静态资源（图片等）
            ├── images/
            │   ├── logos/       # 网站图标
            │   └── search/      # 搜索引擎图标
            └── favicons/
```

### 6.2 数据文件格式

#### navigation.json

```json
{
  "navigationItems": [
    {
      "id": "1",
      "title": "常用推荐",
      "icon": "Star",
      "items": [
        {
          "id": "1_1",
          "title": "Google Analytics",
          "href": "https://analytics.google.com/",
          "description": "Google分析服务",
          "icon": "/assets/images/logos/analytics.webp",
          "enabled": true,
          "order": 0
        }
      ],
      "subCategories": [
        {
          "id": "1_sub1",
          "title": "搜索引擎",
          "items": [
            {
              "id": "1_sub1_1",
              "title": "Google",
              "href": "https://www.google.com",
              "description": "Google搜索",
              "enabled": true,
              "order": 0
            },
            {
              "id": "1_sub1_2",
              "title": "Bing",
              "href": "https://www.bing.com",
              "description": "Bing搜索",
              "enabled": true,
              "order": 1
            }
          ],
          "enabled": true,
          "order": 0
        }
      ],
      "enabled": true,
      "order": 0
    },
    {
      "id": "2",
      "title": "设计资源",
      "icon": "Palette",
      "items": [],
      "subCategories": [
        {
          "id": "2_sub1",
          "title": "UI设计",
          "items": [
            {
              "id": "2_sub1_1",
              "title": "Figma",
              "href": "https://www.figma.com",
              "description": "协作设计工具",
              "enabled": true,
              "order": 0
            },
            {
              "id": "2_sub1_2",
              "title": "Sketch",
              "href": "https://www.sketch.com",
              "description": "Mac设计工具",
              "enabled": true,
              "order": 1
            }
          ],
          "enabled": true,
          "order": 0
        },
        {
          "id": "2_sub2",
          "title": "图标素材",
          "items": [
            {
              "id": "2_sub2_1",
              "title": "Lucide Icons",
              "href": "https://lucide.dev",
              "description": "开源图标库",
              "enabled": true,
              "order": 0
            }
          ],
          "enabled": true,
          "order": 1
        }
      ],
      "enabled": true,
      "order": 1
    },
    {
      "id": "3",
      "title": "开发工具",
      "icon": "Code",
      "items": [
        {
          "id": "3_1",
          "title": "GitHub",
          "href": "https://github.com",
          "description": "代码托管平台",
          "enabled": true,
          "order": 0
        }
      ],
      "subCategories": [
        {
          "id": "3_sub1",
          "title": "前端框架",
          "items": [
            {
              "id": "3_sub1_1",
              "title": "React",
              "href": "https://react.dev",
              "description": "React官方文档",
              "enabled": true,
              "order": 0
            },
            {
              "id": "3_sub1_2",
              "title": "Vue",
              "href": "https://vuejs.org",
              "description": "Vue官方文档",
              "enabled": true,
              "order": 1
            },
            {
              "id": "3_sub1_3",
              "title": "Astro",
              "href": "https://astro.build",
              "description": "Astro官方文档",
              "enabled": true,
              "order": 2
            }
          ],
          "enabled": true,
          "order": 0
        }
      ],
      "enabled": true,
      "order": 2
    }
  ]
}
```

**测试数据说明**：

- 包含3个一级分类（常用推荐、设计资源、开发工具）
- 每个一级分类下有0-2个二级分类
- 一级分类下可直接包含项目（items）
- 二级分类下也包含项目（items）
- 测试数据覆盖了各种场景：有项目无子分类、有子分类无项目、同时有项目和子分类

#### site.json

```json
{
  "basic": {
    "title": "FastNav导航",
    "description": "收集国内外优秀设计网站...",
    "keywords": "设计导航,设计资源",
    "defaultCategory": "常用推荐"
  },
  "appearance": {
    "logo": "/assets/images/alogo.webp",
    "favicon": "/assets/images/favicon.webp",
    "theme": "system"
  },
  "navigation": {
    "linkTarget": "_blank"
  },
  "search": {
    "defaultEngine": "bing",
    "engines": [
      {
        "id": "bing",
        "name": "必应",
        "url": "https://www.bing.com/search?q=",
        "icon": "/assets/images/search/bing.svg"
      },
      {
        "id": "google",
        "name": "谷歌",
        "url": "https://www.google.com/search?q=",
        "icon": "/assets/images/search/google.svg"
      }
    ]
  },
  "dailyQuote": {
    "enabled": true,
    "quotes": ["今日事，今日毕", "每天进步一点点", "坚持就是胜利", "热爱可抵岁月漫长"]
  },
  "contextMenu": {
    "enabled": true
  }
}
```

#### widget.json

```json
{
  "enabled": true,
  "container": {
    "id": "widget-1",
    "title": "小组件",
    "columns": 3,
    "enabled": true
  },
  "cards": [
    {
      "id": "countdown-1",
      "type": "countdown",
      "title": "距离考试",
      "targetDate": "2026-06-15T09:00:00Z",
      "mode": "countdown",
      "backgroundColor": "#3B82F6",
      "textColor": "#FFFFFF",
      "enabled": true,
      "position": 0
    },
    {
      "id": "text-1",
      "type": "text",
      "title": "欢迎语",
      "content": "欢迎访问我的导航页",
      "fontSize": "medium",
      "textColor": "#1F2937",
      "backgroundColor": "#F3F4F6",
      "backgroundOpacity": 0.8,
      "enabled": true,
      "position": 1
    },
    {
      "id": "clock-1",
      "type": "clock",
      "title": "当前时间",
      "format": "digital",
      "showDate": true,
      "timezone": "Asia/Shanghai",
      "enabled": true,
      "position": 2
    }
  ]
}
```

---

## 7. 安全设计

### 7.1 认证安全

- GitHub OAuth 2.0 认证
- JWT 会话存储（有效期24小时）
- 访问令牌安全传递（HttpOnly Cookie）
- Middleware 路由保护（/admin路径）
- Token刷新机制（过期前1小时自动刷新）

### 7.2 API 安全

- 认证检查中间件（每个端点独立验证）
- 敏感操作权限验证
- CORS 配置（白名单机制）
- 速率限制（每IP每分钟60次请求）
- CSRF Token验证（POST/PUT/DELETE操作）

**CORS配置**：

```typescript
// astro.config.mjs
export default defineConfig({
  server: {
    cors: {
      origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:4321'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    },
  },
})
```

**速率限制配置**：

```typescript
const rateLimitConfig = {
  windowMs: 60 * 1000, // 1分钟窗口
  maxRequests: 60, // 最大请求数
  message: 'Too many requests, please try again later.',
}
```

### 7.3 数据安全

- GitHub 仓库访问控制
- 数据版本控制（Git）
- 提交历史可追溯
- 敏感数据脱敏（日志中不显示Token）
- 输入验证（Zod Schema）

---

## 8. 错误处理设计

### 8.1 全局错误边界

**Astro错误页面**：

- `src/pages/404.astro` - 404页面未找到
- `src/pages/500.astro` - 500服务器错误

**React错误边界**：

```typescript
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong</div>
    }
    return this.props.children
  }
}
```

### 8.2 统一API错误响应格式

```typescript
interface ApiErrorResponse {
  success: false
  error: {
    code: string // 错误代码
    message: string // 用户友好的错误消息
    details?: string // 开发者调试信息
    timestamp: string // 错误发生时间
  }
}

interface ApiSuccessResponse<T> {
  success: true
  data: T
}
```

**错误代码定义**：

| 错误代码           | HTTP状态码 | 描述               |
| ------------------ | ---------- | ------------------ |
| `AUTH_REQUIRED`    | 401        | 需要认证           |
| `AUTH_INVALID`     | 401        | 认证无效           |
| `AUTH_EXPIRED`     | 401        | 会话已过期         |
| `FORBIDDEN`        | 403        | 无权限访问         |
| `NOT_FOUND`        | 404        | 资源不存在         |
| `VALIDATION_ERROR` | 400        | 数据验证失败       |
| `RATE_LIMITED`     | 429        | 请求过于频繁       |
| `INTERNAL_ERROR`   | 500        | 服务器内部错误     |
| `GITHUB_API_ERROR` | 502        | GitHub API调用失败 |

### 8.3 网络请求重试策略

```typescript
interface RetryConfig {
  maxRetries: number // 最大重试次数
  baseDelay: number // 基础延迟（毫秒）
  maxDelay: number // 最大延迟（毫秒）
  backoffFactor: number // 退避因子
}

const defaultRetryConfig: RetryConfig = {
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 5000,
  backoffFactor: 2,
}

async function withRetry<T>(fn: () => Promise<T>, config: Partial<RetryConfig> = {}): Promise<T> {
  const { maxRetries, baseDelay, maxDelay, backoffFactor } = {
    ...defaultRetryConfig,
    ...config,
  }

  let lastError: Error | undefined

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error

      if (attempt < maxRetries) {
        const delay = Math.min(baseDelay * Math.pow(backoffFactor, attempt), maxDelay)
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError
}
```

### 8.4 用户友好的错误提示

**Toast通知组件**：

```typescript
import toast from 'react-hot-toast'

function showApiError(error: ApiErrorResponse['error']) {
  toast.error(error.message, {
    duration: 4000,
    position: 'top-right',
  })
}

function showSuccess(message: string) {
  toast.success(message, {
    duration: 3000,
    position: 'top-right',
  })
}
```

---

## 9. 性能优化

### 9.1 前端优化

| 优化项           | 方案                      | 收益                      |
| ---------------- | ------------------------- | ------------------------- |
| **静态页面**     | 首页 ISR (增量静态再生)   | JS 量减少 80%+            |
| **Islands 策略** | 按需 hydration            | 首屏 JS 减少              |
| **数据获取**     | Astro 原生 SSR + SWR缓存  | 实时性与性能平衡          |
| **搜索优化**     | Fuse.js 预索引 + 字段权重 | 搜索性能提升              |
| **图片优化**     | Astro Image (Sharp)       | 自动 WebP                 |
| **预获取**       | `prefetch: true`          | 导航速度提升              |
| **代码分割**     | 自动按路由分割            | 加载更快                  |
| **状态管理**     | Nano Stores               | 极小体积，跨 Islands 共享 |

### 9.2 后端优化

- API 端点 SSR 响应
- 边缘计算支持
- 请求去重
- 重试机制（指数退避）

### 9.3 构建优化

- Vite 编译器优化
- Tree Shaking
- 依赖预优化

---

## 10. 环境要求

### 10.1 开发环境

| 环境    | 要求             |
| ------- | ---------------- |
| Node.js | >= 20.0.0        |
| pnpm    | >= 8.0.0（推荐） |
| Git     | 最新版本         |

### 10.2 项目初始化

使用 Astro 官方脚手架初始化项目：

```bash
# 创建 Astro 项目
npm create astro@latest fastnav -- --template basics --install --git --typescript strict

# 进入项目目录
cd fastnav

# 安装额外依赖
pnpm add @astrojs/react @astrojs/tailwind @astrojs/auth
pnpm add react react-dom @types/react @types/react-dom
pnpm add fuse.js nano-stores
pnpm add -D tailwindcss postcss autoprefixer
```

**脚手架选项说明**：

| 选项                  | 说明                |
| --------------------- | ------------------- |
| `--template basics`   | 使用基础模板        |
| `--install`           | 自动安装依赖        |
| `--git`               | 初始化 Git 仓库     |
| `--typescript strict` | 启用严格 TypeScript |

---

## 11. 验收标准

### 11.1 功能验收

| 功能     | 验收条件                      |
| -------- | ----------------------------- |
| 用户登录 | GitHub OAuth 登录成功         |
| 导航展示 | 所有分类和项目正确展示（ISR） |
| 搜索功能 | 搜索结果准确、实时（Fuse.js） |
| 主题切换 | 主题切换正常、数据持久化      |
| 分类管理 | CRUD 操作正常（API 端点）     |
| 项目管理 | CRUD 操作正常                 |
| 拖拽排序 | 排序结果正确保存（乐观更新）  |
| 站点配置 | 配置正确应用                  |
| 错误处理 | 错误边界和Toast通知正常       |

### 11.2 性能验收

| 指标            | 目标值  | 说明             |
| --------------- | ------- | ---------------- |
| 首次加载时间    | < 1s    | 静态页面优势     |
| 首屏 JS 体积    | < 30KB  | Islands 按需加载 |
| API 响应时间    | < 300ms | 边缘计算加速     |
| Lighthouse 评分 | > 95    | Astro 静态生成   |
| 搜索响应时间    | < 100ms | 客户端优化       |

### 11.3 兼容性验收

| 浏览器  | 支持版本    |
| ------- | ----------- |
| Chrome  | 最新 2 版本 |
| Firefox | 最新 2 版本 |
| Safari  | 最新 2 版本 |
| Edge    | 最新 2 版本 |

---

## 12. 技术特点

FastNav 基于 Astro 5.x 构建，具有以下技术特点：

| 特性             | 说明                                           |
| ---------------- | ---------------------------------------------- |
| **Islands 架构** | 静态页面为主，交互组件按需加载，首屏 JS < 30KB |
| **ISR 渲染**     | 首页 ISR 增量静态再生，管理后台 SSR 动态渲染   |
| **边缘部署**     | 原生支持 Vercel/Cloudflare 边缘计算            |
| **构建速度**     | Vite 编译器，快速热更新                        |
| **类型安全**     | TypeScript strict 模式 + Zod 验证              |
| **状态管理**     | Nano Stores + SWR 组合方案                     |

---

## 13. 后续规划

以下功能为可选扩展功能，考虑到性能等因素，暂未实现，可根据实际需求后续开发。

### 13.1 个性化定制功能

| 功能               | 描述                         | 优先级 | 说明               |
| ------------------ | ---------------------------- | ------ | ------------------ |
| **自定义背景图片** | 用户可上传并设置页面背景图片 | P3     | 需考虑图片加载性能 |
| **自定义鼠标样式** | 支持自定义鼠标光标样式       | P3     | CSS cursor 自定义  |
| **鼠标点击特效**   | 点击时的粒子/波纹特效        | P3     | 可能影响性能       |
| **自定义卡片背景** | 导航卡片支持自定义背景颜色   | P2     | 可在站点配置中添加 |
| **自定义 CSS**     | 支持用户自定义 CSS 样式      | P3     | 需考虑安全性       |

### 13.2 自定义卡片背景设计

**数据模型扩展**

```typescript
interface CardStyle {
  backgroundColor?: string // 背景色
  backgroundImage?: string // 背景图片
  backgroundOpacity?: number // 背景透明度
  textColor?: string // 文字颜色
  borderRadius?: number // 圆角大小
  hoverEffect?: 'default' | 'glass' | 'lift' | 'tilt' // 悬停效果
}
```

**站点配置扩展**

```json
{
  "cardStyle": {
    "defaultBackground": "#f5f5f5",
    "enableCustomBg": true,
    "hoverEffect": "lift"
  }
}
```

### 13.3 自定义 CSS 功能

**实现方案**

- 在站点配置中添加自定义 CSS 文本域
- 渲染时将自定义 CSS 注入到页面
- 提供预设样式模板供用户选择

**预设样式模板**

| 模板名称 | 描述               |
| -------- | ------------------ |
| 简约白   | 白色背景，简洁风格 |
| 暗夜黑   | 深色背景，护眼模式 |
| 渐变彩   | 彩色渐变背景       |
| 毛玻璃   | 毛玻璃效果风格     |

---

## 14. 开发规范

### 14.1 代码提交规范

每次小阶段TODO完成后必须执行 git commit 和 git push。

**提交信息格式：**

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Type 类型：**

| 类型     | 说明      |
| -------- | --------- |
| feat     | 新功能    |
| fix      | Bug 修复  |
| docs     | 文档更新  |
| style    | 样式调整  |
| refactor | 代码重构  |
| test     | 测试相关  |
| chore    | 构建/工具 |

**提交示例：**

```bash
# 添加网络搜索栏功能
git commit -m "feat: add search engine component with bing/google switch"

# 修复分类页面重定向问题
git commit -m "fix: redirect to default category from homepage"

# 更新MD3样式系统
git commit -m "style: implement material design 3 color system"
```

### 14.2 开发工具链配置

**工具版本统一**

| 工具       | 版本      | 配置文件        |
| ---------- | --------- | --------------- |
| Node.js    | >= 22.0.0 | `.nvmrc`        |
| pnpm       | >= 9.0.0  | `package.json`  |
| TypeScript | 5.x       | `tsconfig.json` |
| Astro      | 5.x       | `package.json`  |

**`.nvmrc` 文件内容**：

```
v22.14.0
```

**`package.json` 版本锁定**：

```json
{
  "engines": {
    "node": ">=22.0.0",
    "pnpm": ">=9.0.0"
  },
  "packageManager": "pnpm@9.15.0"
}
```

**ESLint 配置**

安装依赖：

```bash
pnpm add -D eslint @astrojs/eslint-config eslint-plugin-astro
```

**`.eslintrc.json` 配置**：

```json
{
  "extends": ["@astrojs/eslint-config", "plugin:astro/recommended"],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  },
  "overrides": [
    {
      "files": ["*.astro"],
      "parser": "astro-eslint-parser"
    }
  ]
}
```

**Prettier 配置**

安装依赖：

```bash
pnpm add -D prettier prettier-plugin-astro
```

**`.prettierrc` 配置**：

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

**Husky + lint-staged 配置**

安装依赖：

```bash
pnpm add -D husky lint-staged
npx husky init
```

**`.husky/pre-commit` 文件**：

```bash
pnpm lint-staged
```

**`package.json` 添加 lint-staged 配置**：

```json
{
  "lint-staged": {
    "*.{js,ts,tsx,astro}": ["eslint --fix", "prettier --write"],
    "*.{css,md,json}": ["prettier --write"]
  }
}
```

**package.json scripts 配置**：

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "lint": "eslint . --ext .js,.ts,.tsx,.astro",
    "lint:fix": "eslint . --ext .js,.ts,.tsx,.astro --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "check": "astro check"
  }
}
```

### 14.3 文件命名规范

**组件文件**

| 文件类型   | 命名规范        | 示例                   |
| ---------- | --------------- | ---------------------- |
| Astro 组件 | PascalCase      | `NavigationCard.astro` |
| React 组件 | PascalCase      | `SearchBar.tsx`        |
| 组件测试   | 组件名.test.tsx | `SearchBar.test.tsx`   |
| 组件样式   | 组件名.css      | `SearchBar.css`        |

**页面文件**

| 文件类型 | 命名规范        | 示例                  |
| -------- | --------------- | --------------------- |
| 静态页面 | kebab-case      | `sign-in.astro`       |
| 动态路由 | `[param].astro` | `[id].astro`          |
| API 路由 | kebab-case      | `check-references.ts` |

**工具文件**

| 文件类型 | 命名规范         | 示例            |
| -------- | ---------------- | --------------- |
| 工具函数 | camelCase        | `formatDate.ts` |
| 常量文件 | camelCase        | `apiRoutes.ts`  |
| 类型定义 | PascalCase       | `Navigation.ts` |
| Hooks    | use + PascalCase | `useSearch.ts`  |
| Stores   | camelCase        | `navigation.ts` |

**样式文件**

| 文件类型 | 命名规范       | 示例                  |
| -------- | -------------- | --------------------- |
| 全局样式 | 描述性名称     | `global.css`          |
| 主题文件 | theme-模式.css | `theme-light.css`     |
| MD3 样式 | 描述性名称     | `material-design.css` |

### 14.4 组件 Props 命名规范

```typescript
// Props 接口命名：组件名 + Props
interface SearchBarProps {
  placeholder?: string
  onSearch: (query: string) => void
  engines: SearchEngine[]
}

// 事件处理函数命名：on + 动作
interface NavigationCardProps {
  onClick: () => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

// 状态命名：is + 状态 或 has + 状态
interface ButtonProps {
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
}
```

---

## 15. 附录

### 15.1 术语表

| 术语        | 定义                                     |
| ----------- | ---------------------------------------- |
| PRD         | 产品需求文档                             |
| OAuth       | 开放授权协议                             |
| SSG         | 静态网站生成                             |
| SSR         | 服务器端渲染                             |
| ISR         | 增量静态再生                             |
| SWR         | 客户端数据缓存（stale-while-revalidate） |
| Islands     | Astro Islands 架构                       |
| API Route   | Astro API 端点                           |
| Nano Stores | Astro 原生轻量状态管理                   |
| Zod         | TypeScript 数据验证库                    |

### 15.2 参考资料

- Astro 官方文档：https://docs.astro.build/
- Auth.js 文档：https://authjs.dev/
- Tailwind CSS 官方文档：https://tailwindcss.com/
- Radix UI 官方文档：https://www.radix-ui.com/
- GitHub REST API 文档：https://docs.github.com/en/rest
- shadcn/ui Astro 集成：https://ui.shadcn.com/docs/installation/astro

---

_文档版本：2.0.0_
_最后更新：2026年3月29日_
_变更说明：技术框架从 Next.js 升级为 Astro 5.x，采用 Islands Architecture 架构；UI 设计采用 Google Material Design 3 风格；新增卡片组件、网络搜索栏、分类独立页面等功能；增加后续规划；侧边栏一级二级分类层级分明；时间日期位置调整；滚动条滑块样式优化；搜索结果MD3风格；移动端卡片紧凑显示_
