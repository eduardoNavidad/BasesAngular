import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero-page/hero-page';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
    {
        path : '',
        component: Counter
    },
    {
        path:'hero',
        component: HeroPage
    },
    {
        path:'dragonball',
        component:Dragonball
    },
    {
        path:'dragonballSuper',
        component: DragonballSuper
    },
    {
        path:'**',
        redirectTo:''
    }
];
