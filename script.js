/*
Markdown Previewer - Main Script
Author: HQJ Prime
Description: Main JavaScript file for Markdown Previewer application
Version: 1.0.0
License: MIT
*/

const md = window.markdownit({
  html: false,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return md.utils.escapeHtml(str);
  }
});

// Default style configuration
const defaultStyles = {
  "background": "#ffffff",
  "text": "#24292e",
  "h1": "#1a1a1a",
  "h1Border": "2px solid #e1e4e8",
  "h2": "#2c3e50",
  "h2Border": "1px solid #e1e4e8",
  "h3": "#34495e",
  "link": "#0366d6",
  "linkHover": "#0256c7",
  "strong": "#d32f2f",
  "blockquote": "#6a737d",
  "blockquoteBorder": "4px solid #dfe2e5",
  "blockquoteBackground": "#f6f8fa",
  "code": "rgba(27, 31, 35, 0.05)",
  "codeColor": "#24292e",
  "preBackground": "#f6f8fa",
  "preBorder": "1px solid #e1e4e8",
  "hr": "#e1e4e8",
  "tableBorder": "#e1e4e8",
  "tableHeaderBackground": "#f6f8fa"
};

function loadStylesFromConfig() {
  // 尝试从外部文件加载配置
  fetch('config.json')
    .then(response => response.json())
    .then(config => {
      applyStyles(config.styles);
    })
    .catch(error => {
      console.warn('Error loading config.json, using light theme:', error.message);
      // 使用light主题作为备用
      if (themes.light) {
        applyStyles(themes.light.styles);
      } else {
        applyStyles(defaultStyles);
      }
    });
}

