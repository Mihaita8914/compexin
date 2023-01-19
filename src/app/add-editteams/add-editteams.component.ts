import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeamService } from 'src/service/team.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-add-editteams',
  templateUrl: './add-editteams.component.html',
  styleUrls: ['./add-editteams.component.css']
})
export class AddEditteamsComponent implements OnInit {

teamForm!: FormGroup;
actionBtn: string = 'Save'

constructor(private formBuilder : FormBuilder,
  private teamService : TeamService,
  @Inject(MAT_DIALOG_DATA) public editData:any,
  private dialogRef: MatDialogRef<AddEditteamsComponent>) {}


  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      DENUMIRE : ['',Validators.required],
      STATUS : ['',Validators.required],
      DATA_CREARE : ['',Validators.required]
    })

    if(this.editData){
      this.actionBtn = "Update";
      this.teamForm.controls['DENUMIRE'].setValue(this.editData.DENUMIRE);
      this.teamForm.controls['STATUS'].setValue(this.editData.STATUS);
      this.teamForm.controls['DATA_CREARE'].setValue(this.editData.DATA_CREARE);
    }
}
addTeam(){
  // console.log(this.teamForm.value);
  if(!this.editData){
    if(this.teamForm.value){
      this.teamService.postTeam(this.teamForm.value)
      .subscribe({
        next:(res)=>{
          alert("Echipa a fost adaugata cu succes")
          this.teamForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Eroare la adugare")
        }
      })
    }
  }else{
    this.updateTeam()
  }
}
updateTeam() {
  let body = this.teamForm.value;
  body.ID_ECHIPA = this.editData.ID_ECHIPA;
  this.teamService.putTeam(body)
  .subscribe({
    next: (response: any) => { alert("Echipa a fost modificata cu succes")},
    error: (err: any) => { alert("Eroare la modificare")}
  })
}
}

