# Markdown 预览器

一个简单、轻量级的基于浏览器的 Markdown 预览工具，支持通过文件导入方式预览 Markdown 文档和代码高亮。

## 功能特点

- ✅ Markdown 文件导入预览
- ✅ 支持文件拖放功能
- ✅ GitHub 风格的渲染样式
- ✅ 支持代码高亮
- ✅ 安全的 HTML 处理（使用 DOMPurify）
- ✅ 响应式设计，适配不同屏幕尺寸
- ✅ 支持基本 Markdown 语法：
  - 标题
  - 粗体和斜体
  - 列表（有序和无序）
  - 代码块
  - 链接
  - 图片
- ✅ 支持多种文件格式：.md、.markdown、.txt
- ✅ 多主题配色方案：
  - Light Theme（明亮风格）
  - Dark Theme（深色风格）
  - GitHub Theme（GitHub官方风格）
  - Dracula Theme（Dracula风格）
  - Business Blue Theme（经典商务蓝）
  - Nature Green Theme（清新自然绿）
  - Modern Gray+Orange Theme（现代简约灰+橙）
  - Dark Pink Theme（深色粉色）
- ✅ 主题自动切换功能
- ✅ 文件缓存功能（自动保存和加载最近的文件）

## 技术栈

- **前端框架**：纯 HTML5 + CSS3 + JavaScript
- **Markdown 解析**：[markdown-it](https://github.com/markdown-it/markdown-it)
- **代码高亮**：[highlight.js](https://github.com/highlightjs/highlight.js)
- **安全处理**：[DOMPurify](https://github.com/cure53/DOMPurify)
- **样式**：[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## 快速开始

### 方法一：直接打开

1. 下载或克隆本项目
2. 直接在浏览器中打开 `index.html` 文件
3. **导入文件的两种方式**：
   - 点击右上角的 "导入文件" 按钮，选择要预览的 Markdown 文件
   - 直接将 Markdown 文件拖放到网页上
4. 页面会自动显示渲染结果

### 方法二：本地服务器

如果需要在本地服务器环境中运行（推荐，以避免某些浏览器的本地文件访问限制）：

```bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js（需要安装 http-server）
npm install -g http-server
http-server -p 8000
```

然后在浏览器中访问 `http://localhost:8000`，按照上述步骤导入 Markdown 文件

## 构建项目

本项目提供了多种构建方式，您可以选择最适合您的方式：

### 方法一：使用构建脚本（推荐）

项目根目录提供了 `build.js` 脚本，支持跨平台构建：

```bash
# 使用 Node.js 运行构建脚本
node build.js
```

### 方法二：使用 npm 命令（推荐）

如果您安装了 Node.js，可以使用 npm 命令：

```bash
# 安装依赖（如果需要）
npm install

# 运行构建
npm run build
```

### 方法三：手动构建

#### Windows 系统

1. 打开 PowerShell 或命令提示符
2. 进入项目根目录
3. 执行以下命令：

```powershell
# 创建 dist 目录和 lib 子目录
mkdir dist
mkdir dist\lib

# 复制必要的文件
Copy-Item index.html dist\index.html
Copy-Item style.css dist\style.css
Copy-Item script.js dist\script.js
Copy-Item config.json dist\config.json
Copy-Item lib\* dist\lib\
```

#### Linux/macOS 系统

1. 打开终端
2. 进入项目根目录
3. 执行以下命令：

```bash
# 创建 dist 目录和 lib 子目录
mkdir -p dist/lib

# 复制必要的文件
cp index.html dist/
cp style.css dist/
cp script.js dist/
cp config.json dist/
cp -r lib/* dist/lib/
```

## 部署和运行

### 部署到服务器

1. 将生成的 `dist` 目录完整复制到服务器的 Web 根目录
2. 确保服务器配置正确，允许静态文件访问

### 运行部署后的应用

1. 通过浏览器访问服务器上的对应 URL
2. 例如：`http://your-server.com/path/to/dist`
3. 点击 "导入文件" 按钮或拖放 Markdown 文件开始预览

### 本地测试部署版本

您也可以在本地测试部署版本：

```bash
# 进入 dist 目录
cd dist

# 启动本地服务器
python -m http.server 8080
```

然后在浏览器中访问 `http://localhost:8080`

## 使用示例

### 导入文件预览

1. **通过按钮导入**：
   
   - 点击右上角的 "导入文件" 按钮
   - 在弹出的文件选择对话框中选择 Markdown 文件
   - 页面会自动渲染并显示预览结果
2. **通过拖放导入**：
   
   - 打开文件管理器，找到要预览的 Markdown 文件
   - 点击文件并拖动到浏览器中的预览器页面
   - 当看到 "请释放鼠标以导入文件" 的提示时，释放鼠标
   - 页面会自动渲染并显示预览结果

### 示例 Markdown 文件内容

您可以创建包含以下内容的 Markdown 文件，然后通过本工具导入预览：

```markdown
# 标题 1
## 标题 2

这是**粗体**文本，这是*斜体*文本。

这是[链接](https://example.com)。

### 代码高亮

```js
console.log('Hello, world!');
```

```python
def hello():
    print('Hello, Python!')
```

### 列表

- 无序列表项 1
- 无序列表项 2
  - 嵌套列表项

1. 有序列表项 1
2. 有序列表项 2

### 图片

![示例图片](https://via.placeholder.com/400x200?text=Markdown+Image)

```
## 项目结构
```

md-preview/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript 脚本文件
├── config.json         # 样式配置文件
├── test.md             # 测试用的 Markdown 文件
├── lib/                # 本地依赖库目录
│   ├── github-markdown.min.css
│   ├── github.min.css
│   ├── highlight.min.js
│   ├── markdown-it.min.js
│   └── purify.min.js
├── themes/             # 配色方案目录
│   ├── light.json              # 明亮风格配色方案
│   ├── dark.json               # 深色风格配色方案
│   ├── github.json             # GitHub官方风格配色方案
│   ├── dracula.json            # Dracula风格配色方案
│   ├── business-blue.json      # 经典商务蓝配色方案
│   ├── nature-green.json       # 清新自然绿配色方案
│   ├── modern-gray-orange.json # 现代简约灰+橙配色方案
│   └── dark-pink.json          # 深色粉色配色方案
├── dist/               # 构建输出目录（部署版本）
├── README.md           # 项目说明文件（中文）
├── README_EN.md        # 项目说明文件（英文）
└── LICENSE             # 许可证文件

```
## 自定义配置

### 更改代码高亮主题

在 `index.html` 文件中，修改 highlight.js 的样式链接：

```html
<!-- 默认使用 GitHub 风格 -->
<link rel="stylesheet" href="lib/github.min.css">

<!-- 可以替换为其他主题，例如： -->
<!-- <link rel="stylesheet" href="lib/atom-one-dark.min.css"> -->
<!-- <link rel="stylesheet" href="lib/vs.min.css"> -->
```

### 配置 markdown-it 选项

在 `script.js` 文件中，修改 markdown-it 的配置：

```javascript
const md = window.markdownit({
  html: false,        // 禁用原始 HTML（更安全）
  linkify: true,      // 自动链接 URL
  typographer: true,  // 启用排版优化
  highlight: function (str, lang) {
    // 代码高亮逻辑
  }
});
```

### 自定义样式配色方案

本项目支持通过两种方式自定义样式配色方案：

#### 1. 通过 config.json 文件（全局默认样式）

编辑 `config.json` 文件可以修改全局默认样式：

```json
{
  "styles": {
    "background": "#ffffff",      // 背景色
    "text": "#24292e",           // 正文文本颜色
    "h1": "#1a1a1a",             // 一级标题颜色
    "h1Border": "2px solid #e1e4e8",  // 一级标题边框
    "h2": "#2c3e50",             // 二级标题颜色
    "h2Border": "1px solid #e1e4e8",  // 二级标题边框
    "h3": "#34495e",             // 三级标题颜色
    "link": "#0366d6",            // 链接颜色
    "linkHover": "#0256c7",       // 链接悬停颜色
    "strong": "#d32f2f",          // 强调文本颜色
    "blockquote": "#6a737d",      // 引用文本颜色
    "blockquoteBorder": "4px solid #dfe2e5",  // 引用边框
    "blockquoteBackground": "#f6f8fa",  // 引用背景色
    "code": "rgba(27, 31, 35, 0.05)",  // 行内代码背景色
    "codeColor": "#24292e",       // 行内代码文本颜色
    "preBackground": "#f6f8fa",   // 代码块背景色
    "preBorder": "1px solid #e1e4e8",  // 代码块边框
    "hr": "#e1e4e8",              // 分隔线颜色
    "tableBorder": "#e1e4e8",     // 表格边框颜色
    "tableHeaderBackground": "#f6f8fa"  // 表格表头背景色
  }
}
```

#### 2. 通过 themes 目录添加新的配色方案

在 `themes` 目录中创建新的 JSON 文件来添加自定义配色方案，例如 `custom-theme.json`：

```json
{
  "name": "Custom Theme",
  "description": "自定义配色方案",
  "isDark": false,
  "styles": {
    "background": "#ffffff",
    "text": "#333333",
    "h1": "#2c3e50",
    "h1Border": "2px solid #e1e4e8",
    "h2": "#34495e",
    "h2Border": "1px solid #e1e4e8",
    "h3": "#7f8c8d",
    "link": "#3498db",
    "linkHover": "#2980b9",
    "strong": "#e74c3c",
    "blockquote": "#95a5a6",
    "blockquoteBorder": "4px solid #dfe2e5",
    "blockquoteBackground": "#f8f9fa",
    "code": "rgba(27, 31, 35, 0.05)",
    "codeColor": "#24292e",
    "preBackground": "#f6f8fa",
    "preBorder": "1px solid #e1e4e8",
    "hr": "#e1e4e8",
    "tableBorder": "#e1e4e8",
    "tableHeaderBackground": "#f6f8fa"
  }
}
```

创建后，新的配色方案会自动出现在主题选择下拉列表中。

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 致谢

- [markdown-it](https://github.com/markdown-it/markdown-it) - 强大的 Markdown 解析库
- [highlight.js](https://github.com/highlightjs/highlight.js) - 优秀的代码高亮库
- [DOMPurify](https://github.com/cure53/DOMPurify) - 安全的 HTML 清理库
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) - GitHub 风格的 Markdown 样式

---

**享受 Markdown 编写的乐趣！** 🎉
