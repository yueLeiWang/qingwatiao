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
							<li class="activepage" @click="gotoIndex()">首页</li>
							<li>产品服务</li>
							<li>云平台</li>
							<li>全球联盟</li>																					
						</ul>
					</div>
				</div>
				<div class="header-right">
					 <div class="login"  @click="loginFun('login')">登录</div>
					 <div class="midLine"></div>
				     <div class="regess"  @click="loginFun('regess')">注册</div>
				</div>
			</div>			
	 </div>
	 <div class="login-content">
		 <div class="index_contentWrap">
		     <div class="index_model"></div>
			 <div class="index_zhaopinArea">
				 <div class="actionstyle"  @click="actionFun('zhaopin')" @mouseover="clickimg" @mouseout="leavepic">
					 <div class="actioncircle">
						 <p class="paddingTop10"><img src='../../assets/images/newicon3.png' style="margin-left:-10px;width:38px;"></p>
						 <p class="fontSize10">我要招人</p>
					 </div>
				 </div>
				<video id="video"   loop="loop"  muted class="videoOne">
					<source  src="../../assets/video/banner.mp4" type="video/mp4" >
				</video>
			 </div>
			 <div class="index_model1"></div>
			 <div class="index_areaTwowrap">
				 <div class="index_stationTitle">
					<div class="index_mainTitle">真 · 简 · 单</div>
					<div class="index_minTitle">一个有智慧的招聘平台</div>
				 </div>
				 <div class="actionstyle" @click="actionFun('qiuzhi')" @mouseover="clickimg1" @mouseout="leavepic1">
					 <div class="actioncircle">
						 <p class="paddingTop10"><img src='../../assets/images/newicon1.png' class="selfwidth38"></p>
						 <p class="fontSize10">我要找工作</p>						 
					 </div>
				 </div>
				<video class="video" id="video1" loop="loop" muted>
					<source  src="../../assets/video/banner1.mp4" type="video/mp4" >;
				</video>				 
			 </div>
			 <div class="index_model2"></div>
			 <div class="index_contentThree">
				 <div class="actionstyle"  @click="actionFun('tisheng')"  @mouseover="clickimg2" @mouseout="leavepic2">
					 <div class="actioncircle" >
						 <p class="paddingTop10"><img src='../../assets/images/newicon2.png' class="selfwidth38"></p>
						 <p class="fontSize10">我要提升</p>						 
					 </div>
				 </div>
				<video id="video2" loop="loop"  muted>
					<source  src="../../assets/video/banner3.mp4" type="video/mp4" >;
				</video>				 
			 </div>
		 </div>
	 </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    name:'index', 
    components: {
    },
	 data(){
		return {			
		}
	 },
	 methods: {
		//gotoIndex
		gotoIndex(){
			this.$router.push({path:'/'}) 
		},
		//登录或注册
		loginFun(status){
			if(status == 'login'){
				this.$router.push({name:'login'})
			}else{
				this.$router.push({name:'register'})
			}					  
		},
		//三个入口
		actionFun(status){
			var obj={
				inport:''
			}
			obj.inport=status			
			this.$router.push({name:'login',params:obj})
		},
		clickimg(){
			this.$nextTick(()=>{
					var video = document.getElementById("video");
					this.controls = true; //控制条
					var current = true       
					video.play()
			})         
		},
		leavepic(){
			this.$nextTick(()=>{
					var video = document.getElementById("video");
					this.controls = true; //控制条
					var current = true       
					video.pause()
			})			
		},
		clickimg1(){
			this.$nextTick(()=>{
					var video = document.getElementById("video1");
					this.controls = true; //控制条
					var current = true       
					video.play()
			})         
		},
		leavepic1(){
			this.$nextTick(()=>{
					var video = document.getElementById("video1");
					this.controls = true; //控制条
					var current = true       
					video.pause()
			})			
		},
		clickimg2(){
			this.$nextTick(()=>{
					var video = document.getElementById("video2");
					this.controls = true; //控制条
					var current = true       
					video.play()
			})         
		},
		leavepic2(){
			this.$nextTick(()=>{
					var video = document.getElementById("video2");
					this.controls = true; //控制条
					var current = true       
					video.pause()
			})			
		},				
		test(){
			console.log("aaaa")
		}
	 },
	 mounted(){
	 }
  }
</script>
<style scoped>
video {
    width:390px;
	margin-top:220px;
}
.selfwidth38{width:38px;}
.index_zhaopinArea{width:390px;float:left;height:100vh;margin-right:10px;}
.index_model{width:390px;float:left;height:100vh;margin-right:10px;background:rgba(0, 116, 200,0.3);position:absolute;}
.index_model1{width:390px;float:left;height:100vh;margin-right:10px;position:absolute;background: rgba(2, 160, 143,0.3);margin-left: 405px;}
.index_model2{width:390px;float:left;height:100vh;margin-right:10px;position:absolute;background: rgba(189, 224, 11,0.3);margin-left: 810px;}
.index_contentThree{width:390px;float:left;height:100vh;margin-left:10px;}
.index_areaTwowrap{width:390px;float:left;height:100vh;margin-left:5px;margin-right:5px;}
.index_stationTitle{width:390px;height:70px;position:absolute;margin:0 auto;margin-top:50px;color:#fff;}
.index_mainTitle{font-size:54px;font-family: '微软雅黑';color:#32393f;}
.index_minTitle{font-size:18px;font-family: '微软雅黑';margin-top:20px;color:#616f7b}
.index_contentWrap{width:1200px;height:600px;margin:0 auto;}
.actioncircle{width:80px;height:80px;background:rgba(245,246,248,0.7);border-radius:50%;margin:10px auto;}
.actionstyle{width:100px;height:100px;background:rgba(252,252,252,0.5);position:absolute;z-index:9999;top:340px;margin-left:145px;border-radius:50%;cursor:pointer;}
.actionstyle:hover{border:2px solid rgba(200,200,200,0.1);}
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
	 height: 60px;
	 color:#fff;
	 line-height:60px;
	 background: rgba(0,0,0,.8);
	 text-align:right;
	 position:absolute;
  }
  .heaeder-content{margin:0 auto;width:80%;background:pink;}  
  .header-left{
	  width:80%;float:left;
  }
  .logoArea{
     width:30%;float:left;
  }
  .logoImg{
	float:left;width:25%;
  }
  .comName{float:right;width:75%;text-align:left;margin-top: 5px;}
  .interName{line-height:25px;padding-left: 47px}
  .navbar{width:70%;float:left}
  .header-right{width:20%;float:right;}
  .login{width:50px;float:left;text-align:center;cursor:pointer;margin-left:30%}
  .login:hover{color:#5cd9eb}
  .regess{width:50px;float:left;text-align:center;cursor:pointer}
  .regess:hover{color:#5cd9eb}
  .mainNav{float:left;list-style: none}
  .mainNav li{display:inline-block;margin: 0 20px;cursor: pointer;font-family: '微软雅黑';font-size:16px;}
  .mainNav li:hover{color:#5cd9eb}
  .activepage{color:#5cd9eb}
  .login-content{
	  width:100%;
	  margin:0 auto;
	  margin-top:60px;
	  background:#fff;
	  height:600px;
  }
</style>
