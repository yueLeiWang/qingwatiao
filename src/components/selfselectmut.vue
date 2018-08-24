<template>
  <div>
    <div class="select">
      <div class="input_text">
        <i class="el-icon-arrow-down" v-if="!options1isShow" @click="options1Show"></i>
        <i class="el-icon-arrow-up" v-if="options1isShow"></i>        
				<input type="text" :style="{width:selfwidth + 'px'}" @focus="options1Show" v-model="resulta" placeholder="请选择职位">
			</div>
			<el-dialog  :title="dialogtitle" :visible.sync="options1isShow"  custom-class="selectOne">
						<ul class="itemWrap1">
							<li class="item_tabs" @click="toClickChriden(option.value)"  v-for="(option,index) in testobj" :key="index">
                {{option.label}}
                <div  style="display:inline-block;width:20px;height:20px;"><i class="el-icon-caret-bottom"></i></div>
              </li>
						</ul>					
            <el-dialog
              width="30%"
              :show-close="false"
              custom-class="selectmut"
              :visible.sync="options2isShow"
              append-to-body>
                <el-radio-group v-model="singlechecked">
                  <el-radio :label="item.value" @change="selectResult(item)" v-for="(item,index) in secondOptions" :key="index">{{item.label}}</el-radio>
                </el-radio-group>            
            </el-dialog>
            <div slot="footer" class="dialog-footer" style="text-align:center;">
              <div style="float:left;width:100%;height:30px;text-align:left;">已选:<span>{{result}}</span></div>
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
      singlechecked:'',
      secondOptions:[],
      secondOptionsA:[],
      options1isShow:false,
      parnteVlaue:'',
      options2isShow:false,
      result:'',
			middleResult:[]
    }
  },
  props:["dialogtitle","resulta","selfwidth","testobj"],
  methods:{
    //确定选择值
    okDialog(){
      this.$emit('resultValue',this.result)
      this.options1isShow=false;      
    },
    //组件得焦事件   
    options1Show(){
      this.options1isShow=true;
    },
    //二级展开
    toClickChriden(item){
      this.secondOptions=[];
      for(var i=0;i<this.testobj.length;i++){
        if(this.testobj[i].value==item){
          this.secondOptions=this.testobj[i].children;
          this.parnteVlaue=this.testobj[i].label;
        }
      }
      this.options2isShow=true;
    },
    //单选改变事件
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
.item_tabs:hover{color:#da6718;}
.select{
  position: relative;
}
.input_text>input{
  height:30px;
  border:1px solid #ddd;
  padding:0 15px;
  color: #606266;
  cursor: pointer;  
}
.input_text .el-icon-arrow-down{
  position:absolute;
  left:290px;
  top:15px;
  color: #c0c4cc;
}
.input_text .el-icon-arrow-up{
  position:absolute;
  left:290px;
  top:15px;
  color: #c0c4cc;  
}
</style>