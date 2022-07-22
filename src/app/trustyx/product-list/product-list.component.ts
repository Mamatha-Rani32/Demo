import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  inputData: any = [];

  constructor(public HTTP:HttpClient) { }


  ngOnInit(): void {
    this.inputData =[
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol' : 'Angular Red Background',
      },
    ]
  }

  
}
