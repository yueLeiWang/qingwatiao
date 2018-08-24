<template>
  <div style="width:100vm;height:100vh;background:#f3f3f3;">
	    <publicheadercom></publicheadercom>
        <div class="pagefooterEmpty">
			<div class="listArea" @click="gojianlicom">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >高级前端开发工程师</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span>已投递:128</span></p>
						   <p class="marginTop10"><span>2018.6.16发布</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea"  @click="gojianlicom">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >java开发工程师</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">20k-40k</span></p>
						<p class="persondec colorddd">北京|5-10年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span>已投递:234</span></p>
						   <p class="marginTop10"><span>2018.6.16发布</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea"  @click="gojianlicom">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >数据挖掘</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|5-10年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span>已投递:56</span></p>
						   <p class="marginTop10"><span>2018.6.16发布</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea"  @click="gojianlicom">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >资深产品经理</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|5-10年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span>已投递:8</span></p>
						   <p class="marginTop10"><span>2018.6.16发布</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea"  @click="gojianlicom">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming colorddd" >行政专员</span><span class="colorddd" style="font-size:16px;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span>已投递:6</span></p>
						   <p class="marginTop10"><span>2018.6.16关闭</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea"  @click="gojianlicom">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming colorddd" >平面设计师</span><span  class="colorddd" style="font-size:16px;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span>已投递:16</span></p>
						   <p class="marginTop10"><span>2018.6.16关闭</span></p>
					 </div>
				</div>
			</div>												
		</div>																																																
		<div class="jianliindex_footerWrap"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'jianliindex',
	components:{
    publicheadercom
  },
	 data(){
		return {
			username:'',			
		}
	 },
	 methods: {
		 gojianlicom(){
			 this.$router.push({name:'jianlicom'})
		 }
	 },
	mounted(){

	}
  }
</script>
<style scoped>
.jianliindex_footerWrap{width:1200px;float:left;height:30px;background:#f3f3f3;}
.listArea{width:1200px;height:80px;background:#fff;border-bottom:1px solid #eee;display:flex;margin:0 auto;cursor:pointer;}
.listArea:hover .taocanming{color:#5cd9db}
.pagefooterEmpty{width:1200px;min-height:600px;background:#fff;margin:0 auto;margin-top:10px;}
.persondec{margin-top:9px;padding-left:20px;}
.listText{height:80px;flex:1;text-align:left;}
.listTextLeft{float:left;margin-top:8px;width:800px;}
.iconImgPub{position:absolute;margin-top:-5px;}
.listTextRight{width:356px;float:right;height:80px;margin-top:20px;color:#ccc;text-align:right;margin-right:30px;}
.lookAction{color:#9fa4b8;margin-right:2px;}
.colorddd{color: #9fa4b8;}
.taocanming{font-size:16px;}
</style>
