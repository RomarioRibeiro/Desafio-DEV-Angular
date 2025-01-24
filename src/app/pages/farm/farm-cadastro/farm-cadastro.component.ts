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
    this.title.setTitle('Cadastro Farm');
    this.idFarm = this.route.snapshot.params['id'];
    if (this.idFarm) {
      this.carregarFarm(this.idFarm);
    }

  }
  get editando(){
    return Boolean(this.farm.id);
  }

  salvar(form: NgForm) {
    if(this.editando){
      this.atualizarFarm(form);
    }else {
      this.adicionarFarm(form);
    }
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

  atualizarFarm(form: NgForm){
    this.salvando = true;
    this.farmService.atualizar(this.farm)
    .then((obj) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Farm',
        detail: `${obj.name}, atualizado com sucesso!`
      });
      this.atualizarTituloEdicao();
      this.salvando = false;
      this.router.navigate(['/farm']);
    })
    .catch((erro) => {
      this.salvando = false;
       // this.erroHandler.handle(erro);
    })
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Convênio: ${this.farm.name}`);
  }

  carregarFarm(id: number) {
    this.farmService.buscarPorId(id)
      .then((obj) => {
        this.farm = obj;
        this.atualizarTituloEdicao();
      })
      .catch((erro) => {
       // this.erroHandler.handle(erro);
      })
  }



}
