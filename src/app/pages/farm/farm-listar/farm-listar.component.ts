import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
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
    private farmService: FarmeService
  ) { }

  ngOnInit() {
    this.title.setTitle('Lista de Farm');

    this.carregarFarm();

    this.cols = [
      { field: 'id', header: 'Código', width: '100px', type: 'numeric' },
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

}
