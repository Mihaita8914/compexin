import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from 'src/service/player.service';

@Component({
  selector: 'app-deleteplayers',
  templateUrl: './deleteplayers.component.html',
  styleUrls: ['./deleteplayers.component.css']
})
export class DeleteplayersComponent {

  constructor(private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public deleteData: any) { }


  deletePlayer() {
    // console.log(this.deleteData);
    debugger
    this.playerService.deletePlayer({ ID_JUCATOR: this.deleteData })
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
