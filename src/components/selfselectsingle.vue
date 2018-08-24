<template>
  <div>
    <div class="select">
      <div class="input_text">
        <i class="el-icon-arrow-down" v-if="!options1isShow"></i>
        <i class="el-icon-arrow-up" v-if="options1isShow"></i>
				<input type="text" name="" @focus="options1Show" v-model="resulta" placeholder="请选择职位">
			</div>
			<el-dialog  :title="dialogtitle" :visible.sync="options1isShow"  custom-class="selectOne">
						<ul class="itemWrap1">
							<li class="item_tabs" @click="toClickChriden(option.value)"  v-for="(option,index) in options" :key="index">
                {{option.label}}
                <div  style="display:inline-block;width:20px;height:20px;"><i class="el-icon-caret-bottom"></i></div>
              </li>
						</ul>					
            <el-dialog
              width="30%"
              :show-close="false"
              custom-class="selectsinglewrap"
              :visible.sync="options2isShow"
              append-to-body>
                <el-radio-group v-model="singlechecked">
                  <el-radio :label="item.value" @change="selectResult(item)" v-for="(item,index) in secondOptions" :key="index">{{item.label}}</el-radio>
                </el-radio-group>            
            </el-dialog>
            <div slot="footer" class="dialog-footer" style="text-align:center;">
              <div style="float:left;width:100%;height:30px;text-align:left;">已选:<span>{{result}}</span></div>
              <button class="selfbutton_ok1" @click="okDialog">确定</button>
            </div>            
			</el-dialog>			
    </div>
  </div>
</template>
<script>
export default {
  name: 'selfselectsingle',
  data(){
    return {
      singlechecked:'',
      options:[
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
      secondOptions:[],
      secondOptionsA:[],
      options1isShow:false,
      parnteVlaue:'',
      options2isShow:false,
      result:'',
			middleResult:[]
    }
  },
  props:["dialogtitle","resulta"],
  methods:{
    //确定选择值
    okDialog(){
      this.$emit('resultValue',this.result)
      this.options1isShow=false;      
    },    
    options1Show:function(){
      this.options1isShow=true;
    },
    toClickChriden(item){
      this.secondOptions=[];
      for(var i=0;i<this.options.length;i++){
        if(this.options[i].value==item){
          this.secondOptions=this.options[i].children;
          this.parnteVlaue=this.options[i].label;
        }
      }
      this.options2isShow=true;
    },
    selectResult(item){
        var str=''
        str=item.label
        this.result=str;
				this.options2isShow=false;
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.itemWrap1{height:300px;overflow-y:scroll;}
.itemWrap{margin-top:-40px;height:300px;overflow-y:scroll;}
li,ul{
  list-style: none;
  padding:0;
  margin:0;
}
.item_tabs{
  height:30px;
  line-height: 30px;
  box-sizing: border-box;
	border-radius:30px;
  text-align: center;
  cursor: pointer;
	float: left;
	margin:0px 10px;
}
.item_tabs:hover{color:#5cd9eb;}
.select{
  position: relative;
}
.input_text>input{
  width:240px;
  height:40px;
  line-height: 40px;
  border:1px solid #ddd;
  border-radius:4px;
  padding:0 15px;
  color: #606266;
  cursor: pointer;
}
.input_text .el-icon-arrow-down{
  position:absolute;
  left:250px;
  top:15px;
  color: #c0c4cc;
}
.input_text .el-icon-arrow-up{
  position:absolute;
  left:250px;
  top:15px;
  color: #c0c4cc;  
}
</style>