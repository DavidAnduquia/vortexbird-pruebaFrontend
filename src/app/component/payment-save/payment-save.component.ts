import { Component, OnInit } from '@angular/core';
import { Enable } from 'src/app/domain/enable';
import { Payments } from 'src/app/domain/PaymentMethod';
import { EnableService } from 'src/app/service/enable.service';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';

@Component({
  selector: 'app-payment-save',
  templateUrl: './payment-save.component.html',
  styleUrls: ['./payment-save.component.css']
})
export class PaymentSaveComponent implements OnInit {

 public payment!:Payments;
  public enables!:Enable[];

  public showMsg:boolean=false;
  public messages:string[]=[""];
  constructor(
    public enableService:EnableService,
    public paymentMethodService:MetodoPagoService,
    ) { }
   // public enableService:EnableService;
  ngOnInit(): void {
    this.payment = new Payments(0,"","Y");
    this.findAllEnable();
  }

  public findAllEnable():void{
      this.enables=this.enableService.findAll();
  }

  public save():void{
    //console.table(this.customer);
   this.messages=[""];
    this.paymentMethodService.save(this.payment).subscribe(
      ok => {
       this.showMsg=true;
       this.messages[0] = " El metodo de pago " + this.payment.nombre  + " se grabo con exito";
      }, err=>{
        console.log(err.error.error);
        this.showMsg=true;
        this.messages=err.error.error;
      }
      );
 }


}
