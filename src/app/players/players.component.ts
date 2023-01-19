import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditplayersComponent } from '../add-editplayers/add-editplayers.component';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PlayerService } from 'src/service/player.service';
import { DeleteplayersComponent } from '../deleteplayers/deleteplayers.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['NUME', 'PRENUME', 'DATA_NASTERE',"ID_ECHIPA","DATA_CREARE","STATUS",'Actions'];

  constructor( private playerService: PlayerService,private dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer,) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    this.getPlayers();
  }

  dataSource = new MatTableDataSource<any>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(AddEditplayersComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getPlayers();
      }
    })
  }

  private getPlayers() {
    this.playerService.getPlayerList().subscribe(data => {
      this.dataSource.data = data.DATA;
    });
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  editPlayer(element: any) {
    this.dialog.open(AddEditplayersComponent, {
      width: '30',
      data: element
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getPlayers();
      }
    })
  }

  restorePlayer() {
}

  deletePlayer(element: number) {
    this.dialog.open(DeleteplayersComponent, {
      width: '30',
      data: element
    }).afterClosed().subscribe(val => {
      if (val === 'delete') {
        this.getPlayers();
      }
    })
  }
}


