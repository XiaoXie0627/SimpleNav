# SVG 图标设计提示词

> 用于生成导航网站分类图标的详细设计规范和提示词

---

## 设计风格概述

这组 SVG 图标采用**现代简约线条风格（Modern Line Style）**，专为导航网站分类设计，具有以下核心特征：

- **线框风格**：使用 stroke 描边，无填充（fill="none"）
- **圆润线条**：统一使用圆角端点（stroke-linecap="round"）和圆角连接（stroke-linejoin="round"）
- **几何化设计**：基于基础几何形状构建，易于识别
- **颜色可变性**：使用 `currentColor` 实现颜色随父元素动态变化
- **统一尺寸**：标准 24x24 viewBox

---

## 基础模板

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- 图标内容 -->
</svg>
```

---

## 提示词公式

### 核心提示词（直接复制使用）

```
Create a minimalist line-style SVG icon for a navigation website category.
Use 24x24 viewBox, stroke-only design (no fill), stroke-width="2",
stroke-linecap="round", stroke-linejoin="round".
Use "currentColor" for stroke color to enable CSS color inheritance.
The icon should represent [CATEGORY_NAME] - [DESCRIPTION].

Design principles:
- Simple, clean geometric shapes
- Modern and recognizable at small sizes
- Consistent line weight throughout
- No fills, outline only
- White space is important for visual balance
```

### 中文版提示词

```
创建一个极简线条风格的SVG图标，用于导航网站分类。
使用24x24 viewBox，纯描边设计（无填充），stroke-width="2"，
stroke-linecap="round"，stroke-linejoin="round"。
使用"currentColor"作为描边颜色以支持CSS颜色继承。
图标应代表[分类名称] - [描述]。

设计原则：
- 简洁干净的几何形状
- 在小尺寸下也能识别
- 线条粗细保持一致
- 仅使用轮廓，无填充
- 留白对视觉平衡很重要
```

---

## 分类图标设计参考

### 1. 效率工具 (Productivity)

**提示词**：

```
Icon for productivity tools category - represents task management,
efficiency, work organization. Use a clipboard, checkmark, or document layout.
```

**参考结构**：

- 矩形框架（代表文档/面板）
- 内部水平线（代表内容/任务列表）
- 简洁的线条组合

```xml
<svg ...><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>
```

---

### 2. 学习资源 (Learning)

**提示词**：

```
Icon for learning/education category - represents knowledge, study,
online courses. Use an open book or graduation cap.
```

**参考结构**：

- 书本轮廓（右侧开口）
- 翻页效果

```xml
<svg ...><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
```

---

### 3. 云服务 (Cloud)

**提示词**：

```
Icon for cloud services category - represents cloud computing,
hosting, server infrastructure. Use cloud shape or server rack.
```

**参考结构**：

- 云朵形状（现代简约风格）
- 可选：多层叠加形成云朵

```xml
<svg ...><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
```

---

### 4. 多媒体 (Media)

**提示词**：

```
Icon for media/multimedia category - represents images, video,
photo editing. Use camera lens, image frame, or display screen.
```

**参考结构**：

- 矩形画面框
- 内部圆形（代表镜头/播放按钮）
- 底部线条（可选）

```xml
<svg ...><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
```

---

### 5. API/数据 (API)

**提示词**：

```
Icon for API/data category - represents data transfer,
integration, code endpoints. Use arrows, nodes, or code brackets.
```

**参考结构**：

- 双向箭头
- 节点连接线

```xml
<svg ...><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
```

---

### 6. 域名/主机 (Hosting)

**提示词**：

```
Icon for hosting/domain category - represents servers,
domain registration, web hosting. Use server rack or database symbols.
```

**参考结构**：

- 多层矩形（代表服务器机架）
- 指示灯点

```xml
<svg ...><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
```

---

### 7. 配色工具 (Colors)

**提示词**：

```
Icon for color tools category - represents color palette,
design colors, gradients. Use color dots or palette arrangement.
```

**参考结构**：

- 多个彩色圆点
- 围绕中心排列

```xml
<svg ...><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="18.5" r="2.5"/><circle cx="8.5" cy="18.5" r="2.5"/></svg>
```

---

### 8. 字体 (Fonts)

**提示词**：

```
Icon for fonts/typography category - represents text,
typeface, letter design. Use "A" letter or text lines.
```

**参考结构**：

- 大写字母 A 或类似
- 竖线/横线组合

```xml
<svg ...><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
```

---

### 9. 图床/存储 (Storage)

**提示词**：

```
Icon for storage/image hosting category - represents
cloud upload, file storage, image sharing. Use upload arrow and container.
```

**参考结构**：

- 上传箭头
- 底部托盘/盒子

```xml
<svg ...><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
```

---

### 10. 社区 (Community)

**提示词**：

```
Icon for community/social category - represents team,
social network, discussion. Use people/group symbols.
```

**参考结构**：

- 多个人形轮廓
- 聚集在一起

```xml
<svg ...><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
```

---

### 11. 工具 (Tools)

**提示词**：

```
Icon for tools/utilities category - represents developer tools,
utility functions, wrench or gear. Use wrench, hammer, or settings gear.
```

**参考结构**：

- 扳手形状
- 齿轮元素

```xml
<svg ...><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
```

---

## 常用SVG元素参考

### 基础形状

| 元素                     | 用途           |
| ------------------------ | -------------- |
| `<rect>`                 | 矩形、方框     |
| `<circle>`               | 圆形、圆点     |
| `<ellipse>`              | 椭圆           |
| `<line>`                 | 直线           |
| `<polyline>`             | 折线           |
| `<polygon>`              | 多边形         |
| `<path>`                 | 任意路径       |
| `<path d="M x y">`       | 移动到坐标     |
| `<path d="L x y">`       | 直线到坐标     |
| `<path d="A rx ry ...">` | 弧线           |
| `<path d="Q x1 y1 x y">` | 二次贝塞尔曲线 |

### 常用路径指令

```
M = Move to (移动)
L = Line to (画线)
H = Horizontal line (水平线)
V = Vertical line (垂直线)
A = Arc (圆弧)
Q = Quadratic curve (二次贝塞尔)
C = Cubic curve (三次贝塞尔)
Z = Close path (闭合路径)
```

### 常用组合

```xml
<!-- 正方形 -->
<rect x="3" y="3" width="18" height="18" rx="2"/>

