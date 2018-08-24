<template>
  <div class="companyindexWrap">
	    <!-- 企业页面公共头 -->
	    <publicheadercom></publicheadercom>
		<!-- 人才搜索条件选择部分开始 -->
		<div class="maincontentWrap">
            <div class="tabItemArea">
				<div class="searchrecom_itemwrap">
					        <div class="searchrecom_titlename">条件检索</div>
							<div class="searchrecom_searchinputwrap"><el-input v-model="searchname" class="searchrecom_searchinput" placeholder="请输入搜索关键词"></el-input></div>
							<div class="searchrecom_searchbuttonwrap"  @click="searchFun"><el-button  class="searchBut">搜索</el-button></div>
				</div>
				<div class="clearfix"></div>
				<div class="searchrecom_itemwrap">
                        <div class="searchWrod">
							<div class="tijianName">工作年限:</div>
							<div>
								<ul class="tabWrodWrap"  >
									<li v-for="(item,index) in yearlistoptions" :key="index" @click="hangye(index,item.value)" :class="{'active':isActive==index}">{{item.label}}</li>
								</ul>
							</div>							
						</div>
						<div class="searchWrod">
							<div class="tijianName">学历:</div>
							<div>
								<ul class="tabWrodWrap" >
									<li v-for="(item,index) in edulistoptions" :key="index" @click="hangye1(index,item.value)" :class="{'active':isActive1==index}">{{item.label}}</li>
								</ul>
							</div>
						</div>
                        <div class="searchWrod">
							<div class="tijianName">工作地区:</div>
							<div>
								<ul class="tabWrodWrap"  >
									<li v-for="(item,index) in AddressListoptions" :key="index" @click="hangye2(index,item.value)" :class="{'active':isActive2==index}">{{item.label}}</li>
								</ul>
							</div>							
						</div>
						<div class="searchWrod">
							<div class="tijianName">性别:</div>
							<div>
								<ul class="tabWrodWrap"  >
									<li v-for="(item,index) in sexList" :key="index" @click="hangye3(index,item.value)" :class="{'active':isActive3==index}">{{item.label}}</li>
								</ul>
							</div>
						</div>
						<div class="searchWrod">
							<div class="tijianName">其他:</div>
							<div>
							<ul class="tabWrodWrap" style="list-style: none;">
								<li class="selectWidth margintz">  
									<el-select v-model="value" placeholder="在职情况" popper-class="searchrecom_select">
										<el-option
										v-for="item in options4"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value1" placeholder="最新发布" popper-class="searchrecom_select">
										<el-option
										v-for="item in options5"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value2" placeholder="薪资要求" popper-class="searchrecom_select">
										<el-option
										v-for="item in options6"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>																														
							</ul>
							</div>
						</div>																		
				</div>				
			</div>
			<!-- 人才搜索条件选择部分结束 -->
			<!-- 智能推荐部分开始 -->
			<div class="clearfix"></div>
            <div class="titleOne">搜索结果</div>
			<div v-if="!showFlag" style="width:1200px;height:300px;background:#fff;">
				<div style="padding-top:100px;">暂无搜索结果，请选择搜索条件，点击搜索按钮完成搜索！</div>
			</div>
			<div v-if="showFlag">
					<div class="listArea">
						<div class="listAreaImg">
							<img src="../../assets/images/pesonHeader3.png">
						</div>
						<div class="listText">
							<div class="listTextLeft" @click="lookResume">
								<p class="persondec"><img src="../../assets/images/indexiconN.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">马先生</span><span class="marginLeft30 qiuzhiname">web前端工程师</span></p>
								<p class="persondec">熟练运用HTML+CSS，HTML5+CSS3、Javascript，Ajax、Jquery兼容各大主流浏览器的Web...</p>
								<p class="persondec">北京|4年经验|本科</p>
							</div>
							<div class="listTextRight">
								<p class="Collection" @click="collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
								<p class="lookAction"  @click="lookResume">查看简历</p>
							</div>
						</div>
					</div>
					<div class="listArea">
						<div class="listAreaImg">
							<img src="../../assets/images/pesonHeader1.png">
						</div>
						<div class="listText">
							<div class="listTextLeft">
								<p class="persondec"><img src="../../assets/images/indexiconG.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">韩露</span><span class="marginLeft30 qiuzhiname">web前端工程师</span></p>
								<p class="persondec">熟练运用HTML+CSS，HTML5+CSS3、Javascript，Ajax、Jquery兼容各大主流浏览器的Web...</p>
								<p class="persondec">北京|4年经验|本科</p>
							</div>
							<div class="listTextRight">
								<p class="Collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
								<p class="lookAction">查看简历</p>
							</div>
						</div>
					</div>
					<div class="listArea">
						<div class="listAreaImg">
							<img src="../../assets/images/pesonHeader2.png">
						</div>
						<div class="listText">
							<div class="listTextLeft">
								<p class="persondec"><img src="../../assets/images/indexiconG.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">张影</span><span class="marginLeft30 qiuzhiname">web前端工程师</span></p>
								<p class="persondec">熟练运用HTML+CSS，HTML5+CSS3、Javascript，Ajax、Jquery兼容各大主流浏览器的Web...</p>
								<p class="persondec">北京|2年经验|本科</p>
							</div>
							<div class="listTextRight">
								<p class="Collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
								<p class="lookAction">查看简历</p>
							</div>
						</div>
					</div>
					<div class="listArea">
						<div class="listAreaImg">
							<img src="../../assets/images/pesonHeader4.png">
						</div>
						<div class="listText">
							<div class="listTextLeft">
								<p class="persondec"><img src="../../assets/images/indexiconG.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">宁小珊</span><span class="marginLeft30 qiuzhiname">web前端工程师</span></p>
								<p class="persondec">熟练运用HTML+CSS，HTML5+CSS3、Javascript，Ajax、Jquery兼容各大主流浏览器的Web...</p>
								<p class="persondec">北京|4年经验|本科</p>
							</div>
							<div class="listTextRight">
								<p class="Collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
								<p class="lookAction">查看简历</p>
							</div>
						</div>
					</div>
					<div class="listArea">
						<div class="listAreaImg">
							<img src="../../assets/images/pesonHeader5.png">
						</div>
						<div class="listText">
							<div class="listTextLeft">
								<p class="persondec"><img src="../../assets/images/indexiconN.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">华明江</span><span class="marginLeft30 qiuzhiname">web前端工程师</span></p>
								<p class="persondec">熟练运用HTML+CSS，HTML5+CSS3、Javascript，Ajax、Jquery兼容各大主流浏览器的Web...</p>
								<p class="persondec">北京|6年经验|本科</p>
							</div>
							<div class="listTextRight">
								<p class="Collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
								<p class="lookAction">查看简历</p>
							</div>
						</div>
					</div>
					<div class="listArea">
						<div class="listAreaImg">
							<img src="../../assets/images/pesonHeader6.png">
						</div>
						<div class="listText">
							<div class="listTextLeft">
								<p class="persondec"><img src="../../assets/images/indexiconG.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">张雪</span><span class="marginLeft30 qiuzhiname">web前端工程师</span></p>
								<p class="persondec">熟练运用HTML+CSS，HTML5+CSS3、Javascript，Ajax、Jquery兼容各大主流浏览器的Web...</p>
								<p class="persondec">北京|3年经验|本科</p>
							</div>
							<div class="listTextRight">
								<p class="Collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
								<p class="lookAction">查看简历</p>
							</div>
						</div>
					</div>				
			</div>
												
		</div>
		<!-- 智能推荐部分结束 -->
		<!-- 查看简历弹窗开始 -->
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
		<!-- 查看简历弹窗结束-->
		<div class="pagefooterEmpty"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'searchrecom',
	components:{
    publicheadercom
  },
	 data(){
		return {
			value2:'8',
			value1:'3',
			value:'1',
			searchname:'',
			username:'cyberbay',
			dialogVisible:false,
			options4: [
				{
				value: '1',
				label: '离职'
				}, {
				value: '2',
				label: '在职'
				}, {
				value: '3',
				label: '实习'
				}
			],
			options5: [
				{
				value: '1',
				label: '不限'
				}, {
				value: '2',
				label: '最近三天'
				}, {
				value: '3',
				label: '最近一周'
				}, {
				value: '4',
				label: '最近二周'
				}, {
				value: '5',
				label: '最近一月'
				}, {
				value: '6',
				label: '最近两月'
				}, {
				value: '7',
				label: '最近三月'
				}, {
				value: '8',
				label: '最近六月'
				}, {
				value: '9',
				label: '最近一年'
				}
			],
			options6:[{
			value: '1',
			label: '1000元/月以下'
			}, {
			value: '2',
			label: '1000-2000元/月'
			}, {
			value: '3',
			label: '2001-4000元/月'
			}, {
			value: '4',
			label: '4001-6000元/月'
			}, {
			value: '5',
			label: '6001-8000元/月'
			}, {
			value: '6',
			label: '8001-10000元/月'
			}, {
			value: '7',
			label: '10001-15000元/月'
			}, {
			value: '8',
			label: '15000-25000元/月'
			}, {
			value: '9',
			label: '25000-35000元/月'
			}, {
			value: '10',
			label: '35000-50000元/月'
			}, {
			value: '11',
			label: '50000-70000元/月'
			}, {
			value: '12',
			label: '70000-100000元/月'
			}, {
			value: '13',
			label: '面议'
			}
			],						
			yearlistoptions: [ 
				{
					value:'0',
					label: '全部'
				}, {
					value:'1',
					label: '1-3年'
				},{
					value:'2',
					label: '3-5年'
				},{
					value:'3',
					label: '5-10年'
				},{
					value:'4',
					label: '10年以上'
				}
			],
			edulistoptions:[ 
				{
					value:'0',
					label: '全部'
				}, {
					value:'1',
					label: '专科'
				},{
					value:'2',
					label: '本科'
				},{
					value:'3',
					label: '硕士'
				},{
					value:'4',
					label: '博士'
				}
			],
			AddressListoptions:[ 
				{
					value:'0',
					label: '全部'
				}, {
					value:'1',
					label: '北京'
				},{
					value:'2',
					label: '上海'
				},{
					value:'3',
					label: '深圳'
				},{
					value:'4',
					label: '青岛'
				}, {
					value:'5',
					label: '济南'
				},{
					value:'6',
					label: '杭州'
				},{
					value:'7',
					label: '广州'
				},{
					value:'8',
					label: '厦门'
				}, {
					value:'9',
					label: '成都'
				},{
					value:'10',
					label: '重庆'
				},{
					value:'11',
					label: '云南'
				},{
					value:'12',
					label: '郑州'
				}, {
					value:'13',
					label: '武汉'
				},{
					value:'14',
					label: '长沙'
				}
			],
			sexList:[ 
				{
					value:'0',
					label: '不限'
				}, {
					value:'1',
					label: '男'
				},{
					value:'2',
					label: '女'
				}
			],
			isActive:0,	
			isActive1:0,
			isActive2:0,
			isActive3:0,
			showFlag:false						
		}
	 },
	 methods: {
		//工作年限选择样式变化
		hangye(index,name){
			this.isActive=index;
		},
		//学历选择样式变化
		hangye1(index,name){
			this.isActive1=index;
		},
		//工作地区选择样式变化
		hangye2(index,name){
			this.isActive2=index;
		},
		//性别选择样式变化
		hangye3(index,name){
			this.isActive3=index;
		},
		//搜索按钮点击
		searchFun(){
           this.showFlag=true;
		},
		//查看简历
		lookResume(){			
		   this.dialogVisible=true;
		},
		//收藏简历
		collection(){
			this.$message({
				type: "success",
				message: "收藏成功"
			});	
		}									
	 },
	mounted(){
		//this.username=this.$route.params.username
		if(window.localStorage.getItem('item') =='nav'){
			this.showFlag=false;
		}
	}
  }
