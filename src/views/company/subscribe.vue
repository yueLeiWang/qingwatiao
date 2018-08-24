<template>
  <div class="positionSubWrap">
	    <publicheadercom></publicheadercom>
      <div class="maincontentWrap">
										<div style="width:1100px;margin:0 auto;">
											<div style="font-size:18px;">预约人才</div>																					
											<el-form  :model="jobIntensionform" label-width="90px" label-position="left" style="margin-left:30px;padding-top:50px;">									
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
													<el-col :span="24">
														<el-form-item label="时间范围:"  prop="timeFrame" style="width:360px;">
																<el-date-picker
																v-model="value6"
																type="daterange"
																range-separator="-"
																start-placeholder="开始日期"
																end-placeholder="结束日期"
																 style="width:272px;">
																</el-date-picker>																
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
													<div style="padding-bottom:20px;">
														<button  type="button" class="selfbutton_cancel1" @click="workAreaEditCan">取消</button>
														<button  type="button" class="selfbutton_ok1"  @click="workAreaEditOk">开始预约</button>												
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
  export default{
	name:'subscribe',
	components:{
    publicheadercom
  },
	 data(){
		return {
			username:'',
			value6:'',
			jobIntensionform:{
				monthSalary:'4',
				Education:'3',
				positionName:'web前端开发工程师',
				experience:'3',
				description:'',
				timeFrame:'6',
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
			timeFrameList:[{
			value: '1',
			label: '1个月以内'
			}, {
			value: '2',
			label: '1-3个月以内'
			}, {
			value: '3',
			label: '3-5个月以内'
			}, {
			value: '4',
			label: '5-7个月以内'
			}, {
			value: '5',
			label: '7-9个月以内'
			}, {
			value: '6',
			label: '9-11个月以内'
			}, {
			value: '7',
			label: '12个月以内'
			}, {
			value: '8',
			label: '12-18个月以内'
			}, {
			value: '9',
			label: '18-24个月以内'
			}, {
			value: '10',
			label: '24-30个月以内'
			}, {
			value: '11',
			label: '30-36个月以内'
			}, {
			value: '12',
			label: '36个月以后'
			}
			],			
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
		}
	 },
	 methods: {
		//搜索按钮点击
		workAreaEditOk(){
			var _this=this;
			//  let data = {
			// 	id:12345,
			// 	name:'name'
			// };
			// this.$router.push({ name: 'poitioncom'});
            const h = this.$createElement;
            this.$msgbox({
              title: "",
			  center:true,
			  type: "success",
              message:'恭喜！预约服务发布成功',
              showCancelButton: true,
              confirmButtonText: "查看我的预约",
              cancelButtonText: "继续预约",
							cancelButtonClass:'msgcancelstyle',
							confirmButtonClass:'msgfirmseyle',
							callback:function(action, instance){
								  //action 的值为'confirm', 'cancel'或'close'
								  if(action == 'confirm'){
									   var obj={
										   contentshowFlag:true,
									   }
										_this.$router.push({ name: 'subpoitioncom',params:obj});
									}
							}
            })												
		},
    workAreaEditCan(){

		}
	 },
	mounted(){
		if(this.$route.params.showFlag){
			this.jobIntensionform={
				monthSalary:'',
				Education:'',
				positionName:'',
				experience:'',
				description:'',
				timeFrame:'',
			}			
		}
	}
  }
</script>
<style scoped>
.positionSubWrap{width:100vm;height:100vh;background:#f3f3f3;}
.maincontentWrap{width:1200px;margin:0 auto;margin-top:10px;background:#fff;padding-top:20px;}
</style>
