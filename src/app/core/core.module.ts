import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { PrimeNGModule } from "../primeng.module";
import { RouterModule } from "@angular/router";
import { ConfirmationService } from "primeng/api";


@NgModule({
declarations:[LayoutComponent, NavbarComponent],
imports: [
PrimeNGModule,
RouterModule,
],
providers: [
  ConfirmationService
],
exports: [LayoutComponent]
})

export class CoreModule {}
