<template>
  <div class="calendar">
    <div class="header">
      <span class="pre-btn" @click="preYear"><</span>
      <span class="now-y-m">{{ nowYear}}</span>
      <span class="next-btn" @click="nextYear"> > </span>
    </div>
    <div class="content">
      <ul>
          <li v-for="(mounth,index) in mounths" @click="showDate(mounth.value)"  :key="index">{{ mounth.label }}</li>
          <!-- :class="{'today' : index === today}" -->
      </ul>
    </div>
  </div>
</template>
  <script>
  export default {
  name: 'selfselect',
      data(){
		return {
			  mounths: [
            {
              label:'1月',
              value:'01'
            }, 
            {
              label:'2月',
              value:'02'
            }, 
            {
              label:'3月',
              value:'03'
            }, 
            {
              label:'4月',
              value:'04'
            }, 
            {
              label:'5月',
              value:'05'
            }, 
            {
              label:'6月',
              value:'06'
            }, 
            {
              label:'7月',
              value:'07'
            }, 
            {
              label:'8月',
              value:'08'
            },
            {
              label:'9月',
              value:'09'
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
      methods: {
        nowda() {
          var date= new Date()
          this.nowYear = date.getFullYear();
        },
        init() {
        },
        preYear() {
          this.nowYear -= 1;
          this.init();
        },
        nextYear() {      
          this.nowYear += 1;
          this.init();
        },
        showDate(mounth) {
          if (mounth === '') {
            return;
          }
          alert(this.nowYear + '-' + (mounth));
        }
      },
      mounted(){
          this.nowda();
          this.init();
      }
}
  </script>
    <style scode>
    * {
      margin: 0;
      padding: 0;
    }
    body {
      font-family: '微软雅黑';
      font-size: 14px;
    }
    ul li {
      list-style: none;
    }
    .calendar {
      margin: 20px auto;
      width: 350px;
      border-radius: 3px;
      box-shadow: 0 0 10px #ccc;
    }
    .calendar .header {
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #1997fe;
      color: #fff;
      border-radius: 3px 3px 0 0;
    }
    .calendar .header .pre-btn {
      display: block;
      float: left;
      padding: 0 10px;
      cursor: pointer;
    }
    .calendar .header .next-btn {
      display: block;
      float: right;
      padding: 0 10px;
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
      background: rgba(25, 151, 254, 0.4);
      color: #fff;
    }
    .calendar .content ul li.today {
      background: rgba(25, 151, 254, 0.4);
      color: #fff;
    }
    .calendar .content ul li:nth-child(7n + 1), .calendar .content ul li:nth-child(7n) {
      color: #1997fe;
    }
  </style>
