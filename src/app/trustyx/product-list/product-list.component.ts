import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  inputData: any = [];

  constructor(public HTTP:HttpClient,public dialog: MatDialog) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent,{
      height:'80%',
      width:'80%'}
    );
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


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
