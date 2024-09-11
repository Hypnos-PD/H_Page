// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // 配置需要扫描 Tailwind CSS 类的文件路径
  ],
  theme: {
    extend: {}, // 可以在这里自定义扩展 Tailwind 的默认主题
  },
  plugins: [], // 如果需要插件（例如表单、排版），可以在这里添加
};
