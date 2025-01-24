import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalListarComponent } from "./animal-listar/animal-listar.component";
import { AnimalCadastroComponent } from "./animal-cadastro/animal-cadastro.component";

const routes: Routes = [
  {
      path: '', component: AnimalListarComponent
  },
  {
      path: ':id', component: AnimalCadastroComponent
  },
  {
      path: 'novo', component: AnimalListarComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports: [RouterModule]
})

export class AnimalRouting {}
