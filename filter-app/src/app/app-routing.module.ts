import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanzComponent } from './finanz/finanz.component';

const routes: Routes = [
  { path: 'finanz', component: FinanzComponent },
  { path: '', redirectTo: '/finanz', pathMatch: 'full' }  // Redirect to finanz on root path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
