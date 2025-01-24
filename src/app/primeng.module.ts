import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from "@angular/core";


import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
exports: [
FormsModule,
ButtonModule,
CardModule,
InputTextModule,
AvatarGroupModule,
AvatarModule,
SidebarModule,
AccordionModule,
SplitterModule,
SplitButtonModule,
TableModule,
CommonModule,
ToastModule,
ConfirmDialogModule
]
})

export class PrimeNGModule {}
