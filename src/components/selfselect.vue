<template>
  <div>
    <div class="select">
      <div class="input_text">
        <i class="el-icon-arrow-down" v-if="!options1isShow"></i>
        <i class="el-icon-arrow-up" v-if="options1isShow"></i>        
				<input type="text" name="" @focus="options1Show" v-model="result" placeholder="请选择职位">
			</div>
			<el-dialog  :title="dialogtitle" :visible.sync="options1isShow"  custom-class="selectOne" :close-on-click-modal="false">
						<ul class="itemWrap">
							<li class="item_tabs"  v-for="(option,index) in options" :key="index">
                <el-checkbox @change="toClick(option.value)" v-model="option.checked">{{option.label}}</el-checkbox>
                <div @click="toClickChriden(option.value)" style="display:inline-block;width:20px;height:20px;"><i class="el-icon-caret-bottom"></i></div>
              </li>
						</ul>					
				<el-dialog
					width="30%"
					:show-close="false"
					custom-class="selectOne"
					:visible.sync="options2isShow"
					append-to-body>
						<ul class="itemWrap">
							<li class="item_tabs" v-for="(item,index) in secondOptions" :key="index">
                <el-checkbox  @change="selectResult(item)" v-model="item.checked">{{item.label}}</el-checkbox>                
              </li>
						</ul>				
				</el-dialog>
        <div slot="footer" class="dialog-footer">
          <button class="selfbutton_cancel" @click="cancelDialog">取 消</button>
          <button class="selfbutton_ok" @click="okDialog">确定</button>
        </div>
			</el-dialog>			
    </div>
  </div>
</template>
<script>
export default {
  name: 'selfselect',
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
      result:'',
			middleResult:[]
    }
  },
  props: ["dialogtitle"],
  methods:{
    okDialog(){
      console.log(this.result)
      this.options1isShow=false;
    },
    cancelDialog(){
      this.options1isShow=false;
    },
    options1Show:function(){
      this.options1isShow=true;
    },
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
    toClickChriden(item){
      this.secondOptions=[];
      for(var i=0;i<this.options.length;i++){
        if(this.options[i].value==item){
          this.secondOptions=this.options[i].children;
        }
      }
      this.options2isShow=true;
    },
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
          this.result=str;
			}else{
        this.middleResult.remove(item)
        item.checked=false
				this.$message({
					type: "warning",
					message: "不能超过3个!"
				});
      }
      this.$emit('resultValue',this.result)
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.itemWrap{height:300px;overflow-y:scroll;}
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
  width:300px;
  height:30px;
  border:1px solid #ddd;
}
.input_text .el-icon-arrow-down{
  position:absolute;
  left:280px;
  top:15px;
  color: #c0c4cc;
}
.input_text .el-icon-arrow-up{
  position:absolute;
  left:280px;
  top:15px;
  color: #c0c4cc;  
}
</style>