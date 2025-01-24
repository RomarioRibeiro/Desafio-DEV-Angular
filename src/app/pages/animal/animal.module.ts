import { NgModule } from "@angular/core";
import { AnimalListarComponent } from "./animal-listar/animal-listar.component";
import { PrimeNGModule } from "src/app/primeng.module";
import { AnimalRouting } from "./animal.routing";
import { AnimalCadastroComponent } from "./animal-cadastro/animal-cadastro.component";



@NgModule({
declarations: [
  AnimalListarComponent,
  AnimalCadastroComponent
],
imports: [
  PrimeNGModule,
  AnimalRouting
]
})

export class AnimalModule {}
