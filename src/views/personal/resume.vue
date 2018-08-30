<template>
  <div>
	  <selfheader></selfheader>
		<div class="jianliwrap">
			  <div class="FirstArea">					
					<div class="FirstAreaLeft">						
						<div class="marginTop20" ref="Area0">
							<div class="fontSize14 textAlignLeft"  v-show="personInfObject.realName != ''">
								<div class="contentWrap">
									<div class="floatLeft fontSize18">{{personInfObject.realName}}</div> 
									<div class="headerImgWrap">
										<img v-if="personInfObject.gender == 1" src="../../assets/images/minicon.png">
										<img v-else style="margin-top:-5px;" src="../../assets/images/indexiconG.png">
									</div>
									<div class="personInf_edit" @click="editPersonInf('edit')">编辑</div>
									<div class="clearfix"></div>
									<div class="floatLeft fontSize14 marginTop20">
											<img src="../../assets/images/jianliicon_12.png" class="positionAbsolute">
											<span  class="marginLeft30">{{personInfObject.birthday}}</span>
											<img src="../../assets/images/jianliicon_03.png" class="positionAbsolute marginLeft20">
											<span  class="marginLeft50">{{personInfObject.workYear}}年工作经验</span>
											<img v-show="personInfObject.education !='' && personInfObject.education != undefined" src="../../assets/images/jianliicon_06.png" class="positionAbsolute marginLeft20">
											<span  style="width:100px;display:inline-block;" class="marginLeft50" v-show="personInfObject.education !='' && personInfObject.education != undefined">{{personInfObject.education}}</span>
									</div>
									<div class="personInf_infbar" >
											<img src="../../assets/images/jianliicon_10.png" class="personInf_phone">
											<span  class="marginLeft30">{{personInfObject.phone}}</span>
											<img src="../../assets/images/jianliicon_08.png"  class="personInf_email">
											<span  class="marginLeft50">{{personInfObject.email}}</span>
									</div>									
								</div>
								<div class="personInf_heardImg_wrap">
											<div  class="personInf_heardImg_img1">
															<el-upload
															class="avatar-uploader1"
															action="https://jsonplaceholder.typicode.com/posts/"
															:show-file-list="false"
															:on-success="handleAvatarSuccess1"
															:before-upload="beforeAvatarUpload1">
																<img v-if="imageUrl1" :src="imageUrl1" class="avatar1">
																<i v-else class="el-icon-plus avatar-uploader-icon1"></i>
															</el-upload>												
											</div>
											<p class="uploadHeader">点击上传头像</p>									
								</div>
							</div>
							<div class="editusrerInfo" v-show="personInfObject.realName == ''" style="height:90px;line-height:90px;cursor:pointer" @click="editPersonInf('add')">编辑个人信息</div>
							<transition name="el-zoom-in-top">
								<div v-show="personInfShow" class="jianli_personInfWrap">
									<div class="jianli_personInfWrapSub">
										<div class="jianli_persontext">个人信息</div>
										<div class="clearfix"></div>									
										<div class="jianli_personcellOne">
												<div  class="personInf_heardImg_img1">
																<el-upload
																class="avatar-uploader1"
																action="https://jsonplaceholder.typicode.com/posts/"
																:show-file-list="false"
																:on-success="handleAvatarSuccess1"
																:before-upload="beforeAvatarUpload1">
																	<img v-if="imageUrl1" :src="imageUrl1" class="avatar1">
																	<i v-else class="el-icon-plus avatar-uploader-icon1"></i>
																</el-upload>												
												</div>
												<p class="uploadHeader">点击上传头像</p>
										</div>									
										<el-form ref="formInline" :model="formInline" :rules="rules" label-width="90px" label-position="top" style="margin-left:30px;margin-top:-120px;">									
											<el-row>
												<el-col :span="12">
													<el-form-item label="姓名" prop="name">
														<el-input v-model="formInline.name" placeholder="请输入您的姓名" style=""></el-input>
													</el-form-item>											
												</el-col>
												<el-col :span="12">
													<el-form-item label="性别" prop="sex">
															<el-radio-group v-model="formInline.sex" style="width:172px;">
																<el-radio-button v-for="(value,key,index) in sexList" :label="value" :key="index"></el-radio-button>
															</el-radio-group>
													</el-form-item>											
												</el-col>
											</el-row>
											<el-row>
												<el-col :span="12">
													<el-form-item label="生日" prop="birday">
                                                            <selfdateseclectnotoday :selfwidth="250"  :calendarwidth="310" :result="formInline.birday" @startValue="Birdaydate" :selfplaceholder='birdayplaceholder' ></selfdateseclectnotoday>															
													</el-form-item>											
												</el-col>
												<el-col :span="12">
													<el-form-item label="开始工作时间" prop="worktime">					    
															<selfdateseclectnotoday :selfwidth="250"  :calendarwidth="310" :result="formInline.worktime" @startValue="worktimedate" :selfplaceholder='birdayplaceholder' ></selfdateseclectnotoday>
													</el-form-item>											
												</el-col>
											</el-row>
											<el-row>
												<el-col :span="12">
													<el-form-item label="邮箱" prop="email">
														<el-input v-model="formInline.email" placeholder="请输入您的邮箱" ></el-input>
													</el-form-item>											
												</el-col>
												<el-col :span="12">
													<el-form-item label="电话" prop="phone">
														<el-input v-model="formInline.phone" placeholder="请输入您的电话" ></el-input>
													</el-form-item>											
												</el-col>
											</el-row>
											<el-row>
												<el-col :span="12">
													<el-form-item label="现居地" prop="selectedOptions">
																<el-cascader
																size="large"
																:options="Adressoptions"
																v-model="formInline.selectedOptions"
																@change="AdressChange">
																</el-cascader>
													</el-form-item>											
												</el-col>
												<el-col :span="12">
													<el-form-item label="求职状态" prop="qiuzhi">
														<el-select v-model="formInline.qiuzhi" placeholder="请选择">
																<el-option
																v-for="item in ivu"
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
													<el-form-item label="籍贯" prop="selectedOptions1">
																<el-cascader
																size="large"
																:options="Adressoptions"
																v-model="formInline.selectedOptions1"
																@change="AdressChange1">
																</el-cascader>
													</el-form-item>											
												</el-col>

											</el-row>											
											<el-form-item>
												<div class="jianli_actionFromButton">
													<button  type="button" class="selfbutton_cancel" @click="personEditCan('formInline')">取消</button>
													<button  type="button" class="selfbutton_ok"  @click="personEditOk('formInline')">确认修改</button>												
												</div>
											</el-form-item>																																																											
										</el-form>									
									</div>		
								</div>
							</transition>														
						</div>
						<!-- 求职意向部分开始 -->
						<div class="clearfix"></div>						
						<div class="marginTop20" ref="Area1">							
							<div class="fontSize14 textAlignLeft">
								<div class="bottomAction">
									<span class="hr0"></span>
									<button type="button" class="selfbuttona">求职意向</button>
									<span class="hr1"></span>
									<span class="hrName" @click="jobIntensionAdd">添加</span>
								</div>
								<transition name="el-zoom-in-top">								   
									<div class="jianli_publicwrap2"  v-show="jobIntensionShow">
										<div class="jianli_personInfWrapSub">																					
											<el-form  :model="jobIntensionform" label-width="90px" label-position="top" class="jianli_publicMarginPadding">									
												<el-row>
													<el-col :span="12">
														<el-form-item label="期望职位">
															<selfselect :dialogtitle="itemname" @resultValue="resultvalue"></selfselect>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="薪资要求"  prop="monthSalary">
															<el-select v-model="jobIntensionform.monthSalary" placeholder="请选择">
																	<el-option
																	v-for="item in jobivu"
																	:key="item.value"
																	:label="item.label"
																	:value="item.label">
																	<span style="float: left">{{ item.label }}</span>
																	</el-option>
																</el-select>
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<el-col :span="12">
														<el-form-item label="行业" prop="industry">
															<el-select v-model="jobIntensionform.industry" placeholder="请选择行业">
																	<el-option
																	v-for="item in hangyeList"
																	:key="item.value"
																	:label="item.label"
																	:value="item.label">
																	<span>{{ item.label }}</span>
																	</el-option>
															</el-select>													
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="地点" prop="JobLocation">
															<div style="position:absolute;z-index:222;">
																<el-tag
																  style="margin-left:10px;"
																  v-for="tag in addressListsec"
																  :key="tag"
																  closable
																  :disable-transitions="false"
																  @close="closetag(tag)"
																>
																{{tag}}
																</el-tag> 
															</div>													
																<el-cascader
																size="large"
																:show-all-levels='false'
																:options="Adressoptions"
																placeholder=""
																v-model="jobIntensionform.JobLocation"
																@change="AdressChange3">
																</el-cascader>											 
														</el-form-item>											
													</el-col>
												</el-row>
												<el-form-item>
													<div class="jianli_actionFromButton">
														<button  type="button" class="selfbutton_cancel" @click="jobIntensionEditCan">取消</button>
														<button  type="button" class="selfbutton_ok"  @click="jobIntensionEditOk">确认修改</button>												
													</div>
												</el-form-item>																																																											
											</el-form>									
										</div>		
									</div>
								</transition>																
							   <div class="jobIntension_wrap" v-show="jobIntensionList.monthSalary != ''">
							       <span>{{jobIntensionList.position}}</span> | <span>{{jobIntensionList.monthSalary}}</span> | <span>{{jobIntensionList.industry}}</span> | <span>{{jobIntensionList.JobLocation}}</span>
							   </div>
							   <div class="clearfix"></div>
							   <div class="editusrerInfo" v-show="jobIntensionList.monthSalary == ''">
									<img src="../../assets/images/editpicon_15.png" class="plus">
									<span class="paddingLeft40">添加求职意向</span>
								</div>							   
							</div>							
						</div>
						<!-- 工作经历部分开始 -->
						<div class="floatLeft marginTop20" ref="Area2">
							<div class="fontSize14 textAlignLeft">
								<div class="clearfix"></div>
								<div class="bottomAction">
									<span class="hr0"></span>
									<button type="button" class="selfbuttona">工作经历</button>
									<span class="hr1"></span>
									<span class="hrName" @click="workAdd">添加</span>
								</div>
                                <transition name="el-zoom-in-top">
									<div  class="jianli_publicwrap2" v-show="workAreaFlag">
										<div class="jianli_selfEvalutionwrap1">																					
											<el-form  :model="workExperienceform" label-width="90px" label-position="top" class="jianli_publicMarginPadding">									
												<el-row>
													<el-col :span="12">
														<el-form-item label="公司名称" prop="companyName">
																<el-input
																v-model="workExperienceform.companyName"														
																placeholder="请输入公司名称">
																</el-input>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="职位类型"  prop="positionType">
															<selfselectmut :dialogtitle="itemname1" @resultValue="resultvalue1" :resulta="resultValue" :selfwidth="selfwidth1" :testobj="testobj"></selfselectmut>
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<el-col :span="12">
														<el-form-item label="职位名称" prop="positionName">
																<el-input
																v-model="workExperienceform.positionName"														
																placeholder="请输入职位名称">
																</el-input>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="所属行业"  prop="industry">
															<el-select v-model="workExperienceform.industry" placeholder="请选择">
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
													<el-col :span="6">
														<el-form-item label="在职时间" prop="incumbencyStartDate">
															<selfdateseclectnotoday :selfwidth="100" :calendarwidth="160" :result="workExperienceform.incumbencyStartDate" @startValue="workStartdate" :selfplaceholder='incumbencyplaceholder1' ></selfdateseclectnotoday>
														</el-form-item>											
													</el-col>
													<el-col :span="8">
														<el-form-item  prop="incumbencyEndDate" class="marginTop20">
														   <div style="float:left;margin-left:6px;">至</div><selfdateseclect :result='workExperienceform.incumbencyEndDate' @endValue="workEnddate" :selfplaceholder='incumbencyplaceholder2'></selfdateseclect>
														</el-form-item>											
													</el-col>													
												</el-row>
												<el-row>
													<el-col :span="24">
														<el-form-item label="工作内容" prop="workContent">
															<el-input
															type="textarea"
															class="inputTextself"
															:rows="5"
															v-model="workExperienceform.workContent"														
															placeholder="请输入工作内容(0-1000字)">
															</el-input>
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<el-col :span="24">
														<el-form-item label="工作业绩" prop="workPerformance">
															<el-input
															type="textarea"
															class="inputTextself"
															:rows="3"
															v-model="workExperienceform.workPerformance"														
															placeholder="请输入工作内容(0-500字)">
															</el-input>
														</el-form-item>											
													</el-col>
												</el-row>											
												<el-form-item>
													<div class="jianli_actionFromButton">
														<button  type="button" class="selfbutton_cancel" @click="workAreaEditCan">取消</button>
														<button  type="button" class="selfbutton_ok"  @click="workAreaEditOk">确认修改</button>												
													</div>
												</el-form-item>																																																											
											</el-form>									
										</div>		
									</div>
								 </transition>							 																
								<div class="workBarWrap" v-show="workExperienceList.length !=0">
                                   <div v-for="(item,index) in workExperienceList" :key="index">
									    <div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft">{{item.CorporateName}}</div>
											<div class="floatRight colorHui" style="width:120px;height:30px;line-height:30px;text-align:right;" @mouseenter="workover(item.workDateArea,index)" @mouseleave="workleave(item.workDateArea,index)">
												<span v-if="workshowFlag != index">{{item.workDateArea}}</span>
												<span v-if="workshowFlag == index" @click="workEditFun(item.workDateArea,index)">编辑</span>
											</div>
										</div>
										<div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft">{{item.position}} <span class="marginLeft20">{{item.monthSalary}}</span></div>
										</div>
										<div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft">工作内容:</div>
											<div class="clearfix"></div>
											<div class="floatLeft colorHui">
												<ul>
													<li v-for="(subitem,index) in item.workContentList" :key="index">{{subitem}}</li>
												</ul>
											</div>
										</div>
								   </div>								   								   								   
							   </div>
							   <div class="clearfix"></div>
							   <div class="editusrerInfo" v-show="workExperienceList.length ==0">
									<img src="../../assets/images/editpicon_15.png" class="plus">
									<span style="padding-left:40px;">添加工作经历</span>
							   </div>  
							</div>														
						</div>
						<!-- 工作经历部分结束 -->
						<!-- 项目经历部分开始 -->
						<div class="floatLeft marginTop20" ref="Area3">
							<div class="fontSize14 textAlignLeft">
								<div class="clearfix"></div>
								<div class="bottomAction">
									<span class="hr0"></span>
									<button type="button" class="selfbuttona">项目经历</button>
									<span class="hr1"></span>
									<span class="hrName" @click="projectAreaAdd">添加</span>
								</div>
								<transition name="el-zoom-in-top">
									<div  class="jianli_publicwrap2" v-show="projectAreaFlag">
										<div class="jianli_selfEvalutionwrap1">																					
											<el-form  :model="projectExperienceform" label-width="90px" label-position="top" class="jianli_publicMarginPadding">									
												<el-row>
													<el-col :span="12">
														<el-form-item label="项目名称" prop="projectName">
																<el-input
																v-model="projectExperienceform.projectName"														
																placeholder="请输入项目名称">
																</el-input>
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="所属公司"  prop="company">
															<el-select v-model="projectExperienceform.company" placeholder="请选择"     
															filterable
                                                            allow-create>
																	<el-option
																	v-for="item in companyList"
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
													<el-col :span="6">
														<el-form-item label="项目时间" prop="projectStartDate">
															<selfdateseclectnotoday :selfwidth="100" :calendarwidth="160" :result="projectExperienceform.projectStartDate" @startValue="projectStartdate" :selfplaceholder='selfplaceholder1' ></selfdateseclectnotoday>
														</el-form-item>											
													</el-col>
													<el-col :span="8">
														<el-form-item  prop="projectEndDate" class="marginTop20">
														   <div style="float:left;margin-left:6px;">至</div><selfdateseclect :result='projectExperienceform.projectEndDate' @endValue="projectEnddate" :selfplaceholder='selfplaceholder2'></selfdateseclect>
														</el-form-item>											
													</el-col>													
												</el-row>
												<el-row>
													<el-col :span="24">
														<el-form-item label="项目描述" prop="projectDescription">
															<el-input
															type="textarea"
															class="inputTextself"
															:rows="5"
															v-model="projectExperienceform.projectDescription"														
															placeholder="请输入项目描述(0-1000字)">
															</el-input>
														</el-form-item>											
													</el-col>
												</el-row>											
												<el-form-item>
													<div class="jianli_actionFromButton">
														<button  type="button" class="selfbutton_cancel" @click="projectEditCan">取消</button>
														<button  type="button" class="selfbutton_ok"  @click="projectEditOk">确认修改</button>												
													</div>
												</el-form-item>																																																											
											</el-form>									
										</div>		
									</div>
								</transition>																
								<div class="workBarWrap" v-show="projectExperience.length != 0">
								   <div v-for="(item,index) in projectExperience" :key="index">
									    <div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft">{{item.projectName}}  <span style="margin-left:30px;">{{item.position}}</span></div>
											<div class="floatRight colorHui" >{{item.projectDateArea}}</div>
										</div>
										<div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft">项目内容:</div>
											<div class="clearfix"></div>
											<div class="floatLeft colorHui">
												<ul>
													<li v-for="(subitem,index) in item.projectContentList" :key="index">{{subitem}}</li>
												</ul>
											</div>
										</div>
										<div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft">项目描述:</div>
											<div class="clearfix"></div>
											<div class="floatLeft colorHui">
												{{item.projectDescription}}
											</div>
										</div>
								   </div>
							   </div>
							   <div class="clearfix"></div>
								<div class="editusrerInfo" v-show="projectExperience.length == 0">
									<img src="../../assets/images/editpicon_15.png" class="plus">
									<span style="padding-left:40px;">添加项目经历</span>
								</div>
							</div>							
						</div>
						<!-- 项目经历部分结束 -->
						<!-- 教育经历部分开始 -->
						<div class="floatLeft marginTop20"  ref="Area4">
							<div class="fontSize14 textAlignLeft">
								<div class="bottomAction">
									<span class="hr0"></span>
									<button type="button" class="selfbuttona">教育经历</button>
									<span class="hr1"></span>
									<span class="hrName" @click="educationAdd">编辑</span>
								</div>
								<transition name="el-zoom-in-top">							   
									<div  class="jianli_publicwrap2" v-show="educationAreaFlag">
										<div class="jianli_selfEvalutionwrap1">																					
											<el-form  :model="educationalExperienceform" label-width="90px" label-position="top" class="jianli_publicMarginPadding">									
												<el-row>
													<el-col :span="24">
														<el-form-item label="学校名称" prop="schoolName">
																<el-input
																class="schoolname"
																v-model="educationalExperienceform.schoolName"														
																placeholder="请输入学校名称">
																</el-input>
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<el-col :span="12">
														<el-form-item label="学历" prop="education">
																<el-select v-model="educationalExperienceform.education" placeholder="请选择">
																		<el-option v-for="(value,key,index) in educationList" :key="index" :label="value" :value="key">
																		</el-option>
																</el-select>																															
														</el-form-item>											
													</el-col>
													<el-col :span="12">
														<el-form-item label="专业" prop="major">
															<el-input v-model="educationalExperienceform.major" placeholder="请输入地点" ></el-input>
														</el-form-item>											
													</el-col>
												</el-row>
												<el-row>
													<!-- <el-col :span="24">
														<el-form-item label="在校时间" prop="schoolDate">
															<el-date-picker
															class="dateselectself"
															v-model="educationalExperienceform.schoolDate"
															type="daterange"
															range-separator="至"
															start-placeholder="入学时间"
															end-placeholder="毕业时间">
															</el-date-picker>									
														</el-form-item>											
													</el-col> -->
													<el-col :span="6">
														<el-form-item label="在校时间" prop="schoolStartDate">
															<selfdateseclectnotoday :selfwidth="100" :result="educationalExperienceform.schoolStartDate" @startValue="schoolStartdate" :selfplaceholder='schoolDateplaceholder1' ></selfdateseclectnotoday>
														</el-form-item>											
													</el-col>
													<el-col :span="8">
														<el-form-item  prop="schoolEndDate" class="marginTop20">
														   <div style="float:left;margin-left:6px;">至</div>
														   <selfdateseclect :result='educationalExperienceform.schoolEndDate' @endValue="schoolEnddate" :selfplaceholder='schoolDateplaceholder2'></selfdateseclect>
														</el-form-item>											
													</el-col>													
												</el-row>
												<el-row>
													<el-col :span="24">
														<el-form-item label="在校经历" prop="associationActivity">
															<el-input
															type="textarea"
															class="inputTextself"
															:rows="3"
															v-model="educationalExperienceform.associationActivity"														
															placeholder="请输入工作内容(0-500字)">
															</el-input>
														</el-form-item>											
													</el-col>
												</el-row>																						
												<el-form-item>
													<div class="jianli_actionFromButton">
														<button  type="button" class="selfbutton_cancel" @click="educationEditCan">取消</button>
														<button  type="button" class="selfbutton_ok"  @click="educationEditOk">确认修改</button>												
													</div>
												</el-form-item>																																																											
											</el-form>									
										</div>		
									</div>
								</transition>																								
								<div class="workBarWrap">
									<div v-for="(item,index) in educationExperience" :key="index">
										<div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft">{{item.schoolName}}</div>
											<div class="floatRight colorHui" >{{item.readingTime}}</div>
										</div>
										<div class="clearfix"></div>
										<div class="liWrap">
											<div class="floatLeft colorHui">{{item.education}} <span class="marginLeft20">{{item.major}}</span></div>
										</div>
									</div>
								   								   								   
							   </div>
							   <div class="clearfix"></div>
								<div class="editusrerInfo" v-show="educationExperience.length == 0">
									<img src="../../assets/images/editpicon_15.png" class="plus">
									<span style="padding-left:40px;">添加教育经历</span>
								</div>
							   
							</div>							
						</div>
						<!-- 教育经历部分结束 -->
						<!-- 自我评价部分开始 -->
						<div class="floatLeft marginTop20"  ref="Area5">
							<div class="fontSize14 textAlignLeft">
								<div class="bottomAction">
									<span class="hr0"></span>
									<button type="button" class="selfbuttona">自我评价</button>
									<span class="hr1"></span>
									<span class="hrName" @click="evalutionEdit">编辑</span>
								</div>
								<transition name="el-zoom-in-top">
									<div  class="jianli_publicwrap2"  v-show="evalutionAreaFlag">
										<div class="jianli_selfEvalutionwrap1">																					
											<el-form  :model="selfEvalutionform" label-width="90px" label-position="top" class="jianli_publicMarginPadding">									
												<el-row>
													<el-col :span="24">
														<el-form-item label="自我评价" prop="evalution">
																<el-input
																type="textarea"
																class="inputTextself"
																:rows="5"
																v-model="selfEvalutionform.evalution"														
																placeholder="请输入自我评价(0-1000字)">
																</el-input>
														</el-form-item>											
													</el-col>												
												</el-row>
												<el-form-item>
													<div class="jianli_actionFromButton">
														<button  type="button" class="selfbutton_cancel" @click="selfEvalutionEditCan">取消</button>
														<button  type="button" class="selfbutton_ok"  @click="selfEvalutionEditOk">确认修改</button>												
													</div>
												</el-form-item>																																																											
											</el-form>									
										</div>		
									</div>
								</transition>																								
								<div class="workBarWrap">
							       <div class="liWrap">
									   <div class="floatLeft colorHui">{{selfEvalution}}</div>
								   </div>								   								   								   
							   </div>
							   <div class="clearfix"></div>
								<div class="editusrerInfo" v-show="selfEvalution ==''">
									<img src="../../assets/images/editpicon_15.png" class="plus" >
									<span style="padding-left:40px;">添加自我评价</span>
								</div>
							</div>							
						</div>
						<!-- 自我评价部分结束 -->
						<!-- 资料上传部分开始 -->
						<div class="floatLeft marginTop20"  ref="Area6">
							<div class="fontSize14 textAlignLeft">
								<div class="bottomAction">
									<span class="hr0"></span>
									<button type="button" class="selfbuttona">资料上传</button>
									<span class="hr1"></span>
									<span class="hrName" @click="gerenziliao">添加</span>
								</div>
								<transition name="el-zoom-in-top">
									<div  class="jianli_ziliaoFormwrap" v-show="ziliaoAreaFlag">
										<div class="jianli_selfEvalutionwrap1">																													
													<el-row>
														<el-col :span="8">
																<el-upload
																class="avatar-uploader"
																action="https://jsonplaceholder.typicode.com/posts/"
																:show-file-list="false"
																:on-success="handleAvatarSuccess"
																:before-upload="beforeAvatarUpload">
																	<img v-if="imageUrl" :src="imageUrl" class="avatar">
																	<i v-else class="el-icon-plus avatar-uploader-icon"></i>
																</el-upload>											
														</el-col>
														<el-col :span="16">
																	<el-input
																	type="textarea"
																	style="width:440px;margin-top:49px;"
																	:rows="8"
																	v-model="xueli"														
																	placeholder="添加资料详情，例如：学历证明">
																	</el-input>																							
														</el-col>
													</el-row>
													<el-row>
														<el-col>
															<div class="jianli_ziliaoFormpromit">您可以在此上传jpg格式的附件，大小请不要超过500k。</div>
														</el-col>
													</el-row>
													<div class="jianli_ziliaoAction">
														<button  type="button" class="selfbutton_cancel" @click="ziliaoEditCan">取消</button>
														<button  type="button" class="selfbutton_ok"  @click="ziliaoEditOk">确认修改</button>												
													</div>																																																																			
										</div>		
									</div>
								</transition>																						
								<div class="workBarWrap" >
							       <div class="liWrap">
									   <div class="floatLeft" v-show="ziliao.education != ''">
										   <img :src="testUrl" >
										   <p style="text-align:center;">{{ziliao.education}}</p>
									   </div>
									   <div class="floatLeft" style="margin-left:30px;" v-show="ziliao.work != ''">
										   <img src="../../assets/images/ggg_03.png"  height="133px;">
										   <p style="text-align:center;">{{ziliao.work}}</p>
									   </div>
								   </div>								   								   								   
							    </div>
							    <div class="clearfix"></div>
								<div class="editusrerInfo" v-show="ziliao.education == '' && ziliao.work == ''">
									<img src="../../assets/images/editpicon_15.png" class="plus">
									<span style="padding-left:40px;">添加资料</span>
								</div>																
							</div>														
						</div>
						<!-- 资料上传部分结束 -->																														
					</div>
					<div class="FirstAreaRight">						
						<div class="jianlimange_wrap" >
							<div class="jianlimange_wrapsubone">附件简历</div>
							<div class="jianlimange_wrapsubtwo"  v-if="showFlag1">
									<ul>
										<li v-for="(item,index) in docFile" :key="index">
											<div class="clearfix"></div>
											<img src="../../assets/images/jianliicon_15.png" class="jianlimange_wrapsubtwoPic">
											<div class="jianlimange_wrapsubtwoitem">{{item}}</div>
											<div class="fileListAction"><el-button @click="exportword" type="text">导入</el-button> <el-button type="text" @click="deleteFile(index)">删除</el-button></div>											
									    </li>
									</ul>

							</div>
							<div class="clearfix"></div>
							<div class="selfUploadStyle">
									<el-upload
											action=""
											:on-change="handleChange"
											:file-list="fileList3">
											<el-button size="small" type="primary">上传简历附件</el-button>
											<div slot="tip" class="el-upload__tip">支持 DOC、DOCX、PDF、JPG、PNG格式附件， 文件大小不超过10M</div>
									</el-upload>							
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="actionTabWrap">
							<ul>
								<li class="jianListAction" @click="tabChange(0,'Area0')">
									<div class="hrBar"   :class="{'tabactive':isActive==0}"></div>
									<div class="tabContent">
										<img src="../../assets/images/editpicon_03.png" class="tabIcon">
										<span class="paddingLeft40">个人信息</span>
									</div>
								</li>
								<li class="jianListAction"  @click="tabChange(1,'Area1')">
									<div class="hrBar"  :class="{'tabactive':isActive==1}"></div>
									<div class="tabContent">
										<img src="../../assets/images/editpicon_06.png" class="tabIcon">
										<span class="paddingLeft40">求职意向</span>
									</div>
								</li>
								<li class="jianListAction"  @click="tabChange(2,'Area2')">
									<div class="hrBar"  :class="{'tabactive':isActive==2}"></div>
									<div class="tabContent">
										<img src="../../assets/images/editpicon_08.png" class="tabIcon">
										<span class="otherTab2">工作经历</span>
									</div>
								</li>
								<li class="jianListAction"  @click="tabChange(3,'Area3')">
									<div class="hrBar"  :class="{'tabactive':isActive==3}"></div>
									<div class="tabContent">
										<img src="../../assets/images/editpicon_10.png" class="tabIcon">
										<span class="otherTab1">项目经历</span>
									</div>
								</li>
								<li class="jianListAction"  @click="tabChange(4,'Area4')">
									<div class="hrBar"  :class="{'tabactive':isActive==4}"></div>
									<div class="tabContent">
										<img src="../../assets/images/editpicon_12.png" class="tabIcon">
										<span class="paddingLeft40">教育经历</span>
									</div>
								</li>
								<li class="jianListAction"  @click="tabChange(5,'Area5')">
									<div class="hrBar"  :class="{'tabactive':isActive==5}"></div>
									<div class="tabContent">
										<img src="../../assets/images/editpicon_18.png" class="tabIcon">
										<span class="paddingLeft40">自我评价</span>
									</div>
								</li>
								<li class="jianListAction"  @click="tabChange(6,'Area6')">
									<div class="hrBar"  :class="{'tabactive':isActive==6}"></div>
									<div class="tabContent">
										<img src="../../assets/images/upload.png" class="tabIcon">
										<span class="paddingLeft40">资料上传</span>
									</div>
								</li>																																																
							</ul>
						</div>
					</div>					
				</div>
		</div>
  </div>
