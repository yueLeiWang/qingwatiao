<template>
  <div class="positioninfoWrap">
	  <selfheader></selfheader>
		<div class="positioninfo_contentwrap" >
			<div class="positioninfo_contentTopwrap">
				<div class="positioninfo_topLeftwrap">
					<p class="positioninfo_onebar">
						<span class="positioninfo_positionName">{{jobSeekerInf.positionName}}</span>
						<span class="positioninfo_monthlySalary">{{jobSeekerInf.monthlySalary}}</span>
					</p>
					<p class="positioninfo_twobar">
						<span>{{jobSeekerInf.place}}</span>|<span>{{jobSeekerInf.workExperience}}</span>|<span>{{jobSeekerInf.education}}</span>
					</p>
				</div>
				<div class="positioninfo_topRightwrap">
					<p class="positioninfo_rightonewrap">
						<img src="../../assets/images/indexstart.png" class="iconImgPub"><span class="collectionAction">收藏</span>
					</p>
					<p class="positioninfo_righttwowrap">
						<el-button class="positionsearch_searchButton" @click="searchFun">投简历</el-button>
					</p>
					<p class="positioninfo_rightthreewrap">
					<span>{{jobSeekerInf.releaseDate}}发布</span>
					</p>
				</div>
			</div>
			<div class="positioninfo_contentBottomwrap">
				<div class="positioninfo_mainLeftwrap">
					<p><span class="positioninfo_itemTitle">职位诱惑：</span></p>
					<p>六险一金，高薪期权，弹性工作，免费三餐</p>
					<p><span class="positioninfo_itemTitle">岗位职责:</span></p>
					<p>1. 核心产品的规划及产品发展方向的整体把握和工作部署，结合公司发展战略，全面策划及统筹产品的发展规划，明晰定位、目标、策略并落实、实施；</p>
					<p>2. 规划、设计公司WEB端及移动应用平台产品；负责产品相关文档撰写(包括逻辑流程、用例分析、原型、PRD、开发详细设计)；</p>
					<p>3. 管理过程体系的建设，包括流程、制度、模板、工具的发布与执行；团队管理工作，部门间的协调沟通，推动产品设计、研发、测试、上线，对产品质量负责；</p>
					<p>4. 负责产品的市场调研、竞争对手分析; 负责跟踪用户使用情况及品运营数据，深度挖掘用户需求，对产品进行持续的设计优化，提升用户体验；</p>
					<p>公司产品相关的内外部产品宣讲，配合市场推广活动，以及售前支持</p>
					<p><span class="positioninfo_itemTitle">职位要求：</span></p>
					<p>1、统招本科学历，3-5年工作经验</p>
					<p>2、良好的设计和编码品味，热爱写代码，能产出高质量的设计和代码；</p>
					<p>3、掌握WEB前端开发技术：JavaScript（含ES6）、HTML、CSS、DOM、协议、安全等；有良好的产品意识；</p> 
					<p>4、积极乐观，认真负责，乐于协作。</p>
					<p><span class="positioninfo_itemTitle">工作地址:</span></p>
					<p>
						<span class="positioninfo_address">北京 - 海淀区 - 北京市海淀区北三环西路43号中航广场</span>
						<span class="positioninfo_mapbut" @click="markLocation('container','北京市海淀区双榆树北路11号')">查看地图</span>
					</p>
					<div class="map-container" id="container"></div>
				</div>
				<div class="positioninfo_mainRightwrap">
					<div class="positioninfo_Rightonewrap">
						<p class="positioninfo_companyLogo">
							<img src="../../assets/images/companyLogo1.png" style="border-radius:6px;">
						</p>
						<p class="marginTop20 positioninfo_compayname">深度智耀科技有限公司</p>
						<p class="marginTop20 positioninfo_compayinfo">移动互联网|不需要融资|100-299人</p>
						<p class="marginTop20 positioninfo_compayinter">http://www.bytedance.com</p>
					</div>
					<div class="positioninfo_Rtwowrap">
						<span class="positioninfo_similar">相似职位</span>
						<span class="positioninfo_moresimilar" @click="moresimilar">更多相似职位</span>
					</div>
					<div class="positioninfo_Rthreewrap" v-for="(item,index) in similarList" :key="index">
						<div class="similarCompanyLogo">
							<img :src="item.companyLogo" style="width:100%;height:100%;"/>
						</div>
						<div class="similarCompanyinfo">
							<p class="similarpositionName" >{{item.positionName}}</p>
							<p class="similarmonthlySalary">{{item.monthlySalary}}</p>
							<p class="marginTop10 similarcompanyName">{{item.companyName}}</p>
						</div>						
					</div>					
				</div>
			</div>
		</div>		
  </div>
