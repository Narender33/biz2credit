import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap, catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'https://api.myjson.com/bins/az3f6';

  constructor(private http: HttpClient) { }

  getISPs():Observable<any>{
    return this.http.get(this.url)
              .pipe(
                concatMap((result:any) => result),  
                catchError(error => Observable.throw(error) )
              )
  }
  getSingleISP():Observable<any>{
    return this.http.get(this.url)
              .pipe(
                concatMap((result:any) => result),
                take(1),  
                catchError(error => Observable.throw(error) )
              )
  }
}