function applyStyles(styles) {
  // 调试：记录传入的样式配置
  console.log('[Debug] Applying styles:', styles);
  
  // 移除现有的样式元素
  const existingStyle = document.getElementById('markdown-styles');
  if (existingStyle) {
    console.log('[Debug] Removing existing style element');
    existingStyle.remove();
  }
  
  // 创建新的样式元素
  const styleElement = document.createElement('style');
  styleElement.id = 'markdown-styles';
  styleElement.textContent = `
    /* 重置CSS变量，确保我们的样式优先级最高 */
    .markdown-body {
      --color-fg-default: ${styles.text} !important;
      --color-fg-muted: ${styles.text} !important;
      --color-fg-subtle: ${styles.text} !important;
      --color-canvas-default: ${styles.background} !important;
      --color-canvas-subtle: ${styles.background} !important;
      --color-border-default: ${styles.tableBorder} !important;
      --color-border-muted: ${styles.tableBorder} !important;
      --color-heading-primary: ${styles.h1} !important;
      --color-heading-secondary: ${styles.h2} !important;
      --color-heading-tertiary: ${styles.h3} !important;
      color: ${styles.text} !important;
      background-color: ${styles.background} !important;
    }
    
    /* 标题样式 - 确保最高优先级 */
    .markdown-body h1 {
      color: ${styles.h1} !important;
      border-bottom: ${styles.h1Border} !important;
      padding-bottom: 0.3em !important;
    }
    .markdown-body h2 {
      color: ${styles.h2} !important;
      border-bottom: ${styles.h2Border} !important;
      padding-bottom: 0.3em !important;
    }
    .markdown-body h3 {
      color: ${styles.h3} !important;
    }
    
    /* 更具体的标题选择器 */
    .markdown-body h1,
    .markdown-body h2,
    .markdown-body h3 {
      color: inherit !important;
    }
    
    .markdown-body h1 {
      color: ${styles.h1} !important;
    }
    .markdown-body h2 {
      color: ${styles.h2} !important;
    }
    .markdown-body h3 {
      color: ${styles.h3} !important;
    }
    
    /* 直接子元素选择器 */
    .markdown-body > h1 {
      color: ${styles.h1} !important;
    }
    .markdown-body > h2 {
      color: ${styles.h2} !important;
    }
    .markdown-body > h3 {
      color: ${styles.h3} !important;
    }
    
    /* 覆盖GitHub的heading样式 */
    .markdown-body h1 {
      --color-fg-default: ${styles.h1} !important;
      color: ${styles.h1} !important;
    }
    .markdown-body h2 {
      --color-fg-default: ${styles.h2} !important;
      color: ${styles.h2} !important;
    }
    .markdown-body h3 {
      --color-fg-default: ${styles.h3} !important;
      color: ${styles.h3} !important;
    }
    
    /* 其他元素样式 */
    .markdown-body a {
      color: ${styles.link} !important;
      text-decoration: none !important;
    }
    .markdown-body a:hover {
      text-decoration: underline !important;
      color: ${styles.linkHover} !important;
    }
    .markdown-body strong {
      color: ${styles.strong} !important;
      font-weight: 600 !important;
    }
    .markdown-body blockquote {
      color: ${styles.blockquote} !important;
      border-left: ${styles.blockquoteBorder} !important;
      background-color: ${styles.blockquoteBackground} !important;
      padding: 16px !important;
      margin: 0 0 16px 0 !important;
    }
    .markdown-body blockquote p {
      margin: 0 !important;
    }
    .markdown-body code {
      background-color: ${styles.code} !important;
      color: ${styles.codeColor} !important;
      padding: 0.2em 0.4em !important;
      border-radius: 3px !important;
    }
    .markdown-body pre {
      background-color: ${styles.preBackground} !important;
      border: ${styles.preBorder} !important;
      border-radius: 6px !important;
    }
    .markdown-body pre code {
      background-color: transparent !important;
      color: inherit !important;
      padding: 0 !important;
    }
    .markdown-body hr {
      background-color: ${styles.hr} !important;
      height: 0.25em !important;
    }
    .markdown-body table {
      border-color: ${styles.tableBorder} !important;
    }
    .markdown-body th {
      background-color: ${styles.tableHeaderBackground} !important;
      border-color: ${styles.tableBorder} !important;
    }
    .markdown-body td {
      border-color: ${styles.tableBorder} !important;
    }
    .markdown-body img {
      max-width: 100% !important;
      border-radius: 4px !important;
    }
  `;
  
  // 添加样式元素到文档头部
  document.head.appendChild(styleElement);
  
  // 调试：验证样式是否成功应用
  console.log('[Debug] Style element added to head');
  
  // 检查CSS变量是否正确设置
  const markdownBody = document.querySelector('.markdown-body');
  if (markdownBody) {
    const computedStyle = window.getComputedStyle(markdownBody);
    console.log('[Debug] CSS variables after applying styles:');
    console.log('  --color-fg-default:', computedStyle.getPropertyValue('--color-fg-default'));
    console.log('  --color-canvas-default:', computedStyle.getPropertyValue('--color-canvas-default'));
    console.log('  --color-heading-primary:', computedStyle.getPropertyValue('--color-heading-primary'));
  } else {
    console.warn('[Debug] .markdown-body element not found');
  }
}

const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const fileInfo = document.getElementById('fileInfo');
const dropArea = document.getElementById('dropArea');

function renderMarkdown(content, fileName) {
  const html = md.render(content);
  const clean = DOMPurify.sanitize(html);
  preview.innerHTML = clean;
  if (fileName) {
    fileInfo.textContent = `当前文件: ${fileName}`;
    updateFileInfoColor();
  }
}

function updateFileInfoColor() {
  const themeSelect = document.getElementById('themeSelect');
  const selectedTheme = themeSelect.value;
  if (selectedTheme && themes[selectedTheme]) {
    const isDark = themes[selectedTheme].isDark;
    if (isDark) {
      fileInfo.style.color = '#FFE6F2';
      fileInfo.style.backgroundColor = 'rgba(30, 30, 30, 0.8)';
    } else {
      fileInfo.style.color = '#666666';
      fileInfo.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
  } else {
    fileInfo.style.color = '#666666';
    fileInfo.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }
}

function handleFile(file) {
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const content = e.target.result;
      renderMarkdown(content, file.name);
      // 缓存文件内容
      cacheFile(file.name, content);
    };
    reader.readAsText(file, 'utf-8');
  }
}

