<template>
  <div class="usercenter_mainWrap">
	    <selfheader></selfheader>
		<div class="usercenterWrap">
			  <div class="FirstArea">					
				<div class="FirstAreaLeft">
					<div class="searchArea">
							<div class="usercenter_searchTitle">条件检索</div>
							<div class="usercenter_searchInput">
								<el-input v-model="searchname" placeholder="请输入内容"></el-input>
							</div>
							<div class="usercenter_searchButtonWrap">
								<button type="button" class="selfbutton" @click="gotoSearchRes">搜索</button>
							</div>
					</div>
					<div class="clearfix"></div>
					<div class="selectArea">
						<div class="searchWrod">
							<ul class="tabWrodWrap">
								<li class="tijianName">行业:</li>
								<li v-for="(item,index) in options" :key="index" @click="hangye(index,name)" :class="{'active':isActive==index}">{{item.name}}</li>
							</ul>
						</div>
						<div class="searchWrod">										
							<ul class="tabWrodWrap">
								<li class="tijianName">学历:</li>
								<li v-for="(item,index) in options1" :key="index" @click="xueli(index,name)" :class="{'active':isActive1==index}">{{item.name}}</li>
							</ul>	
						</div>
						<div class="searchWrod">
							<span class="tijianName marginLeft9">工作地区:</span>								
							<ul class="tabWrodWrap wordBreak">
								<li v-for="(item,index) in options2" :key="index" @click="diqu(index,name)" :class="{'active':isActive2==index}" >{{item.name}}</li>
							</ul>											
						</div>
						<div class="searchWrod marginTop30">										
							<ul class="tabWrodWrap">
								<li class="tijianName">薪资待遇:</li>
								<li v-for="(item,index) in options3" :key="index" @click="xinzi(index,name)" :class="{'active':isActive3==index}" >{{item.name}}</li>
							</ul>											
						</div>
						<div class="searchWrod marginTop30 paddingBottom50">										
							<ul class="tabWrodWrap">
								<li class="tijianName">其他：</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value" placeholder="职位类别">
										<el-option
										v-for="item in options4"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value1" placeholder="公司性质">
										<el-option
										v-for="item in options5"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value2" placeholder="公司规模">
										<el-option
										v-for="item in options6"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value3" placeholder="工作经验">
										<el-option
										v-for="item in options7"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value4" placeholder="融资情况">
										<el-option
										v-for="item in options8"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>																																				
							</ul>											
						</div>							
					</div>
					<div class="usercenter_secondAreaWrap">
						<div class="usercenter_secondTitle">智能推荐</div>
						<div class="vfortest">
							<div  class="usercenter_cardWrap" v-for="item in 10" :key="item">
								<div class="marginTop20">
									<div class="positionItem">前端开发工程师</div>
									<div class="mouthsalyItem">15k-20k</div>
								</div>
								<div class="usercenter_listitemInf">
									<div class="usercenter_listcontentwrap">
										<span>北京</span><img src="../../assets/images/hrPic.png" /><span>3年经验</span><img src="../../assets/images/hrPic.png" /><span>本科</span>
									</div>
								</div>
								<div class="usercenter_companyInfWrap">
									<div class="usercenter_companyInfPic">
										<img src="../../assets/images/testLog7.png" class="usercenter_companyInfImg">
									</div>
									<div class="usercenter_companyInfName">
										<p>和智传信</p>
										<p>移动互联网<img src="../../assets/images/hrPic.png" />A轮</p>
									</div>
								</div>
							</div>							

						</div>											

						
					</div>										
				</div>
				<!-- 左边结束 -->
				<div class="FirstAreaRight">
					<div class="FirstAreaRight_left">
						<div class="headerPic">
							 <img src="../../assets/images/userPic.png" >
						</div> 
					</div>
					<div class="FirstAreaRight_Right">
						<div class="usercenter_detailone">
							<div>
								<div class="usercenter_detailUeserName">{{username}} </div> 
								<div class="usercenter_detailUeserPic">
									<img src="../../assets/images/minicon.png">
								</div>
								<div class="usercenter_detailpositionStatus">求职状态</div>
							</div>
							<div class="clearfix"></div>
							<div class="usercenter_detailpositionType">
								<span>职位类别</span>
								<span class="marginLeft30">工作经验</span>
							</div>
						</div>											
					</div>
					<div class="usercenter_jianliInWrap">
						<ul>
							<li class="jianliaction" @click="gotojianli">
								<img src="../../assets/images/shuaxin.gif">
								<div class="fontSize14">刷新简历</div>
							</li>
							<li class="jianliaction" @click="gotojianli">
								<img src="../../assets/images/bianji.gif">
								<div class="fontSize14">编辑简历</div>
							</li>
							<li class="jianliaction"  @click="gotojianli">
								<img src="../../assets/images/shangchuan.gif">
								<div class="fontSize14">导入简历</div>
							</li>
						</ul>						
					</div>
					<div class="usercenter_jianliActionWrap">
						<ul>
							<li class="jianliaction1">
								<div class="fontSize14" @click="goPositiondocuments('delivered')">已投递</div>
							</li>
							<li class="jianliaction1">
								<div class="fontSize14" @click="goPositiondocuments('interested')">感兴趣</div>
							</li>
							<li class="jianliaction1">
								<div class="fontSize14" @click="goPositiondocuments('invited')">被邀请</div>
							</li>
							<li class="jianliaction1">
								<div class="fontSize14" @click="goPositiondocuments('recommended')">看推荐</div>
							</li>											
						</ul>										
					</div>					
					<div  class="usercenter_chartWrap">
						<div id="myChart" :style="{width: '280px', height: '200px',background:'#fff',margin:'0 auto',textAlign:'center',fontSize:'10px'}"></div>
					</div>
					<div class="usercenter_schoolIN">
						根据评测结果，我们推荐您参加
						<a v-if="true" href="javascript:void(0);" class="usercenter_schoolLink"  target="" @click="gotoedu">
                        大数据基础</a>课程
					</div>
					<div class="clearfix"></div>
					<div style="width:392px;height:12px;background:#f3f3f3;"></div>
					<div class="usercenter_listitem1">						
							<div class="usercenter_firendListTitle" ><span>好友列表</span><span style="margin-left:216px;color:#fea66b;">我的好友</span></div>
							<div style="width:362px;margin:0 auto;margin-top:10px;">
								<ul>
									<li class="usercenter_firendListitem">
										<div class="usercenter_firendpic">
                                            <div class="usercenter_firendimg">
												<img src="../../assets/images/firend1.png"/>
											</div>
										</div>
										<div class="usercenter_firendInf">
											<div class="usercenter_firendName">
                                                <p class="usercenter_firendNameText">张小花</p>
												<p class="usercenter_firendpubDot">ta和你同在北京师范大学毕业</p>
											</div>
											<div class="usercenter_firendAdd">
                                               <button class="selfbutton_ok" style="border-radius:80px;">加为好友</button>
											</div>
										</div>
									</li>
									<li class="usercenter_firendListitem">
										<div class="usercenter_firendpic">
                                            <div class="usercenter_firendimg">
												<img src="../../assets/images/firend2.png"/>
											</div>
										</div>
										<div class="usercenter_firendInf">
											<div class="usercenter_firendName">
                                                <p class="usercenter_firendNameText">张磊</p>
												<p class="usercenter_firendpubDot">ta和你同在云端网络工作过</p>
											</div>
											<div class="usercenter_firendAdd">
                                               <button class="selfbutton_ok" style="border-radius:80px;">加为好友</button>
											</div>
										</div>
									</li>
									<li class="usercenter_firendListitem">
										<div class="usercenter_firendpic">
                                            <div class="usercenter_firendimg">
												<img src="../../assets/images/firend3.png"/>
											</div>
										</div>
										<div class="usercenter_firendInf">
											<div class="usercenter_firendName">
                                                <p class="usercenter_firendNameText">赵雪莫</p>
												<p class="usercenter_firendpubDot">ta和你同在北京师范大学毕业</p>
											</div>
											<div class="usercenter_firendAdd">
                                               <button class="selfbutton_ok" style="border-radius:80px;">加为好友</button>
											</div>
										</div>
									</li>																		
								</ul>
								<div class="usercenter_lookmore">查看更多</div>
							</div>
					</div>										
				</div>
				<!-- 右边结束-->
			</div>			  
		</div>
		<div class="usercenter_footerWrap">

		</div>
  </div>
