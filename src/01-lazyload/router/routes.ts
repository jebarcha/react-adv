import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../pages/NoLazy';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunckName: "LazyLayout" */'../../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: 'lazyload/*',
        to: '/lazyload/',
        component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    }

];