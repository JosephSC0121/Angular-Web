import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/user',
    title: 'Usuario',
    icon: 'bi bi-person',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/post',
    title: 'Posts',
    icon: "bi bi-file-post",
    class: '',
    extralink: false,
    submenu: []
  },
];
