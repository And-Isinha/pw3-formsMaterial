import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { multicast } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  ocultarSenha:boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  cadastroForm = this.formBuilder.group({
    nome : [null],
    email : [null],
    usuario : [null],
    senha : [null],
    confirmarSenha : [null]

  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }

}
