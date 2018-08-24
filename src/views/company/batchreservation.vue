<template>
  <div class="positionSubWrap">
	    <publicheadercom></publicheadercom>
      <div class="maincontentWrap">
			<div class="batchresevation_wrap">
				<div class="fontSize18">预约服务</div>																					
				<el-form  :model="jobIntensionform" label-width="90px" label-position="left" class="paddingTop50 marginLeft30">									
					<el-row>
						<el-col :span="12">
							<el-form-item label="职位名称:" prop="positionName" class="selfwidth360">
									<el-input
									v-model="jobIntensionform.positionName"														
									placeholder="请输入职位名称">
									</el-input>
							</el-form-item>											
						</el-col>
						<el-col :span="12">
							<el-form-item label="选择学历:"  prop="Education" class="selfwidth360">
								<el-select v-model="jobIntensionform.Education" placeholder="请选择" class="selfwidth272">
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
							<el-form-item label="选择经验:" prop="experience" class="selfwidth360">
								<el-select v-model="jobIntensionform.experience" placeholder="请选择" class="selfwidth272">
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
							<el-form-item label="薪资范围:"  prop="monthSalary" class="selfwidth360">
								<el-select v-model="jobIntensionform.monthSalary" placeholder="请选择" class="selfwidth272">
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
							<el-form-item label="时间范围:"  prop="timeFrame" class="selfwidth360">
									<el-date-picker
									v-model="value6"
									type="daterange"
									range-separator="-"
									start-placeholder="开始日期"
									end-placeholder="结束日期"
									class="selfwidth272">
									</el-date-picker>																
							</el-form-item>										
						</el-col>
						<el-col :span="12">
							<el-form-item label="预约人数:"  prop="subscribeNum" class="selfwidth360">
								<el-select v-model="jobIntensionform.subscribeNum" placeholder="请选择" class="selfwidth272">
										<el-option
										v-for="item in subscribeNumList"
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
							<el-form-item label="职位描述:" prop="description" class="batchreservation_inputText">
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
						<div class="paddingBottom20">
							<button  type="button" class="selfbutton_cancel1" @click="workAreaEditCan">取消</button>
							<button  type="button" class="selfbutton_ok1"  @click="workAreaEditOk">开始预约</button>												
						</div>
					</el-form-item>																																																											
				</el-form>									
			</div>				
			</div>
		  <div class="batchreservation_footerWrap"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'batcreservation',
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
				subscribeNum:'4'
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
			subscribeNumList:[{
			value: '1',
			label: '2人'
			}, {
			value: '2',
			label: '3人'
			}, {
			value: '3',
			label: '4人'
			}, {
			value: '4',
			label: '5人'
			}, {
			value: '5',
			label: '6人'
			}, {
			value: '6',
			label: '7人'
			}, {
			value: '7',
			label: '8人'
			}, {
			value: '8',
			label: '9人'
			}, {
			value: '9',
			label: '10人'
			}, {
			value: '10',
			label: '15人'
			}, {
			value: '11',
			label: '15人以上'
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
										_this.$router.push({ name: 'subscribestatus',params:obj});
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
				subscribeNum:''
			}			
		}		
	}
  }
</script>
<style scoped>
	.positionSubWrap{width:100vm;height:100vh;background:#f3f3f3;}
	.maincontentWrap{width:1200px;margin:0 auto;margin-top:10px;background:#fff;padding-top:20px;}
	.selfwidth360{width:360px;}
	.selfwidth272{width:272px;}
	.batchresevation_wrap{width:1100px;margin:0 auto;}
	.batchreservation_inputText{width:896px;margin-top:6px;}
	.batchreservation_footerWrap{width:1200px;float:left;height:30px;background:#f3f3f3;}
</style>
