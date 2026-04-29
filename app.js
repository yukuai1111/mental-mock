const express = require('express');
const path = require('path');

const app = express();

// 托管 Vue 打包后的静态文件
app.use(express.static(path.join(__dirname, 'dist')));

// 前端路由回退：任何非静态文件的请求都返回 index.html，解决刷新 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Render 会自动分配端口，本地测试默认用 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ 项目启动成功`);
});