</script>
<style scoped>
.selectWidth{width:180px;}
.margintz{margin-left:5px !important;margin-right:5px !important;}
.searchrecom_searchbuttonwrap{width:140px;float:left;margin-left:-9px;}
.searchrecom_searchinputwrap{width:980px;float:left;}
.searchrecom_titlename{font-size:16px;text-align:left;margin-bottom:10px;}
.searchrecom_itemwrap{width:1120px;margin:0 auto;padding-top:20px;}
.companyindexWrap{width:100vm;height:100vh;background:#f3f3f3;}
.maincontentWrap{width:1200px;margin:0 auto;margin-top:10px;}
.tabItemArea{width:1200px;background:#fff;padding-bottom:30px;}
.titleOne{width:1200px;height:40px;line-height:40px;text-align:left;font-size:16px;}
.listArea{width:100%;height:120px;background:#fff;border-bottom:1px solid #eee;display:flex}
.pagefooterEmpty{width:1200px;height:30px;background:#fff;margin:0 auto;}
.persondec{margin-top:5px;padding-left:20px;}
.listAreaImg{width:80px;height:80px;float:left;margin-top:20px;margin-left:30px;flex:none;}
.listText{height:120px;flex:1;text-align:left;}
.listTextLeft{float:left;padding-top:20px;width:962px;padding-bottom:27px;cursor:pointer;}
.listTextLeft:hover .qiuzhiname{color:#5cd9eb}
.lookAction:hover{color:#5cd9eb}
.iconImgPub{position:absolute;margin-top:-5px;}
.listTextRight{width:120px;float:right;padding-top:20px;padding-bottom:30px}
.Collection{margin-top:10px;cursor:pointer}
.collectionAction{margin-left:30px;color:#ff8269;}
.lookAction{margin-top:20px;color:#9fa4b8;cursor:pointer}
.searchBut{background:#5cd9eb;width:120px;border-color:#5cd9eb;font-size:18px;color:#fff;margin-left:-3px;height:40px;border-radius:0px;}
.tabWrodWrap li{display:inline-block;margin: 0 10px;cursor:pointer;}
.tabWrodWrap{margin-top:20px;width:1100px;margin-left:100px;text-align:left;}
.active{color:#5cd9eb}
.tijianName{width:70px;text-align:left;color:#d3d3d3;position:absolute;font-size:14px;}
</style>
