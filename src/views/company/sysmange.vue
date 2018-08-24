<template>
  <div class="positionSubWrap">
	    <publicheadercom></publicheadercom>
		<div class="maincontentWrap">
			<template>
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="我的资料" name="first">
							<div style="height:160px;margin-bottom:20px;margin-top:20px;">
								<div style="width:120px;height:120px;margin:0 auto;background:#eee;border-radius:50%;"></div>
                                <p style="margin-top:10px;">上传头像</p>
							</div>
							<div style="height:300px;margin-bottom:50px;">
								<div style="width:400px;margin:0 auto;text-align:left;">
								<el-form label-position="left" label-width="80px" :model="formLabelAlign" >
										<el-form-item label="联系方式:">
											<el-input v-model="formLabelAlign.name" placeholder="请输入联系方式" style="width:300px;"></el-input>
										</el-form-item>
										<el-form-item label="姓名:">
											<el-input v-model="formLabelAlign.region" placeholder="请输入姓名" style="width:300px;"></el-input>
										</el-form-item>
										<el-form-item label="邮箱:">
											<el-input v-model="formLabelAlign.type" placeholder="请输入邮箱" style="width:300px;"></el-input>
										</el-form-item>
										<el-form-item>
											<div style="text-align:center;padding-right:20px;padding-bottom:20px;">
												<button  type="button" class="selfbutton_cancel1" >取消</button>
												<button  type="button" class="selfbutton_ok1"  >确认</button>												
											</div>
										</el-form-item>											
								</el-form>									

								</div>
								
							</div>
						</el-tab-pane>
						<el-tab-pane label="公司资料" name="second">
							<div style="height:160px;margin-bottom:20px;margin-top:20px;">
								<div style="width:120px;height:120px;margin:0 auto;background:#eee;;cursor:pointer"></div>
                                <p style="margin-top:10px;color:#5cd9eb;cursor:pointer">上传公司logo</p>
							</div>
							<div style="margin-bottom:50px;">
								<div style="width:400px;margin:0 auto;text-align:left;">
								<el-form label-position="left" label-width="80px" :model="companyform" >
										<el-form-item label="公司名称:" prop="companyName">
											<el-input v-model="companyform.companyName" placeholder="请输入公司名称" style="width:300px;"></el-input>
											<div style="position:absolute;margin-left:320px;margin-top:-40px;width:100px;color:#5cd9eb;cursor:pointer">上传营业执照</div>
										</el-form-item>
										<el-form-item label="人员规模:" prop="personnelScale">
												<el-select v-model="companyform.personnelScale" placeholder="请选择" style="width:300px;" popper-class="searchrecom_select">
														<el-option
														v-for="item in personnelScaleList"
														:key="item.value"
														:label="item.label"
														:value="item.value">
														<span style="float: left">{{ item.label }}</span>
														</el-option>
												</el-select>											
										</el-form-item>
										<el-form-item label="公司阶段:" prop="companyLevel">
												<el-select v-model="companyform.companyLevel" placeholder="请选择" style="width:300px;" popper-class="searchrecom_select">
														<el-option
														v-for="item in companyLevelList"
														:key="item.value"
														:label="item.label"
														:value="item.value">
														<span style="float: left">{{ item.label }}</span>
														</el-option>
												</el-select>
										</el-form-item>
										<el-form-item label="所在行业:" prop="industry">											
												<el-select v-model="companyform.industry" placeholder="请选择" style="width:300px;" popper-class="searchrecom_select">
														<el-option
														v-for="item in industryList"
														:key="item.value"
														:label="item.label"
														:value="item.value">
														<span style="float: left">{{ item.label }}</span>
														</el-option>
												</el-select>
										</el-form-item>
										<el-form-item label="工作地址:"  prop="companyAddress">
												<el-select v-model="companyform.companyAddress" placeholder="请选择" style="width:300px;" popper-class="searchrecom_select">
														<el-option
														v-for="item in companyAddressList"
														:key="item.value"
														:label="item.label"
														:value="item.value">
														<span style="float: left">{{ item.label }}</span>
														</el-option>
												</el-select>
										</el-form-item>	
										<el-form-item label="公司介绍:" prop="description">
												<el-input
												type="textarea"
												style="width:300px;"					
												:rows="5"
												v-model="companyform.description"														
												placeholder="请输入公司介绍(0-1000字)">
												</el-input>
										</el-form-item>																													
										<el-form-item>
											<div style="text-align:center;padding-right:20px;padding-bottom:20px;">
												<button  type="button" class="selfbutton_cancel1" >取消</button>
												<button  type="button" class="selfbutton_ok1"  >确认</button>												
											</div>
										</el-form-item>											
								</el-form>									

								</div>
								
							</div>
						</el-tab-pane>
					</el-tabs>
			</template>							
							
		</div>
		<div style="width:1200px;float:left;height:30px;background:#f3f3f3;"></div>
  </div>
