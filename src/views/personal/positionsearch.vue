<template>
  <div class="positionsearchWrap">
	    <!-- 企业页面公共头 -->
	    <selfheader></selfheader>
		<div class="positionsearch_contentWrap">
            <div class="positionsearch_headerSearchWrap">
				<div class="positionsearch_SearchBar">
					<el-input class="positionsearch_searchInput" v-model="searchkeywrod" placeholder="请输入搜索关键词"></el-input>
					<el-button class="positionsearch_searchButton" @click="searchFun">搜索</el-button>
				</div>
				<div class="positionsearch_Searchcondition">
                        <div class="searchWrod">
							<div class="tijianName">行业:</div>
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
							<div class="tijianName">薪资待遇:</div>
							<div>
								<ul class="tabWrodWrap"  >
									<li v-for="(item,index) in mounthList" :key="index" @click="hangye3(index,item.value)" :class="{'active':isActive3==index}">{{item.label}}</li>
								</ul>
							</div>
						</div>
						<div class="searchWrod">
							<div class="tijianName marginTop10">其他:</div>
							<div>
							<ul class="tabWrodWrap">
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
										v-for="item in options5"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<li class="selectWidth margintz">  
									<el-select v-model="value4" placeholder="融资情况">
										<el-option
										v-for="item in options6"
										:key="item.value"
										:label="item.label"
										:value="item.value">
										</el-option>
									</el-select>
								</li>
								<div class="positionsearch_clearButton">清空筛选条件</div>																																						
							</ul>
							
							</div>
						</div>											
				</div>
			</div>
			<div class="positionsearch_positionListWrap" v-if="!showFlag">
                 <div class="positionsearch_promit">暂无搜索结果，请选择搜索条件，点击搜索按钮完成搜索！</div>
			</div>
			<div class="positionsearch_positionListWrap1" v-if="showFlag">
                 <div class="positionsearch_listitem" v-for="(item,index) in listOptions" :key="index" @click="gopositioninfo()">
                       <div class="positionsearch_listLeft">
                           <p class="positionsearch_listLeftoneline">
							   <span class="positionsearch_positionName">{{item.positionName}}</span>
							   <span class="positionsearch_monthlySalary">{{item.monthlySalary}}</span>
						   </p>
						   <p class="positionsearch_listLefttwoline">
                             <span>{{item.place}}</span>|<span>{{item.workExperience}}</span>|<span>{{item.education}}</span>
						   </p>
					   </div>
					   <div class="positionsearch_listRight">
                           <p class="positionsearch_listLeftoneline">
							   <span class="positionsearch_companyName">{{item.companyName}}</span>
						   </p>
						   <p class="positionsearch_listLefttwoline">
                             <span>{{item.industry}}</span>|<span>{{item.financingSituation}}</span>|<span>{{item.scale}}</span>
						   </p>
					   </div>
				 </div>
			</div>			
		</div>
		<div class="pagefooterEmpty"></div>
  </div>
