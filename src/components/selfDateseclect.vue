<template>
  <div class="selfdateWrap">
      <div class="input_texts">
        <i class="el-icon-date" @click="options1Show"></i>
				<input type="text" name="" @focus="options1Show"   v-model="result" :placeholder="selfplaceholder">
			</div>
      <div class="calendar" v-if="options1isShow">
        <div class="header">
          <span class="pre-btn el-icon-d-arrow-left" @click="preYear">  </span>
          <span class="now-y-m">{{ nowYear}}{{resultB}}</span>
          <span class="next-btn el-icon-d-arrow-right" @click="nextYear">  </span>
        </div>
        <div class="content">
          <ul>
              <li v-for="(mounth,index) in mounths" @click="showDate(mounth.value,index)"  :class="{'today' : active === index}" :key="index">{{ mounth.label }}</li>
          </ul>
        </div>
        <div slot="footer" class="dialog-footer" style="text-align:center;background:#fff;">
          <button class="selfbutton_ok" @click="okDialog">确定</button>
        </div>        
      </div>    
  </div>

</template>
  <script>
  export default {
  name: 'selfselect',
      data(){
        return {
            active:null,
            resultA:'',
            resultB:'',
            options1isShow:false,
            mounths: [
                {
                  label:'至今',
                  value:'0'
                },
                {
                  label:'1月',
                  value:'1'
                }, 
                {
                  label:'2月',
                  value:'2'
                }, 
                {
                  label:'3月',
                  value:'3'
                }, 
                {
                  label:'4月',
                  value:'4'
                }, 
                {
                  label:'5月',
                  value:'5'
                }, 
                {
                  label:'6月',
                  value:'6'
                }, 
                {
                  label:'7月',
                  value:'7'
                }, 
                {
                  label:'8月',
                  value:'8'
                },
                {
                  label:'9月',
                  value:'9'
                }, 
                {
                  label:'10月',
                  value:'10'
                }, 
                {
                  label:'11月',
                  value:'11'
                }, 
                {
                  label:'12月',
                  value:'12'
                }          
            ],
            nowYear: null,
          }
      },
      computed: {
      },
       props: {
          selfplaceholder: {
            type: String,
          },
          result: {
            type: String,
          }                 
       },
      methods: {
        nowda() {
          var date= new Date()
          this.nowYear = date.getFullYear();
        },
        init() {
          this.resultB='';
        },
        preYear() {
          this.nowYear -= 1;
          this.active=-1
          this.init();
        },
        nextYear() {      
          this.nowYear += 1;
          this.active=-1
          this.init();
        },
        showDate(mounth,index) {
          this.active=index;
          if (mounth ==='0' ) {
            this.resultA='至今';
            this.resultB='';
          }else{
            if(mounth <= 9){
              mounth='0'+mounth
            }
            this.resultB='-'+mounth;           
            this.resultA=this.nowYear + '-' + (mounth);
          }
          
        },
        okDialog(){
          if(this.resultA ==''){
            this.$message({
              type: "warning",
              message: "请选择日期!"
            });
          }else{
            this.options1isShow=false;
            this.$emit('endValue',this.resultA)
          }          
        },
        options1Show(){
          this.options1isShow=true;
          this.nowda();
          this.init();          
        }        
      },
      mounted(){

      }
}
  </script>
    <style scode>
    .selfdateWrap{float:left;}
    .calendar {
      position: absolute;
      margin-left:20px;
      z-index:222;
      width: 160px;
      border-radius: 3px;
      box-shadow: 0 0 10px #ccc;
    }
    .calendar .header {
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #da6718;
      color: #fff;
      border-radius: 3px 3px 0 0;
    }
    .calendar .header .pre-btn {
      display: block;
      float: left;
      padding: 8px 10px;
      cursor: pointer;
    }
    .calendar .header .next-btn {
      display: block;
      float: right;
      padding: 8px 10px;
      cursor: pointer;
    }
    .calendar .title {
      font-size: 0;
      border-bottom: 1px solid #eee;
    }
    .calendar .title span {
      font-size: 14px;
      display: inline-block;
      width: 50px;
      text-align: center;
      line-height: 30px;
    }
    .calendar .content {
      overflow: hidden;
      background:#fff;
      padding-top:10px;
      padding-bottom:10px;      
    }
    .calendar .content ul li {
      display: block;
      float: left;
      width: 50px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      transition: all 0.1s;
    }
    .calendar .content ul li:hover {
      background:#da6718;
      color: #fff;
    }
    .calendar .content ul li.today {
      background:#da6718;
      color: #fff;
    }
    .input_texts>input{
      width:100px;
      padding:0px 30px;
      height:30px;
      border:1px solid #ddd;
    }
    .input_texts .el-icon-date{
      position: relative;
      left:30px;
      top:1px;
      color: #c0c4cc;
      cursor: pointer;
    }   
  </style>
