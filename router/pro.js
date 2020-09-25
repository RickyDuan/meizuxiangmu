const express=require('express');
// 引入链接池对象
const pool=require('../pool.js');
// 创建路由器对象
const p=express.Router();
// 添加路由
//登录 
// p.get("/v1/login/:uname&:upwd",(req,res)=>{
// 	var $uname=req.params.uname;
// 	var $upwd=req.params.upwd;
// 	var sql="select * from xz_user where uname=? and upwd=?";
// 	pool.query(sql,[$uname,$upwd],(err,result)=>{
// 		if(err) throw err;
// 		if(result.length>0){
// 			res.send("1");
// 		}else{
// 			res.send("0");
// 		}
// 	});
// });
//用户列表
p.get("/v1/list",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//根据uid删除用户
p.delete("/v1/del/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//根据uid查询用户信息
p.get("/v1/search/:uid",(req,res)=>{
	var $uid=req.params.uid;
	console.log($uid)
	var sql="select * from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
//根据uid修改用户信息 /pro/v1/update
p.put("/v1/update",(req,res)=>{
	var obj=req.body;
	var sql="UPDATE xz_user SET ? WHERE uid=?";
	pool.query(sql,[obj,obj.uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
});
// 重复验证
// p.get("/chaxun/:uname",(req,res)=>{
// 	var _uname=req.params.uname;
// 	var sql="select * from xz_user where uname=?"
// 	pool.query(sql,[_uname],(err,result)=>{
// 			if(err){
// 				throw err;
// 			}else{
// 				if(result.length>0){
// 				res.send("1")
// 				}else{
// 				res.send("0")
// 				}							
// 			}
// 		})	
// 	})
// 	// 注册
// p.post("/v1/register",(req,res)=>{
// 	var obj=req.body;
// 	console.log(obj);
// 	var sql="INSERT INTO xz_user SET ?"
// 	pool.query(sql,[obj],(err,result)=>{
// 		if(err) throw err;
// 		console.log(result)
// 		if(result.affectedRows==0){
// 			res.send("0");
// 		}else{
// 			res.send("1")
// 		}
// 	})	
// })
p.get("/chaxun/:yuser",(req,res)=>{
	var _uname=req.params.yuser;
	var sql="select * from meizu_user where yuser=?"
	pool.query(sql,[_uname],(err,result)=>{
			if(err){
				throw err;
			}else{
				if(result.length>0){
				res.send("1")
				}else{
				res.send("0")
				}							
			}
		})	
	})
	// 注册
p.post("/v1/register",(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var sql="INSERT INTO meizu_user SET ?"
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		console.log(result)
		
		if(result.affectedRows==0){
			res.send("0");
		}else{
			res.send("1")
		}
	})	
});
// 登录
p.get("/v1/login/:yuser&:ypwd",(req,res)=>{
	var $uname=req.params.yuser;
	var $upwd=req.params.ypwd;
	// console.log($uname+"----"+$upwd)
	var sql="select * from meizu_user where yuser=? and ypwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
module.exports=p;