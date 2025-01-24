import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AnimalService } from '../animal.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-animal-listar',
  templateUrl: './animal-listar.component.html',
  styleUrls: ['./animal-listar.component.css']
})
export class AnimalListarComponent implements OnInit {

  @ViewChild('tabela') table: Table;
  rowsPerPageTable: number[] = [10, 25, 50, 100, 200, 500];
  convenios = [];
  cols: any[];
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  sinal = true;
  valorTooltip = 'Inativos';

  constructor(
    private animalService: AnimalService,
    private title: Title,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title.setTitle('Lista de Farm');

    this.carregarFarm();

    this.cols = [
      { field: 'id', header: 'Código', width: '50px', type: 'numeric' },
      { field: 'name', header: 'Name', width: '150px', type: 'text' },
    ]
  }

  carregarFarm() {
    this.animalService.listar()
      .then((obj) => {
        this.convenios = obj;
       // this.convenios = this.validationService.formataAtivoeInativo(this.convenios);
      })
      .catch((erro) => {
        // this.erroHandler.handle(erro);
      })
  }

  refresh(){
    this.carregarFarm();
  }
  onClear(){
    this.table.clear();
  }

  excluirFarm(id: number) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este item?',
      accept: () => {
        this.animalService.excluir(id)
          .then(() => {
            this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item excluído com sucesso!' });
            this.carregarFarm(); // Atualiza a lista após exclusão
          })
          .catch((erro) => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir o item.' });
          });
      }
    });
  }

}
