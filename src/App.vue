<template>
	<div id="app">
		<router-view ></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
  data () {
    return {
      msg: '欢迎'	  
    }
  },
  computed:{
	  activePath (){
         return this.$route.path
	  }
  },
  methods: {
      logOut() {
		console.log("aaaaaaaa")
        this.$router.push('/');
      }
  },
  mounted() {
     
	 
  }	
}
</script>

<style lang="scss">
@import './styles/index.scss'; // 全局自定义的css样式
</style>
