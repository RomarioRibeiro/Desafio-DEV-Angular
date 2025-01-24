import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/core/models/animal.model';
import { AnimalService } from '../animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Farm } from 'src/app/core/models/farm.model';
import { FarmeService } from '../../farm/farm.service';

@Component({
  selector: 'app-animal-cadastro',
  templateUrl: './animal-cadastro.component.html',
  styleUrls: ['./animal-cadastro.component.css']
})
export class AnimalCadastroComponent implements OnInit {

  salvando: boolean = false;
  animal = new Animal();
  idAnimal: number;
  farm = new Farm()
  farms = []
  messageDrop = 'Nenhum resultado encontrado...';
  selectedFarm: any;

  constructor(
    private animalService: AnimalService,
    private farmService: FarmeService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro Animal');
    this.idAnimal = this.route.snapshot.params['id'];

    if (this.idAnimal) {
      this.carregarAnimal(this.idAnimal);
    }
    this.carregarFarm()

  }

  get editando(){
    return this.animal && this.animal.id;
  }

  salvar(form: NgForm) {
    if(this.editando){
      this.atualizarAnimal(form);
    }else {
      this.adicionarAnimal(form);
    }
   }

   adicionarAnimal(form: NgForm) {
    if (!this.selectedFarm) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Animal',
        detail: 'Selecione uma fazenda antes de salvar.'
      });
      return;
    }

    this.salvando = true;

    // Atribuir farmId ao animal antes de enviar
    this.animal.farmId = this.selectedFarm.value;

    this.animalService.adicionar(this.animal)
      .then((obj) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Animal',
          detail: `${obj.name}, adicionado com sucesso!`
        });
        this.salvando = false;
        this.router.navigate(['/animal']);
      })
      .catch((erro) => {
        this.salvando = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao salvar animal. Verifique os dados e tente novamente.'
        });
      });
  }


  atualizarAnimal(form: NgForm) {
    if (!this.selectedFarm) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Animal',
        detail: 'Selecione uma fazenda antes de salvar.'
      });
      return;
    }

    this.salvando = true;

    // Atribuir o farmId ao animal antes de enviar
    this.animal.farmId = this.selectedFarm.value;

    this.animalService.atualizar(this.animal)
      .then((obj) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Animal',
          detail: `${obj.name} atualizado com sucesso!`
        });
        this.salvando = false;

        // Redirecionar ou atualizar a página conforme necessário
        this.router.navigate(['/animal']);
      })
      .catch((erro) => {
        this.salvando = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao atualizar o animal.'
        });
      });
  }

    atualizarTituloEdicao() {
      this.title.setTitle(`Edição de Convênio: ${this.animal.name}`);
    }

    carregarAnimal(id: number) {
      this.animalService.buscarPorId(id)
        .then((animal) => {
          this.animal = animal;

          // Selecionar a fazenda no dropdown
          this.selectedFarm = this.farms.find(farm => farm.value === animal.farmId);

          this.atualizarTituloEdicao();
        })
        .catch((erro) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao carregar os dados do animal.'
          });
        });
    }



    carregarFarm() {
      return this.farmService
        .listar()
        .then((pac) => {
          this.farms = pac.map((mp) => ({ label: mp.name, value: mp.id }));

        })
        .catch((erro) => {
        //  this.errorHandler.handle(erro);
        });
    }

    animalFarm() {
      this.animal.farm.id = this.selectedFarm.value;
    }

}