</template>
<script type="text/javascript">
  import selfheader from '../../components/publicHeader'
  export default{
	name:'usercenter',
	components:{
    selfheader
  },
	 data(){
		return {
			username:'',
			isActive:0,
			isActive1:0,
			isActive2:0,
			isActive3:0,
			searchname:'',
			options: [{
				name: '全部'
			}, {
				name: '互联网/IT'
			}, {
				name: '金融'
			},{
				name: '传媒'
			},{
				name: '服务业'
			},{
				name: '教育/艺术'
			},{
				name: '其他'
			}
			],
			options1: [{
				name: '全部'
			}, {
				name: '专科'
			}, {
				name: '本科'
			},{
				name: '硕士'
			},{
				name: '博士'
			}
			],
			options2: [{
				name: '全部'
			}, {
				name: '北京'
			}, {
				name: '上海'
			},{
				name: '深圳'
			},{
				name: '青岛'
			},{
				name: '济南'
			},{
				name: '杭州'
			},{
				name: '广州'
			},{
				name: '厦门'
			},{
				name: '成都'
			},{
				name: '重庆'
			},{
				name: '云南'
			},{
				name: '郑州'
			},{
				name: '武汉'
			},{
				name: '长沙'
			}

			],
			options3: [{
				name: '不限'
			}, {
				name: '2k以下'
			}, {
				name: '2k-4k'
			},{
				name: '4k-8k'
			},{
				name: '8k-10k'
			},{
				name: '10k-15k'
			},{
				name: '15k-25k'
			},{
				name: '25k以上'
			}
			],
			options4: [
				{
				value: '选项1',
				label: 'IT｜互联网｜通信'
				}, {
				value: '选项2',
				label: '财务｜人力资源｜行政'
				}, {
				value: '选项3',
				label: '销售｜客服｜市场'
				}
			],
			options5: [
				{
				value: '选项1',
				label: '事业单位'
				}, {
				value: '选项2',
				label: '国企'
				}, {
				value: '选项3',
				label: '外商独资'
				}, {
				value: '选项4',
				label: '民营'
				}, {
				value: '选项5',
				label: '上市公司 '
				}
			],
			options7: [
				{
				value: '选项1',
				label: '0-1年'
				}, {
				value: '选项2',
				label: '1-3年'
				}, {
				value: '选项3',
				label: '4-6年'
				}, {
				value: '选项4',
				label: '6-9年'
				}, {
				value: '选项5',
				label: '10年以上'
				}
			],
			options6: [
				{
				value: '选项1',
				label: '0-20人'
				}, {
				value: '选项2',
				label: '21-99人'
				}, {
				value: '选项3',
				label: '100-499人'
				}, {
				value: '选项4',
				label: '500-999人'
				}, {
				value: '选项5',
				label: '1000人以上'
				}
			],
			options8: [
				{
				value: '选项1',
				label: '不需融资'
				}, {
				value: '选项2',
				label: '天使轮'
				}, {
				value: '选项3',
				label: 'A轮'
				}, {
				value: '选项4',
				label: 'B轮'
				}, {
				value: '选项5',
				label: 'C轮'
				}, {
				value: '选项6',
				label: 'D轮及以上'
				}
			],																								
			value: '',	
			value1: '',	
			value2: '',
			value3: '',
			value4: '',						
		}
	 },
	 methods: {
		 //
		 goPositiondocuments(status){
			 let data = {
				 status:status
			};
			this.$router.push({ name: 'positiondocuments', params: data });
		 },
		 //跳转至教育平台
		 gotoedu(){
			 window.open('http://47.94.208.133/course');  
  		 },
		//行业选择样式变化
		hangye(index,name){
			this.isActive=index;
		},
		//学历选择样式变化
		xueli(index,name){
			this.isActive1=index;
		},
		//工作地区选择样式变化
		diqu(index,name){
			this.isActive2=index;
		},
		//薪资选择样式变化
		xinzi(index,name){
			this.isActive3=index;
		},
		//搜索按钮点击
		gotoSearchRes(){
			 let data = {
				id:12345,
				name:'name'
			};
			this.$router.push({ name: 'positionsearch', params: data });			
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
									nameGap :1, // 图中工艺等字距离图的距离
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
									name:{
										show: true, // 是否显示工艺等文字
										formatter:(text)=>{
										    //分两行展示标题
											if(text.indexOf('&') > -1){
												var subindex=text.indexOf('&')+1
												var str1=text.substring(0,subindex-1)
												var str2=text.substring(subindex)
												text=str1+'\n'+str2	
											}
											return text
										}, // 工艺等文字的显示形式
										textStyle: {
											color:'#000', // 工艺等文字颜色
											fontSize:'6px',
											textAlign:'center'
										}
									},								
									indicator: [
										{ name: '知识&SHIA', max: 100},
										{ name: '素质&4C评价标准', max: 100},
										{ name: '目标&CIPH评价体系', max: 100},
										{ name: '领导力&五力模型', max: 100},
										{ name: '性格&MBTI', max: 100},
										{ name: '背景&产品经验', max: 100}
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
		 gotojianli(){
			 this.$router.push({path:'/resume'})
		 }		
						
	 },
	mounted(){
		this.username=this.$route.params.username
		var arrdata=[20, 75, 70, 78, 82, 74]
		this.drawLine(arrdata);	
	}
  }
</script>
<style scoped>
    .usercenter_footerWrap{width:1200px;float:left;height:30px;background:#f3f3f3;}
	.usercenter_mainWrap{width:100vm;height:100vh;background:#f3f3f3;}
	.usercenter_lookmore{padding-top:10px;color:#ccc;cursor:pointer}
	.usercenter_lookmore:hover{color:#fe6b6b}
	.usercenter_firendListTitle{text-align:left;padding-left:30px;padding-top:20px;font-size:16px;}
	.usercenter_listitem{width:392px;float:left;margin-left:12px;margin-top:12px;height:170px;background:#fff;cursor:pointer;}
	.usercenter_listitem1{width:392px;background:#fff;}
	.usercenter_firendListitem{width:362px;height:80px;margin:5px auto;border-bottom:1px solid #ccc;}
	.usercenter_firendName:hover .usercenter_firendNameText{color:#fe6b6b}
	.usercenter_firendpic{width:100px;height:80px;float:left;}
	.usercenter_firendimg{width:60px;height:60px;border-radius:50%;margin:0 auto;margin-top:14px;}
	.usercenter_firendimg img{width:60px;}
	.usercenter_firendInf{width:262px;height:80px;float:right;}
	.usercenter_firendName{width:182px;height:80px;float:left;text-align:left;}
	.usercenter_firendNameText{padding-top:20px;font-size:13.5px;}
	.usercenter_firendpubDot{padding-top:10px;font-size:12px;color:#a9a9a9;}
	.usercenter_firendAdd{width:80px;height:80px;line-height:80px;float:right;}
	.mouthsalyItem{width:100px;float:left;font-size:17.5px;color:#fe6b6b;font-family: DIN Alternate}
	.positionItem{width:262px;float:left;text-align:left;padding-left:30px;font-size:18px;color:#fea66b}
	.personItemInf{width:392px;float:left;margin-top:12px;margin-top:12px;height:170px;background:#fff;cursor:pointer;}
	.fontSize14{font-size:14px;}
	.jianliaction{float:left;width:100px;margin:0 5px;}
	.jianliaction:hover{color:#da6718;}
	.jianliaction1{float:left;width:70px;margin:0 10px;cursor:pointer;color:#fea66b}
    .jianliaction1:hover{color:#da6718;font-weight:600;}
	.selectWidth{width:110px;}
	.margintz{margin-left:5px !important;margin-right:5px !important;}
	.tijianName{width:60px;text-align:left;color:#d3d3d3}
	.active{color:#da6718}
	.usercenterWrap{width:1200px;margin:0 auto;}
	.FirstArea{width:1200px;margin-top:12px;}
	.FirstAreaLeft{width:796px;float:left;background:#fff;padding-top: 20px;}
	.FirstAreaRight{width:392px;float:right;background:#fff;padding-top: 20px; padding-bottom: 20px;}
	.FirstAreaRight_left{width:120px;float:left;}
	.headerPic{width:100px;height:100px;line-height:100px;border-radius:50%;margin-top:6px;margin-left:12px;}
	.FirstAreaRight_Right{width:230px;float:left;}
	.usercenter_detailone{margin-top:36px;text-align: left;}
	.usercenter_detailUeserName{float:left;height:30px;}
	.usercenter_detailUeserPic{width:20px;height:20px; margin-top: 5px;float:left;margin-left:10px;}
	.usercenter_detailpositionStatus{margin-left:10px;float:left;color:#d3d3d3;font-size: 14px;}
	.usercenter_detailpositionType{color:#d3d3d3;font-size:14px;}
	.usercenter_jianliInWrap{width:100%;float:left;margin-top:20px;}
	.usercenter_jianliActionWrap{width:100%;float:left;padding-top: 30px;}
	.usercenter_chartWrap{width:392px;float:left;margin-left:12px;padding-top: 39px;padding-bottom: 30px;}
	.usercenter_schoolIN{width:392px;float:left;text-align:center;padding-bottom:20px;}
	.usercenter_schoolLink{font-size:16px;font-weight:600;color:#da6718;cursor:pointer;}
	.searchArea{width:796px;}
	.selectArea{width:796px;font-size:14px;font-family: "微软雅黑"}
	.searchWrod{width:100%;height:30px;line-height:30px;padding-left:30px;text-align:left;}
	.tabWrodWrap li{display:inline-block;margin: 0 10px}
	.usercenter_searchTitle{float:left;color:#000;width:100%;text-align:left;padding-left:40px;padding-bottom:20px;}
	.usercenter_searchInput{width:600px;float:left;margin-left:40px;}
	.usercenter_searchButtonWrap{width:100px;float:left;margin-left:-15px;}
	.wordBreak{word-break:break-all; overflow:hidden;width:640px;margin-top:-30px;margin-left:86px;}
	.usercenter_secondAreaWrap{float:left;background:rgb(243,243,243);}
	.usercenter_secondTitle{width:796px;height:40px;line-height:40px;text-align:left;font-size:16px;}
	.usercenter_lishWrap{width:392px;float:left;height:170px;background:#fff;cursor:pointer;}
	.usercenter_listitemInf{margin-top:10px;float:left;width:392px;border-bottom:1px solid rgba(176,176,176,0.19);padding-bottom:10px;}
	.usercenter_listcontentwrap{width:262px;float:left;text-align:left;padding-left:30px;font-size:15px;color:#b0b0b0}
	.usercenter_companyInfWrap{margin-top:20px;float:left;width:392px;}
	.usercenter_companyInfPic{width:122px;float:left;}
	.usercenter_companyInfImg{width:50px;height:50px;margin-left:30px;}
	.usercenter_companyInfName{width:240px;float:left;padding-left:30px;text-align:left;color:#b0b0b0;font-size:14px}
	.usercenter_cardWrap{width:392px;float:left;height:178px;background:#fff;cursor:pointer;margin-top:12px;}
	.usercenter_cardWrap:hover .positionItem{color:#da6718;}
	.usercenter_cardWrap:nth-child(odd){
		margin-right:12px;
	}
	.vfortest{width:796px;margin-top:-12px;}
</style>
