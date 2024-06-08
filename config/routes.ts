export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { path: '/get_charts', name: '智能分析', icon: 'smile', component: './GetCharts/GetCharts', access: 'canAdmin', },
  { path: '/charts_list', name: '图表列表', icon: 'smile', component: './ChartsList/ChartsList', access: 'canAdmin', },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
