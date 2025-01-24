import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { PrimeNGModule } from "../primeng.module";
import { RouterModule } from "@angular/router";


@NgModule({
declarations:[LayoutComponent, NavbarComponent],
imports: [
PrimeNGModule,
RouterModule,
],
providers: [],
exports: [LayoutComponent]
})

export class CoreModule {}
