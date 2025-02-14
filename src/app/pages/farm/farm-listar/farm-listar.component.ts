import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { FarmeService } from '../farm.service';


@Component({
  selector: 'app-farm-listar',
  templateUrl: './farm-listar.component.html',
  styleUrls: ['./farm-listar.component.css']
})
export class FarmListarComponent implements OnInit {

  @ViewChild('tabela') table: Table;
  rowsPerPageTable: number[] = [10, 25, 50, 100, 200, 500];
  convenios = [];
  cols: any[];
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  sinal = true;
  valorTooltip = 'Inativos';

  constructor(
    private title: Title,
    private farmService: FarmeService,
    private confirmationService: ConfirmationService, // Para confirmação
    private messageService: MessageService // Para mensagens ao usuário
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
    this.farmService.listar()
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
        this.farmService.excluir(id)
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
