tishi.onclick=function(){
				tishi.style="display: none;"
			}
var y=document.getElementsByClassName("denlu")[0];
console.log(y)
y.onclick=function(){
				tishi.style="display: none;"
			}
uname.onblur=function(){
				var $uname=uname.value;
				if(!$uname){
					uname_msg.innerHTML="用户名不能为空";
				}
			}
upwd.onblur=function(){
	var $upwd=upwd.value;
	if(!$upwd){
		upwd_msg.innerHTML="密码不能为空";
	}
}
function login(){
	//获取数据
	var $uname=uname.value;
	var $upwd=upwd.value;
	// console.log($uname)
	//非空验证
	if(!$uname){alert("用户名不能为空");return;}
	if(!$upwd){alert("密码不能为空");return;}
	//1.创建异步对象xhr
	var xhr=new XMLHttpRequest();
	//4.创建监听，接收响应
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var r=xhr.responseText;
			console.log(r)
			if(r==1){
				location.href="index.html"
			}else{
				tishi.style="display:block;"
			}
			
		}
	}
	//2.创建请求，打开连接
	xhr.open("get",`/pro/v1/login/${$uname}&${$upwd}`,true);
	//3.发送请求
	xhr.send();
			}