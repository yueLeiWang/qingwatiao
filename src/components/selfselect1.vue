<template>
  <div>
    <div class="select">
      <div class="input_text">
        <i class="el-icon-arrow-down" v-if="!options1isShow" @click="options1Show"></i>
        <i class="el-icon-arrow-up" v-if="options1isShow"></i> 
				<input type="text" class="textinputa" name="" @focus="options1Show" v-model="result" placeholder="请选择职位">			</div>
        <el-dialog  :visible.sync="options1isShow" custom-class="selectOne" :show-close="false">
              <ul class="itemWrap">
                <li class="item_tabs"  v-for="(option,index) in options" :key="index">
                  <el-checkbox @change="toClick(option.value)" v-model="option.checked">{{option.label}}</el-checkbox>
                  <div @click="toClickChriden(option.value)" class="downarrowWrap"><i class="el-icon-caret-bottom"></i></div>
                </li>
              </ul>					
          <el-dialog
            width="30%"        
            custom-class="selectOne"
            :visible.sync="options2isShow"
            append-to-body>
              <ul class="itemWrap">
                <li class="item_tabs" v-for="(item,index) in secondOptions" :key="index">
                  <el-checkbox  @change="selectResult(item)" v-model="item.checked">{{item.label}}</el-checkbox>                
                </li>
              </ul>				
          </el-dialog>
            <div slot="footer" class="dialog-footer" style="text-align:center;">
              <div class="selectedWrap">已选:<span>{{resultA}}</span></div>
              <button class="selfbutton_ok" @click="okDialog">确定</button>
            </div>          
        </el-dialog>			
    </div>
  </div>
</template>
<script>
export default {
  name: 'selfselect1',
  data(){
    return {
      options:[
        {
          value:'zhinan',
          label:'软件/互联网开发/系统集成',
          checked:false,
          children:[
            {
              value: 'yizhi',
              label: '高级软件工程师',
              checked:false,
            }, {
              value: 'fankui',
              label: '软件工程师',
              checked:false,
            }, {
              value: 'xiaolv',
              label: '软件研发工程师',
              checked:false,
            }, {
              value: 'kekong',
              label: '需求工程师',
              checked:false,
            },{
							value:'1',
              label:'系统架构设计师',
              checked:false,
						},{
							value:'2',
              label:'系统分析员',
              checked:false,
						},{
							value:'3',
              label:'数据库开发工程师',
              checked:false,
						},{
							value:'4',
              label:'ERP技术/开发应用',
              checked:false,
						},{
							value:'5',
              label:'互联网软件工程师',
              checked:false,
						},{
							value:'6',
              label:'手机软件开发工程师',
              checked:false,
						},{
							value:'7',
              label:'嵌入式软件开发',
              checked:false,
						},{
							value:'8',
              label:'移动互联网开发',
              checked:false,
						},{
							value:'9',
              label:'WEB前端开发',
              checked:false,
						}
          ]
        },
        {
          value: 'daohang',
          label: '广告/会展',
          checked:false,
          children: [{
            value: 'cexiangdaohang',
            label: '广告创意/设计总监',
            checked:false,
          }, 
          {
            value: 'dingbudaohang',
            label: '广告创意/设计经理/主管',
            checked:false,
          },
          {
            value: 'dingbudaohang1',
            label: '广告创意/设计师',
            checked:false,
          },
          {
            value: 'dingbudaohang2',
            label: '广告文案策划',
            checked:false,
          },
          {
            value: 'dingbudaohang3',
            label: '广告美术指导',
            checked:false,
          },
          {
            value: 'dingbudaohang4',
            label: '广告制作执行',
            checked:false,
          },
          {
            value: 'dingbudaohang5',
            label: '广告客户经理',
            checked:false,
          },
          {
            value: 'dingbudaohang6',
            label: '广告客户主管',
            checked:false,
          },																														
					]
        }
      ],
      secondOptions:[],
      secondOptionsA:[],
      options1isShow:false,
      options2isShow:false,
      resultA:'',
			middleResult:[]
    }
  },
  props: ["result"],
  methods:{
    //确定选择值
    okDialog(){
      this.$emit('resultValue',this.resultA)
      this.options1isShow=false;      
    },
    //输入框获取焦点打开一级弹窗    
    options1Show:function(){
      this.options1isShow=true;
    },
    //一级多选变换
    toClick(item){      
      for(var i=0;i<this.options.length;i++){
        if(this.options[i].value==item){
          if(this.options[i].checked){          
            this.selectResult(this.options[i])         
          }else{
            this.selectResult(this.options[i])
          }
        }

      }
    },
    //二级弹窗打开
    toClickChriden(item){
      this.secondOptions=[];
      for(var i=0;i<this.options.length;i++){
        if(this.options[i].value==item){
          this.secondOptions=this.options[i].children;
        }
      }
      this.options2isShow=true;
    },
    //选中操作（个数限制与提示已选择项）
    selectResult(item){
      if(item.checked){
         this.middleResult.push(item)
      }else{
         this.middleResult.remove(item)
      }     
			if(this.middleResult.length < 4){					
					var str=''
					for(var a=0;a<this.middleResult.length;a++){
							str += this.middleResult[a].label+'  '
					}
          this.resultA=str;
			}else{
        this.middleResult.remove(item)
        item.checked=false
				this.$message({
					type: "warning",
					message: "不能超过3个!"
				});
      }
    },
    //清空所有选择
    clearItem(){
      this.middleResult=[];
      this.resultA='';
      for(var i=0;i<this.options.length;i++){
          this.options[i].checked=false;
          for(let j=0;j< this.options[i].children.length;j++){
              this.options[i].children[j].checked=false;
          }
      }
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.downarrowWrap{display:inline-block;width:20px;height:20px;}
.selectedWrap{float:left;width:100%;height:30px;text-align:left;}
.itemWrap{margin-top:-20px;height:300px;overflow-y:scroll;}
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
  color:#fff;
}
.item_tabs:hover{color:#da6718;}
.select{
  position: relative;
}
.input_text>input{
  padding-left:20px;
  width:524px;
  height:40px;
  border-radius:4px;
  border:1px solid #ddd;

}
.input_text .el-icon-arrow-down{
  position:absolute;
  left:520px;
  top:15px;
  color: #c0c4cc;
}
.input_text .el-icon-arrow-up{
  position:absolute;
  left:520px;
  top:15px;
  color: #c0c4cc;  
}
</style>