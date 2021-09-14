import { Component, OnInit } from '@angular/core';
import { Payments } from 'src/app/domain/PaymentMethod';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  public titulo:string= "lista de metodo de pago";
  public payments!:Payments[];
  public showMsg:boolean=false;
  public messages!:string[];

  constructor(public paymentService:MetodoPagoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{

    this.paymentService.findAll().subscribe(
      data=>{
        this.payments=data;
      },
      error=>{
        console.log("Error");
      });
   }


}