</template>
<script type="text/javascript">
	import {
	getpersonalResume//获取简历信息
	} from "@/api/resume";
  import selfheader from '../../components/publicHeader'
  import selfselect from '../../components/selfselect'
  import selfselectmut from '../../components/selfselectmut'
  import selfdateseclect from '../../components/selfDateseclect'
  import selfdateseclectnotoday from '../../components/selfDateseclectnotoday'
  import { provinceAndCityData } from 'element-china-area-data'
  import util from "@/utils/date";
  export default{
	name:'resume',
	components:{
      selfheader,
	  selfselect,
	  selfselectmut,
	  selfdateseclect,
	  selfdateseclectnotoday
    },
	 data(){
		var checkPhone = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("请输入电话号码"));
			} else {
				if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)) {
				callback(new Error("电话号码不正确！请重新填写"));
				} else {
				callback();
				}
			}
		};		 
		var checkEmail = (rule, value, callback) => {
			if (!value) {
				callback(new Error("请输入邮箱"));
			} else {
				if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
				callback(new Error("请输入正确的邮箱"));
				} else {
				if (value.length >= 5 && value.length <= 50) {
					callback();
				} else {
					callback(new Error("请输入5-50位邮箱地址"));
				}
				}
			}
		};
		//选择地址
		var SELADRESS = (rule, value, callback) => {
			if (value.length > 0) {
				callback();
			} else {
				callback(new Error("选择地址"));
			}
		};				 
		return {
			addressListsec:[],
			birdayplaceholder:'请选择日期',
			incumbencyplaceholder1:'开始时间',
			incumbencyplaceholder2:'结束时间',
            selfplaceholder1:'项目开始时间',
			selfplaceholder2:'项目结束时间',
            schoolDateplaceholder1:'入学时间',
			schoolDateplaceholder2:'毕业时间',			
			dict:require("../../../static/dict.json"),
			//职位类型下拉数据
			testobj:[
			  {
				value:'zhinan',
				label:'软件/互联网开发/系统集成',
				children:[
					{
					value: 'yizhi',
					label: '高级软件工程师'
					}, {
					value: 'fankui',
					label: '软件工程师'
					}, {
					value: 'xiaolv',
					label: '软件研发工程师'
					}, {
					value: 'kekong',
					label: '需求工程师',
					},{
									value:'1',
					label:'系统架构设计师'
								},{
									value:'2',
					label:'系统分析员'
								},{
									value:'3',
					label:'数据库开发工程师'
								},{
									value:'4',
					label:'ERP技术/开发应用'
								},{
									value:'5',
					label:'互联网软件工程师',
					checked:false,
								},{
									value:'6',
					label:'手机软件开发工程师'
								},{
									value:'7',
					label:'嵌入式软件开发'
								},{
									value:'8',
					label:'移动互联网开发'
								},{
									value:'9',
					label:'WEB前端开发'
								}
				]
				},
				{
				value: 'daohang',
				label: '广告/会展',
				children: [{
					value: 'cexiangdaohang',
					label: '广告创意/设计总监'
				}, 
				{
					value: 'dingbudaohang',
					label: '广告创意/设计经理/主管'
				},
				{
					value: 'dingbudaohang1',
					label: '广告创意/设计师'
				},
				{
					value: 'dingbudaohang2',
					label: '广告文案策划'
				},
				{
					value: 'dingbudaohang3',
					label: '广告美术指导'
				},
				{
					value: 'dingbudaohang4',
					label: '广告制作执行'
				},
				{
					value: 'dingbudaohang5',
					label: '广告客户经理'
				},
				{
					value: 'dingbudaohang6',
					label: '广告客户主管'
				},																														
				 ]
			  }
 			],
			itemname1:'职位类型',
			itemname:'期望职位',
			resultValue:'',
			selfwidth1:'280',
			xueli:'',
			//自我评价表单对象
            selfEvalutionform:{
			  evalution:'',
			},			
			selfEvalution:'',
			//省市二级地址数据对象
			Adressoptions: provinceAndCityData,
			// selectedOptions: [],
			ziliao:{
				education:'',
				work:''
			},
			//工作经历表单对象
			workExperienceform:{
				companyName:'',
				positionType:'',
				positionName:'',
				industry:'',
				incumbencyStartDate:'',
				incumbencyEndDate:'',
				workContent:'',
				workPerformance:''
			},
			//项目经历表单对象
			projectExperienceform:{
				projectName:'',
				company:'',
				projectStartDate:'',
				projectEndDate:'',
				projectDescription:'',
			},
			//教育经历表单对象
			educationalExperienceform:{
				schoolName:'',
				education:'',
				major:'',
				schoolStartDate:'',
				schoolEndDate:'',
				associationActivity:'',
			},
			//
			educationList:[],
			//行业下拉菜单
			hangyeList:[
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
            //职位状态下拉菜单
			ivu: [{
				value: 'Beijing',
				label: '我目前处于离职状态，可立即上岗'
				}, {
				value: 'Shanghai',
				label: '我目前在职，正考虑换个新环境（如有合适的工作机会，到岗时间一个月左右）'
				}, {
				value: 'Nanjing',
				label: '我对现有工作还算满意，如有更好的工作机会，我也可以考虑。（到岗时间另议）'
				}, {
				value: 'Chengdu',
				label: '目前暂无跳槽打算'
				}, {
				value: 'Shenzhen',
				label: '应届毕业生'
			}],
			value6: '',
			//所属公司下拉选项
			companyList:[{
			value: '1',
			label: '北京华路时代信息技术有限公司'
			}, {
			value: '2',
			label: '北京众诚汇通信息技术有限公司'
			}
			],
			//月薪下拉选项			
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
			sexList:[],
			personInfShow:false,
			//个人信息表单对象
			formInline: {
				name: '',
				sex: '',
				birday:'',
				phone:'',
				worktime:'',
				email:'',
				selectedOptions:[],
				selectedOptions1:[],
				qiuzhi:''
			},
			rules: {
				name: [{required: true, message: '请输入姓名！', trigger: 'blur'}],
				birday: [{required: true, message: '请选择生日！', trigger: 'blur'}],
				phone: [{required: true, validator: checkPhone, trigger: 'blur'}],
				email: [{required: true, validator: checkEmail, trigger: 'blur'}],
				sex:[{required: true, message: '请选择性别！', trigger: 'blur'}],
				qiuzhi:[{required: true, message: '请选择求职状态！', trigger: 'blur'}],
				worktime:[{required: true, message: '请选择开始工作时间！', trigger: 'blur'}],
				selectedOptions:[
					{required: true, message: '请选择居住地',trigger: 'change',type:'array'}
				],
				selectedOptions1:[{required: true,type: "array", message: '请选择籍贯！', trigger: 'change'}],
		    },						
			jobIntensionShow:false,
			workAreaFlag:false,
			projectAreaFlag:false,
			educationAreaFlag:false,
			evalutionAreaFlag:false,
			ziliaoAreaFlag:false,
			fileList3: [],
			docFile:[],
			showFlag:false,
			showFlag1:false,			
			isActive:0,
			//个人信息数据对象
			personInfObject:{},
			//求职意向数据对象
			jobIntensionList:{
				position:'',
				monthSalary:'',
				industry:'',
				JobLocation:''
			},
			//求职意向表单对象
			jobIntensionform:{
				monthSalary:'',
				industry:'',
				JobLocation:[]
			},
			workExperienceList:[],
			projectExperience:[],
			educationExperience:[],
			imageUrl: '',
			imageUrl1:'',
			testUrl:'',
			workshowFlag:null,									
		}
	 },
	 methods: {
		 //生日改变
		 Birdaydate(val){
			 this.formInline.birday=val
		 },
		 //参加工作时间改变
		 worktimedate(val){
			 this.formInline.worktime=val
		 },
		 //项目开始时间改变
		 projectStartdate(val){
			 this.projectExperienceform.projectStartDate=val
		 },
		 //项目结束时间改变
		 projectEnddate(val){
			 this.projectExperienceform.projectEndDate=val
		 },	
		 //在职开始时间改变
		 workStartdate(val){
			 this.workExperienceform.incumbencyStartDate=val
		 },
		 //在职结束时间改变
		 workEnddate(val){
			 this.workExperienceform.incumbencyEndDate=val
		 },		 	 
		 //入学时间改变
		 schoolStartdate(val){
			 this.educationalExperienceform.schoolStartDate=val
		 },
		 //毕业时间改变
		 schoolEnddate(val){
			 this.educationalExperienceform.schoolEndDate=val
		 },		 
		 //工作时间鼠标指向
		 workover(name,index){
			 this.$nextTick(()=>{
				 this.workshowFlag=index
			 })
			 
		 },
		 //工作时间鼠标离开
		 workleave(name,index){
			 this.$nextTick(()=>{
				 this.workshowFlag=100
			 })
		 },
		 //工作时间编辑点击操作
		 workEditFun(name,index){
               console.log(name)
		 },
		 //期望职位表单项赋值
		 resultvalue(value){
			 this.jobIntensionformposition=value
		 },
		 //职位类型表单项赋值
		 resultvalue1(value){
			 this.resultValue=value
			 this.workExperienceform.positionType=value;
		 },
		 //资料上传成功		 
		handleAvatarSuccess(res, file) {
			this.imageUrl = URL.createObjectURL(file.raw);
		},
		//上传头像之前图片进行限制（资料上传）
		beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg';
			const isLt2M = (file.size/ 1024 * 100) / 100 <= 500;
			if (!isJPG) {
			    this.$message.error('上传头像图片只能是 JPG 格式!');
			}
			if (!isLt2M) {
			   this.$message.error('上传头像图片大小不能超过 500kB!');
			}
			return isJPG && isLt2M;
		},
		//个人信息中头像上传成功
		handleAvatarSuccess1(res, file) {
			this.imageUrl1 = URL.createObjectURL(file.raw);
		},
		//个人信息中头像上传之前对图片进行限制
		beforeAvatarUpload1(file) {
			const isJPG = (file.type === 'image/jpeg') || (file.type === 'image/jpg')  || (file.type === 'image/gif') || (file.type === 'image/png');
			if (!isJPG) {
			    this.$message.error('头像只能上传图片!');
			}
			return isJPG;
		},				 
		 //锚点定位	
		 tabChange(index,area){
			this.isActive=index;		  
			this.$nextTick(() => {
				this.$refs[area].scrollIntoView({
					behavior:"smooth",
					block: "start",
				})
			})
		 },
		 //上传确定（给页面的对象赋值）
		handleChange(file, fileList) {
			this.fileList3 = fileList;
			if(this.fileList3.length !=0){
				this.docFile.push(file.name)
				this.showFlag1=true;
			}
			
		},
		//导入简历按钮
		exportword(){
                this.showFlag=true;
				this.personInfObject={
					realName:'马先生',
					birthday:"1993年3月",
					workYear:'4年工作经验',
					education:'本科',
					phone:'13521147713',
					email:'13521147713@163.com',
					gender:1  
			   }
			   this.jobIntensionList={
				position:'前端工程师',
				monthSalary:'15000-25000元/月',
				industry:'互联网/电子商务',
				JobLocation:'北京'
			   }
			   this.workExperienceList=[
					{
						CorporateName:'北京华路时代信息技术有限公司',
						position:'web前端工程师',
						monthSalary:'10k-15k',
						workDateArea:'2018.4-至今',
						workContentList:["1、负责静态页面布局以及前后台数据交互。 ","2、负责使用JavaScript、JQuery实现网页动态效果以及页面间的跳转。","3、图片懒加载功能显示商品提高页面的响应速度，对页面和项目进行化。","4、和后台合作实现网页之间的MQ推送即实时消息推送。"," 5、配合并帮助后台用Node.js编写一些简单的接口。"]					
					},{
						CorporateName:'北京众诚汇通信息技术有限公司',
						position:'web前端工程师',
						monthSalary:'10K-15k',
						workDateArea:'2017.01 - 2018.03',
						workContentList:["1、主要负责使用Vue或Angular4实现页面布局和搭建项目。","2、负责使用JavaScript、TypeScript实现网页动态效果，用Vue.Router或 Angular.Router实现页面跳转。","3、图片懒加载功能显示商品提高页面的响应速度，对页面和项目进行化。","4、独自用Node.js编写一些简单的接口，配合后台搭建Mongodb数据库实现前后台数据交互，并且参与后台。"]					
					}
			   ]
			  this.projectExperience=[
					{
						projectName:'中证拍卖平台（京拍网）',
						position:'web前端工程师',
						projectDateArea:'2018.04 - 2018.07',
						projectContentList:["1、负责用HTML、CSS搭配bootstrap框架搭建静态页面和一些公用的部分。","2、负责用JQuery和JavaScript实现动态效果和一些逻辑业务流程。","3、负责前后台数据交互。","4、和后台合作实现网页之间的MQ推送即实时消息推送。"," 5、使用图片懒加载功能，对项目进行优化，提高页面响应速度。"],
						projectDescription:'该项目是一款网上拍卖平台，同时具有建立商品、商品搜索、浏览商品、支付、竞拍、流拍等功能，而且具有MQ推送即页面间消息实时推送功能。'					
					},{
						projectName:'省钱快报（移动端)',
						position:'web前端工程师',
						projectDateArea:'2017.10 - 2018.03',
						projectContentList:["1、使用vue+mint-ui进行项目重构","2、使用VueRouter进行路由通信，用vuex实现状态管理与数据共享","3、编写接口、搭建数据库参与后台管理系统。","4、登录注册模块采用localstorage来实现。","5、负责分类页、以及详情页的开发。","6、图片懒加载功能显示商品提高页面的响应速度。"],
						projectDescription:'该项目是一款电商网站，同时具有线上商品搜索、浏览、支付功能项目职责。'					
					}
			   ]
			   this.educationExperience=[
					{
						schoolName:'聊城大学',
						education:'本科',
						major:'网络工程',
						readingTime:'2011.09 - 2015.07 '
					}
			  ]
			  this.selfEvalution='平时喜欢钻研新技术,比如人,闲暇时间喜欢听歌、打篮球放松心情。在开发团队中喜欢和同事交流,调解开发团队的气氛,可以做一个团队的开心果。'
			  this.ziliao={
				  education:'',
				  work:'工作经历'
			  }
		},
		//删除上传的简历（清空页面上的已有信息）
		deleteFile(index){
			this.docFile.del(index)
			this.showFlag=false;
			this.personInfObject={
					realName:'',
					birthday:"",
					workYear:'',
					education:'',
					phone:'',
					email:'',
					gender:null  
			}
			this.jobIntensionList={
				position:'',
				monthSalary:'',
				industry:'',
				JobLocation:''
			}			
			this.workExperienceList=[];
			this.projectExperience=[];
			this.educationExperience=[];
			this.selfEvalution=''
			this.ziliao={
				education:'',
				work:''
			}
			
		},
		//求职信息添加函数
		jobIntensionAdd(){
			this.jobIntensionform={
				monthSalary:'',
				industry:'',
				JobLocation:[]
			}
			this.jobIntensionShow=true
		},
		//工作经历添加函数
		workAdd(){
			this.workAreaFlag=true;
		},
		//项目经历添加函数
		projectAreaAdd(){
			this.projectAreaFlag=true;
		},
		//教育经历添加函数
		educationAdd(){
            this.educationAreaFlag=true;
		},
		//自我评价添加函数
		evalutionEdit(){
			this.evalutionAreaFlag=true;
		},
		//个人资料添加函数
		gerenziliao(){
			this.ziliaoAreaFlag=true;
		},
		//个人信息编辑函数
        editPersonInf(status){	
           this.personInfShow=true;
		   if(status == 'add'){
              this.formInline={
				name: '',
				sex: '',
				birday:'',
				phone:'',
				worktime:'',
				email:'',
				selectedOptions:[],
				selectedOptions1:[],
				qiuzhi:''
			};
		   }else{
              this.formInline=Object.assign({}, this.personInfObject);
		   }
		},
		//头像上传函数
		uploadHeader(){

		},
		//个人信息表单取消
		personEditCan(formName){
			this.personInfShow=false;
			this.formInline={
				name: '',
				sex: '',
				birday:'',
				phone:'',
				worktime:'',
				email:'',
				selectedOptions:[],
				selectedOptions1:[],
				qiuzhi:''
			};
			this.$refs[formName].resetFields();	
					 
		},
		//个人信息表单确定
		personEditOk(formName){
			this.$refs[formName].validate((valid) => {
			if (valid) {
					
					this.personInfObject=Object.assign({}, this.formInline);
					// this.personInfObject.birday=util.formatDate.format(
					// 		new Date(this.personInfObject.birday),
					// 		"yyyy-MM"
					// 	);			
					// var workYear=2018-util.formatDate.format(
					// 		new Date(this.personInfObject.worktime),
					// 		"yyyy"
					// 	)+'年工作经验';
					// if(2018-util.formatDate.format(
					// 		new Date(this.personInfObject.worktime),
					// 		"yyyy"
					// )>1){
					// 	this.personInfObject.worktime=workYear;
					// }else{
					// 	this.personInfObject.worktime='1年工作经验'  
					// }
					this.$refs[formName].resetFields();							
					this.personInfShow=false;
					this.showFlag=true;					

			}else{
			   this.$refs[formName].resetFields();	
			}
		
            })						

		},
		//居住地址改变
		AdressChange(val){
            console.log(val)
		},
		//籍贯改变
		AdressChange1(val){
            console.log(val)
		},
		//求职地点改变
		AdressChange3(val){
			var _this=this
			this.jobIntensionform.JobLocation=[];
            this.$nextTick(()=>{				    
					for(var i=0;i<34;i++){
							for(var j=0;j<provinceAndCityData[i].children.length;j++){
								if(val[1] == provinceAndCityData[i].children[j].value){
										_this.addressListsec.push(provinceAndCityData[i].children[j].label)
								}
							}							   
					}			
			})
			
		},
		//求职地点改变
		closetag(tag){
            this.addressListsec.remove(tag)
		},				
		//求职表单确定
		jobIntensionEditOk(){			
			this.jobIntensionList=Object.assign({}, this.jobIntensionform);
			this.jobIntensionList.position=this.jobIntensionformposition
			console.log(this.jobIntensionList)
            this.jobIntensionShow=false;
		},
		//求职表单取消
		jobIntensionEditCan(){
			this.jobIntensionShow=false;
		},
		//自我评价表单确定
		selfEvalutionEditOk(){
			this.evalutionAreaFlag=false;
		},
		//自我评价表单取消
		selfEvalutionEditCan(){
			this.evalutionAreaFlag=false;
		},
		//工作经历表单确定
		workAreaEditOk(){
			this.workAreaFlag=false;
		},
		//工作经历表单取消
		workAreaEditCan(){
			this.resultValue='';
			this.workExperienceform={
				companyName:'',
				positionType:'',
				positionName:'',
				industry:'',
				incumbencyStartDate:'',
				incumbencyEndDate:'',
				workContent:'',
				workPerformance:''
			}		
			this.workAreaFlag=false;
		},
		//项目经历表单确定
		projectEditOk(){
			//this.projectExperienceform.projectStartDate='2018-09'
			this.projectAreaFlag=false;
		},
		//项目经历表单取消
		projectEditCan(){
			this.projectExperienceform={
				projectName:'',
				company:'',
				projectStartDate:'',
				projectEndDate:'',
				projectDescription:'',
			}		
			this.projectAreaFlag=false;
		},
		//教育经历表单确定
		educationEditOk(){
			this.educationAreaFlag=false;
		},
		//教育经历表单取消
		educationEditCan(){
			this.educationAreaFlag=false;
		},
		//资料上传表单确定
		ziliaoEditOk(){
			this.ziliaoAreaFlag=false;
			this.ziliao.education='学历证明'
			this.testUrl=this.imageUrl
		},
		//资料上传表单取消
		ziliaoEditCan(){
			this.ziliaoAreaFlag=false;
			this.ziliao.education=''
			this.testUrl=''

		},
		//获取简历信息
		getResume(){
			getpersonalResume().then(res => {
				if(res.data.code == '200'){
					if(res.data.data.userInfo != undefined){
						this.personInfObject=res.data.data.userInfo	
					}				 							
				}else{
					this.$message({
						type:'error',
						message:res.data.msg
					})
				}               
            });
		}							 	
	 },
	 mounted() {
		 this.educationList=this.dict.educationList
		 this.sexList=this.dict.sex
		 this.getResume()
	 }	 
  }
