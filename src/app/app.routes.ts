import { Routes } from '@angular/router';
import { StartpageComponent } from './pages/startpage/startpage.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

export const routes: Routes = [
    {path: '', component: StartpageComponent},
    {path: 'main', component: MainpageComponent},
];
