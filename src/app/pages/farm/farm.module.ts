import { PrimeNGModule } from './../../primeng.module';
import { NgModule } from "@angular/core";
import { FarmCadastroComponent } from "./farm-cadastro/farm-cadastro.component";


@NgModule({
  declarations:[
    FarmCadastroComponent
  ],
  imports: [
    PrimeNGModule
  ],
  exports: [FarmCadastroComponent]
})

export class FarmModule {}
