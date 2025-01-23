import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from "@angular/core";


import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
exports: [
FormsModule,
ButtonModule,
CardModule,
InputTextModule,
AvatarGroupModule,
AvatarModule,
SidebarModule,
AccordionModule

]
})

export class PrimeNGModule {}
