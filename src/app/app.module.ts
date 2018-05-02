import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './notFound/not-found.component';

const routes: Route[] = [
  {
    component: WelcomeComponent,
    path: 'welcome'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: WelcomeComponent,
    path: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule ({
    declarations: [
      AppComponent,
      WelcomeComponent,  // Telling angular about the component
      ApplicationComponent,
      LoginComponent,
      NavigationComponent,
      NotFoundComponent
    ],

    imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
    ],

    bootstrap: [
     AppComponent // Only the index html can be bootstrapped
    ]
})
export class AppModule {

}
