/*
Markdown Previewer - Build Script
Author: HQJ Prime
Description: Build script for Markdown Previewer application
Version: 1.0.0
License: MIT
*/

const fs = require('fs');
const path = require('path');

function build() {
  console.log('Building project...');
  
  // Define directory structure
  const distDir = path.join(__dirname, 'dist');
  const libDir = path.join(distDir, 'lib');
  
  // Create directories
  try {
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
      console.log('Created dist directory successfully');
    }
    
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
      console.log('Created dist/lib directory successfully');
    }
  } catch (error) {
    console.error('Failed to create directory:', error.message);
    process.exit(1);
  }
  
  // Copy files
  const filesToCopy = [
    'index.html',
    'style.css',
    'script.js',
    'config.json'
  ];
  
  // Copy themes directory
  try {
    const sourceThemesDir = path.join(__dirname, 'themes');
    const destThemesDir = path.join(distDir, 'themes');
    
    if (fs.existsSync(sourceThemesDir)) {
      if (!fs.existsSync(destThemesDir)) {
        fs.mkdirSync(destThemesDir, { recursive: true });
        console.log('Created dist/themes directory successfully');
      }
      
      const themeFiles = fs.readdirSync(sourceThemesDir);
      themeFiles.forEach(file => {
        if (file.endsWith('.json')) {
          const srcPath = path.join(sourceThemesDir, file);
          const destPath = path.join(destThemesDir, file);
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied themes/${file} successfully`);
        }
      });
    }
  } catch (error) {
    console.error('Failed to copy themes directory:', error.message);
  }
  
  filesToCopy.forEach(file => {
    try {
      const srcPath = path.join(__dirname, file);
      const destPath = path.join(distDir, file);
      
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} successfully`);
      } else {
        console.warn(`File ${file} does not exist, skipping copy`);
      }
    } catch (error) {
      console.error(`Failed to copy ${file}:`, error.message);
    }
  });
  
  // Copy all files in lib directory
  try {
    const sourceLibDir = path.join(__dirname, 'lib');
    if (fs.existsSync(sourceLibDir)) {
      const libFiles = fs.readdirSync(sourceLibDir);
      libFiles.forEach(file => {
        const srcPath = path.join(sourceLibDir, file);
        const destPath = path.join(libDir, file);
        
        if (fs.statSync(srcPath).isFile()) {
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied lib/${file} successfully`);
        }
      });
    } else {
      console.warn('lib directory does not exist, skipping copy');
    }
  } catch (error) {
    console.error('Failed to copy lib directory files:', error.message);
  }
  
  console.log('\nBuild completed!');
  console.log('dist directory has been generated, ready for deployment to server');
  console.log('\nDeployment steps:');
  console.log('1. Copy the entire dist directory to the server\'s web root directory');
  console.log('2. Access the corresponding URL on the server through a browser');
  console.log('3. Start using the Markdown preview functionality');
}

// 执行构建
if (require.main === module) {
  build();
}

module.exports = build;
