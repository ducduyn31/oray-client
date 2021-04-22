import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {ElectronService} from '../electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private electron: ElectronService) { }

  public getOrayGateway(): Observable<string> {
    const result: Subject<string> = new Subject<string>();

    this.electron.network.get_gateway_ip((err, ip) => {
      !!ip && result.next(ip);
    });

    return result;
  }
}
