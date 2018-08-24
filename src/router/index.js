import Vue from 'vue'
import Router from 'vue-router'
import actionIndex1 from '@/views/public/indexcopy'
import actionIndex from '@/views/public/actionIndex'
import login from '@/views/public/login'
import register from '@/views/public/register'
import errorpage from '@/views/public/404'
import index from '@/views/public/index'
//personal
import usercenter from '@/views/personal/usercenter'
import resume from '@/views/personal/resume'
import order from '@/views/personal/order'
import positionsearch from '@/views/personal/positionsearch'
import positioninfo from '@/views/personal/positioninfo'
import positiondocuments from '@/views/personal/positiondocuments'
//company
import companyindex from '@/views/company/companyindex'
import jianlicom from '@/views/company/jianlicom'
import zhiweicom from '@/views/company/zhiweicom'
import subscribe from '@/views/company/subscribe'
import searchrecom from '@/views/company/searchrecom'
import batchreservation from '@/views/company/batchreservation'
import subscribestatus from '@/views/company/subscribestatus'
import subpoitioncom from '@/views/company/subpoitioncom'
import sysmange from '@/views/company/sysmange'
import jianliindex from '@/views/company/jianliindex'
import poitionlist from '@/views/company/poitionlist'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/poitionlist',
      name: 'poitionlist',
      component: poitionlist
    },    
    {
      path: '/jianliindex',
      name: 'jianliindex',
      component: jianliindex
    },    
    {
      path: '/sysmange',
      name: 'sysmange',
      component: sysmange
    },    
    {
      path: '/subscribestatus',
      name: 'subscribestatus',
      component: subscribestatus
    },    
    {
      path: '/searchrecom',
      name: 'searchrecom',
      component: searchrecom
    },
    {
      path: '/batchreservation',
      name: 'batchreservation',
      component: batchreservation
    },         
    {
      path: '/subpoitioncom',
      name: 'subpoitioncom',
      component: subpoitioncom
    },        
    {
      path: '/actionIndex1',
      name: 'actionIndex1',
      component: actionIndex1
    },
    {
      path: '/jianlicom',
      name: 'jianlicom',
      component: jianlicom
    },
    {
      path: '/zhiweicom',
      name: 'zhiweicom',
      component: zhiweicom
    }, 
    {
      path: '/subscribe',
      name: 'subscribe',
      component: subscribe
    }, 
    {
      path: '/companyindex',
      name: 'companyindex',
      component: companyindex
    },                  
    {
      path: '/errorpage',
      name: 'errorpage',
      component: errorpage
    },        
    // {
    //   path: '/',
    //   name: 'actionIndex',
    //   component: actionIndex
    // },
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{role:'public'} 
    },    
    
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{role:'public'} 
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{role:'public'} 
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume,
      meta:{role:'personal'}     
    },    
    {
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter,
      meta:{role:'personal'} 
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta:{role:'personal'} 
    },
    {
      path: '/positionsearch',
      name: 'positionsearch',
      component: positionsearch,
      meta:{role:'personal'} 
    },
    {
      path: '/positioninfo',
      name: 'positioninfo',
      component: positioninfo,
      meta:{role:'personal'} 
    },
    {
      path:'/positiondocuments',
      name:'positiondocuments',
      component:positiondocuments,
      meta:{role:'personal'} 
    }    

  ],
  //mode :"history"
})
