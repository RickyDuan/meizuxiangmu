// 引入模块
const express=require('express');
const bodyParser=require('body-parser');
// 引入路由器;
const pro=require('./router/pro.js');
// 创建web服务器
const app=express();
// 设置端口
app.listen(8080);
// 托管静态资源
app.use( express.static('./denzhu') );
app.use( express.static('./index') );
// 使用body-parser将post请求数据解析为对象
app.use(bodyParser.urlencoded({
    extended:false
}));
// 路由器(路由)都是放在当前服务器的最后
// 挂载路由器.添加前缀/user

app.use('/pro',pro);