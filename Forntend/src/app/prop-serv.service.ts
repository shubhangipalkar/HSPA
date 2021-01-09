import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from './property-list/properties-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropServService {
  url = "assets/Data/db.json";

  constructor(private http:HttpClient) { }

  getAllProp(sellrent : number): Observable<IProperty[]>{
    return this.http.get(this.url).pipe(map(
      result => {
        const prop: Array<IProperty> = [];
        for (const id in result){
          if (result.hasOwnProperty (id) && result [id].sellrent == sellrent){
            prop.push(result[id]);
          }
        }
        return prop;
      }
    ))
  }
}
