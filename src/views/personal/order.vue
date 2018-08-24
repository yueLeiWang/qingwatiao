<template>
  <div>
	  <selfheader></selfheader>
		<div class="order_wrapMain">
		<div class="order_wrapFirst">
			<!--预约顶部左侧开始-->
			<div class="FirstAreaLeft">
				<el-form ref="form" :model="form" label-width="100px" style="margin-top:36px;" v-show="showflag">
					<div><img src="../../assets/images/yuyue3.png" class="yuyueicon"></div>
					<el-form-item label="预约企业" class="order_formItem1">								
						<el-select v-model="region1" placeholder="请选择" style="width:544px;">
									<el-option
									v-for="item in hangyeList"
									:key="item.value"
									:label="item.label"
									:value="item.label">
										<span>{{ item.label }}</span>
									</el-option>
						</el-select>								
					</el-form-item>
					<div><img src="../../assets/images/yuyue2.png" class="yuyueicon"></div>
					<el-form-item label="预约职位" class="order_formItem">
						<selfselect @resultValue="resultvalue" :result="resulta" ref="selfselect1"></selfselect>
					</el-form-item>
					<div><img src="../../assets/images/yuyue1.png" class="yuyueicon"></div>
					<el-form-item label="预约薪资" class="order_formItem">
						<el-select v-model="region2" placeholder="请选择" style="width:544px;">
									<el-option
									v-for="item in jobivu"
									:key="item.value"
									:label="item.label"
									:value="item.label">
									<span style="float: left">{{ item.label }}</span>
									</el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<div class="order_formBottom">
							<button  type="button" class="selfbutton_cancel" @click="educationEditCan">取消</button>
							<button  type="button" class="selfbutton_ok"  @click="educationEditOk">确认</button>												
						</div>
					</el-form-item>														
				</el-form>
				<div v-show="showflagchart" class="order_matchPicWrap">
					<div class="order_chartArea">
						<div id="myChart" :style="{width: '280px', height: '200px',background:'#fff',margin:'0 auto',textAlign:'center',fontSize:'10px'}"></div>		
					</div>
					<div class="order_matchWrap">
						想要更合适的职位，我们推荐您使用<br/>
						<button class="selfbutton_ok order_curriculum"   @click="gotishen">产品经理提升课程</button>
					</div>
				</div>
				<div v-show="showflagpic" class="order_matchPicWrap" >
					<div class="order_matchPic">
						<img src="../../assets/images/yuyueres.png" />		
					</div>
					<div class="order_matchWrap">
						系统将持续为您匹配合适职位 <br/>
						请您耐心等待...<br/>
						<p  @click="goTest" class="order_promoteMatch">快速提升匹配度</p>
					</div>
				</div>																		
			</div>
			<!--预约顶部左侧结束-->
			<!--预约顶部右侧开始-->		
			<div class="FirstAreaRight">
					<div v-show="showflaga" class="order_recommendEmpty">
						暂时没有预约消息
					</div>
					<div v-show="showflagb">
						<div class="order_recommendItemWrap">我的预约</div>
						<div class="order_recommendItem" >
								<div class="order_companyInfWrap">
											<p class="order_positionName">前端开发工程师</p>
											<p class="order_companyName">百度 | 年薪100w</p>
								</div>
								<div class="look"  >
									<span @click="gotoposition" class="order_editButton" >编辑</span><span class="order_deleteButton">删除</span>
								</div>
						</div>
						<div class="order_recommendItem">
								<div class="order_companyInfWrap">
											<p class="order_positionName">产品经理</p>
											<p class="order_companyName">百度 | 年薪100w</p>
								</div>
								<div class="look"  >
									<span @click="gotoposition" class="order_editButton">编辑</span><span class="order_deleteButton">删除</span>
								</div>						 
						</div>
						<div class="order_recommendArea">
								<div class="order_addRecommend"  @click="addsubscribe">添加更多预约</div>
						</div>
						
					</div>						
			</div>
			<!--预约顶部右侧结束-->
			<!--预约推荐部分开始-->	
			<div class="clearfix"></div>
			<div v-show="!showflag" class="order_recommend">预约推荐</div>
			</div>
			<div class="clearfix"></div>
			<div class="order_listWrap"  v-show="!showflag">
					<div  class="usercenter_cardWrap" v-for="item in 6" :key="item" @click="gotoposition">
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
		<div class="order_footer"></div>
  </div>
