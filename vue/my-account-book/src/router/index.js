// router/index.js
const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      { path: '', redirect: 'dashboard' },
      { path: 'dashboard', component: Dashboard }, // 核心数据展示
      { path: 'report', component: ReportView },   // 报表页
      { path: 'records', component: RecordsView }   // 流水页
    ]
  }
]