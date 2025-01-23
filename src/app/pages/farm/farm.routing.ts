import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmCadastroComponent } from "./farm-cadastro/farm-cadastro.component";

const routes: Routes = [
  {
      path: 'novo', component: FarmCadastroComponent
  },
  {
      path: ':id', component: FarmCadastroComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports: [RouterModule]
})


export class FarmRouting {}
