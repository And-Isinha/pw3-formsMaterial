import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  constructor(private formBuilder: FormBuilder){}

  cadastroForm = this.formBuilder.group({
    resumo : this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    problema : this.formBuilder.control('Tarefa'),
    prioridade : [null],
    data : [null],
    descricao : [null]
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }
}
