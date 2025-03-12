import { Routes } from '@angular/router';
import { StartpageComponent } from './pages/startpage/startpage.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { TuturialpageComponent } from './pages/tuturialpage/tuturialpage.component';

export const routes: Routes = [
    {path: '', component: StartpageComponent},
    {path: 'main', component: MainpageComponent},
    {path: 'tutorial', component: TuturialpageComponent}
];