// Cache file content (auto-managed version)
function cacheFile(fileName, content) {
  try {
    const cacheData = {
      fileName: fileName,
      content: content,
      timestamp: Date.now(),
      size: content.length
    };
    
    // 检查单个文件大小限制（2MB）
    if (JSON.stringify(cacheData).length > 2 * 1024 * 1024) {
      console.warn('File too large, exceeding cache limit');
      showCacheNotification('File too large, exceeding cache limit');
      return;
    }
    
    // Get existing caches
    let allCaches = JSON.parse(localStorage.getItem('markdownCaches') || '[]');
    
    // Remove old cache with the same name
    allCaches = allCaches.filter(cache => cache.fileName !== fileName);
    
    // Add new cache to the beginning
    allCaches.unshift(cacheData);
    
    // Limit cache count (maximum 3)
    if (allCaches.length > 3) {
      allCaches = allCaches.slice(0, 3);
    }
    
    // Check total cache size (maximum 5MB)
    let totalSize = 0;
    allCaches.forEach(cache => {
      totalSize += JSON.stringify(cache).length;
    });
    
    // If total size exceeds limit, remove oldest cache
    while (totalSize > 5 * 1024 * 1024 && allCaches.length > 1) {
      allCaches.pop(); // Remove oldest cache
      // Recalculate total size
      totalSize = 0;
      allCaches.forEach(cache => {
        totalSize += JSON.stringify(cache).length;
      });
    }
    
    // Save updated caches
    localStorage.setItem('markdownCaches', JSON.stringify(allCaches));
    console.log('File cached:', fileName);
    // Show notification only on first cache to avoid frequent interruptions
    if (allCaches.length === 1) {
      showCacheNotification('File cached: ' + fileName);
    }
  } catch (error) {
    console.error('Failed to cache file:', error);
  }
}

// Check cache (auto-managed version)
function checkCache() {
  try {
    const allCaches = JSON.parse(localStorage.getItem('markdownCaches') || '[]');
    
    // 清理过期缓存
    const now = Date.now();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
    const validCaches = allCaches.filter(cache => cache.timestamp >= sevenDaysAgo);
    
    // If there are expired caches, update cache
    if (validCaches.length < allCaches.length) {
      localStorage.setItem('markdownCaches', JSON.stringify(validCaches));
      console.log('Cleared expired cache');
    }
    
    // If there are valid caches, load the latest one
    if (validCaches.length > 0) {
      const latestCache = validCaches[0];
      console.log('Loading cached file:', latestCache.fileName);
      renderMarkdown(latestCache.content, latestCache.fileName);
      showCacheNotification('Loaded cached file: ' + latestCache.fileName);
    }
  } catch (error) {
    console.error('Failed to check cache:', error);
  }
}

// Show cache notification
function showCacheNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 100);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

fileInput.addEventListener('change', function(e) {
  handleFile(e.target.files[0]);
});

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  document.body.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  document.body.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  dropArea.classList.add('active');
}

function unhighlight() {
  dropArea.classList.remove('active');
}

document.body.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
}

// Load styles on page load
window.addEventListener('DOMContentLoaded', function() {
  loadThemes();
  loadStylesFromConfig();
  // Check cache
  setTimeout(checkCache, 1000); // Delay 1 second to ensure themes are loaded
});

// Theme-related variables
let themes = {};

// Load themes
function loadThemes() {
  const themeFiles = ['light.json', 'dark.json', 'github.json', 'dracula.json', 'business-blue.json', 'nature-green.json', 'modern-gray-orange.json', 'dark-pink.json'];
  const themeSelect = document.getElementById('themeSelect');
  
  themeSelect.innerHTML = '<option value="">Loading...</option>';
  
  Promise.all(
    themeFiles.map(file => {
      return fetch(`themes/${file}`)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to load ${file}`);
          return response.json();
        })
        .then(theme => {
          themes[file.replace('.json', '')] = theme;
        })
        .catch(error => {
          console.warn(`Error loading theme ${file}:`, error.message);
        });
    })
  ).then(() => {
    populateThemeSelector();
  });
}

// 填充配色方案选择器
function populateThemeSelector() {
  const themeSelect = document.getElementById('themeSelect');
  themeSelect.innerHTML = '';
  
  // 添加其他配色方案
  Object.entries(themes).forEach(([key, theme]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = theme.name;
    themeSelect.appendChild(option);
  });
  
  // 添加事件监听器
  themeSelect.addEventListener('change', function() {
    const selectedTheme = this.value;
    if (themes[selectedTheme]) {
      applyStyles(themes[selectedTheme].styles);
      updateFileInfoColor();
    }
  });
}