</template>
<script type="text/javascript">
  import publicheadercom from '@/components/publicHeadercom'
  export default{
	name:'sysmange',
	components:{
    publicheadercom
  },
	 data(){
		return {
			formLabelAlign: {
			name: '',
			region: '',
			type: ''
			},
			companyform:{
				companyName:'',
				personnelScale:'',
				companyLevel:'',
				industry:'',
				companyAddress:'',
				description:''
			},			
			activeName: 'first',
			username:'',
			personnelScaleList: [
				{
				value: '1',
				label: '0-20人'
				}, {
				value: '2',
				label: '21-99人'
				}, {
				value: '3',
				label: '100-499人'
				}, {
				value: '4',
				label: '500-999人'
				}, {
				value: '5',
				label: '1000人以上'
				}
			],
			companyLevelList:[
				{
				value: '1',
				label: '不需融资'
				}, {
				value: '2',
				label: '天使轮'
				}, {
				value: '3',
				label: 'A轮'
				}, {
				value: '4',
				label: 'B轮'
				}, {
				value: '5',
				label: 'C轮'
				}, {
				value: '6',
				label: 'D轮及以上'
				}
			],
			industryList:[
				{
				value: '1',
				label: '互联网/电子商务'
				}, {
				value: '2',
				label: '计算机软件'
				}, {
				value: '3',
				label: 'IT服务(系统/数据/维护)'
				}, {
				value: '4',
				label: '电子技术/半导体/集成电路'
				}, {
				value: '5',
				label: '计算机硬件'
				}, {
				value: '6',
				label: '通信/电信/网络设备'
				}, {
				value: '7',
				label: '通信/电信运营、增值服务'
				}, {
				value: '8',
				label: '网络游戏'
				}, {
				value: '9',
				label: '基金/证券/期货/投资'
				}, {
				value: '10',
				label: '保险'
				}, {
				value: '11',
				label: '银行'
				}, {
				value: '12',
				label: '信托/担保/拍卖/典当'
				}, {
				value: '13',
				label: '房地产/建筑/建材/工程'
				}, {
				value: '14',
				label: '家居/室内设计/装饰装潢'
				}, {
				value: '15',
				label: '物业管理/商业中心'
				}, {
				value: '16',
				label: '专业服务/咨询(财会/法律/人力资源等)'
				}, {
				value: '17',
				label: '广告/会展/公关'
				}, {
				value: '18',
				label: '中介服务'
				}, {
				value: '19',
				label: '检验/检测/认证 '
				}, {
				value: '20',
				label: '外包服务'
				}, {
				value: '21',
				label: '快速消费品（食品/饮料/烟酒/日化）'
				}, {
				value: '22',
				label: '耐用消费品（服饰/纺织/皮革/家具/家电）'
				}, {
				value: '23',
				label: '贸易/进出口'
				}, {
				value: '24',
				label: '零售/批发'
				}, {
				value: '25',
				label: '租赁服务'
				}, {
				value: '26',
				label: '教育/培训/院校'
				}, {
				value: '27',
				label: '礼品/玩具/工艺美术/收藏品/奢侈品'
				}, {
				value: '28',
				label: '汽车/摩托车'
				}, {
				value: '29',
				label: '大型设备/机电设备/重工业'
				}, {
				value: '30',
				label: '加工制造（原料加工/模具）'
				}, {
				value: '31',
				label: '仪器仪表及工业自动化'
				}, {
				value: '32',
				label: '印刷/包装/造纸'
				}, {
				value: '33',
				label: '办公用品及设备'
				}, {
				value: '34',
				label: '医药/生物工程 '
				}, {
				value: '35',
				label: '医疗设备/器械 '
				}, {
				value: '36',
				label: '航空/航天研究与制造'
				}, {
				value: '37',
				label: '交通/运输'
				}, {
				value: '38',
				label: '物流/仓储'
				}, {
				value: '39',
				label: '医疗/护理/美容/保健/卫生服务'
				}, {
				value: '40',
				label: '酒店/餐饮'
				}, {
				value: '41',
				label: '旅游/度假'
				}, {
				value: '42',
				label: '媒体/出版/影视/文化传播'
				}, {
				value: '43',
				label: '娱乐/体育/休闲'
				}, {
				value: '44',
				label: '能源/矿产/采掘/冶炼'
				}, {
				value: '45',
				label: '石油/石化/化工'
				}, {
				value: '46',
				label: '电气/电力/水利'
				}, {
				value: '47',
				label: '环保'
				}, {
				value: '48',
				label: '政府/公共事业/非盈利机构'
				}, {
				value: '49',
				label: '学术/科研'
				}, {
				value: '50',
				label: '农/林/牧/渔 '
				}, {
				value: '51',
				label: '跨领域经营'
				}, {
				value: '52',
				label: '其他'
				}
			],
			companyAddressList: [
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
		}
	 },
	 methods: {
		handleClick(tab, event) {
			console.log(tab);
		}
	 },
	mounted(){
		
	}
  }
</script>
<style scoped>
.positionSubWrap{width:100vm;height:100vh;background:#f3f3f3;}
.maincontentWrap{width:1200px;margin:0 auto;margin-top:10px;padding-left:20px;padding-right:20px;background:#fff;padding-top:20px;}
</style>
