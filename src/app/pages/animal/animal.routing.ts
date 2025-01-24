import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalListarComponent } from "./animal-listar/animal-listar.component";

const routes: Routes = [
  {
      path: '', component: AnimalListarComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports: [RouterModule]
})

export class AnimalRouting {}
