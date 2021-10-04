import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TablaData } from '../interfaces/tabla.interface';

@Component({
  selector: 'app-tabla-dinamica',
  templateUrl: './tabla-dinamica.component.html',
  styles: [`
    table {
      width: 100%;
    }
  `]
})
export class TablaDinamicaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() displayData!:TablaData

  columns:string[] = []
  dataSource!:MatTableDataSource<any>

  constructor() { }

  ngOnInit(): void {
    this.columns = this.displayData.headers;
    this.dataSource = new MatTableDataSource<any>(this.displayData.data);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
