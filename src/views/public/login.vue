<template>
  <div class="loginWrap">
	  <div class="loginLog"><img src="../../assets/images/loginLog.png" /></div>
	  <div class="loginFrom">
		  <div class="loginTitle">
				<span>{{loginTitle}}</span>
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
				<el-form-item class="xieyiArea">
					<el-checkbox v-model="checked">我已阅读同意《用户使用协议》</el-checkbox>
				</el-form-item>				
				<el-form-item  >
					<div class="buttonArea" @click="submit_form">登录</div>
				</el-form-item>
				<el-form-item >
					<div  class="gotoresStyle"  @click="gotoRegister">前往注册</div>
				</el-form-item>				
		  </el-form>		  
		  
	  </div>
  </div>
</template>
<script type="text/javascript">
  export default{
		name:'login',
	 data(){
    //手机号验证规则
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入11位手机号码"));
      } else {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)) {
          callback(new Error("请输入11位手机号码"));
        } else {
          callback();
        }
      }
    };		 
		return {
        form: {
          username: null,
          password: null
        },
        rules: {
          username: [{required: true, validator: checkPhone, trigger: 'blur'}],
          password: [{required: true, message: '请输入密码！', trigger: 'blur'}]
		    },
				checked:true,
				loginrole:'',
				loginTitle:'个人登录',

		}
	 },
	 methods: {
		//gotoIndex
		gotoIndex(){
			this.$router.push({path:'/actionIndex1'}) 
		},
    //登录
		submit_form() {
        this.$refs.form.validate((valid) => {
					if (!valid) return false
          var userObj={
						username:'马先生'
					}
					if(this.loginrole == 'zhaopin'){
						this.loginTitle='企业登录'
						userObj.username="cyberbay"
						this.$router.push({name:'companyindex',params:userObj})
					}
					if(this.loginrole == 'qiuzhi'  || this.loginrole == undefined){
						this.$router.push({name:'usercenter',params:userObj})
					}					
        })
	  },
	  gotoRegister(){
			var registerObj={
				role:'qiuzhi'
			}
			if(this.loginrole == 'zhaopin'){
				registerObj.role='zhaopin'
				this.$router.push({name:'register',params:registerObj})
			}
			if(this.loginrole == 'qiuzhi'  || this.loginrole == undefined){
				this.$router.push({name:'register',params:registerObj})
			}			
		  
	  }				
	 },
	 mounted() {
			this.loginrole=this.$route.params.inport
			if(this.loginrole == 'zhaopin'){
				this.loginTitle='企业登录'
			}
			if(this.loginrole == 'qiuzhi'  || this.loginrole == undefined){
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
    width:360px;
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
.xieyiArea{width:100%;height:32px;line-height:32px;margin-top: 20px;text-align:left;padding-left: 7.5%;}
.buttonArea{width:86%;height:32px;line-height:32px;margin:0 auto;background:#da6718;margin-bottom: 20px;border-radius: 4px;color:#fff;cursor:pointer}
.gotoresStyle{margin-top:-42px;text-align:right;padding-right:7.5%;color:#da6718}
</style>
