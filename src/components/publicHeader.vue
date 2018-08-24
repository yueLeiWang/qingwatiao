<template>
	 <div class="login-header">
		    <div class="heaeder-content">
                <div class="header-left">
					<div class="logoArea">
						<div class="logoImg">
							<img class="publogoPic" src="../assets/images/loginLog.png"/>
						</div>                        
					</div>
					<div class="navbar">
						<ul class="mainNav">
							<li v-for="item in  navArray"   :class="routeName == ('/'+item.pageName) ? 'activeStyle' :'' "  @click="gotoPage(item.pageName)" @mouseover="gotoPage1(item.pageName)" :key="item.index">{{item.name}}</li>																				
						</ul>
					</div>
				</div>
				<div class="header-right">
					 <span class="messageArea" @click="gotomessage('message')">
						 <img src="../assets/images/message_01.png" class="headerPic">
					 </span>
					 <span style="cursor:pointer">
						 <img src="../assets/images/userPic.png" class="headerPic" @click="gotoindex">
					 </span>
				</div>
				<transition name="el-zoom-in-top">
					<div id="downDialog" class="publicheader_daitolwrap"  v-show="centerDialogVisible">
						<div  class="publicheader_contentwrap">
							<div class="publicheader_listwrap">
								<div class="publicheader_listTitle">个人服务</div>
								<ul class="personsevice">
									<li>人才画像</li>
									<li>定向培训</li>
									<li>猎头推荐</li>
									<li>大师讲堂</li>
									<li>高管沙龙</li>
								</ul>
							</div>
							<div class="publicheader_listwrap">
								<div class="publicheader_listTitle" >企业服务</div>
								<ul class="personsevice">
									<li>企业定制培训</li>
									<li>人才推荐</li>
									<li>投融资咨询</li>
									<li>融资担保</li>
									<li><a href="javascript:void(0);" style="cursor:pointer;" target="" @click="gotoedu">软件测试</a></li>
								</ul>
							</div>
						</div>
				    </div>
				</transition>
			</div>
	 </div>
</template>

<script>
export default {
  name: 'selfheader',
  data () {
    return {
			centerDialogVisible:false,
			navArray:[
				{name:'首页',pageName:'usercenter'},
				{name:'简历',pageName:'resume'},
				{name:'职位',pageName:'positionsearch'},
				{name:'预约',pageName:'order'},
				{name:'服务',pageName:'sevicer'},
			]
    }
  },
  computed: {	   
    routeName(){
      return this.$route.path
    }	  
  },  
  methods: {
		 gotoedu(){
			 window.open('http://192.168.135.88:8080/zhongbao');  
  		 },		
		//导航跳转
		gotoPage(name){
			 if(name != 'sevicer'){
				 	this.$router.push({path:'/'+name})
			 }else{
			 }			
		   		  
		},
       gotoPage1(name){
		     var _this=this;
			 if(name != 'sevicer'){
			 }else{
				 this.centerDialogVisible=true
				 this.$nextTick(()=>{
					document.getElementById("downDialog").addEventListener("mouseleave", function(){
							_this.centerDialogVisible=false
					});
				 })

			 }			
	    },  		  
		//消息中心
		gotomessage(name){
            this.$router.push({path:'/'+name})
		},
		gotoindex(){
			this.$router.push({path:'/'})
		}		
  },
  mounted(){

  }
}
</script>
<style scoped>
	.personsevice li{width:200px;height:30px;line-height:30px;}
	.personsevice li:hover{color:#da6718}
	.personsevice li a:hover{color:#da6718}
	.login-header{
		width:100%;
		height: 60px;
		color:#fff;
		line-height:60px;
		background:#da6718;
		text-align:right;
		margin:0 auto;
	}
	.heaeder-content{margin:0 auto;width:1200px;}  
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
	.interName{line-height:25px;padding-left: 21px}
	.navbar{width:70%;float:left}
	.header-right{width:20%;float:right;}
	.mainNav{float:left;list-style: none}
	.mainNav li{display:inline-block;margin: 0 20px;cursor:pointer;}
	.mainNav li:hover{
			color:#000;
	}
	.activeStyle{color:#000;}
	.messageArea{display:inline-block;float:left;margin-left: 68px;cursor:pointer;}
	.messageArea:hover{color:#000;}
	.headerPic{display: inline-block;text-align:center;width: 50px;float: right;border-radius: 50%;height: 50px;line-height:50px;margin-top: 5px;margin-right: 30px;}
	.publicheader_daitolwrap{width:650px;margin:0 auto;background:#fff;color:#fff;position:absolute;z-index:999;margin-left:30vh;margin-top:60px;background:rgba(0,0,0,0.8)}
	.publicheader_contentwrap{width:650px;height:240px;padding:20px 30px;}
	.publicheader_listwrap{float:left;width:300px;text-align:center;}
	.publicheader_listTitle{font-size:16px;font-weight:600;width:200px;}
</style>