</template>
<script type="text/javascript">
  import selfheader from '../../components/publicHeader'
  export default{
	name:'searchrecom',
	components:{
    	selfheader
  	},
	 data(){
		return {
			listOptions:[
				{
					positionName:'高级前端开发工程师',					
					monthlySalary:'25k-35k',
					place:'北京',
					workExperience:'3年经验',
					education:'本科',
					companyName:'深度智耀科技有限公司',
					industry:'移动互联网',
					financingSituation:'不需要融资',
					scale:'100-299人'
				},
				{
					positionName:'高级前端开发工程师',					
					monthlySalary:'25k-35k',
					place:'北京',
					workExperience:'3年经验',
					education:'本科',
					companyName:'云端网络有限公司',
					industry:'移动互联网',
					financingSituation:'不需要融资',
					scale:'100-299人'
				},
				{
					positionName:'高级前端开发工程师',					
					monthlySalary:'25k-35k',
					place:'北京',
					workExperience:'3年经验',
					education:'本科',
					companyName:'和智传信科技有限公司',
					industry:'移动互联网',
					financingSituation:'不需要融资',
					scale:'100-299人'
				},
			],
			searchkeywrod:'',//搜索关键词
			value4:'',
			value3:'',			
			value2:'',
			value1:'',
			value:'',
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
					label: '互联网/IT'
				},{
					value:'2',
					label: '金融'
				},{
					value:'3',
					label: '传媒'
				},{
					value:'4',
					label: '服务业'
				},{
					value:'5',
					label: '教育/艺术'
				},{
					value:'6',
					label: '其他'
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
			mounthList:[ 
				{
					value:'0',
					label: '不限'
				}, {
					value:'1',
					label: '2k以下'
				},{
					value:'2',
					label: '2k-4k'
				},{
					value:'3',
					label:'4k-8k'
				},{
					value:'4',
					label:'8k-10k'
				},{
					value:'5',
					label:'10k-15k'
				},{
					value:'6',
					label:'15k-25k'
				},{
					value:'7',
					label:'25k以上'
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
		//
		gopositioninfo(){
			this.$router.push({name:'positioninfo'})
		}									
	 },
	mounted(){
	}
  }
</script>
<style scoped>
	.positionsearch_companyName{color:#636363;font-size:16px;}
	.positionsearch_positionName{color:#fea66b;font-size:18px;}
	.positionsearch_monthlySalary{margin-left:30px;color:#fe6b6b;font-size:18px;font-family: DIN Alternate}
	.positionsearch_clearButton{float:right;width:120px;margin-right:32px;margin-top:10px;color:#aeaeae;cursor:pointer;}
	.positionsearch_clearButton:hover{color:#da6718}
    .active{color:#da6718}
	.selectWidth{width:150px;}
	.margintz{margin-left:5px !important;margin-right:5px !important;}
	.tijianName{width:70px;text-align:left;color:#d3d3d3;position:absolute;font-size:14px;}
	.tabWrodWrap li{display:inline-block;margin: 0 10px;cursor:pointer;}
 	.tabWrodWrap{margin-top:20px;width:1100px;margin-left:100px;text-align:left;}
	.positionsearchWrap{width:100vm;height:100vh;background:#f3f3f3;}
	.positionsearch_contentWrap{width:1200px;margin:0 auto;margin-top:10px;}
    .positionsearch_headerSearchWrap{width:1200px;height:280px;background:#fff;padding-top:30px;}
	.positionsearch_SearchBar{width:1100px;height:40px;margin:0 auto;text-align:left;}
	.positionsearch_searchInput{width:999px;vertical-align:baseline;float:left;}
	.positionsearch_searchButton{background:#da6718;width:100px;border-color:#da6718;font-size:18px;color:#fff;height:40px;border-radius:0px;vertical-align:baseline;margin-left:-1px;}
	.positionsearch_Searchcondition{width:1100px;height:210px;margin:0 auto;margin-top:20px;}
	.positionsearch_positionListWrap{width:1200px;height:300px;background:#fff;margin-top:10px;}
	.positionsearch_promit{padding-top:150px;}
	.positionsearch_positionListWrap1{width:1200px;margin-top:10px;padding-bottom:20px;background:#fff;}
	.positionsearch_listitem{width:1160px;height:100px;margin:0 auto;border-bottom:1px solid #f3f3f3;background:#fff;cursor:pointer}
	.positionsearch_listLeft{width:800px;height:100px;float:left;text-align:left;}
	.positionsearch_listitem:hover .positionsearch_positionName{color:#da6718} 
	.positionsearch_listLeftoneline{margin-top:30px;padding-left:30px}
	.positionsearch_listLefttwoline{margin-top:10px;padding-left:30px;font-size:15.05px;color:#999;}
	.positionsearch_listRight{width:360px;height:100px;float:right;text-align:right;}
	.pagefooterEmpty{width:1200px;height:30px;background:#fff;margin:0 auto;}

</style>
