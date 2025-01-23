import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farm } from 'src/app/core/models/farm.model';
import { FarmeService } from '../farm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-farm-cadastro',
  templateUrl: './farm-cadastro.component.html',
  styleUrls: ['./farm-cadastro.component.css']
})
export class FarmCadastroComponent implements OnInit {

  salvando: boolean = false;
  farm = new Farm();
  idFarm: number;


  constructor(
    private farmService: FarmeService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private messageService: MessageService
  ) { }

  ngOnInit() {


  }

  salvar(form: NgForm) {
    this.adicionarFarm(form);
  }


  adicionarFarm(form: NgForm) {
    this.salvando = true;
    this.farmService.adicionar(this.farm)
      .then((obj) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Farm',
          detail: `${obj.name}, adicionado com sucesso!`
        });
        this.salvando = false;
        this.router.navigate(['/farm']);
      })
      .catch((erro) => {
        this.salvando = false;
        // this.erroHandler.handle(erro);
      })
  }

}