</template>
<script type="text/javascript">
	import logo4 from '@/assets/images/companyLogo2.png'
	import logo3 from '@/assets/images/companyLogo3.png'
	import logo1 from '@/assets/images/companyLogo4.png'
	import logo2 from '@/assets/images/companyLogo5.png'
  import selfheader from '../../components/publicHeader'
  export default{
	name:'jianli',
	components:{
    selfheader
  },
	 data(){
		return {
			jobSeekerInf:{
					positionName:'高级前端开发',					
					monthlySalary:'20k-40k',
					place:'北京',
					workExperience:'3年经验',
					education:'本科',
					releaseDate:'2018年7月27日'
			},
			similarList:[
				{
					positionName:'web前端开发工程师',					
					monthlySalary:'25k-35k',
					companyName:'云端网络（北京）',
					companyLogo:logo1					
			    },
				{
					positionName:'高级前端开发工程师',					
					monthlySalary:'25k-35k',
					companyName:'和智传信（北京）',
					companyLogo:logo2					
			    },
				{
					positionName:'高精地图web前端开发',					
					monthlySalary:'25k-35k',
					companyName:'百度(北京）',
					companyLogo:logo3					
			    },
				{
					positionName:'web前端',					
					monthlySalary:'25k-35k',
					companyName:'智慧金融(北京）',
					companyLogo:logo4					
			    }												
			],

		}
	 },
	 methods: {
		 searchFun(){
		 },	
		 moresimilar(){
			 
		 },
		 //查看地图
		markLocation(mapId, address) {
			AMap.plugin('AMap.Geocoder', function() {
				var geocoder = new AMap.Geocoder();            
				geocoder.getLocation(address, function(status, result) {
					if (status === 'complete' && result.info === 'OK') {
						// 经纬度                      
						var lng = result.geocodes[0].location.lng;
						var lat = result.geocodes[0].location.lat;
                        //console.log(result)
						// 地图实例
						var map = new AMap.Map(mapId, {
							resizeEnable: true, // 允许缩放
							center: [lng,lat], // 设置地图的中心点
							zoom: 14 　　　　　　 // 设置地图的缩放级别，0 - 20
						});						
						// 添加标记
						var marker = new AMap.Marker({
							map: map,
							position: new AMap.LngLat(lng,lat),   // 经纬度
						});
					} else {
						console.log('定位失败！');
					}
				});
			});
		}		 	
	 },
	 mounted() {
	 }	 
  }
</script>
<style scoped>
	.map-container{width:776px;height:300px;margin:0 auto;margin-top: 60px;}
	.similarpositionName{font-size:16px;color:#333;}
	.similarmonthlySalary{font-size:14px;color:#fe7878;font-family:DINAIternate}
	.similarcompanyName{font-size:14px;color:#999;}
    .similarCompanyinfo{width:252px;height:90px;float:left;padding-left:20px;}
	.similarCompanyLogo{width:70px;height:70px;border-radius:6px;border:1px solid #ccc;line-height:70px;margin-left:20px;float:left;}
	.positioninfo_compayinfo{color:#999;font-size:14px;}
	.positioninfo_compayinter{color:#999;font-size:14px;}
	.positioninfo_compayname{color:#636363;font-size:16px;}
	.positioninfo_companyLogo{width:105px;height:105px;line-height:120px;margin:0 auto;border:1px solid #ccc;margin-top:30px;border-radius:6px;}
	.positioninfo_address{display:block;width:660px;float:left;}
	.positioninfo_mapbut{display:block;width:100px;float:left;color:#fea66b;}
	.positioninfo_mapbut:hover{color:#da6718}
	.positioninfoWrap{width:100vm;height:100vh;background:#f3f3f3;}
	.positioninfo_contentwrap{width:1200px;margin:0 auto;margin-top:10px;}
	.positioninfo_contentTopwrap{width:1200px;margin:0 auto;height:150px;background:#fff5ee}
	.positioninfo_contentBottomwrap{width:1200px;margin:0 auto;background:#f3f3f3}
	.positioninfo_mainLeftwrap{width:796px;float:left;height:800px;background:#fff;}
	.positioninfo_mainLeftwrap>p{
			text-align:left;
			width:760px;
			padding-left:30px;
			margin-top:10px;
			white-space:normal;
			font-size:14px;
	}
	.positioninfo_itemTitle{color:#fea66b;font-size:16px;}
	.positioninfo_mainRightwrap{width:392px;float:left;margin-left:12px;background:#fff;padding-bottom:20px;}
	.positioninfo_Rtwowrap{width:372px;height:30px;margin:0 auto;margin-top:20px;text-align:left}
	.positioninfo_Rthreewrap{width:372px;margin:0 auto;margin-top:20px;text-align:left;height:90px;border-bottom:1px dashed #f3f3f3;cursor:pointer}
	.positioninfo_Rthreewrap:hover .similarpositionName{color:#da6718}
	.positioninfo_similar{width:242px;display:block;float:left;margin-left:20px;color:#333;font-size:16px;}
	.positioninfo_moresimilar{width:100px;display:block;float:left;text-align:right;color:#999;font-size:14px;cursor:pointer;}
	.positioninfo_moresimilar:hover{color:#da6718}
	.positioninfo_Rightonewrap{width:372px;margin:0 auto;border-bottom:1px dashed #f3f3f3;padding-bottom:20px; }
	.positioninfo_topLeftwrap{width:1016px;height:150px;float:left;text-align:left;}
	.positioninfo_onebar{margin-top:50px;padding-left:30px;}
	.positioninfo_positionName{color:#fea66b;font-size:20px;}
	.positioninfo_monthlySalary{margin-left:30px;color:#fe6b6b;font-size:18px;font-family: DIN Alternate}	
	.positioninfo_twobar{margin-top:10px;padding-left:30px;font-size:16px;color:#999;}
	.positioninfo_topRightwrap{width:184px;height:150px;float:right;}
	.positioninfo_rightonewrap{margin-top:20px;cursor:pointer}
	.positioninfo_rightonewrap:hover .collectionAction{color:#da6718}
	.positioninfo_righttwowrap{margin-top:10px;}
	.positioninfo_rightthreewrap{margin-top:10px;font-size:14px;color:#ccc;}
	.iconImgPub{position:absolute;margin-top:-5px;}
	.collectionAction{margin-left:30px;color:#ff8269;}
	.positionsearch_searchButton{background:#da6718;width:100px;border-color:#da6718;font-size:18px;color:#fff;height:40px;border-radius:8px;}
</style>
