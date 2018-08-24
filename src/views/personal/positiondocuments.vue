<template>
  <div class="posDocWrap">
	  <selfheader></selfheader>
		<div class="posDoc_contentwrap" >
			<div class="posDoc_contentBottomwrap">
				<div class="posDoc_mainLeftwrap">
					<div class="posDoc_tabsWrap">
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="全部" name="first">
                                <div class="positionItemListWrap"  v-for="(item,index) in listOptions" :key="index">
									<div class="positionItemListLWrap">
                                         <p class="marginTop20">
											 <div class="textOverflowStyleDot posDoc_positionName">{{item.positionName}}</div>
											 <div class="posDoc_monthlySalary">{{item.monthlySalary}}</div>
										 </p>
										 <div class="clearfix"></div>
										 <p class="marginTop10 posDoc_companyName">{{item.companyName}}</p>
									</div>
									<div class="positionItemListRWrap">
                                         <p class="marginTop20">
											 <span class="posDoc_deliverStatus">{{item.deliverStatus}}</span>
										</p>
										 <p class="marginTop10 posDoc_deliverDate">{{item.deliverDate}}</p>
									</div>
								</div>
							</el-tab-pane>
							<el-tab-pane label="已投递" name="delivered">
                                <div class="positionItemListWrap"  v-for="(item,index) in listOptions" :key="index">
									<div class="positionItemListLWrap">
                                         <p class="marginTop20">
											 <div class="textOverflowStyleDot posDoc_positionName">{{item.positionName}}</div>
											 <div class="posDoc_monthlySalary">{{item.monthlySalary}}</div>
										 </p>
										 <div class="clearfix"></div>
										 <p class="marginTop10 posDoc_companyName">{{item.companyName}}</p>
									</div>
									<div class="positionItemListRWrap">
                                         <p class="marginTop20">
											 <span class="posDoc_deliverStatus">{{item.deliverStatus}}</span>
										</p>
										 <p class="marginTop10 posDoc_deliverDate">{{item.deliverDate}}</p>
									</div>
								</div>
							</el-tab-pane>
							<el-tab-pane label="已查看" name="interested">
								<div class="noinfo">暂无“已查看”信息</div>
							</el-tab-pane>
							<el-tab-pane label="被邀请" name="invited">								
								<div class="noinfo">暂无“被邀请”信息</div>
							</el-tab-pane>
							<el-tab-pane label="不合适" name="recommended">
								<div class="noinfo">暂无“不合适”信息</div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</div>
				<div class="posDoc_mainRightwrap">
					<div class="posDoc_Rtwowrap">
						<span class="posDoc_similar">推荐职位</span>
					</div>
					<div class="posDoc_Rthreewrap" v-for="(item,index) in similarList" :key="index" @click="goPositioninfo">
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
			activeName: 'first',
			listOptions:[
				{
					positionName:'高级前端开发工程师',					
					monthlySalary:'25k-35k',
					companyName:'深度智耀科技有限公司',
					deliverDate:'2018-04-03 14:37',
					deliverStatus:'投递成功'

				},
				{
					positionName:'高级前端开发工程师',					
					monthlySalary:'25k-35k',
					companyName:'云端网络有限公司',
					deliverDate:'2018-04-03 14:37',
					deliverStatus:'投递成功'
				},
				{
					positionName:'前端工程师',					
					monthlySalary:'25k-35k',
					companyName:'和智传信科技有限公司',
					deliverDate:'2018-04-03 14:37',
					deliverStatus:'投递成功'
				},
				{
					positionName:'前端开发工程师',					
					monthlySalary:'25k-35k',
					companyName:'北京九章云极科技有限公司',
					deliverDate:'2018-04-03 14:37',
					deliverStatus:'投递成功'

				},
				{
					positionName:'web前端开发工程师',					
					monthlySalary:'25k-35k',
					companyName:'树根互联科技有限公司',
					deliverDate:'2018-04-03 14:37',
					deliverStatus:'投递成功'
				},
				{
					positionName:'中级前端开发工程师',					
					monthlySalary:'15k-20k',
					companyName:'盈威科技有限公司',
					deliverDate:'2018-04-03 14:37',
					deliverStatus:'投递成功'
				}				
			],
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
		 goPositioninfo(){
			this.$router.push({name:'positioninfo'}) 
		 },
		handleClick(tab, event) {
			console.log(tab, event);
		}	
	 },
	 mounted() {
		 if(this.$route.params.status != undefined && this.$route.params.status != 'recommended'){
            this.activeName=this.$route.params.status
		 }
		 
	 }	 
  }
</script>
<style scoped>
    .noinfo{padding-top:260px;font-size:16px;color:#999;}
	.similarpositionName{font-size:16px;color:#333;}
	.similarmonthlySalary{font-size:14px;color:#fe7878;font-family:DINAIternate}
	.similarcompanyName{font-size:14px;color:#999;}
    .similarCompanyinfo{width:252px;height:90px;float:left;padding-left:20px;}
	.similarCompanyLogo{width:70px;height:70px;border-radius:6px;border:1px solid #ccc;line-height:70px;margin-left:20px;float:left;}
	.posDocWrap{width:100vm;height:100vh;background:#f3f3f3;}
	.posDoc_contentwrap{width:1200px;margin:0 auto;margin-top:10px;}
	.posDoc_contentBottomwrap{width:1200px;margin:0 auto;background:#f3f3f3}
	.posDoc_mainLeftwrap{width:796px;float:left;height:800px;background:#f3f3f3}
	.posDoc_mainRightwrap{width:392px;float:left;margin-left:12px;background:#fff;padding-bottom:20px;}
	.posDoc_Rtwowrap{width:372px;height:30px;margin:0 auto;margin-top:20px;text-align:left}
	.posDoc_Rthreewrap{width:372px;margin:0 auto;margin-top:20px;text-align:left;height:90px;border-bottom:1px dashed #f3f3f3;cursor:pointer}
	.posDoc_Rthreewrap:hover .similarpositionName{color:#da6718}
	.posDoc_similar{width:242px;display:block;float:left;margin-left:20px;color:#333;font-size:16px;}
	.posDoc_tabsWrap{width:796px;height:40px;background:#fff;}
	.positionItemListWrap{width:776px;margin:0 auto;height:90px;border-bottom:1px dashed #f3f3f3;cursor:pointer;}
	.positionItemListWrap:hover .posDoc_positionName{color:#da6718}
	.positionItemListLWrap{width:566px;height:90px;margin-left:30px;float:left;text-align:left;}
	.positionItemListRWrap{width:180px;height:90px;float:left;}
	.posDoc_positionName{font-size:18px;color:#fea66b;float:left;width:180px;}
	.posDoc_monthlySalary{font-size:18px;font-family: DIN Alternate;margin-left:20px;float:left;width:180px;color:#fe6b6b}
	.posDoc_companyName{font-size:14px;color:#999;}
	.posDoc_deliverStatus{color:#333;font-size:14px;}
	.posDoc_deliverDate{color:#ccc;font-size:14px;}
</style>