</script>
<style scoped>
	.jianli_publicMarginPadding{margin-left:30px;padding-top:20px;}
	.jianli_publicwrap2{width:100%;background:#fff;text-align:left;margin-top:20px;}
	.jianli_personcellOne{width:120px;height:120px;position:relative;left:600px;top:-50px;z-index:3;}
	.jianli_persontext{margin-left:30px;padding:20px 0px;}
    .jianli_personInfWrapSub{width:732px;margin:0 auto;background:#f3f3f3}
	.jianli_personInfWrap{width:100%;background:#fff;float:left;text-align:left;margin-top:20px;}
	.jianli_actionFromButton{text-align:right;padding-right:20px;padding-bottom:20px;}
	.jianli_selfEvalutionwrap1{width:732px;margin:0 auto;background:#f3f3f3;margin-left: 30px;}
    .jianli_ziliaoFormwrap{width:100%;background:#fff;text-align:left;margin-top:20px; }
    .jianli_ziliaoFormpromit{text-align:right;padding-right:100px;font-size:12px;color:#a4a7b4}
    .jianli_ziliaoAction{text-align:right;padding-right:20px;padding-bottom:20px;padding-top:20px;}
    .jianlimange_wrapsubtwoPic{
      position:absolute;margin-top: -5px;margin-left: 30px;
	}
	.jianlimange_wrapsubtwoitem{margin-left:80px;float:left;width:210px;}
    .jianlimange_wrap{
      width:392px;margin-left:12px;background:#fff;		
	}
	.jianlimange_wrapsubone{
		text-align:left;font-size:16px;padding-left: 30px;padding-top: 40px;
	}
	.jianlimange_wrapsubtwo{
		text-align:left;font-size:16px;padding-top: 22px;
	}
	.avatar-uploader  {
		border: 1px dashed #d9d9d9;
		width:178px;
		height:178px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		margin-top: 50px;
		margin-left: 30px;		
	}
	.avatar-uploader:hover {
		border-color: #da6718;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.avatar-uploader1  {
		width: 100px;
		height: 100px;
		line-height: 100px;
		border-radius: 50%;
		/* margin-left: -8px; */
		background: #e7e7e7;		
	}
	.avatar-uploader1:hover {
		border-color: #da6718;
	}
	.avatar-uploader-icon1 {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		text-align: center;
		position: absolute;
		margin-top:-18px;
	}
	.avatar1 {
		width: 100px;
		height: 100px;
		border-radius: 100px;
		display: block;
	}
	.dateselectself{width:310px;margin-top:5px;}
	.inputTextself{width:660px;margin-top:6px;}	
	.otherTab2{padding-left:40px;position:absolute;margin-top:5px;}
	.otherTab1{padding-left:40px;position:absolute;margin-top:0px}
    .tabContent{float:left;height: 30px;line-height: 30px;padding-left:120px;}
	.tabIcon{position:absolute;margin-top:4px}
    .actionTabWrap{width:392px;margin-left:12px;margin-top:12px;background:#fff;padding-bottom: 20px;}
	.hrBar{width:1px;height:30px;float:left;}
	.editusrerInfo{width:732px;font-size:14px;background:#f3f3f3;color:#a4a7b4;margin-left:30px;margin-top:20px;height:50px;line-height:50px;text-align:center;border:1px dotted #ccc;}
	.workBarWrap{width:710px;float:left;margin-left: 30px;}
	.jobIntension_wrap{width:710px;height:60px;line-height:60px;float:left;margin-left: 30px;}
	.personInf_edit{margin-left:10px;float:left;color:#d3d3d3;font-size:12px;margin-top:5px;cursor: pointer}
	.personInf_edit:hover{color:#da6718}
	.personInf_infbar{float:left;font-size:14px;margin-top:25px;}
	.personInf_phone{position:absolute;margin-top:-5px;}
	.personInf_email{position:absolute;margin-left:20px;margin-top:-5px;}
	.personInf_heardImg_wrap{width:120px;height:130px;float:left;margin-left:30px;}
	.personInf_heardImg_wrap1{width:120px;height:130px;}
	.uploadHeader{cursor: pointer;}
	.uploadHeader:hover{color:#da6718}
	.personInf_heardImg_img{width:100px;height:100px;line-height:150px;border-radius:50%;margin-left:-8px;background:#e7e7e7}
	.personInf_heardImg_img1{width:100px;height:100px;line-height:150px;border-radius:50%;margin-left:-8px;background:#e7e7e7}
	.headerImgWrap{width:20px;height:20px; float:left;margin-left:10px;margin-top:5px;}
	.contentWrap{width:568px;height:130px;float:left;margin-left:30px;}
	.tabactive{background:#da6718;}
	.liWrap{margin-top:10px;}
	.jianListAction{width:300px;height:30px;text-align:left;padding-top:20px;cursor:pointer}
	.jianListAction:hover{color:#da6718}
	.plus{position: absolute;margin-top: 15px;margin-left:15px;}
	.hr0{display:block;float: left;width: 328px;height: 1px;border: none;margin-top: 16px;border-top: 1px dashed #ccc;} 
	.hr1{ display:block;float:left;width:278px;height:1px;border:none;border-top:1px dashed #ccc;margin-top: 16px;}
	.bottomAction{width:720px;margin-left: 30px;margin-top: 10px;}
	.hrName{font-size:12px;margin-left:10px;display: inline-block;margin-top: 5px;cursor: pointer}
	.hrName:hover{color:#da6718}
	.jianliwrap{width:1200px;margin:0 auto;}
	.FirstArea{width:1200px;margin-top:12px;}
	.FirstAreaLeft{width:796px;float:left;background:#fff;padding-top:20px;padding-bottom: 20px;margin-bottom:20px;}
	.FirstAreaRight{width:392px;float:right;padding-bottom:20px}	
</style>
