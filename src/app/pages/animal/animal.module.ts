import { NgModule } from "@angular/core";
import { AnimalListarComponent } from "./animal-listar/animal-listar.component";
import { PrimeNGModule } from "src/app/primeng.module";
import { AnimalRouting } from "./animal.routing";



@NgModule({
declarations: [
  AnimalListarComponent,
],
imports: [
  PrimeNGModule,
  AnimalRouting
]
})

export class AnimalModule {}
