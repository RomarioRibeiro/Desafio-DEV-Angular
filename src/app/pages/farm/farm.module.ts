import { PrimeNGModule } from './../../primeng.module';
import { NgModule } from "@angular/core";
import { FarmCadastroComponent } from "./farm-cadastro/farm-cadastro.component";
import { FarmListarComponent } from './farm-listar/farm-listar.component';
import { FarmRouting } from './farm.routing';


@NgModule({
  declarations:[
    FarmCadastroComponent,
    FarmListarComponent
  ],
  imports: [
    PrimeNGModule,
    FarmRouting
  ],
  exports: [FarmCadastroComponent]
})

export class FarmModule {}
