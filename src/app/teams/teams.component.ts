import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeamService } from 'src/service/team.service';
import { AddEditteamsComponent } from '../add-editteams/add-editteams.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteteamsComponent } from '../deleteteams/deleteteams.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['DENUMIRE', 'STATUS', 'DATA_CREARE', 'Actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private teamService: TeamService, private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    this.getTeams();
  }

  openDialog() {
    this.dialog.open(AddEditteamsComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getTeams();
      }
    })
  }

  private getTeams() {
    this.teamService.getTeamList().subscribe(data => {
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editTeam(element: any) {
    this.dialog.open(AddEditteamsComponent, {
      width: '30',
      data: element
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getTeams();
      }
    })
  }

  restoreTeam() {
  }

  deleteTeam(element: number) {
    this.dialog.open(DeleteteamsComponent, {
      width: '30',
      data: element
    }).afterClosed().subscribe(val => {
      if (val === 'delete') {
        this.getTeams();
      }
    })
  }
}
