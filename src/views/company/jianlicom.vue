<template>
  <div style="width:100vm;height:100vh;background:#f3f3f3;">
	    <publicheadercom></publicheadercom>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><img src="../../assets/images/indexiconN.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">马先生</span><span class="marginLeft30 colorddd qiuzhiname" >web前端工程师</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span class="itemdelete" @click="lookResume">查看简历</span>   <span class="marginLeft30 itemdelete1">下载简历</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><img src="../../assets/images/indexiconG.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">韩露</span><span class="marginLeft30 colorddd qiuzhiname" >web前端工程师</span></p>
						<p class="persondec colorddd">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span class="itemdelete">查看简历</span>   <span class="marginLeft30 itemdelete1">下载简历</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><img src="../../assets/images/indexiconG.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">宁小珊</span><span class="marginLeft30 colorddd qiuzhiname" >web前端工程师</span></p>
						<p class="persondec colorddd">北京|2年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span class="itemdelete">查看简历</span>   <span class="marginLeft30 itemdelete1" >下载简历</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><img src="../../assets/images/indexiconN.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">华明江</span><span class="marginLeft30 colorddd qiuzhiname" >web前端工程师</span></p>
						<p class="persondec colorddd">北京|6年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span class="itemdelete">查看简历</span>   <span class="marginLeft30 itemdelete1">下载简历</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><img src="../../assets/images/indexiconG.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">张雪</span><span class="marginLeft30 colorddd qiuzhiname" >web前端工程师</span></p>
						<p class="persondec colorddd">北京|3年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span class="itemdelete">查看简历</span>   <span class="marginLeft30 itemdelete1">下载简历</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><img src="../../assets/images/indexiconN.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">张小天</span><span class="marginLeft30 colorddd qiuzhiname" >web前端工程师</span></p>
						<p class="persondec colorddd">北京|3年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span class="itemdelete">查看简历</span>   <span class="marginLeft30 itemdelete1">下载简历</span></p>
					 </div>
				</div>
			</div>
			<div class="listArea">
				<div class="listText">
					 <div class="listTextLeft">
						<p class="persondec"><img src="../../assets/images/indexiconN.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">张庆华</span><span class="marginLeft30 colorddd qiuzhiname" >web前端工程师</span></p>
						<p class="persondec colorddd">北京|3年经验|本科</p>
					 </div>
					 <div class="listTextRight">
						   <p class="lookAction"><span class="itemdelete">查看简历</span>   <span class="marginLeft30 itemdelete1">下载简历</span></p>
					 </div>
				</div>
			</div>
			<el-dialog
				title=""
				:visible.sync="dialogVisible"
				custom-class="selfResume"
				>
				<div class="resumeContentWrap">
					<div class="resumepersonalInfoWrap">
						<div class="resumepersonalInfoLeft">
							<div class="personalNameWrap">
								<div class="personalName">马先生</div>
								<img class="personalsex" src="@/assets/images/indexiconN.png">
							</div>
							<div class="clearfix"></div>
							<div class="personalInfoItem">
                                 <div class="personalInfoSubWrap">
									 <img src="@/assets/images/jianliicon_12.png">
									 <div class="marginLeft30">1993年3月</div>
								 </div>
                                 <div class="personalInfoSubWrap">
									 <img src="@/assets/images/jianliicon_03.png" style="margin-top:-2px;">
									 <span class="marginLeft10">4年工作经验</span>
								 </div>
                                 <div class="personalInfoSubWrap">
									 <img src="@/assets/images/jianliicon_06.png">
									 <span class="marginLeft10">本科</span>
								 </div>								 
							</div>
							<div class="clearfix"></div>
							<div class="personalInfoItem marginTop20">
                                 <div class="personalInfoSubWrap">
									 <img src="@/assets/images/jianliicon_10.png">
									 <span class="marginLeft10">13521147713</span>
								 </div>
                                 <div class="personalInfoSubWrap" style="width:200px;">
									 <img src="@/assets/images/jianliicon_08.png" style="margin-top:-2px;">
									 <span class="marginLeft10">13521147713@163.com</span>
								 </div>							 
							</div>							
						</div>
						<div class="resumepersonalInfoRight">
							<div class="resumeUserHeadPic"></div>
						</div>
					</div>
					<div class="resumeItemWrap" >
						<div class="resumeItemTitle">求职意向</div>
						<div class="resumeItemContent">
							<span>前端工程师</span>
							<span class="hrstyleSelf">|</span>
							<span>15k-25k</span>
							<span class="hrstyleSelf">|</span>
							<span>互联网/电子商务</span>
							<span class="hrstyleSelf">|</span>
							<span>北京</span>
						</div>
					</div>
					<div class="resumeItemWrap marginTop20" >
						<div class="resumeItemTitle">工作经历</div>
						<div class="resumeItemContent">
							<p class="resumeItemContentP resumeCompanyName">北京华路时代信息技术有限公司</p>
							<p class="resumeItemContentP resumeCompanyName">
								<span>web前端工程师</span>
								<span class="marginLeft20">10k-15k</span>
							</p>
							<p class="resumeItemContentP resumeCompanyName">工作内容：</p>
							<p class="resumeItemContentP">1、负责静态页面布局以及前后台数据交互。</p>
							<p class="resumeItemContentP">2、负责使用JavaScript、JQuery实现网页动态效果以及页面间的跳转。</p>
							<p class="resumeItemContentP">3、图片懒加载功能显示商品提高页面的响应速度，对页面和项目进行优化。</p>
							<p class="resumeItemContentP">4、和后台合作实现网页之间的MQ推送即实时消息推送。</p>
							<p class="resumeItemContentP">5、配合并帮助后台用Node.js编写一些简单的接口。</p>
						</div>
						<div class="resumeItemContent">
							<p class="resumeItemContentP resumeCompanyName">北京众诚汇通信息技术有限公司</p>
							<p class="resumeItemContentP resumeCompanyName">
								<span>web前端工程师</span>
								<span class="marginLeft20">10k-15k</span>
							</p>
							<p class="resumeItemContentP resumeCompanyName">工作内容：</p>
							<p class="resumeItemContentP">1、主要负责使用Mue或 Angular4实现页面布局和搭建项目。</p>
							<p class="resumeItemContentP">2、负责使用 JavaScript.、 Type Script实现网页动态效巢,用 Vue Router或 Angular Router实现页面跳转。</p>
							<p class="resumeItemContentP">3、图片懒加载功能显示商品提高页面的响应速度,对页面和项目进行化</p>
							<p class="resumeItemContentP">4、独自用 Node. js编写一些简单的接口,配合后台搭建 Mongodb数据库实现前后台数据交互,并且参与后台。</p>
							<p class="resumeItemContentP">5、配合并帮助后台用Node.js编写一些简单的接口。</p>
						</div>						
					</div>
					<div class="resumeItemWrap marginTop20" >
						<div class="resumeItemTitle">项目经历</div>
						<div class="resumeItemContent">
							<p class="resumeItemContentP resumeCompanyName">
								<span>中证拍卖平台(京拍网)</span>
								<span class="marginLeft20">web前端工程师</span>
							</p>
							<p class="resumeItemContentP resumeCompanyName">项目内容：</p>
							<p class="resumeItemContentP">1、负责静态页面布局以及前后台数据交互。</p>
							<p class="resumeItemContentP">2、负责使用JavaScript、JQuery实现网页动态效果以及页面间的跳转。</p>
							<p class="resumeItemContentP">3、图片懒加载功能显示商品提高页面的响应速度，对页面和项目进行优化。</p>
							<p class="resumeItemContentP">4、和后台合作实现网页之间的MQ推送即实时消息推送。</p>
							<p class="resumeItemContentP">5、配合并帮助后台用Node.js编写一些简单的接口。</p>
							<p class="resumeItemContentP resumeCompanyName">项目内容：</p>
							<p class="resumeItemContentP">该项目是一款网上拍卖平台,同时具有建立商品、商品搜索、浏览商品、支付、竞拍、流拍等功能,而且</p>
						</div>	
					</div>										
				</div>
				<span slot="footer">
					<button class="selfbutton_ok1" style="margin-top:10px;" @click="dialogVisible = false">邀请面试</button>
					<button class="selfbutton_ok1" style="margin-top:10px;" @click="dialogVisible = false">收藏简历</button>
					<button class="selfbutton_ok1" @click="dialogVisible = false">下载简历</button>
				</span>
			</el-dialog>																																										
		   <div class="jianlicom_footerWrap"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'jianlicom',
	components:{
    publicheadercom
  },
	 data(){
		return {
			username:'',
			dialogVisible:false,			
		}
	 },
	 methods: {
		//搜索按钮点击
		lookResume(){
		 this.dialogVisible=true;
		},						
	 },
	mounted(){

	}
  }
</script>
<style scoped>
.jianlicom_footerWrap{width:1200px;float:left;height:30px;background:#f3f3f3;}
.listArea{width:1200px;height:80px;background:#fff;border-bottom:1px solid #eee;display:flex;margin:0 auto;}
.pagefooterEmpty{width:1200px;height:30px;background:#fff;margin:0 auto;}
.persondec{margin-top:5px;padding-left:20px;}
.listText{height:80px;flex:1;text-align:left;}
.listTextLeft{float:left;margin-top:20px;width:800px;}
.listTextLeft:hover .qiuzhiname{color:#5cd9eb}
.iconImgPub{position:absolute;margin-top:-5px;}
.listTextRight{width:386px;float:left;height:80px;line-height:80px;}
.lookAction{color:#9fa4b8;cursor:pointer;padding-left:220px;}
.colorddd{color: #9fa4b8;}
.itemdelete{cursor:pointer;}
.itemdelete:hover{color:#5cd9eb}
.itemdelete1{cursor:pointer;}
.itemdelete1:hover{color:#5cd9eb}
</style>
