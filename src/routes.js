import React from 'react';
import DAsbosdbjsdf from  './views/dashboard/Dashboard'
// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./views/base/tables/Tables'));

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

// const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
// const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
// const Navs = React.lazy(() => import('./views/base/navs/Navs'));
// const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
// const Switches = React.lazy(() => import('./views/base/switches/Switches'));

// const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/charts/Charts'));
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
// const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const getCategories = React.lazy(() => import('./views/categories/getCategories'));
const addCategories = React.lazy(() => import('./views/categories/addCategories'));
const getSubcategories = React.lazy(() => import('./views/subcategories/getSubcategories'));
const AddSubcategories = React.lazy(() => import('./views/subcategories/addSubcategory'));
const getChapters = React.lazy(() => import('./views/chapters/getChapters'));
const AddChapter = React.lazy(() => import('./views/chapters/addChapter'));

const GetQuestions = React.lazy(() => import('./views/questions/getQuestions'));
const AddQuestions = React.lazy(() => import('./views/questions/addQuestion'));



const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const EditUser = React.lazy(() => import('./views/users/editUser'));
const AddUsers = React.lazy(() => import('./views/users/addUser'));

const Login = React.lazy(() => import('./views/pages/login/Login'));
const Transactions = React.lazy(() => import('./views/Transactions/transactions'));
//
const Earning = React.lazy(() => import('./views/Transactions/earning'));
const Mining = React.lazy(() => import('./views/Transactions/mining'));
const Refferal = React.lazy(() => import('./views/Transactions/referral'));
const ViewPrice = React.lazy(() => import('./views/ManagePrice/viewprice'));
const Verification = React.lazy(() => import('./views/varification/verification'));
const ViewDoc = React.lazy(() => import('./views/varification/viewDoc'));



const routes = [

  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/categories', exact: true, name: 'Categories', component: getCategories },
  { path: '/add/category', exact: true, name: 'addCategory', component: addCategories },

  { path: '/subcategories', exact: true, name: 'Categories', component: getSubcategories },
  { path: '/add/subcategory', exact: true, name: 'Add Sub Category', component: AddSubcategories },

  { path: '/chapters', exact: true, name: 'Chapters', component: getChapters },
  { path: '/add/chapter', exact: true, name: 'Add Chapter', component: AddChapter },

  { path: '/questions', exact: true, name: 'questions', component: GetQuestions },
  { path: '/add/question', exact: true, name: 'Add question', component: AddQuestions },




  { path: '/users/add-users', name: 'Add User', component: AddUsers },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/user/:id', exact: true, name: 'User Details', component: User },
  { path: '/user/edit/:id', exact: true, name: 'Edit User', component: EditUser },

 
 { path: '/transactions', name: 'transactions', component: Transactions, exact: true },
  { path: '/earning', name: 'Earning', component: Earning, exact: true },
  { path: '/mining', name: 'Mining', component: Mining , exact: true},
  { path: '/referral', name: 'Refferal', component: Refferal , exact: true},
  { path: '/price', name: 'price', component: ViewPrice, exact: true },
  { path: '/verification', name: 'verification', component: Verification },
  { path: '/doc/:id', exact: true, name: 'viewDoc', component: ViewDoc }
  // { path: '/base/cards', name: 'Cards', component: Cards },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
 
];

export default routes;
