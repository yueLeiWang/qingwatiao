<template>
  <div style="width:100vm;height:100vh;background:#f3f3f3;">
	    <publicheadercom></publicheadercom>
        <div class="pagefooterEmpty">
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p style="margin-top:20px;margin-left:20px;color:#5cd9eb">
							<el-dropdown>
								<span class="el-dropdown-link" style="color:#5cd9eb">
									全部<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>高级前端开发工程师</el-dropdown-item>
									<el-dropdown-item>java开发工程师</el-dropdown-item>
									<el-dropdown-item>数据挖掘</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</p>
					 </div>
					 <div class="listTextRight">
						   <button  type="button" class="selfbutton_ok1" style="margin-top:6px;width:100px;" @click="gozhiweicom('add')">发布职位</button>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >高级前端开发工程师</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p style="padding-right:10px;"><span class="itemEdit" @click="gozhiweicom('edit')">编辑</span><span  class="itemdelete">关闭</span></p>
						   <p class="lookAction"><span>2018.6.16发布</span></p>
						   
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >java开发工程师</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">20k-40k</span></p>
						<p class="persondec colorddd">北京|5-10年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p style="padding-right:10px;"><span   class="itemEdit">编辑</span><span  class="itemdelete">关闭</span></p>
						   <p class="lookAction"><span>2018.6.16发布</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >数据挖掘</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|5-10年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p style="padding-right:10px;"><span   class="itemEdit">编辑</span><span  class="itemdelete">关闭</span></p>
						   <p class="lookAction"><span>2018.6.16发布</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming" >资深产品经理</span><span style="font-size:16px;color:#fe6b6b;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|5-10年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p style="padding-right:10px;"><span   class="itemEdit">编辑</span><span  class="itemdelete">关闭</span></p>
						   <p class="lookAction"><span>2018.6.16发布</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming colorddd" >行政专员</span><span class="colorddd" style="font-size:16px;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p style="padding-right:10px;"><span   class="itemEdit">重新发布</span><span  class="itemdelete">删除</span></p>
						   <p class="lookAction"><span>2018.6.16关闭</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><span class="taocanming colorddd" >平面设计师</span><span  class="colorddd" style="font-size:16px;margin-left:30px;">25k-35k</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p style="padding-right:10px;"><span   class="itemEdit">重新发布</span><span  class="itemdelete" >删除</span></p>
						   <p class="lookAction"><span>2018.6.16关闭</span></p>
					 </div>
				</div>
			</div>												
		</div>																																																
		<div class="poitionlist_footerWrap"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'poitionlist',
	components:{
    publicheadercom
  },
	 data(){
		return {
			username:'',			
		}
	 },
	 methods: {
		gozhiweicom(status){
			var obj={
				showinf:false
			}
			if(status == 'add'){
                this.$router.push({name:'zhiweicom',params:obj})
			}else{
				obj.showinf=true
				this.$router.push({name:'zhiweicom',params:obj})
			}
			
		}				
	 },
	mounted(){

	}
  }
</script>
<style scoped>
.poitionlist_footerWrap{width:1200px;float:left;height:30px;background:#f3f3f3;}
.listArea{width:1200px;height:80px;background:#fff;border-bottom:1px solid #eee;display:flex;margin:0 auto;}
.listTextLeft:hover .taocanming{color:#5cd9db}
.pagefooterEmpty{width:1200px;min-height:600px;background:#fff;margin:0 auto;margin-top:10px;}
.persondec{margin-top:9px;padding-left:20px;}
.listText{height:80px;flex:1;text-align:left;}
.listTextLeft{float:left;margin-top:8px;width:800px;}
.iconImgPub{position:absolute;margin-top:-5px;}
.listTextRight{width:356px;float:right;height:80px;margin-top:20px;color:#ccc;text-align:right;margin-right:30px;}
.lookAction{color:#9fa4b8;margin-right:0px;}
.colorddd{color: #9fa4b8;}
.taocanming{font-size:16px;}
.itemEdit{cursor:pointer;}
.itemEdit:hover{color:#5cd9eb}
.itemdelete{cursor:pointer;margin-left:20px;}
.itemdelete:hover{color:#5cd9eb}
</style>
