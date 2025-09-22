import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UiComponent } from './ui/ui';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ui', component: UiComponent }
];
