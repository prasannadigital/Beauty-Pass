export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home'
  },
  {
    name: 'Users',
    url: '/users-list',
   icon: 'icon-people'
 },
 {
  name: 'Employee',
  url: '/admin/employees',
  icon: 'icon-people'
},
{
  name: 'FAQs',
  url: '/admin/faqs',
  icon: 'icon-plus'
},
  {
    name: 'Testmonials',
    url: '/testmonials',
   icon: 'icon-note',
    children: [
      {
        name: 'Written Testmonials',
       url: '/testmonials/written',
       icon: 'icon-note'
     },
      {
       name: 'Video Testmonials',
        url: '/testmonials/video',
         icon: 'icon-note'
      },
    ]
   },
   {
    name: 'Refferal Rewards',
    url: '/refferal-rewards',
    icon: 'icon-cursor',
    children: [
      {
        name: 'User Activities',
        url: '/refferal-rewards/user-activities',
        icon: 'icon-cursor'
      },
      {
        name: 'User History',
        url: '/refferal-rewards/user-history',
        icon: 'icon-cursor'
      },
      {
        name: 'Perks',
        url: '/refferal-rewards/perks',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Beauty Tips',
    url: '/admin/beauty-tips',
    icon: 'icon-user-female'
  },
  {
    name: 'Mind Body Coupons',
     url: '/mind-body-coupons',
    icon: 'icon-envelope-open',
  },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'icon-note',
    children: [
     {
      name: 'Voucher Reports',
         url: '/reports/voucher',
      icon: 'icon-note'
       },
       {
         name: 'User Activity Reports',
       url: '/reports/user-activity',
       icon: 'icon-note'
     },
      // {
      //   name: 'Written Testmonials',
      //    url: '/base/collapses',
      // icon: 'icon-note'
      //  },
      //  {
      //   name: 'Video Testmonials',
      //   url: '/base/forms',
      //   icon: 'icon-puzzle'
      //  },
     // {
      // name: 'Beauty Tips Reports',
       //url: '/base/paginations',
     //  icon: 'icon-puzzle'
     //  },
      // {
      //    name: 'User Coupons List',
      //   url: '/base/popovers',
      //   icon: 'icon-puzzle'
      //  },
      {
        name: 'Pearks and Rewards',
        url: '/reports/perks',
         icon: 'icon-note'
      },
       {
         name: 'Employee Log History',
       url: '/reports/logs',
        icon: 'icon-note'
      },
      // {
      //   name: 'Tables',
      //   url: '/base/tables',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips',
      //   icon: 'icon-puzzle'
      // }
    ]
  },
 
 
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  

  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
