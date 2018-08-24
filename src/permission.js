import router from './router'
import { Message } from 'element-ui'
//路由跳转之前
router.beforeEach((to, from, next) => {
  if(from.path =='/'){
    next()
  }else{
    if(to.meta.role =='public' || from.meta.role =='public'){
      next()
    }else{
      if(to.meta.role == from.meta.role){
        if(to.path == '/message'){
          next({ path: '/errorpage' })
        }else{
          next()
        }            
      }else{
        next({ path: '/login' })
      }    
    }    
  }


})
//路由跳转之后
router.afterEach((to,from,next) => {
  
})
