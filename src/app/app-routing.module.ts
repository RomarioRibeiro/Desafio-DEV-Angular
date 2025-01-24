import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'farm' , loadChildren: () =>
    import('./pages/farm/farm.module').then(m => m.FarmModule)
  },
  {
    path: 'animal' , loadChildren: () =>
    import('./pages/animal/animal.module').then(m => m.AnimalModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
