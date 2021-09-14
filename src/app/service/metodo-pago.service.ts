import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payments } from '../domain/PaymentMethod';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

  private url: string = environment.apiUrl + 'metodopago/'

  constructor(public httpClient: HttpClient) { }

  public findAll(): Observable<any> {
   
    return this.httpClient.get(this.url + 'findAll');
  }

  public findById(payid: number): Observable<any> {
   
    return this.httpClient.get(this.url + 'finById/' + payid);
  }

  public save(payment: Payments): Observable<any> {
    return this.httpClient.post(this.url + 'save', payment);
  }
 
  public update(payment: Payments): Observable<any> {

    return this.httpClient.put(this.url + 'update', payment);
  }
}
