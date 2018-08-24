<template>
  <div class="loginWrap">
	  <div class="loginLog"><img src="../../assets/images/loginLog.png" /></div>
	  <div class="loginFrom">
		  <div class="loginTitle">
			  {{registerTitle}}
		  </div>
		  <el-form ref="form" :model="form" :rules="rules" label-width="0">
				<el-form-item prop="username" class="phoneArea">
					<el-input v-model="form.username" placeholder="请输入手机号码" class="form-input" :autofocus="true"></el-input>
					<div class="selfhr"></div>
				</el-form-item>
				<el-form-item prop="password" class="passwordArea">
					<el-input type="password" v-model="form.password" placeholder="请输入密码" class="form-input"></el-input>
					<div class="selfhr"></div>
				</el-form-item>
				<el-form-item prop="identifyingCode" class="identifyingCodeArea">
					<el-input  v-model="form.identifyingCode" placeholder="请输入验证码" class="form-input"></el-input>
					<span class="identifyBut" @click="getIdentCody">获取验证码</span>
					<div class="selfhr"></div>
				</el-form-item>				
				<el-form-item class="xieyiArea  suremu">
					<el-checkbox v-model="checked">我已阅读同意《用户使用协议》</el-checkbox>
				</el-form-item>				
				<el-form-item class="registerButton" >
					<div class="buttonArea" @click="submit_form">注册</div>
				</el-form-item>
				<el-form-item >
					<div  class="gotoresStyle"  @click="gotoLogin">已有帐号、立即登录</div>
				</el-form-item>				
		  </el-form>		  
		  
	  </div>
  </div>
</template>
<script type="text/javascript">
  export default{
	 data(){
		return {
			form: {
			username: null,
			password: null,
						identifyingCode:null
			},
			rules: {
			username: [{required: true, message: '请输入手机号码！', trigger: 'blur'}],
			password: [{required: true, message: '请输入密码！', trigger: 'blur'}],
						identifyingCode: [{required: true, message: '请输入验证码！', trigger: 'blur'}]
			},
			checked:true,
			userRole:'person',
			registerTitle:'个人用户注册'			
		}
	 },
	 methods: {
		//gotoIndex
		gotoIndex(){
			this.$router.push({path:'/actionIndex1'}) 
		},
		//提交
		submit_form() {
			this.$refs.form.validate((valid) => {
			if (!valid) return false
			})
		},
	  	gotoLogin(){
			var obj={
				inport:''
			}
			obj.inport=this.userRole			
			this.$router.push({name:'login',params:obj})		  
		},
		getIdentCody(){
			console.log("ddddddddddddd")
		}				
	 },
	 mounted(){
		 this.userRole=this.$route.params.role
		 if(this.userRole =='zhaopin'){
            this.registerTitle="企业用户注册"
		 }
	 }
  }
</script>
<style scoped>
.loginWrap{
	 position: absolute;
	 left: 0;
	 top: 0;
	 width: 100%;
	 height: 100%;
	 background-image:url(../../assets/images/loginBackground.png);
     background-repeat: no-repeat;
	 background-position:bottom;
	 background-size: 100% 100%;	
}
.loginLog{
	width: 100%;
    text-align: left;
}
.loginFrom{
    width: 360px;
    background: #fff;
    border-radius: 4px;
    float: right;
    margin-right: 18%;
    margin-top: 42px;
}
.loginTitle{
	width:100%;
	text-align:center;
	height:30px;
	line-height:30px;
	margin-top: 30px;
}
.selfhr{width:90%;height:0.5px;background:#ccc;margin:0 auto;}
.phoneArea{width:95%;height:38px;line-height:32px;margin:0 auto;margin-top: 20px;background-image: url(../../assets/images/phone.png);background-repeat:no-repeat;background-position:left;background-size: 45px 45px;}
.passwordArea{width:95%;height:38px;line-height:32px;margin:0 auto;margin-top: 20px;background-image: url(../../assets/images/linkpic.png);background-repeat:no-repeat;background-position:bottom left;background-size: 45px 45px;}
.identifyingCodeArea{width:95%;height:38px;line-height:32px;margin:0 auto;margin-top: 20px;background-image: url(../../assets/images/rules.png);background-repeat:no-repeat;background-position:bottom left;background-size: 45px 45px;}
.identifyBut{display:inline-block;width:60px;height:36px;font-size:12px;line-height:36px;border-radius:3px;background:#da6718;color:#fff;position:absolute;top:-8px;right:30px;padding:0 6px}
xieyiArea{width:100%;height:32px;line-height:32px;margin-top: 20px;text-align:left;padding-left: 7.5%;}
.buttonArea{width:86%;height:32px;line-height:32px;margin:0 auto;background:#da6718;margin-bottom: 20px;border-radius: 4px;color:#fff;cursor:pointer}
.gotoresStyle{margin-top:-42px;text-align:right;padding-right:7.5%;color:#da6718}
</style>
