<template>
	<div id="app">
		<router-view ></router-view>
	</div>
</template>

<script>
import { getToken} from '@/utils/auth'
export default {
	name: 'App',
  data () {
    return {
      msg: '欢迎' 
    }
  },
  computed:{

  },
  methods: {
  },
  mounted() {
        if(getToken()){
            if(this.$route.path == 'usercenter'){
              this.$router.push({name:'usercenter'})
            }else{
               this.$router.push({path:this.$route.path})              
            }            
        }else{
          //this.$router.push({path:'/'})
        }        
        document.getElementById('app').style.display = 'block';
        document.getElementById('appLoading').style.display = 'none';     	 
  }	
}
</script>

<style lang="scss">
@import './styles/index.scss'; // 全局自定义的css样式
</style>
