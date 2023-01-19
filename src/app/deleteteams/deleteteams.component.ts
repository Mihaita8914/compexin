import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from 'src/service/team.service';

@Component({
  selector: 'app-deleteteams',
  templateUrl: './deleteteams.component.html',
  styleUrls: ['./deleteteams.component.css']
})
export class DeleteteamsComponent {

  constructor(private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public deleteData: any) { }


  deleteTeam() {
    console.log(this.deleteData);
    this.teamService.deleteTeam({ ID_ECHIPA: this.deleteData })
      .subscribe({
        next: (res) => {
          alert("Inregistrarea s-a sters cu succes ")
        },
        error: () => {
          alert("Error!!")
        }
    })
  }


}
