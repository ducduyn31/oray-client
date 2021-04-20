import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GatewayService} from '../gateway/gateway.service';
import {mergeMap, pluck} from 'rxjs/operators';
import {OrayCgiResponse} from '../../../shared/responses/oray_cgi.response';

@Injectable({
  providedIn: 'root'
})
export class OrayBoxService {

  constructor(private http: HttpClient, private gateway: GatewayService) {
  }

  public getSerialNumber(): Observable<string> {

    const orayGateway$ = this.gateway.getOrayGateway();

    return orayGateway$.pipe(
      mergeMap(
        (orayGateway) => {
          return this.http.get<OrayCgiResponse>(`http://${orayGateway}/cgi-bin/oraybox`, {
            params: {
              _api: 'sn_get',
              _: Date.now().toString(),
            },
          }).pipe(
            pluck('sn')
          );
        }
      ),
    );
  }
}
