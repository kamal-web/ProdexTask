import Vue from 'vue';
import Router from 'vue-router';
import Track from '../pages/TrackAndTrace';
import Dashboard from '../pages/Dashboard';
import ImportAssets from '../pages/ImportAssets';
import Reports from '../pages/Reports';
import AlertsAndRules from '../pages/AlertsAndRules';
import Settings from '../pages/Settings';
import AuditLogs from '../pages/AuditLogs';

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: configRoutes(),
  });

  // router.beforeEach((to, from, next) => {
  //   console.log("in router",to.path);
  //   if(!to.path.includes('/track-and-trace')){
  //     next(`/${to.path}`)
  //   }
  // })

  export default router;
  

  function configRoutes() {
    return [
      {
        path: "/",
        component: Track,
      },
      {
        path: "/dashboard",
        component: Dashboard,
      },
      {
        path: "/track-and-trace",
        component: Track,
      },
      
      {
        path: "/import-assets",
        component: ImportAssets,
      },
      {
        path: "/reports",
        component: Reports,
      },
      {
        path: "/alerts-and-rules",
        component: AlertsAndRules,
      },
      {
        path: "/settings",
        component: Settings,
      },
      {
        path: "/audit-logs",
        component: AuditLogs,
      }
    ]
    }
  