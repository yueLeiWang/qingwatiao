<template>
  <div class="login-body">
	 <div class="login-header">
		    <div class="heaeder-content">
                <div class="header-left">
					<div class="logoArea">
						<div class="logoImg">
                        	<img class="logoPic" src="../../assets/images/logo.png"/>
						</div>                        
						<div class="comName">
                           <p class="interName">青蛙跳</p>
						   <p class="interName">qingwatiao.com</p>
						</div>
					</div>
					<div class="navbar">
						<ul class="mainNav">
							<li @click="gotoIndex">首页</li>
							<li>产品服务</li>
							<li>云平台</li>
							<li>全球联盟</li>																					
						</ul>
					</div>
				</div>
				<div class="header-right">
					 <div class="login"  @click="loginFun('login')">登录</div>
					 <div class="midLine"></div>
				     <div class="regess"  @click="loginFun('register')">注册</div>
				</div>
			</div>			
	 </div>
	 <div class="login-content">
		 <div class="pageTitle">
			 <div class="fontSize30">真 · 简 · 单</div>
			 <div class="interDec">真实简洁有针对的快速找工作平台</div>
		 </div>
		 <div class="bannerArea">
			 <div class="marginTop40 floatLeft widthpre45" >
				 <div><img class="widthpre100 height270" src="../../assets/images/indexLogo_03.png" /></div>
			 </div>
			 <div class="marginTop40 floatLeft widthpre55">				      
				<div  class="roukoustyle" @click="actionFun('zhaopin')">
					<div class="tddiv1 widthpre20 floatLeft">
					</div>
					<div class="floatLeft">
						<p class="titleAc" >我要招人</p>
						<p class="decAc">这个地方可不可以加一个描述</p>
					</div>
				</div>
				<div class="clearfix"></div>
				<div  class="roukoustyle marginTop15" @click="actionFun('qiuzhi')">
							<div class="tddiv2 widthpre20 floatLeft">
							</div>
							<div class="floatLeft">
								<p class="titleAc">我要找工作</p>
								<p class="decAc"><span>这个地方可不可以加一个描述</span></p>
							</div>                      
				</div>
				<div class="clearfix"></div>
				<div   class="roukoustyle marginTop15"  @click="actionFun('tisheng')">
							<div class="tddiv3 widthpre20 floatLeft">
							</div>
							<div class="floatLeft">
								<p class="titleAc">我要提升</p>
								<p class="decAc">这个地方可不可以加一个描述</p>
							</div>								      
				</div>					 				 				 
			 </div>
		 </div>		 
	 </div>
  </div>
</template>
<script type="text/javascript">
  export default{
	 name:'actionindex',
	 data(){
		return {
		}
	 },
	 methods: {
		//gotoIndex
		gotoIndex(){
			this.$router.push({path:'/actionIndex1'}) 
		},		
		//登录或注册
		loginFun(status){			
            if(status =='login'){
			  this.$router.push({path:'/login'})	
			}
            if(status =='register'){
			  this.$router.push({path:'/register'})	
			}				  
		},
		//三个功能
		actionFun(status){
			var obj={
				inport:''
			}
			obj.inport=status			
			this.$router.push({name:'login',params:obj})
		}
	 }
  }
</script>
<style scoped>
	.tddiv1{background-image: url(../../assets/images/tdicon1.png);width: 50px;height:30px;margin-top: 26px;margin-left: 20px;background-repeat: no-repeat;background-position:top;background-size: 100% 100%;}
	.tddiv2{background-image: url(../../assets/images/tdicon2.png);width: 50px;height:30px;margin-top: 26px;margin-left: 20px;background-repeat: no-repeat;background-position:top;background-size: 100% 100%;}
	.tddiv3{background-image: url(../../assets/images/tdicon3.png);width: 50px;height:30px;margin-top: 26px;margin-left: 20px;background-repeat: no-repeat;background-position:top;background-size: 100% 100%;}
	.decAc{height: 28px;line-height: 28px;font-size: 11px;color: #ccc;margin-top:-9px;}
	.pageTitle{width:600px;height:70px;margin:0 auto;color:#000;}
	.fontSize30{font-size:30px;}
	.interDec{font-size:18px;color:#ccc}
	.titleAc{height: 28px;line-height: 28px;font-size: 16px;margin-top: 17px;}
	.height270{height:274px;with:270px;}
	.roukoustyle{width:252px;height:80px;line-height:80px;margin-left:10%;background:#fff;border-radius:2px;box-shadow: 6px 6px 6px 3px #888888;cursor:pointer;color:#000;}
	.roukoustyle:hover{background:#da6718;color:#fff;}
	.roukoustyle:hover .tddiv1{background-image: url(../../assets/images/tdicona1.png);}
	.roukoustyle:hover .tddiv2{background-image: url(../../assets/images/tdicona2.png);}
	.roukoustyle:hover .tddiv3{background-image: url(../../assets/images/tdicona3.png);}
	.roukoustyle:hover .decAc{color:#fff;}
	.midLine{width:2px;height:28px;margin-top:16px;background:#fff;float:left;}
	.login-body {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background:#fff;
	}
	.login-header{
		width:100%;
		margin-top:60px;
		height: 60px;
		color:#fff;
		line-height:60px;
		background:#da6718;
		text-align:right;
		position:absolute;
	}
	.heaeder-content{margin:0 auto;width:960px;background:pink;}  
	.header-left{
		width:768px;float:left;
	}
	.logoArea{
		width:231px;float:left;
	}
	.logoImg{
	float:left;width:122px;
	}
	.comName{float:right;width:109px;text-align:left;margin-top: 5px;}
	.interName{line-height:25px;color:#fff;}
	.navbar{width:537px;float:left}
	.header-right{width:192px;float:right;}
	.login{width:50px;float:left;text-align:center;cursor:pointer;margin-left:30%}
	.login:hover{color:#000;}
	.regess{width:50px;float:left;text-align:center;cursor:pointer}
	.regess:hover{color:#000;}
	.mainNav{float:left;list-style: none;padding-left:50px;}
	.mainNav li{display:inline-block;margin: 0 20px;cursor: pointer}
	.mainNav li:hover{color:#000}
	.bannerArea{width:600px;margin:0 auto;color:#fff;}
	.login-content{width:60%;margin:0 auto;;margin-top:185px;}
	.actionBut{width:30%;float:left;margin-left:2.5%;height:153px;cursor:pointer}
	.bannerInf{height:70px;width:100%;background:pink;padding-top:5px;padding-bottom:5px;}
</style>
