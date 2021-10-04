import { Component } from '@angular/core';
import { TablaData } from './interfaces/tabla.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ELEMENT_DATA:TablaData = {
    headers: ['position', 'name', 'weight', 'symbol'],
    data: [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}]
  };
  
  Usuarios:TablaData = {
    headers: ['position', 'name', 'pass'],
    data: [{position: 1, name: 'Hydrogen', pass: 1.0079},
    {position: 2, name: 'Helium', pass: 4.0026},
    {position: 3, name: 'Lithium', pass: 6.941},
    {position: 4, name: 'Beryllium', pass: 9.0122},
    {position: 5, name: 'Boron', pass: 10.811},
    {position: 6, name: 'Carbon', pass: 12.0107},
    {position: 7, name: 'Nitrogen', pass: 14.0067},
    {position: 8, name: 'Oxygen', pass: 15.9994},
    {position: 9, name: 'Fluorine', pass: 18.9984},
    {position: 10, name: 'Neon', pass: 20.1797}]
  };

}
