import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { Payments } from 'src/app/domain/PaymentMethod';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent implements OnInit {

  public paymentMethod!:Payments;
  public enables!:Enable[];
  public payId!:number;

  public showMsg:boolean=false;
  public messages:string[]=[""];

  constructor(public router:Router,
    public activatedRoute:ActivatedRoute,
    public paymentMethodService:MetodoPagoService
    ){ }

   // public enableService:EnableService

  ngOnInit(): void {
    //let params=this.activatedRoute.params['_value'];
    //this.payId=params.payId;
    console.log(this.payId)
    this.findById();
  }


  public findAllEnable():void{
   // this.enables=this.enableService.findAll();
  }

  public findById():void{
    this.paymentMethodService.findById(this.payId).subscribe(
      data=>{
      this.paymentMethod=data;
      console.table(this.paymentMethod);
    });
}

public update():void{
  //console.table(this.customer);
 this.messages=[""];
  this.paymentMethodService.update(this.paymentMethod).subscribe(
    ok => {
     this.showMsg=true;
     this.messages[0] = " El paymentMethod se actualizo con exito";
    }, err=>{
      console.log(err.error.error);
      this.showMsg=true;
      this.messages=err.error.error;
    }
    );
}
}
