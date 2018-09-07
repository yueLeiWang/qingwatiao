<template>
  <div class="companyindexWrap">
	    <!-- 企业页面公共头 -->
	    <publicheadercom></publicheadercom>
		<!-- 企业首页内容部分开始 -->
		<div class="maincontentWrap">
            <div class="tabItemArea">
				<div class="tabItemStyle">
					<div class="marginTop60">
						<p>今日可发布职位次数</p>
						<p class="itemNum">{{subNum}}次</p>
						<button  type="button" class="selfbutton_ok1 marginTop20" @click="subposition">发布职位</button>
					</div>
				</div>
				<div class="tabItemStyle marginLeft10">
					<div class="marginTop60">
						<p>共收到的简历</p>
						<p class="itemNum">{{totalNum}}份</p>
						<button  type="button" class="selfbutton_ok1 marginTop20" @click="lookResume">查看简历</button>
					</div>					
				</div>
				<div class="tabItemStyle marginLeft10">
					<div style="margin-top:60px;">
						<p>剩余下载数</p>
						<p class="itemNum">{{surplusNum}}次</p>
						<button  type="button" class="selfbutton_ok1 marginTop20" @click="searchResume">搜索简历</button>
					</div>					
				</div>
				<div class="tabItemStyle marginLeft10" style="margin-top:-10px;">
					<div class="marginTop30">
						<div class="companyindex_Hello textOverflowStyleDot">你好，{{username}}</div>
						<div class="companyindex_userInf">
							<img src="../../assets/images/huiyuan_03.png" class="iconImgPub">
							<span class="marginLeft30">{{viplevel}}</span>
						</div>
						<div class="clearfix"></div>
						<div class="companyindex_companyInf">
							<p>公司名称：{{companyName}}</p>
							<p style="margin-top:10px;">公司编号：{{companyNumder}}</p>
							<p style="margin-top:10px;">会员有效期：{{vipDate}}</p>
						</div>
					</div>
				</div>
			</div>
            <div class="titleOne">智能推荐</div>
			<div class="echarArea">
				<div id="myChart" :style="{width: '280px', height: '280px',background:'#fff',margin:'0 auto',textAlign:'center',fontSize:'10px',marginTop:'-20px'}"></div>
				<p style="margin-top: 20px;">企业画像</p>
			</div>
			<div class="listArea">
				<div class="listAreaImg">
					<img src="../../assets/images/pesonHeader3.png">
				</div>
				<div class="listText">
					 <div class="listTextLeft" @click="lookResume1">
						<p class="persondec"><img src="../../assets/images/indexiconN.png"  class="iconImgPub"><span class="marginLeft30 qiuzhiname">马先生</span><span class="marginLeft30 qiuzhiname">web前端工程师</span></p>
						<p class="persondec">熟练运用element-ui, antd，bootstrap, sass, less,gulp, webpack,git等前端开发工具...</p>
						<p class="persondec">北京|4年经验|本科</p>
					 </div>
					 <div class="listTextRight">
                           <p class="Collection" @click="collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
						   <p class="lookAction" @click="lookResume1">查看简历</p>
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
						<p class="persondec">熟练应用html,css3,Javascript，熟悉ES6特性及规范, 能够编写符合W3C标准并兼容主流PC,移动端的浏览器的代码...</p>
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
						<p class="persondec">3年的Web前端开发经验，熟练掌握html、css、javascript等各项技能；熟练使用jquery库、bootstrap响应式布局；掌握easyui、layui、element、antd、cube等UI...</p>
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
						<p class="persondec">熟练使用Vue、Vue-cli、Vue-Directives、Vue-Router、Vue-axios、webpack、elementUI进行项目开发...</p>
						<p class="persondec">北京|3年经验|本科</p>
					 </div>
					 <div class="listTextRight">
                           <p class="Collection"><img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span></p>
						   <p class="lookAction">查看简历</p>
					 </div>
				</div>
			</div>
			<div class="pagefooterEmpty"></div>												
		</div>
		<!-- 企业首页内容部分结束 -->
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
				    <button class="selfbutton_ok1 marginTop10"  @click="dialogVisible = false">邀请面试</button>
					<button class="selfbutton_ok1 marginTop10"  @click="dialogVisible = false">收藏简历</button>
					<button class="selfbutton_ok1" @click="dialogVisible = false">下载简历</button>
				</span>
			</el-dialog>		
		<!-- 企业首页底部部分-->
		
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'companyindex',
	components:{
    publicheadercom
  },
	 data(){
		return {
			username:'cyberbay',
			viplevel:'金牌会员',
			companyName:'喜腾电子商务有限公司',
			companyNumder:'40303638',
			vipDate:'2018-11-29',
			surplusNum:'98',
			totalNum:'2',
			subNum:'500',
			dialogVisible:false			
		}
	 },
	 methods: {
		//发布职位
		subposition(){
           this.$router.push({ name: 'zhiweicom'});
		},
		//查看简历
		lookResume(){
           this.$router.push({ name: 'jianliindex'});
		},
		//搜索简历
		searchResume(){
           this.$router.push({ name: 'personnelser'});
		},
		lookResume1(){
		 this.dialogVisible=true;
		},
		collection(){
			this.$message({
				type: "success",
				message: "收藏成功"
			});	
		},
		//能力画像初始化
		drawLine(arrData){
			// 基于准备好的dom，初始化echarts实例
					let myChart = this.$echarts.init(document.getElementById('myChart'))
					myChart.setOption({
						    
							title: {
									text: ''
							},
							tooltip: {},							
							legend: {
								enabled: false
							},
							radar: {
									nameGap :0, // 图中工艺等字距离图的距离
									splitNumber: 5, // 网格线的个数
									center:['50%','50%'], // 图的位置
									axisLine: {
										lineStyle: {
											color: '#fff'
										}
									},																		
									splitArea: {
										areaStyle: {
											shadowColor: 'rgba(9, 9, 9, 0.5)',
											shadowBlur: 0,											
											// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
											color: {
												type: 'radial',
												x:0,
												y: 0,
												r: 3,
												colorStops: [
													{
													offset: 0, color: '#fff' // 0% 处的颜色
													},													 
													{
														offset: 1, color: '#666' // 100% 处的颜色
													}
												],
												globalCoord: false // 缺省为 false
											}
										}
									},
									splitLine: {
										lineStyle: {
											color: ['#ddd', '#ddd','#ddd','#aaa','#aaa']
										}
									},
									//startAngle: 60,
									name:{
										show: true, // 是否显示工艺等文字
										formatter:(text)=>{
										    //分两行展示标题
											if(text.indexOf('&') > -1){
												var subindex=text.indexOf('&')+1
												var str1=text.substring(0,subindex-1)
												var str2=text.substring(subindex)
												var text1=str1+'\n'	
											}
											return '[{a|'+text1+'},{b|'+str2+'}]'
										},								
										rich: {
											a: {
												color:'#fea66b',
												fontSize:12,
												align:'center',
												padding:4,
												width:35
												
											},
											b:{
												color:'#7c848c',
												fontSize:10,
												align:'center',
												padding:[2, 0, 2, 8],
												width:35
											}
										}
									},								
									indicator: [
										{ name: '公司&活跃度', max: 100},
										{ name: '人员&能力', max: 100},
										{ name: '产业&前景', max: 100},
										{ name: '行业&影响力', max: 100},
										{ name: '发展&速度', max: 100},
										{ name: '公司&规模', max: 100}
									]
							},
							series: [{
									name: '',
									type: 'radar',
									symbol:"circle",//图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
									itemStyle: {
											normal: {												    
													color : "#885f44", // 图表中各个图区域的边框线拐点颜色
													lineStyle: {
														width : 1,
														color : '#c6c2c1' // 图表背景网格线的颜色
													},
													areaStyle: {
														type: 'default',
                                                        opacity: 0.7,
                                                        color: "#f2c5a8" // 图表中各个图区域的颜色

													}
											}
									},
									data : [
											{
													value : arrData,
													name : ''
											}
									]
							}]
						
					})								
		},										
	 },
	mounted(){
		//this.username=this.$route.params.username
		var arrdata=[20, 75, 70, 78, 82, 74]
		this.drawLine(arrdata);			
	}
  }
