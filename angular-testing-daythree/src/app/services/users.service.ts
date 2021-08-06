import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getUserList(): Observable<any> {
    return this._http.get('https://reqres.in/api/users');
  }

  getUserDetails(id: any) {
    return this._http.get(`https://reqres.in/api/users/${id}`)
      .pipe(map((data) => this.transformResponseToAddUniversity(data)));
  }

  transformResponseToAddUniversity(response: any) {
    response['data']['university'] = "BVIMR";
    return response;
  }

}
