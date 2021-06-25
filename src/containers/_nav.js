import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'users',
  //   to: '/users',
  //   icon: 'cil-puzzle',
  //   // _children: [
  //   //   {
  //   //     _tag: 'CSidebarNavItem',
  //   //     name: 'All-Users',
  //   //     to: '/users',
  //   //   },
           
  //   // ]
  // },
  
 
  
   {
    _tag: 'CSidebarNavDropdown',
    name: 'CMS Master',
    // to: '/transactions',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
    _tag: 'CSidebarNavItem',
    name: 'Categories',
    to: '/categories',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
   {
    _tag: 'CSidebarNavItem',
    name: 'Sub Categories',
    to: '/subcategories',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Chapters',
    to: '/chapters',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add Questions',
    to: '/questions',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add Questions xml file',
    to: '/questions',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
    ]
  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Subscription',
    to: '/subscription',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'FAQ',
    to: '/faq',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Manage Price',
  //   to: '/price',
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Varifications',
  //   to: '/verification',
  //   icon: 'cil-puzzle',
  //   // _children: [
  //   //   {
  //   //     _tag: 'CSidebarNavItem',
  //   //     name: 'kyc verification',
  //   //     to: '/users',
  //   //   },
  //   //   {
  //   //     _tag: 'CSidebarNavItem',
  //   //     name: 'Number Verification',
  //   //     to: '/users',
  //   //   },
           
  //   // ]
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
    ]
  }
]

export default _nav
