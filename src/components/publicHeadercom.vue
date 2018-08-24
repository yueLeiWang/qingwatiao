<template>
	 <div class="login-header">
		    <div class="heaeder-content">
                <div class="header-left">
					<div class="logoArea">
						<div class="logoImg" @click="gotocompanyindex" >
							<img class="publogoPic" src="../assets/images/loginLog.png" />
						</div>                        
					</div>
					<div class="navbar">
						<ul class="mainNav">
							<li :class="(routeName == '/companyindex') ? 'activeStyle' :'' "  @click="gotoPage('companyindex')">首页</li>
							<li >

									<el-dropdown @command="handleCommand2" class="dropdownOptions">
										<span class="el-dropdown-link" :class="(routeName == '/poitionlist' || routeName == '/zhiweicom') ? 'activeStyle' :'' ">
											职位管理<i class="el-icon-arrow-down el-icon--right"></i>
										</span>
										<el-dropdown-menu slot="dropdown">
											<el-dropdown-item command="a">发布职位</el-dropdown-item>
											<el-dropdown-item command="b">职位列表</el-dropdown-item>
										</el-dropdown-menu>
									</el-dropdown>
							</li>							
							<li :class="(routeName == '/jianliindex' || routeName == '/jianlicom') ? 'activeStyle' :'' "  @click="gotoPage('jianliindex')">简历管理</li>
							<li :class="(routeName == '/personnelser' || routeName == '/searchrecom') ? 'activeStyle' :'' "  @click="gotoPage('searchrecom')">人才搜索</li>							
							<li >
									<el-dropdown @command="handleCommand" class="dropdownOptions">
										<span class="el-dropdown-link" :class="(routeName == '/subscribe' || routeName == '/batchreservation' || routeName == '/subscribestatus' || routeName == '/subpoitioncom') ? 'activeStyle' :'' ">
											企业预约<i class="el-icon-arrow-down el-icon--right"></i>
										</span>
										<el-dropdown-menu slot="dropdown">
											<el-dropdown-item command="a">预约人才</el-dropdown-item>
											<el-dropdown-item command="b">预约服务</el-dropdown-item>
										</el-dropdown-menu>
									</el-dropdown>
							</li>																				
						</ul>
					</div>
				</div>
				<div class="header-right">
					 <span class="messageArea" @click="gotomessage('message')">
						 <img src="../assets/images/message_01.png" class="headerPic">
					 </span>
					 <span style="cursor:pointer">						 
							<el-dropdown @command="handleCommand1" class="dropdownOptions">
								<span class="el-dropdown-link" :class="(routeName == '/subscribe' || routeName == '/batchreservation' || routeName == '/subscribestatus' || routeName == '/subpoitioncom') ? 'activeStyle' :'' ">
									<img src="../assets/images/userPic.png" class="headerPic1">
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item command="a">系统管理</el-dropdown-item>
									<el-dropdown-item command="b" >退出</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
					 </span>
				</div>	
			</div>
	 </div>
</template>

<script>
export default {
  name: 'publicheadercom',
  data () {
    return {

    }
  },
  computed: {	   
    routeName(){
      return this.$route.path
    }	  
  },  
  methods: {
	    gotocompanyindex(){
			this.$router.push({name:'companyindex'})
		},	
		//导航跳转
		gotoPage(name){
			if(name !="subscribe"){
			 window.localStorage.setItem('item','nav')
              this.$router.push({name:name})
			}					   		  
		}, 	 		  
		//消息中心
		gotomessage(name){
             this.$router.push({path:'/'+name})
		},
		//退出
		gotoindex(){
			this.$router.push({path:'/'})
		},
		handleCommand(command) {
			if(command == "a"){
				this.$router.push({name:'subpoitioncom'})
			}
			if(command == "b"){
				this.$router.push({name:'subscribestatus'})
			}			
		},
		handleCommand2(command) {
			if(command == "a"){
			   this.$router.push({name:'zhiweicom'})
			}
			if(command == "b"){
				this.$router.push({name:'poitionlist'})
			}			
		},		
		handleCommand1(command) {
			if(command == "a"){
				this.$router.push({name:'sysmange'})
			}
			if(command == "b"){
				this.$router.push({path:'/'})
			}			
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
	 background:#5cd9eb;
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
	float:left;width:25%;cursor: pointer;
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
  .activeStyle1{color:#000;}
  .messageArea{display:inline-block;float:left;margin-left: 68px;cursor:pointer;}
  .messageArea:hover{color:#000;}
  .headerPic{display: inline-block;text-align:center;width: 50px;float: right;border-radius: 50%;height: 50px;line-height:50px;margin-top: 5px;margin-right: 30px;}
  .headerPic1{width: 50px;border-radius: 50%;margin-right: 42px;height: 50px;line-height:50px;margin-top: 5px;}
</style>