</script>
<style scoped>
.companyindex_Hello{
	width: 120px;
    text-align: left;
    padding-left: 20px;
    font-size: 14px;
    float: left;
}
.companyindex_userInf{width:142px;font-size:14px;float:right;text-align:left;}
.companyindex_companyInf{margin-top:20px;text-align:left;padding-left:20px;color:#a6abdb}
.echarArea{
	width: 293px;
    height: 320px;
    background: #fff;
    float: right;
    margin-top: -40px;
    margin-right: 1px;
}
.companyindexWrap{width:100vm;height:100vh;background:#f3f3f3;}
.maincontentWrap{width:1200px;margin:0 auto;margin-top:10px;}
.tabItemArea{width:1200px;height:190px;}
.tabItemStyle{width:292px;height:190px;background:#fff;float:left;}
.itemNum{color:#fe9494;margin-top:10px;}
.titleOne{width:1200px;height:40px;line-height:40px;text-align:left;font-size:16px;}
.listArea{width:895px;height:120px;background:#fff;border-bottom:1px solid #eee;display:flex}
.pagefooterEmpty{width:900px;height:30px;background:#fff;}
.persondec{margin-top:5px;padding-left:20px;width:550px;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;}
.listAreaImg{width:80px;height:80px;float:left;margin-top:20px;margin-left:30px;flex:none;}
.listText{height:120px;flex:1;text-align:left;}
.listTextLeft{float:left;padding-top:20px;padding-bottom:27px;width:600px;cursor:pointer;}
.listTextLeft:hover .qiuzhiname{color:#5cd9eb}
.iconImgPub{position:absolute;margin-top:-5px;}
.listTextRight{width:120px;float:right;padding-top:20px;padding-bottom:30px;}
.Collection{margin-top:10px;cursor:pointer}
.collectionAction{margin-left:30px;color:#ff8269;}
.lookAction{margin-top:20px;color:#9fa4b8;cursor:pointer}
.lookAction:hover{color:#5cd9eb}
</style>
