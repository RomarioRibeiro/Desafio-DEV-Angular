import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{


  sair: any;
  logo: any = '/assets/img/Logo.jpg' ;
  logoDescricao: any = '/assets/images/labsdev-circle-icon.png';
  visibleSidebar;
  menu;
  env = environment;
  loading: boolean;

  ngOnInit() {
  }

}
