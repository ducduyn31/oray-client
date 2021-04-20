import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor() { }

  public getOrayGateway(): Observable<string> {
    return of('10.168.1.1');
  }
}
