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
							<li class="active" @click="gotoIndex()">首页</li>
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
		 <div class="pageTitle" style="width:600px;height:70px;margin:0 auto;color:#fff;">
			 <div style="font-size:30px;">真 · 简 · 单</div>
			 <div style="font-size:18px;">真实简洁有针对的快速找工作平台</div>
		 </div>
		 <div class="bannerArea">
			 <div class="marginTop40">
				 <div class="actionBut" @click="actionFun('zhaopin')">
                      <div class="marginTop30"><img class="widthpre60" src="../../assets/images/zricon.png" /></div>
					  <div class="colorHei">
						<p class="maintitle">我要招人</p>
						<p class="actiondec">这个地方可不可以加一个描述</p>
					  </div>
				 </div>
				 <div class="actionBut" style="background:rgb(137,184,252);" @click="actionFun('qiuzhi')">
                      <div class="marginTop30"><img class="widthpre60" src="../../assets/images/gzicon.png" /></div>
					  <div class="colorBai">
						<p class="maintitle">我要找工作</p>
						<p  class="actiondec" style="color:#fff;">这个地方可不可以加一个描述</p>
					  </div>					 
				 </div>
				 <div class="actionBut" @click="actionFun('tisheng')">
                      <div class="marginTop30"><img class="widthpre60" src="../../assets/images/tsicon.png" /></div>
					  <div class="colorHei">
						<p class="maintitle">我要提升</p>
						<p class="actiondec">这个地方可不可以加一个描述</p>
					  </div>					 
				 </div>
			 </div>
			 <div class="marginTop20 floatLeft">					 				 			
				  <div class="swiper">
						<swiper :options="swiperOption">
						   <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item.url" @click="clickimg(item.ind)"></swiper-slide>
						</swiper>
				 </div>

			 </div>
		 </div>		 
	 </div>
  </div>
</template>
<script type="text/javascript">
 import vip from '@/assets/images/vip.png'
 import vip1 from '@/assets/images/aunar.png'
 import vip2 from '@/assets/images/meituan.png'
 import vip3 from '@/assets/images/mogujie.png'
 import vip4 from '@/assets/images/aunar.png'
 import vip5 from '@/assets/images/mogujie.png'
 import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default{
    name:'indexcopy', 
    components: {
      swiper,
      swiperSlide
    },
	 data(){
		return {
			slides: [
				{url:vip,ind:1},
				{url:vip1,ind:2},
				{url:vip2,ind:3},
				{url:vip3,ind:4},
				{url:vip4,ind:5},
				{url:vip5,ind:6},
			],
            //轮播config
			swiperOption: {
			loop: true,
			slidesPerView: 'auto',			
			autoplay: {
				delay: 1000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},       
			}			
		}
	 },
	 methods: {
		//gotoIndex
		gotoIndex(){
			this.$router.push({path:'/'}) 
		},
		//登录或注册
		loginFun(status){					  
		},
		//三个功能
		actionFun(status){
			console.log(status)
		},
		clickimg(index){
			this.$nextTick(()=>{
                 console.log(index)
			})
         
		}
	 },
	 mounted(){


	 }
  }
</script>
<style scoped>

  .midLine{width:2px;height:28px;margin-top:16px;background:#fff;float:left;}
  .login-body {
	 position: absolute;
	 left: 0;
	 top: 0;
	 width: 100%;
	 height: 100%;
	 background-image:url(../../assets/images/indexbackground.png);
     background-repeat: no-repeat;
	 background-position:top;
	 background-size: 100% 100%;
  }
  .login-header{
	 width:100%;
	 margin-top:60px;
	 height: 60px;
	 color:#fff;
	 line-height:60px;
	 background: rgba(0,0,0,.6);
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
  .regess{width:50px;float:left;text-align:center;cursor:pointer}
  .mainNav{float:left;list-style: none}
  .mainNav li{display:inline-block;margin: 0 20px;cursor: pointer}
  .bannerArea{width:600px;margin:0 auto;color:#fff;}
  .login-content{width:60%;margin:0 auto;;margin-top:185px;}
  .bannerLogo{width:12.8%;}
  .actionBut{width:30%;float:left;margin-left:2.5%;height:168px;cursor:pointer;border-radius:2px;background:#fff;}
  .active{color:royalblue}
  .maintitle{height: 28px;line-height: 28px;font-size: 16px;margin-top:9px;}
  .actiondec{height: 28px;line-height: 28px;font-size: 11px;color: #ccc;margin-top:-5px;}
  .swiper{
	width:600px;
	height:100px;
	margin: 0 auto;
	/* overflow: hidden; */
  }
  .swiper-slide{
    width:100px;
    height:100px;
	float:left;
  }
 .swiper-slide img{width:100%;height:100%;display:block;cursor:pointer;}





</style>
