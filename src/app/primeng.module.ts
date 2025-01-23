import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
exports: [
FormsModule,
ButtonModule,
CardModule,
InputTextModule,

]
})

export class PrimeNGModule {}
