import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrayBoxService {

  constructor(private http: HttpClient) { }

  public getSerialNumber(): Observable<string> {
    return of('');
  }
}
