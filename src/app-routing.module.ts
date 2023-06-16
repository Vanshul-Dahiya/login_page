import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../src/app/login-page/login-page.component';
import { Router } from '@angular/router';
import { SplashScreenComponent } from './app/splash-screen/splash-screen.component';


const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent },
  { path: 'login', component: LoginPageComponent },
  // Add other routes for your app if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    // constructor(private router: Router) { 
    //   setTimeout(() => {
    //     this.router.navigate(['/login']);
    //   }, 4000); // Adjust the delay as per your requirement (in milliseconds)
    // }
    
}

