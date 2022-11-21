import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CriaCorretorDto } from 'src/app/models/corretor-dto';
import { CorretorServiceService } from 'src/app/shared/http-service/corretor-service/corretor-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cria-corretor',
  templateUrl: './cria-corretor.component.html',
  styleUrls: ['./cria-corretor.component.scss']
})
export class CriaCorretorComponent implements OnInit {

  formularioCorretor: FormGroup;
  
  codigos: string[] = [];
  constructor(private formBuilder: FormBuilder,
    private corretorServiceService: CorretorServiceService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    public dialog: MatDialog) { 
    this.formularioCorretor = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      codigo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.codigos = environment.codigos;
  }

  submitForm(){
    const codigoFormulario = String(this.formularioCorretor.value.codigo);
    const encotrouCodigo = this.codigos.find((x) => x === codigoFormulario); 
    if(!encotrouCodigo){
      this.dialog.open(DialogElementsExampleDialog);
      return; 
    }
    if(this.formularioCorretor.valid){
      const corretorCriado = this.getCorretor();
      this.corretorServiceService.criaCorretor(corretorCriado).subscribe(
        (res)=>{
          console.log(res);
          console.log("Create feito");
          this.router.navigate(['/login']);
        },
        (error)=>{
          console.log(error);
          console.log("erro na criação");
          this.router.navigate(['/', false],{
            relativeTo: this.activeRouter,
          });
        }
      );
    }
  }
  getCorretor(): CriaCorretorDto{
    const formularioValoresCorretor = this.formularioCorretor.value;
    const criaCorretor: CriaCorretorDto = {
      email: formularioValoresCorretor.email,
      senha: formularioValoresCorretor.senha,
      nome: formularioValoresCorretor.nome,
    }
    return criaCorretor;
  }
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}