<!-- 圆形 -->
<circle cx="12" cy="12" r="10"/>

<!-- 带圆角的矩形 -->
<rect x="2" y="2" width="20" height="20" rx="2"/>

<!-- 线条 -->
<line x1="3" x2="21" y1="12" y2="12"/>

<!-- 折线 -->
<polyline points="16 18 22 12 16 6"/>

<!-- 点 -->
<circle cx="6" cy="6" r="1"/>
```

---

## 配色建议

### 语义颜色（可供参考）

```
效率工具: #10B981 (绿色)
学习资源: #8B5CF6 (紫色)
云服务:   #3B82F6 (蓝色)
多媒体:   #F59E0B (橙色)
API/数据: #06B6D4 (青色)
域名主机: #6366F1 (靛蓝)
配色工具: #EC4899 (粉色)
字体:    #F97316 (橙色)
图床存储: #14B8A6 (Teal)
社区:    #EF4444 (红色)
工具:    #78716C (石头灰)
```

### 深色/浅色主题适配

图标使用 `currentColor`，会自动适配：

- 浅色背景：显示为深色
- 深色背景：显示为浅色
- 可通过 CSS `color` 属性自定义

---

## 快速生成技巧

### 1. 使用 AI 辅助生成

将以下模板中的 `[CATEGORY]` 和 `[DESCRIPTION]` 替换为你的分类信息：

```
Create a minimalist 24x24 SVG icon for "[CATEGORY]" category.
The category is about [DESCRIPTION].

Requirements:
- Line-style only (stroke, no fill)
- stroke-width="2"
- stroke-linecap="round"
- stroke-linejoin="round"
- Use geometric shapes
- Clean and recognizable
- Use "currentColor" for stroke
```

### 2. 参考现有图标库

- [Lucide Icons](https://lucide.dev) - 相同设计风格
- [Heroicons](https://heroicons.com)
- [Phosphor Icons](https://phosphoricons.com)

### 3. 使用 SVG 编辑工具

- [SVGOMG](https://jakearchibald.github.io/svgomg/) - 优化 SVG
- [Boxy SVG](https://boxy-svg.com) - 在线编辑器

---

## 验证清单

生成图标后，检查是否符合以下标准：

- [ ] viewBox="0 0 24 24"
- [ ] stroke-width="2"
- [ ] stroke-linecap="round"
- [ ] stroke-linejoin="round"
- [ ] fill="none"
- [ ] stroke="currentColor"
- [ ] 在小尺寸（16px）下清晰可辨
- [ ] 颜色可随父元素变化
- [ ] 文件大小 < 1KB
- [ ] 无冗余属性

---

## 示例：创建新分类图标

假设要创建一个 "AI工具" 分类的图标：

### Step 1: 确定设计方向

- 关键词：AI、人工智能、大脑、神经网络、机器人

### Step 2: 选择基础形状

- 大脑轮廓 + 神经网络节点
- 或：芯片 + 电路

### Step 3: 编写提示词

```
Create a minimalist line-style SVG icon for "AI Tools" category.
Represents artificial intelligence, machine learning, neural networks.
Use a brain shape or chip with circuit lines.
24x24 viewBox, stroke-only, currentColor.
```

### Step 4: 生成的 SVG

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
  <circle cx="7.5" cy="14.5" r="1.5"/>
  <circle cx="16.5" cy="14.5" r="1.5"/>
  <line x1="7.5" y1="17" x2="7.5" y2="17.01"/>
  <line x1="16.5" y1="17" x2="16.5" y2="17.01"/>
</svg>
```

---

## 总结

这套设计规范的核心要点：

1. **统一尺寸**：24x24 viewBox
2. **线条风格**：stroke描边，无填充
3. **圆润处理**：stroke-linecap/linejoin = round
4. **颜色继承**：使用 currentColor
5. **几何简化**：简单形状，易于识别
6. **留白意识**：不要过度填充

遵循这些原则，可以快速创建风格一致的导航分类图标。