</template>
<script type="text/javascript">
  import selfheader from '../../components/publicHeader'
  import selfselect from '../../components/selfselect1'
  export default{
	name:'order',
	components:{
    selfheader,
		selfselect
  },
	 data(){
		return {
			showflagpic:false,
			resulta:'',
			region2:'',
			region1: '',
			showflag:true,
			showflaga:true,
			showflagchart:false,
			showflagb:false,
			form: {
			}	,
			jobivu:[
					{
					value: '1',
					label: '年薪10万以下'
					}, {
					value: '2',
					label: '年薪10-30万'
					}, {
					value: '3',
					label: '年薪30-50万'
					}, {
					value: '4',
					label: '年薪50-100万'
					}, {
					value: '5',
					label: '年薪百万以上'
					}
			],
			hangyeList:[
				{
				value: '1',
				label: '国有企业'
				}, {
				value: '2',
				label: '外商独资'
				}, {
				value: '3',
				label: '知名企业'
				}, {
				value: '4',
				label: '上市公司'
				}, {
				value: '5',
				label: '创业公司'
				}
			],									
		}
	 },
	 methods: {
		gotoposition(){
			this.$router.push({name:'positioninfo'})
	    },	
      	educationEditCan() {
			this.resulta='';
			this.region2='';
			this.region1= '';
			this.$refs.selfselect1.clearItem()
      	},
      	educationEditOk() {
			var arrdata=[20, 75, 70, 78, 82, 74]
			this.drawLine(arrdata);
			this.$message({
				type: "success",
				message: "预约成功"
			});			  
			this.showflag=false
			this.showflagpic=true;
			this.showflagb=true;
			this.showflaga=false;
      	},
	  	resultvalue(value){
			this.resulta=value;
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
							grid: { // 控制图的大小，调整下面这些值就可以，
								x: 0,
								x2: 0,
								y2: 0// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
							},							
							legend: {
								enabled: false
							},
							radar: {
									nameGap :1, // 图中工艺等字距离图的距离
									splitNumber: 3, // 网格线的个数
									center:['50%','50%'], // 图的位置
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
													color : "blue", // 图表中各个图区域的边框线拐点颜色
													lineStyle: {
														width : 1,
														color : '#286fbb' // 图表背景网格线的颜色
													},
													areaStyle: {


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
		goTest(){
			this.showflagpic=false;
			this.showflagchart=true;
			this.showflaga=true;
			this.showflagb=false;
		},
		gotishen(){
			
			var arrdata=[50, 75, 70, 78, 82, 74]
			this.drawLine(arrdata);
		},
		addsubscribe(){
			this.showflagpic=false;
			this.showflagchart=false;
			this.showflag=true;
			this.showflaga=true;
			this.showflagb=false;
			this.resulta='';
			this.region2='';
			this.region1= '';			
		}		 					 	
	 },
	 mounted() {
	 }	 
  }
</script>
<style scoped>
	.order_addRecommend{text-align:center;color:#da6718;cursor:pointer}
	.order_recommendArea{width:340px;height:70px;margin:0 auto;}
	.order_companyInfWrap{width:240px;float:left;height:70px;}
	.order_positionName{line-height: 35px;}
	.order_companyName{line-height: 35px;color:#b5b8c2}
	.order_editButton{cursor:pointer}
	.order_editButton:hover{color:#da6718;}
	.order_deleteButton{margin-left:20px;cursor:pointer}
	.order_deleteButton:hover{color:#da6718;}
	.order_matchWrap{width:393px;float:left;margin-top:116px;font-size:16px;}
	.order_promoteMatch{margin-top:10px;color:#fea66b;cursor:pointer}
	.order_promoteMatch:hover{color:#da6718;}
	.order_curriculum{width:120px;margin-top:10px;}
	.order_chartArea{width:398px;margin-top:30px;float:left;}
	.order_formItem{margin-left:50px;margin-bottom:30px;}
	.order_formItem1{margin-left:50px;margin-bottom:20px;}
	.order_formBottom{text-align:right;padding-right:100px;padding-bottom:20px;}
	.order_matchPicWrap{width:791px;text-align:center;float:left;height:280px;}
	.order_matchPic{width:398px;margin-top:98px;float:left;}
	.order_recommendEmpty{width:392px;height:280px;line-height:280px;text-align:center;color:#ccc;font-size:16px;}
	.order_recommendItemWrap{width:392px;margin-top:30px;padding-left:30px;color:#da6718;font-size:16px;font-weight:600;padding-bottom: 10px;}
	.order_recommendItem{width:340px;height:70px;margin:0 auto;margin-bottom:10px;border-bottom:1px dashed #d9d9d9}
	.order_recommend{width:1200px;height:40px;line-height:40px;text-align:left;font-size:16px;margin-bottom:20px;}
	.order_listWrap{width:1200px;float:left;margin-top:35px;}
	.order_footer{width:1200px;float:left;height:30px;background:#f3f3f3;margin-top:30px;}
    .look{width:100px;float:left;height:70px;line-height:70px;text-align:right;cursor:pointer;color:#b5b8c2}
    .yuyueicon{position:absolute;margin-top:10px;margin-left:52px;}
	.FirstAreaLeft{width:791px;float:left;background:#fff;padding-bottom: 20px;height:280px;}
	.FirstAreaRight{width:392px;float:right;padding-bottom:20px;background:#fff;height:280px;margin-right:8px;}
    .order_wrapMain{width:1200px;margin:0 auto;}
	.order_wrapFirst{width:1200px;float:left;height:300px;margin-top:18px;text-align:left;}
	.usercenter_cardWrap{width:392px;float:left;margin-right:8px;margin-top:8px;height:170px;background:#fff;cursor:pointer;}
	.usercenter_cardWrap:hover .positionItem{color:#da6718}
	.positionItem{width:262px;float:left;text-align:left;padding-left:30px;font-size:18px;color:#fea66b}
	.mouthsalyItem{width:100px;float:left;font-size:17.5px;color:#fe6b6b;font-family: DIN Alternate}
	.usercenter_listitemInf{margin-top:10px;float:left;width:392px;border-bottom:1px solid rgba(176,176,176,0.19);padding-bottom:10px;}
	.usercenter_listcontentwrap{width:262px;float:left;text-align:left;padding-left:30px;font-size:15px;color:#b0b0b0}
	.usercenter_companyInfWrap{margin-top:20px;float:left;width:392px;}
	.usercenter_companyInfPic{width:122px;float:left;}
	.usercenter_companyInfImg{width:50px;height:50px;margin-left:30px;}
	.usercenter_companyInfName{width:240px;float:left;padding-left:30px;text-align:left;color:#b0b0b0;font-size:14px}
</style>
