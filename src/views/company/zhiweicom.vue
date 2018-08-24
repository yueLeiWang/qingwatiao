<template>
  <div class="positionSubWrap">
	    <publicheadercom></publicheadercom>
      <div class="maincontentWrap">
										<div style="width:1100px;margin:0 auto;">
											<div style="font-size:18px;">职位信息</div>																					
											<el-form  :model="jobIntensionform" label-width="90px" label-position="left" style="margin-left:30px;padding-top:50px;">									
												<el-row>
													<el-col :span="12">
														<el-form-item label="公司名称:" prop="companyName" style="width:360px;" >
																<el-input
																v-model="jobIntensionform.companyName"														
																placeholder="请输入公司名称">
																</el-input>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="职位类型"  prop="positionType" style="width:360px;">
																<selfselectsingle :dialogtitle="itemname1" @resultValue="resultvalue1" :resulta="resultValue"></selfselectsingle>															
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<el-col :span="12">
														<el-form-item label="职位名称:" prop="positionName" style="width:360px;">
																<el-input
																v-model="jobIntensionform.positionName"														
																placeholder="请输入职位名称">
																</el-input>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="工作城市"  prop="workCity" style="width:360px;">
															<el-select v-model="jobIntensionform.workCity" placeholder="请选择" style="width:272px;" popper-class="searchrecom_select">
																	<el-option
																	v-for="item in options2"
																	:key="item.value"
																	:label="item.label"
																	:value="item.value">
																	<span style="float: left">{{ item.label }}</span>
																	</el-option>
																</el-select>
														</el-form-item>											
													</el-col>
												</el-row>											
												<el-row>
													<el-col :span="24">
														<el-form-item label="工作地址:" prop="jobLocation" style="width:360px;">
																<el-input
																v-model="jobIntensionform.jobLocation"														
																placeholder="请输入职位类型">
																</el-input>									
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<div  style="font-size:18px;margin-bottom:30px;">职位要求</div>
												</el-row>
												<el-row>
													<el-col :span="12">
														<el-form-item label="工作性质:" prop="workType" style="width:360px;" >
															<el-radio-group v-model="jobIntensionform.workType" style="width:272px;" class="selfRadio">
																<el-radio-button label="全职"></el-radio-button>
																<el-radio-button label="兼职"></el-radio-button>
																<el-radio-button label="实习"></el-radio-button>
															</el-radio-group>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="薪资范围:"  prop="monthSalary" style="width:360px;">
															<el-select v-model="jobIntensionform.monthSalary" placeholder="请选择" style="width:272px;" popper-class="searchrecom_select">
																	<el-option
																	v-for="item in jobivu"
																	:key="item.value"
																	:label="item.label"
																	:value="item.value">
																	<span style="float: left">{{ item.label }}</span>
																	</el-option>
																</el-select>
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<el-col :span="12">
														<el-form-item label="选择经验:" prop="experience" style="width:360px;">
															<el-select v-model="jobIntensionform.experience" placeholder="请选择" style="width:272px;" popper-class="searchrecom_select">
																	<el-option
																	v-for="item in options3"
																	:key="item.value"
																	:label="item.label"
																	:value="item.value">
																	<span style="float: left">{{ item.label }}</span>
																	</el-option>
																</el-select>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="选择学历:"  prop="Education" style="width:360px;">
															<el-select v-model="jobIntensionform.Education" placeholder="请选择" style="width:272px;" popper-class="searchrecom_select">
																	<el-option
																	v-for="item in options1"
																	:key="item.value"
																	:label="item.label"
																	:value="item.value">
																	<span style="float: left">{{ item.label }}</span>
																	</el-option>
																</el-select>
														</el-form-item>											
													</el-col>
												</el-row>																								
												<el-row>
													<el-col :span="24">
														<el-form-item label="职位描述:" prop="description" style="width:450px;margin-top:6px;">
															<el-input
															type="textarea"					
															:rows="5"
															v-model="jobIntensionform.description"														
															placeholder="请输入职位描述(0-1000字)">
															</el-input>
														</el-form-item>											
													</el-col>
												</el-row>										
												<el-form-item>
													<div style="text-align:right;padding-right:20px;padding-bottom:20px;">
														<button  type="button" class="selfbutton_cancel1" @click="workAreaEditCan">取消</button>
														<button  type="button" class="selfbutton_ok1"  @click="workAreaEditOk">发布</button>												
													</div>
												</el-form-item>																																																											
											</el-form>									
										</div>				
			</div>
		  <div style="width:1200px;float:left;height:30px;background:#f3f3f3;"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  import selfselectsingle from '@/components/selfselectsingle'
  export default{
	name:'usercenter',
	components:{
		publicheadercom,
		selfselectsingle
	},
	 data(){
		return {
			itemname1:'职位类型',
			username:'',
			jobIntensionform:{
				workType:'',
				monthSalary:'',
				Education:'',
				positionType:'',
				positionName:'',
				workCity:'',
				experience:'',
				jobLocation:'',
				description:'',
				companyName:''
			},
			options1: [{
				value: '1',
				label: '全部'
			}, {
				value: '2',
				label: '专科'
			}, {
				value: '3',
				label: '本科'
			},{
				value: '4',
				label: '硕士'
			},{
				value: '5',
				label: '博士'
			},{
				value: '6',
				label: '博士后'
			}
			],			
			jobivu:[{
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
			options2: [
          {
						value:'1',
						label: '北京'
					}, {
						value:'2',
						label: '上海'
					},{
						value:'3',
						label: '深圳'
					},{
						value:'4',
						label: '青岛'
					},{
						value:'14',
						label: '济南'
					},{
						value:'5',
						label: '杭州'
					},{
						value:'6',
						label: '广州'
					},{
						value:'7',
						label: '厦门'
					},{
						value:'8',
						label: '成都'
					},{
						value:'9',
						label: '重庆'
					},{
						value:'10',
						label: '云南'
					},{
						value:'11',
						label: '郑州'
					},{
						value:'12',
						label: '武汉'
					},{
						value:'13',
						label: '长沙'
					}
			],
			options3: [
				{
				value: '1',
				label: '0-1年'
				}, {
				value: '2',
				label: '1-3年'
				}, {
				value: '3',
				label: '4-6年'
				}, {
				value: '4',
				label: '6-9年'
				}, {
				value: '5',
				label: '10年以上'
				}
			],
			resultValue:'',
																		
		}
	 },
	 methods: {
		resultvalue1(value){
			 this.resultValue=value
			 this.jobIntensionform.positionType=value;
		 },	 	
		//发布职位按钮点击
		workAreaEditOk(){
			//  let data = {
			// 	id:12345,
			// 	name:'name'
			// };
			this.$router.push({ name: 'poitionlist'});			
		},
        workAreaEditCan(){

		}
	 },
	mounted(){
    if(this.$route.params.showinf){		
		this.resultValue='web前端开发'
		this.jobIntensionform={
					workType:'全职',
					monthSalary:'9',
					Education:'3',
					positionType:'',
					positionName:'高级前端开发工程师',
					workCity:'1',
					experience:'3',
					jobLocation:'北京朝阳区望京',
					description:'',
					companyName:'cyberbay1'
		}
		this.jobIntensionform.positionType='web前端开发'		
	}
		
	}
  }
</script>
<style scoped>
.positionSubWrap{width:100vm;height:100vh;background:#f3f3f3;}
.maincontentWrap{width:1200px;margin:0 auto;margin-top:10px;background:#fff;padding-top:20px;}
</style>
