import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CriaClienteDto } from 'src/app/models/cliente-dto';
import { ClienteServiceService } from 'src/app/shared/http-service/cliente-service/cliente-service.service';

@Component({
  selector: 'app-cria-cliente',
  templateUrl: './cria-cliente.component.html',
  styleUrls: ['./cria-cliente.component.scss']
})
export class CriaClienteComponent implements OnInit {

  formularioCliente: FormGroup;
  cpfRegex: RegExp = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private formBuilder: FormBuilder, 
    private clienteServiceService: ClienteServiceService,
    private router: Router) { 
    this.formularioCliente = this.formBuilder.group({
      senha: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      nome: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.formularioCliente.valid){
      const clienteCriado = this.getCliente();
      this.clienteServiceService.criaCliente(clienteCriado).subscribe(
        (res)=>{
          console.log(res);
          console.log("Create feito");
          this.router.navigate(['/login']);
        },
        (error)=>{
          console.log(error);
          console.log("Error na criação");
          this.router.navigate(['/']);
        }
      );
    }
  }

  getCliente(): CriaClienteDto{
    const formularioValoresCliente = this.formularioCliente.value;
    const criaCliente: CriaClienteDto = {
      cpf: formularioValoresCliente.cpf,
      nome: formularioValoresCliente.nome,
      email: formularioValoresCliente.email,
      senha: formularioValoresCliente.senha
    }
    return criaCliente;
  }
}
