import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { AdminComponent } from './admin/admin.component';

import { SideComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'    
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', children:[
     { path: '', component: AdminComponent},          
     { path: '' , component: SideComponent, outlet: 'sidemenu'},
     { path: '' , component: ContentComponent, outlet: 'admincontent'}
  ]},
  { path: 'firstpage', children:[
     { path: 'login', component: LoginComponent},
     { path: 'signup', component: SignupComponent},
     { path: '' , component: HeaderComponent, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'}
  ]},
  { path: 'secondpage', children:[
     { path: 'login', component: LoginComponent},
     { path: 'signup', component: SignupComponent},
     { path: '' , component: HeaderComponent, outlet: 'header'},
     { path: '' , component: NavComponent, outlet: 'navbar'},
     { path: '' , component: FooterComponent, outlet: 'footer'}
  ]},
  { path: 'welcome', children:[
     { path: '', component: DashboardComponent},
     { path: 'login', component: LoginComponent},
     { path: 'signup', component: SignupComponent},     
  ]}
 
];
export const routing = RouterModule.forRoot(appRoutes);


