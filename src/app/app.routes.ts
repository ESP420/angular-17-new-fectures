import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
        {
            path: 'change-detection',
            title: 'Change Detection',
            loadComponent: () => import('./dashboard/pages/changes-detection/changes-detection.component'),
            data: { animation: 'openClosePage' }
        },
        {
            path: 'control-flow',
            title: 'Control Flow',
            loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            data: { animation: 'statusPage' }

        },
        {
            path: 'defer-options',
            title: 'Defer Options',
            loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
            data: { animation: 'togglePage' }
        },
        {
            path: 'defer-views',
            title: 'Defer views',
            loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
            data: { animation: 'filterPage' }
        },
        {
            path: 'user/:id',
            title: 'user',
            loadComponent: () => import('./dashboard/pages/user/user.component'),
            data: { animation: 'heroGroupPage' }
        },
        {
            path: 'user-list',
            title: 'User list',
            loadComponent: () => import('./dashboard/pages/users/users.component'),
            data: { animation: 'enterLeavePage' }
        },
        {
            path: 'view-transition-1',
            title: 'View Transition 1',
            loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
            data: { animation: 'autoPage' }
        },
        {
            path: 'view-transition-2',
            title: 'View Transition 2',
            loadComponent: () => import('./dashboard/pages/view-transition/view-transition-2.component'),
            data: { animation: 'enterLeavePage' }
        },
        {
            path: '',
            redirectTo: 'control-flow',
            pathMatch: 'full',
        }]

},
{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}];
