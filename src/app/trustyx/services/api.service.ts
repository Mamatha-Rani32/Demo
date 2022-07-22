// import { Search } from '../search';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchOption=[];
  // public searchbar: Search[] = [];
  constructor(private http: HttpClient) { }

  serviceCall(){
    return this.http.get('https://public-api.solscan.io/account/DfZbQm6V9hoH7JkfxsbNdLbyef7hRKnarAMJ1nmD1qej');
    // return this.http.get('https://public-api.solscan.io/account/5bYVRWfnBazRxsQDRqbMUgtLXsmde9jkVMiKewZA4CRe');
  }

  getapi(searchValue:any){
    return this.http.get(`https://public-api.solscan.io/account/${searchValue}`);
  }

 
}


