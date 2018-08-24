<template>
  <div style="width:100vm;height:100vh;background:#f3f3f3;">
	    <publicheadercom></publicheadercom>
        <div class="pagefooterEmpty">
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p style="margin-top:20px;margin-left:20px;color:#5cd9eb"><span class="" >联系我们：4000-333-8888</span></p>
					 </div>
					 <div class="listTextRight">
						   <button  type="button" class="selfbutton_ok1" style="margin-top:6px;width:100px;" @click="gotobatchreservation" >发布预约</button>
					 </div>
				</div>
			</div>
			<div v-if="!contentshowFlag" style="width:1200px;height:500px;background:#fff;">
				<div style="padding-top:200px;">暂无预约，请点击<span style="color:#5cd9eb;">发布预约</span>,进行预约</div>
			</div>			
			<div v-if="contentshowFlag">
				<div class="listArea">
					<div class="listText">
						<div class="listTextLeft">
							<p class="persondec"><span class="taocanming" >前端开发服务套餐</span></p>
							<p class="persondec colorddd">定向培养5个前端开发人员。</p>
						</div>
						<div class="listTextRight">
							<p class="lookAction"><span>服务中</span></p>
							<p><span  class="itemdelete">删除</span><span class="itemEdit">关闭</span></p>
						</div>
					</div>
				</div>
				<div class="listArea">
					<div class="listText">
						<div class="listTextLeft">
							<p class="persondec"><span class="taocanming" >java开发工程师套餐</span></p>
							<p class="persondec colorddd">定向培养20个java开发人员。</p>
						</div>
						<div class="listTextRight">
							<p class="lookAction"><span>沟通中</span></p>
							<p><span class="itemdelete">删除</span><span  class="itemEdit">关闭</span></p>
						</div>
					</div>
				</div>
				<div class="listArea">
					<div class="listText">
						<div class="listTextLeft">
							<p class="persondec"><span class="taocanming" >数据挖掘套餐</span></p>
							<p class="persondec colorddd">定制企业需要数据人员配置。</p>
						</div>
						<div class="listTextRight">
							<p class="lookAction"><span>已完成</span></p>
							<p><span  class="itemdelete" >删除</span><span  class="itemEdit" >关闭</span></p>
						</div>
					</div>
				</div>				
			</div>
		</div>																																																
		<div style="width:1200px;float:left;height:30px;background:#f3f3f3;"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'subscribestatus',
	components:{
    publicheadercom
  },
	 data(){
		return {
			username:'',
			contentshowFlag:false			
		}
	 },
	 methods: {
		gotobatchreservation(){
			 var obj={
				 showFlag:true,
			 }
			 this.$router.push({name:'batchreservation',params:obj})			
		}				
	 },
	mounted(){
      if(this.$route.params.contentshowFlag){
		  this.contentshowFlag=true
	  }		

	}
  }
</script>
<style scoped>
.listArea{width:1200px;height:80px;background:#fff;border-bottom:1px solid #eee;display:flex;margin:0 auto;}
.pagefooterEmpty{width:1200px;min-height:500px;background:#fff;margin:0 auto;margin-top:10px;}
.persondec{margin-top:5px;padding-left:20px;}
.listText{height:80px;flex:1;text-align:left;}
.listTextLeft{float:left;margin-top:8px;width:800px;}
.iconImgPub{position:absolute;margin-top:-5px;}
.listTextRight{width:356px;float:right;height:80px;margin-top:20px;color:#ccc;text-align:right;margin-right:30px;}
.lookAction{color:#9fa4b8;margin-right:18px;}
.colorddd{color: #9fa4b8;}
.taocanming{font-size:16px;}
.listTextLeft:hover .taocanming{color:#5cd9db}
.itemdelete{cursor:pointer;}
.itemdelete:hover{color:#5cd9eb}
.itemEdit{cursor:pointer;margin-left:20px;}
.itemEdit:hover{color:#5cd9eb}
</style>
