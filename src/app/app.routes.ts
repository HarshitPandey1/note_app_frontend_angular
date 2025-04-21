import { Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',component:HomepageComponent
    },
    {
        path: 'notes',component:HomepageComponent
    }
];
