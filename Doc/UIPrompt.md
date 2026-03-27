# UIUX 设计风格深度提示词指南

> 本文档包含 **6 种精选 UI 设计风格** 的可复用提示词，可用于指导 AI 生成高质量的 UI 界面代码。

---

## 📑 目录

- [适用场景指南](#适用场景指南)
- [一、Google Design（Material Design 3）⭐ 推荐](#一google-designmaterial-design-3-推荐)
- [二、Dark Mode Excellence（深色模式）](#二dark-mode-excellence深色模式)
- [三、HarmonyOS（鸿蒙风格）](#三harmonyos鸿蒙风格)
- [四、Glassmorphism（毛玻璃风格）](#四glassmorphism毛玻璃风格)
- [五、Liquid Glass（苹果液态玻璃）](#五liquid-glass苹果液态玻璃)
- [六、小米澎湃OS风格](#六小米澎湃os风格)
- [通用提示词模板](#通用提示词模板)
- [最佳实践建议](#最佳实践建议)
- [圆角设计策略（实战经验）](#圆角设计策略实战经验)

---

## 适用场景指南

| 设计类型 | 推荐风格 | 说明 |
|----------|----------|------|
| **网站/Web应用** | Google MD3 | 组件丰富、规范完善、适合复杂交互 |
| **手机桌面/APP** | 鸿蒙/iPhone风格 | 符合移动端交互习惯 |
| **管理系统/后台** | Google MD3、Dark Mode | 专业、高效、易于维护 |
| **创意/品牌网站** | Glassmorphism、Aurora UI | 视觉冲击力强 |
| **智能家居/设备** | 小米澎湃OS、鸿蒙 | 全场景适配 |

---

## 一、Google Design（Material Design 3）⭐ 推荐

### 风格特点

- **动态色彩系统**：基于主色自动生成 Primary/Secondary/Tertiary/Error 完整色彩
- **圆润设计语言**：大圆角（28px 按钮、16px 卡片、12px 输入框）
- **Surface 层级系统**：5 级表面（Surface 0-4），通过叠加色创建深度
- **丰富组件库**：Filled/Tonal/Outlined/Elevated 4 种按钮变体
- **排版系统**：Display/Headline/Title/Body/Label 5 级字体层次
- **动效系统**：标准/加速/减速 3 种缓动曲线

### 适用场景

- 企业级网站
- SaaS 产品
- 管理后台
- 数据可视化平台

### 完整提示词

```
请创建一个 Google Material Design 3 风格的管理界面，要求：

【字体系统】
- 主字体：Google Sans（或 system-ui 作为备选）
- 等宽字体：Roboto Mono（用于订单号、金额等）

【色彩系统 - Material You】
Primary 系列：
- Primary: #6750A4
- On-Primary: #FFFFFF
- Primary-Container: #EADDFF
- On-Primary-Container: #21005D

Secondary 系列：
- Secondary: #625B71
- On-Secondary: #FFFFFF
- Secondary-Container: #E8DEF8
- On-Secondary-Container: #1D192B

Tertiary 系列：
- Tertiary: #7D5260
- On-Tertiary: #FFFFFF
- Tertiary-Container: #FFD8E4
- On-Tertiary-Container: #31111D

Error 系列：
- Error: #B3261E
- On-Error: #FFFFFF
- Error-Container: #F9DEDC
- On-Error-Container: #410E0B

Surface 层级系统：
- Surface: #FFFBFE
- Surface-Dim: #DED8E1
- Surface-Bright: #FFFBFE
- Surface-Container-Lowest: #FFFFFF
- Surface-Container-Low: #F7F2FA
- Surface-Container: #F3EDF7
- Surface-Container-High: #ECE6F0
- Surface-Container-Highest: #E6E0E9
- Surface-Variant: #E7E0EC

文本和边框：
- On-Surface: #1C1B1F
- On-Surface-Variant: #49454F
- Outline: #79747E
- Outline-Variant: #CAC4D0

【圆角系统】
- 按钮/Chip：9999px (border-radius-full)
- 卡片：16px (border-radius-lg)
- 输入框：4px (border-radius-xs)
- 图标按钮：50% (完全圆形)
- FAB：16px (border-radius-lg)
- Extended FAB：28px (border-radius-xl)

【阴影系统 - Elevation】
- Elevation 0: 无阴影
- Elevation 1: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)
- Elevation 2: 0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)
- Elevation 3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)
- Elevation 4: 0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px rgba(0,0,0,0.3)
- 卡片 hover：Elevation 1 → Elevation 2

【图标系统】
- 使用 Material Symbols Outlined
- 尺寸：18px（按钮内）、20px（小图标）、24px（标准）

【布局结构】
1. 导航抽屉（280px）：
   - Logo 区域：40px 渐变图标 + 标题
   - 导航菜单：分组，active 状态使用 Secondary-Container
   - 分隔线：1px，Outline-Variant 颜色
   - 用户卡片：头像 + 姓名 + 邮箱

2. 顶部应用栏（64px）：
   - 左侧：菜单按钮 + 页面标题
   - 中间：搜索栏（Surface-Container-High 背景，圆角 9999px）
   - 右侧：主题切换 + 通知（带红点）+ 用户头像

3. 欢迎卡片：
   - 渐变背景：Primary-Container → Surface-Container
   - 圆角 28px，内边距 32px
   - 包含问候语和快捷操作按钮

4. 统计卡片（4 列网格）：
   - 图标容器：48px，圆角 16px，使用对应 Container 色
   - 数值：28px
   - 趋势标签：圆角 9999px，成功/失败颜色
   - 迷你图表：SVG 折线 + 渐变填充

5. 主内容区（2:1 网格）：
   - 数据表格（2 列）
   - 图表卡片（1 列，跨 2 行）
   - 团队成员（2 列）
   - 快捷操作（1 列）
   - 表单卡片（2 列）

【按钮系统 - 5 种变体】
1. Filled Button：
   - 背景：Primary
   - 文字：On-Primary
   - 高度：40px，内边距：0 24px
   - Hover：box-shadow Elevation 1
   - 禁用：背景 12% 透明度

2. Tonal Button：
   - 背景：Secondary-Container
   - 文字：On-Secondary-Container
   - Hover：box-shadow Elevation 1

3. Outlined Button：
   - 背景：透明
   - 边框：1px Outline
   - 文字：Primary
   - Hover：背景 8% Primary

4. Text Button：
   - 背景：无
   - 文字：Primary
   - 内边距：0 12px
   - Hover：背景 8% Primary

5. Elevated Button：
   - 背景：Surface-Container-Low
   - 文字：Primary
   - 初始阴影：Elevation 1
   - Hover：Elevation 2

【FAB 系统】
- 标准 FAB：56x56px，圆角 16px，Elevation 3
- Extended FAB：自适应宽度，圆角 28px，图标+文字
- 背景色：对应 Container 色
- Hover：Elevation 4

【Icon Button 系统 - 圆形图标按钮】⭐ 实用

> 谷歌网站常用的圆形功能按钮，适合工具栏、操作区、卡片操作等场景

基础规格：
- 尺寸：40x40px（标准触摸目标）
- 图标尺寸：24x24px
- 形状：完全圆形（border-radius: 50%）
- 触摸热区：40px（含4px透明边距）

4种变体：

1. Standard Icon Button（标准图标按钮）：
   - 背景：transparent
   - 图标颜色：On-Surface-Variant
   - Hover：背景 8% On-Surface-Variant
   - 用途：通用功能按钮、导航按钮

2. Filled Icon Button（填充图标按钮）：
   - 背景：Primary
   - 图标颜色：On-Primary
   - Hover：box-shadow Elevation 1
   - 用途：重要操作、强调按钮

3. Tonal Icon Button（色调图标按钮）：
   - 背景：Secondary-Container
   - 图标颜色：On-Secondary-Container
   - Hover：box-shadow Elevation 1
   - 用途：次要操作、中等强调

4. Outlined Icon Button（边框图标按钮）：
   - 背景：transparent
   - 边框：1px Outline
   - 图标颜色：On-Surface-Variant
   - Hover：背景 8% On-Surface-Variant
   - 用途：需要边框区分的操作按钮

HTML 结构示例：
```html
<!-- Standard Icon Button -->
<button class="icon-btn">
  <span class="material-symbols-outlined">edit</span>
</button>

<!-- Filled Icon Button -->
<button class="icon-btn icon-btn-filled">
  <span class="material-symbols-outlined">favorite</span>
</button>

<!-- Tonal Icon Button -->
<button class="icon-btn icon-btn-tonal">
  <span class="material-symbols-outlined">delete</span>
</button>

<!-- Outlined Icon Button -->
<button class="icon-btn icon-btn-outlined">
  <span class="material-symbols-outlined">settings</span>
</button>
```

CSS 实现：
```css
.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.2, 0, 0, 1);
  position: relative;
  overflow: hidden;
}

.icon-btn .material-symbols-outlined {
  font-size: 24px;
  color: var(--md-on-surface-variant);
}

.icon-btn:hover {
  background: rgba(73, 69, 79, 0.08);
}

.icon-btn-filled {
  background: var(--md-primary);
}

.icon-btn-filled .material-symbols-outlined {
  color: var(--md-on-primary);
}

.icon-btn-filled:hover {
  box-shadow: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15);
}

.icon-btn-tonal {
  background: var(--md-secondary-container);
}

.icon-btn-tonal .material-symbols-outlined {
  color: var(--md-on-secondary-container);
}

.icon-btn-outlined {
  border: 1px solid var(--md-outline);
}

.icon-btn:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
```

应用场景：
- 顶部栏：菜单、搜索、通知、设置、用户头像
- 表格操作列：查看、编辑、删除、更多
- 卡片操作：收藏、分享、下载、关闭
- 媒体控制：播放、暂停、上一曲、下一曲
- 编辑器工具栏：加粗、斜体、下划线、链接

状态变体：
- Default：默认状态
- Hover：鼠标悬停（背景变化）
- Focused：焦点状态（outline: 2px Primary）
- Pressed：按下状态（scale(0.95)）
- Disabled：禁用状态（opacity: 0.38）

带徽章的图标按钮：
```html
<button class="icon-btn">
  <span class="material-symbols-outlined">notifications</span>
  <span class="icon-badge">3</span>
</button>
```

```css
.icon-btn {
  position: relative;
}

.icon-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  background: var(--md-error);
  color: var(--md-on-error);
  font-size: 10px;
  font-weight: 500;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

【Chip 系统】
- 成功 Chip：rgba(52,199,89,0.12) 背景，#1B873B 文字
- 警告 Chip：rgba(255,149,0,0.12) 背景，#9E6A03 文字
- 错误 Chip：Error-Container 背景
- Tonal Chip：Secondary-Container 背景
- Outlined Chip：透明背景 + 1px Outline 边框
- Filter Chip：可切换 active 状态

【表单组件】
1. 复选框（Checkbox）：
   - 18x18px，圆角 2px
   - 默认：2px On-Surface-Variant 边框
   - 选中：Primary 背景 + 白色勾号（45 度旋转）

2. 单选按钮（Radio）：
   - 20x20px，圆形
   - 默认：2px On-Surface-Variant 边框
   - 选中：Primary 边框 + 10px Primary 圆点

3. 开关（Switch）：
   - 轨道：52x32px，圆角 16px
   - 默认：Surface-Variant 背景 + Outline 边框
   - 选中：Primary 背景 + 白色滑块（20px）
   - 滑块位置：left 6px → left 26px

4. 输入框（TextField）：
   - Filled：底部 2px 边框，Surface-Container-Highest 背景
   - Outlined：四周 1px Outline 边框，透明背景
   - 标签：顶部 8px，12px 字号，Primary 颜色
   - 聚焦：边框变 Primary，宽度变 2px

【表格系统】
- 表头：Surface-Container 背景，12px 字号，大写
- 行 hover：Surface-Container 背景
- 复选框列：48px 宽度
- 操作列：100px 宽度
- 订单号：Roboto Mono 字体，Primary 颜色

【图表系统】
- 柱状图：圆角 4px 顶部，Primary 颜色
- 上月数据：Surface-Variant 颜色
- Tooltip：On-Surface 背景，Surface 文字，圆角 4px
- 分段按钮：Surface-Variant 背景，active 状态 Secondary-Container

【Snackbar 系统】
- 背景：On-Surface
- 文字：Surface
- 圆角：4px
- 位置：底部居中
- 动画：从下方滑入
- 自动消失：3 秒

【排版系统】
Display:
- Display Small: 36px, 400, 44px, 0

Headline:
- Headline Medium: 28px, 400, 36px, 0

Title:
- Title Large: 22px, 500, 28px, 0
- Title Small: 14px, 500, 20px, 0.1px

Body:
- Body Large: 16px, 400, 24px, 0.5px
- Body Medium: 14px, 400, 20px, 0.25px
- Body Small: 12px, 400, 16px, 0.4px

Label:
- Label Large: 14px, 500, 20px, 0.1px
- Label Medium: 12px, 500, 16px, 0.5px
- Label Small: 11px, 500, 16px, 0.5px

【动效系统】
缓动曲线：
- Standard: cubic-bezier(0.2, 0, 0, 1)
- Emphasized: cubic-bezier(0.2, 0, 0, 1)
- Emphasized-Decelerate: cubic-bezier(0.05, 0.7, 0.1, 1)
- Emphasized-Accelerate: cubic-bezier(0.3, 0, 0.8, 0.15)

时长：
- Short: 200ms
- Medium: 400ms
- Long: 600ms

【交互要求】
1. 按钮：点击涟漪效果（ripple animation）
2. 卡片：hover 阴影加深 Elevation 1 → 2
3. 表格行：hover 背景变 Surface-Container
4. 图表柱子：hover 显示 tooltip + 亮度提升
5. Snackbar：3 秒自动消失，可手动关闭
6. 统计卡片：入场依次淡入上移，间隔 100ms
7. 图表：柱子从底部生长动画
8. 团队成员：从左侧滑入动画
9. 搜索栏：focus 时 box-shadow Primary 色
10. 主题切换：平滑过渡

【响应式断点】
- 1200px 以下：统计卡片 2 列，主内容单列
- 1024px 以下：导航抽屉折叠为 80px 图标模式
- 768px 以下：导航抽屉隐藏，顶部栏堆叠，搜索栏全宽
```

### 深色主题变量

```css
/* Dark Theme */
.dark-theme {
    --md-surface: #1C1B1F;
    --md-surface-dim: #141218;
    --md-surface-bright: #3B383E;
    --md-surface-container-lowest: #0F0D13;
    --md-surface-container-low: #1D1B20;
    --md-surface-container: #211F26;
    --md-surface-container-high: #2B2930;
    --md-surface-container-highest: #36343B;
    --md-on-surface: #E6E1E5;
    --md-on-surface-variant: #CAC4D0;
    --md-outline: #938F99;
    --md-outline-variant: #49454F;
}
```

### 资源推荐

| 资源 | 链接 |
|------|------|
| Theme Builder | https://m3.material.io/theme-builder |
| Material Symbols | https://fonts.google.com/icons |
| 官方文档 | https://m3.material.io |
| Figma 组件库 | Material Design 3 Kit |

### 组件清单

| 组件 | 变体 | 说明 |
|------|------|------|
| Button | Filled/Tonal/Outlined/Text/Elevated | 5 种按钮变体 |
| FAB | Small/Medium/Large/Extended | 4 种 FAB |
| Card | Elevated/Filled/Outlined | 3 种卡片 |
| Chip | Assist/Filter/Input/Suggestion | 4 种芯片 |
| TextField | Filled/Outlined | 2 种输入框 |
| Checkbox | - | 复选框 |
| Radio | - | 单选按钮 |
| Switch | - | 开关 |
| Snackbar | - | 消息提示 |
| Dialog | Basic/FullScreen | 2 种对话框 |
| Bottom Sheet | Standard/Modal | 2 种底部抽屉 |
| Navigation | Drawer/Rail/Bar | 3 种导航 |
| Segmented Button | - | 分段按钮 |
| Progress | Linear/Circular | 2 种进度条 |

---

## 二、Dark Mode Excellence（深色模式）

### 风格特点

- 深灰而非纯黑的背景色（#121212 ~ #1a1a2e）
- 略微去饱和的强调色
- 高对比度但护眼的文本色
- 精致的阴影层次

### 适用场景

- 开发者工具
- 数据分析平台
- 深夜使用的产品
- 专业级软件

### 完整提示词

```
请创建一个 Dark Mode Excellence 风格的管理后台界面，要求：

【色彩系统】
- 背景色：主背景 #0a0a0f，次级背景 #121218，卡片背景 #1e1e2a
- 强调色：主色 #bb86fc，辅助色 #03dac6，警告色 #cf6679
- 文本色：主文本 rgba(255,255,255,0.95)，次文本 rgba(255,255,255,0.7)，弱文本 rgba(255,255,255,0.45)
- 边框色：rgba(255,255,255,0.06) ~ rgba(255,255,255,0.15)

【视觉效果】
- 背景添加微妙的渐变光球装饰（紫色+青色），使用 filter: blur(100px)
- 添加噪点纹理覆盖层，opacity: 0.02
- 卡片使用多层阴影：0 4px 12px rgba(0,0,0,0.4)
- 统计卡片包含迷你趋势折线图

【布局结构】
- 左侧固定侧边栏（280px），包含 logo、导航菜单（分组）、用户卡片
- 顶部固定导航栏，包含面包屑、搜索框（支持 ⌘K 快捷键）、通知按钮、用户头像
- 欢迎区域显示问候语和快捷操作按钮
- 统计卡片行（4 列），每张卡片包含图标、数值、标签、趋势、迷你图表
- 主内容区使用 2:1 网格布局，包含图表卡片、数据表格、团队成员、快捷操作

【组件要求】
- 统计卡片：hover 时抬升 4px，阴影加深
- 数据表格：支持复选框全选、状态徽章、操作按钮
- 图表柱状图：悬停显示数值 tooltip，柱子渐变色
- 团队成员：头像+在线状态指示器+状态文本
- 按钮：主要按钮使用渐变背景，次要按钮使用 surface 背景，支持禁用状态
- 进度条：支持 success/warning/danger 颜色变体
- Toast 通知：从右下角滑入，支持 4 种类型，3 秒自动消失

【动效要求】
- 统计卡片入场：依次淡入上移，间隔 100ms
- 图表柱状图：从底部生长动画
- 团队成员：从左侧滑入
- 页面切换：平滑过渡

【响应式】
- 1200px 以下：统计卡片 2 列，内容区单列
- 1024px 以下：侧边栏折叠为图标模式
- 768px 以下：侧边栏隐藏，顶部栏堆叠
```

---

## 三、HarmonyOS（鸿蒙风格）

### 风格特点

- 轻拟物美学：柔和渐变与适度光影
- 全场景一致性：手机/平板/车机/智慧屏统一
- 沉浸视觉保护：避免大面积高亮浅色
- 轻量交互：简化手势，降低学习成本

### 适用场景

- 手机 APP 界面
- 平板应用
- 智能设备界面
- 全场景应用

### 完整提示词

```
请创建一个 HarmonyOS 风格的管理界面，要求：

【色彩系统】
- 背景色：#f5f6fa（浅灰蓝）
- 卡片背景：#ffffff
- 主色：#007AFF（iOS 蓝），辅助色：#5856D6（紫）
- 状态色：成功 #34C759，警告 #FF9500，危险 #FF3B30
- 文本色：主文本 #1d1d1f，次文本 #6e6e73，弱文本 #aeaeb2

【视觉效果】
- 轻拟物风格：图标使用柔和渐变背景（如 linear-gradient(135deg, #007AFF, #5856D6)）
- 圆角设计：卡片 20px，按钮 12px，图标 10px
- 阴影轻柔：0 4px 12px rgba(0,0,0,0.06)
- 统计卡片使用线性渐变图标背景

【布局结构】
- 左侧侧边栏（240px），深色背景（#1a1a2e）
- 顶部栏：页面标题+副标题、搜索框、通知按钮
- 统计卡片行（4 列），包含图标、数值、标签、趋势、迷你图表
- 内容区 2 列布局：快捷功能、最近活动、团队成员、快速设置

【组件要求】
- 导航菜单：图标+文字，active 状态使用渐变背景
- 统计卡片：图标使用渐变背景圆角方块，包含 sparkline 折线图
- 环形进度：使用 SVG circle 实现，支持渐变色
- 快捷功能：4 宫格按钮，hover 时背景变化+轻微上移
- 活动时间线：图标+标题+时间，不同活动类型不同图标颜色
- 团队网格：头像+姓名+状态指示器（在线/离开/离线）
- 设置项：图标+标签+开关，开关使用圆角滑块设计
- 按钮：主要按钮渐变背景，次要按钮灰色背景，文字按钮无背景

【动效要求】
- 卡片入场：依次淡入上移，cubic-bezier(0.4, 0, 0.2, 1)
- 点击反馈：scale(0.98)，150ms 恢复
- 开关切换：滑块平滑移动
- Toast 通知：从下方弹出，圆角卡片风格

【响应式】
- 1200px 以下：统计卡片 2 列
- 768px 以下：侧边栏隐藏，快捷功能 2 列
```

---

## 四、Glassmorphism（毛玻璃风格）

### 风格特点

- 半透明背景 + 背景模糊
- 微妙的玻璃边框
- 渐变色彩背景
- 层叠的玻璃卡片

### 适用场景

- 创意品牌网站
- 作品集展示
- 高端产品页面
- 娱乐/社交应用

### 完整提示词

```
请创建一个 Glassmorphism 风格的管理界面，要求：

【背景设计】
- 深色渐变背景：linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)
- 添加 5 个漂浮的渐变光球（使用 border-radius: 50% + filter: blur(60px) + opacity: 0.6）
  - 紫色球 #667eea → #764ba2，尺寸 500px，位置左上
  - 粉色球 #f093fb → #f5576c，尺寸 400px，位置右中
  - 蓝色球 #4facfe → #00f2fe，尺寸 350px，位置左下
  - 绿色球 #43e97b → #38f9d7，尺寸 300px，位置中间
  - 橙色球 #fa709a → #fee140，尺寸 250px，位置右下
- 光球添加浮动动画：20s infinite ease-in-out

【玻璃效果类】
- .glass-panel：background: rgba(255,255,255,0.15)，backdrop-filter: blur(20px)，border: 1px solid rgba(255,255,255,0.2)
- .glass-surface：background: rgba(255,255,255,0.1)，backdrop-filter: blur(10px)
- .glass-inset：background: rgba(0,0,0,0.2)，backdrop-filter: blur(10px)
- .glass-pill：圆角 980px 的玻璃药丸按钮

【布局结构】
- 左侧玻璃侧边栏（260px）
- 顶部玻璃导航栏
- 统计卡片行（4 列），每张卡片包含玻璃图标、数值、趋势、迷你图表
- 内容区 2:1 布局：图表、团队、订单、快捷操作

【组件要求】
- 导航项：active 状态使用渐变背景（紫→粉）
- 统计图标：52px 方形，圆角 14px，渐变色背景
- 图表柱状图：渐变色（紫→粉），悬停显示 tooltip
- 团队成员：头像渐变色，在线状态绿色指示器
- 订单列表：玻璃卡片内嵌，状态徽章颜色区分
- 快捷操作：2x2 网格，图标+文字，hover 上移效果
- 按钮：主要按钮渐变背景，边框按钮透明+边框，幽灵按钮全透明

【动效要求】
- 鼠标跟踪：光球跟随鼠标移动，不同球不同速度
- 卡片入场：依次淡入上移
- 图表动画：柱子从底部生长
- Toast 通知：玻璃质感，左侧彩色边框，滑入动画

【响应式】
- 1200px 以下：统计卡片 2 列，内容单列
- 768px 以下：侧边栏隐藏
```

---

## 五、Liquid Glass（苹果液态玻璃）

### 风格特点

- 苹果最新设计语言
- 实时光影响应
- 高级饱和度增强
- 精致的层级感

### 适用场景

- 苹果生态应用
- 高端产品官网
- 设计工具界面
- iOS/macOS 风格应用

### 完整提示词

```
请创建一个 Liquid Glass 风格的管理界面，要求：

【背景设计】
- 浅色渐变背景：linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)
- 添加 3 个光晕效果（使用 filter: blur(100px) + opacity: 0.5）
  - 蓝色光晕 rgba(0,122,255,0.3)，600px，右上
  - 紫色光晕 rgba(88,86,214,0.25)，500px，左下
  - 绿色光晕 rgba(52,199,89,0.2)，400px，中间
- 光晕添加浮动动画：20s infinite ease-in-out

【液态玻璃效果类】
- .liquid-panel：
  - background: rgba(255,255,255,0.72)
  - backdrop-filter: blur(40px) saturate(180%)
  - border: 1px solid rgba(255,255,255,0.18)
  - box-shadow: 0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)
  - 添加顶部反射线：::before 伪元素，1px 渐变线
- .liquid-surface：半透明表面，带轻微阴影
- .liquid-inset：内凹效果，inset 阴影

【布局结构】
- 左侧液态玻璃侧边栏（260px）
- 顶部液态玻璃导航栏
- 统计卡片行（4 列），hover 时抬升+阴影加深
- 内容区 2:1 布局

【色彩系统】
- 主色：#007AFF
- 辅助色：#5856D6
- 成功：#34C759
- 警告：#FF9500
- 危险：#FF3B30
- 文本：#1d1d1f 主色，#6e6e73 次色，#aeaeb2 弱色

【组件要求】
- 统计卡片：hover 效果 translateY(-4px) scale(1.01)，阴影加深
- 图表柱状图：渐变色（蓝→紫），hover 时亮度提升+阴影
- 团队成员：头像圆形，在线状态边框 2px 白色
- 快捷操作：2x2 网格，hover 时背景变蓝+上移
- 按钮：主要按钮蓝色实色+阴影，次要按钮液态玻璃背景
- 搜索框：液态玻璃背景，focus 时边框变蓝

【动效要求】
- 光晕跟踪：跟随鼠标移动，不同光晕不同速度
- 卡片入场：cubic-bezier(0.25, 0.46, 0.45, 0.94) 缓动
- 柱状图：从底部生长，带弹性效果
- Toast 通知：液态玻璃质感，左侧彩色边框

【响应式】
- 1200px 以下：统计卡片 2 列
- 768px 以下：侧边栏隐藏，顶部栏堆叠
```

---

## 六、小米澎湃OS风格

### 风格特点

- 液态玻璃视觉
- 生命感动效
- 控制中心设计
- 柔性框架适配

### 适用场景

- 智能家居控制
- 设备管理界面
- 全场景应用
- IoT 产品

### 完整提示词

```
请创建一个小米澎湃OS风格的管理界面，要求：

【背景设计】
- 深色背景：#0d1117
- 添加 3 个波浪效果（filter: blur(80px) + opacity: 0.3）
  - 橙色波浪 rgba(255,106,0,0.4)，500px，右上
  - 蓝色波浪 rgba(88,166,255,0.3)，400px，左下
  - 绿色波浪 rgba(74,222,128,0.25)，350px，中间
- 波浪添加浮动动画：25s infinite ease-in-out

【玻璃效果类】
- .glass：background: rgba(255,255,255,0.06)，backdrop-filter: blur(20px)，border: 1px solid rgba(255,255,255,0.08)
- .glass-inset：background: rgba(0,0,0,0.2)，backdrop-filter: blur(10px)
- .glass-btn：background: rgba(255,255,255,0.08)，backdrop-filter: blur(10px)

【色彩系统】
- 主色：#ff6a00（小米橙），辅助色：#ff9500
- 蓝色：#58a6ff
- 成功：#4ade80
- 警告：#fbbf24
- 危险：#f87171
- 文本：白色主色，rgba(255,255,255,0.7) 次色，rgba(255,255,255,0.4) 弱色

【布局结构】
- 左侧玻璃侧边栏（240px）
- 顶部玻璃导航栏
- 控制中心卡片（6 按钮网格：WiFi/蓝牙/静音/旋转/护眼/飞行）
- 统计卡片行（4 列），包含趋势折线图
- 内容区 2 列：快捷功能、最近活动、团队成员、设置

【组件要求】
- 控制中心按钮：
  - 6 个按钮，3x2 网格
  - 默认状态：玻璃背景，图标+文字
  - 激活状态：橙色渐变背景（#ff6a00 → #ff9500）
  - 点击切换激活状态
- 统计卡片：玻璃背景，图标渐变色，趋势标签（绿色上升/红色下降）
- 团队网格：4 列，头像+姓名，状态指示器
- 快捷功能：4 列网格，橙色渐变图标背景
- 设置项：玻璃卡片内嵌，开关使用橙色激活色
- 按钮：主要按钮橙色渐变，次要按钮玻璃背景，边框按钮透明+边框

【动效要求】
- 波浪跟踪：跟随鼠标移动
- 控制按钮：点击时 scale(0.95)，150ms 恢复
- 卡片入场：依次淡入上移
- Toast 通知：玻璃质感，左侧彩色边框

【响应式】
- 1200px 以下：统计卡片 2 列，控制中心 3 列
- 768px 以下：侧边栏隐藏，控制中心 2 列
```

---

## 通用提示词模板

### 快速生成模板

```
请创建一个[风格名称]风格的[界面类型]，要求：

【色彩】[主色]、[辅助色]、[背景色]、[文本色]

【视觉效果】
- [效果1]
- [效果2]

【布局】
- [布局结构描述]

【组件】
- [组件1]: [样式要求]
- [组件2]: [样式要求]

【动效】
- [动效1]
- [动效2]

【响应式】
- [断点1]: [适配方案]
- [断点2]: [适配方案]
```

### 组件扩展提示词

```
请为上述界面添加以下组件：

1. 模态框（Modal）
- [样式要求]
- [动画效果]

2. 下拉菜单（Dropdown）
- [样式要求]
- [动画效果]

3. 工具提示（Tooltip）
- [样式要求]
- [触发方式]

4. 骨架屏（Skeleton）
- [样式要求]
- [加载动画]

5. 无限滚动列表
- [样式要求]
- [加载状态]
```

### 主题切换提示词

```
请为上述界面添加主题切换功能：

1. 浅色主题
- 背景色: [色值]
- 文本色: [色值]

2. 深色主题
- 背景色: [色值]
- 文本色: [色值]

3. 跟随系统
- 使用 prefers-color-scheme 媒体查询

要求：
- 使用 CSS 变量实现
- 切换时平滑过渡
- 保存用户选择到 localStorage
```

---

## 最佳实践建议

### 1. 色彩使用

- 主色用于重要操作和强调
- 辅助色用于次要信息
- 状态色用于反馈（成功/警告/错误/信息）
- 背景色使用相近色阶，避免强烈对比

### 2. 间距系统

- 使用 8px 基础单位
- 组件内边距：12px、16px、20px、24px
- 组件间距：8px、12px、16px、20px、24px

### 3. 圆角系统

- 小圆角：8px（按钮、输入框）
- 中圆角：12px-14px（卡片、图标）
- 大圆角：16px-20px（容器、侧边栏）
- 超大圆角：24px（模态框、浮层）
- 胶囊：9999px（徽章、标签）

### 4. 阴影系统

- 轻阴影：0 1px 3px rgba(0,0,0,0.1)
- 中阴影：0 4px 12px rgba(0,0,0,0.15)
- 重阴影：0 8px 24px rgba(0,0,0,0.2)
- 超重阴影：0 16px 48px rgba(0,0,0,0.25)

### 5. 动效原则

- 进入动画：300-500ms，ease-out
- 退出动画：200-300ms，ease-in
- 交互反馈：150-200ms，ease
- 使用 cubic-bezier(0.4, 0, 0.2, 1) 作为默认缓动

### 6. 响应式断点

- 移动端：< 768px
- 平板：768px - 1024px
- 桌面：1024px - 1440px
- 大屏：> 1440px

---

## 圆角设计策略（实战经验）

> 以下建议来自实际项目经验，可有效避免圆角滥用导致的问题。

### 🎯 核心原则

**"简单页面多圆角，复杂页面分层次"**

### 📋 具体策略

#### 1. 按产品类型选择

| 产品类型 | 圆角策略 | 推荐风格 |
|----------|----------|----------|
| **网站/Web应用** | 大量使用圆角 | Google MD3 |
| **手机APP** | 适度圆角 | 鸿蒙/iPhone风格 |
| **管理后台** | 混合使用 | Google MD3 + 传统 |

#### 2. 按页面复杂度选择

| 页面复杂度 | 圆角策略 | 原因 |
|------------|----------|------|
| **简单页面** | 全面使用圆角 | 组件少，视觉舒适 |
| **复杂页面** | 核心区域圆角，边缘传统 | 避免间距过大、审美疲劳 |

#### 3. 圆角使用地图

```
┌─────────────────────────────────────┐
│  边缘区域：传统设计（小圆角/直角）   │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │   核心区域：圆角设计         │   │
│  │   （大圆角、柔和阴影）        │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

#### 4. 具体示例

**简单页面（如登录页、着陆页）：**
- 卡片：16-24px 圆角
- 输入框：12px 圆角
- 按钮：28px 圆角（胶囊形）
- 整体风格：圆润、友好

**复杂页面（如管理后台、仪表盘）：**
- 侧边栏：小圆角（8px）或直角
- 顶部栏：小圆角（8px）
- 核心卡片：中圆角（16px）
- 数据表格：无圆角或极小圆角
- 操作按钮：胶囊形（28px）
- 整体风格：专业、高效

#### 5. 常见问题及解决方案

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 组件间距过大 | 全部大圆角 | 边缘区域减小圆角 |
| 审圆角疲劳 | 圆角过多 | 核心区域用圆角，其他区域传统 |
| 视觉混乱 | 圆角不统一 | 建立圆角层级系统 |
| 空间浪费 | 大圆角+内边距 | 使用紧凑布局 |

#### 6. 圆角层级系统建议

```css
/* 推荐的圆角系统 */
:root {
    /* 传统/边缘区域 */
    --radius-xs: 4px;      /* 输入框、小元素 */
    --radius-sm: 8px;      /* 侧边栏、顶部栏 */
    
    /* 核心/重点区域 */
    --radius-md: 12px;     /* 普通卡片 */
    --radius-lg: 16px;     /* 重要卡片 */
    --radius-xl: 24px;     /* 模态框、弹窗 */
    
    /* 特殊元素 */
    --radius-full: 9999px; /* 按钮、徽章、标签 */
}
```

#### 7. 决策流程图

```
开始
  │
  ├─ 页面是否简单？（组件<5个）
  │     │
  │     ├─ 是 → 全面使用圆角
  │     │
  │     └─ 否 → 继续判断
  │
  ├─ 核心区域是否明确？
  │     │
  │     ├─ 是 → 核心区域圆角，边缘传统
  │     │
  │     └─ 否 → 使用中等圆角（12-16px）
  │
  └─ 结束
```

---

## 文件命名规范

```
[风格名称]/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # 交互脚本
└── assets/         # 资源文件夹（可选）
    ├── icons/      # 图标
    ├── images/     # 图片
    └── fonts/      # 字体
```

---

*最后更新：2026年3月23日*
