	uname.onfocus=function(){
		var duan_id=document.getElementById("easyLogin");
		var duan_den=duan_id.document.getElementsByClassName("feathericons");
		duan_den.innerHTML="登录";
		d1.innerHTML="请输入6-10位用户名"
	}
	uname.onblur=function (){
		var _uname=uname.value;
		// console.log(_uname)
		if(_uname==""){					
			d1.innerHTML="输入为空";
			d1.style.color="#d6d007";
			}else if(_uname.length>=6 && _uname.length<=10){
				
				var xhr=new XMLHttpRequest()
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4 && xhr.status==200){
						var r=xhr.responseText;
						if(r==1){
							d1.innerHTML="用户名已被占用";
							d1.style.color="#ed1111";
						}else{
							d1.innerHTML="√"
							d1.style.color="chartreuse";
						}
					}
				}
				xhr.open("get",`/pro/chaxun/${_uname}`,true)
				xhr.send()
																	
			}else{
				d1.innerHTML="请输入有效值"
				d1.style.color="red";
			}
	}
	upwd.onfocus=function(){
		d2.innerHTML="请输入6-12位密码"
	}
	upwd.onblur=function(){
	    var _upwd=upwd.value
	    if(!_upwd){
	     d2.innerHTML="输入密码为空";
		 d2.style.color="#d6d007"
	    }else if(_upwd.length<6 || _upwd.length>12){
	     d2.innerHTML="请输入有效值";
		 d2.style.color="red"
	    }else{
		 d2.innerHTML="√"
		 d2.style.color="chartreuse";
	   }
	   var _upwdtoo=upwdtoo.value;
	   if(!_upwdtoo){
	   }else if(_upwd==_upwdtoo){
		d3.innerHTML="√"
		d3.style.color="chartreuse";
	   }else{
	    d3.innerHTML="两次密码不一致"
		d3.style.color="red"
	   }
	   }
	
	upwdtoo.onfocus=function(){
		d3.innerHTML="请再输入一次密码"
		}	
		
	upwdtoo.onblur=function chaxun_upwdtoo(){
		var _upwdtoo=upwdtoo.value
		if(!_upwdtoo){
			d3.innerHTML="输入密码为空";
			d3.style.color="#d6d007"
			}else if(upwd.value===_upwdtoo){
			d3.innerHTML="√"
			d3.style.color="chartreuse";
			}else{
			d3.innerHTML="两次密码不一致";
			d3.style.color="red"
						}
						}
						
	email.onfocus=function(){
		d4.innerHTML="请输入您的邮箱"
	}
	email.onblur=function(){
		var _email=email.value;
		var reg=email.value.search("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$");
		if(!_email){
			d4.innerHTML="输入邮箱为空";
			d4.style.color="#d6d007"
		}else if(reg!=-1){
			d4.innerHTML="√"
			d4.style.color="chartreuse";
		}else{
			d4.innerHTML="邮箱有误";
			d4.style.color="red"
		}
	}
	
	phone.onfocus=function(){
		d5.innerHTML="请输入您的电话号码"
	}
	phone.onblur=function(){
	var _phone=phone.value;
	var dianyan=phone.value.search(/^1[3-9]\d{9}$/);
	if(!_phone){d5.innerHTML="输入电话号码为空";
	d5.style.color="#d6d007";
	}else if(dianyan!=-1){d5.innerHTML="√";d5.style.color="chartreuse";}
	else
	{d5.innerHTML="请输入有效值";d5.style.color="red"}																		
	}
	function reg(){
		var tyu=1;
		if(dian.checked==true){
			tyu=6;
		}
		if(d1.innerHTML=="√" && d2.innerHTML=="√" && d3.innerHTML=="√" && d4.innerHTML=="√" && d5.innerHTML=="√"&& tyu==6){
			var _uname=uname.value
			var _upwd=upwd.value
			var _email=email.value
			var _phone=phone.value	
			var _gender=0
			if(man.checked==true){_gender=1}
			if(wom.checked==true){_gender=2}
			var xhr=new XMLHttpRequest();					
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4 && xhr.status==200){
					var r=xhr.responseText
					if(r==1){
						alert("注册成功");
						location.href="denlu.html"
						}else{alert("注册失败")}
				}
			}
			xhr.open("POST","/pro/v1/register",true)
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			var formdata=`&phone=${_phone}&email=${_email}&yuser=${_uname}&ypwd=${_upwd}&gender=${_gender}`;		
			xhr.send(formdata);																		
		}else if(tyu!==6){
			var xie=falv.getElementsByTagName("p")[0];
			xie.innerHTML="必须勾选协议"
		}else{
			alert("请输入有效值");
		}								
			}

var div1=falv.getElementsByTagName("i")[0];
var t=1;
div1.onclick=function(){
	if(t%2==1){
		div1.style="background-image: url(img_2/ico_checkbox_selected.png);"
		dian.checked="checked";
	}else{
		div1.style="background-image: url(img_2/ico_checkbox_unSelected.png);"
		dian.checked="";
	}
	t++;
}