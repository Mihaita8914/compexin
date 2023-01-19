import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from 'src/service/player.service';

@Component({
  selector: 'app-add-editplayers',
  templateUrl: './add-editplayers.component.html',
  styleUrls: ['./add-editplayers.component.css']
})
export class AddEditplayersComponent implements OnInit{

  playerForm!: FormGroup;
  actionBtn: string = 'Save'
  
  constructor(private formBuilder : FormBuilder,
    private playerService : PlayerService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef: MatDialogRef<AddEditplayersComponent>) {}
  
  
    ngOnInit(): void {
      this.playerForm = this.formBuilder.group({
        NUME : ['',Validators.required],
        PRENUME : ['',Validators.required],
        DATA_NASTERE : ['',Validators.required],
        ID_ECHIPA : ['',Validators.required],
        STATUS : ['',Validators.required]
      })
  
      if(this.editData){
        this.actionBtn = "Update";
        this.playerForm.controls['NUME'].setValue(this.editData.NUME);
        this.playerForm.controls['PRENUME'].setValue(this.editData.PRENUME);
        this.playerForm.controls['DATA_NASTERE'].setValue(this.editData.DATA_NASTERE);
        this.playerForm.controls['ID_ECHIPA'].setValue(this.editData.ID_ECHIPA);
        this.playerForm.controls['STATUS'].setValue(this.editData.ID_ECHIPA);
      }
  }
  addPlayer(){
    // console.log(this.playerForm.value);
    debugger
    if(!this.editData){
      if(this.playerForm.value){
        this.playerService.postPlayer(this.playerForm.value)
        .subscribe({
          next:(res)=>{
            alert("Jucatorul a fost adaugat cu succes")
            this.playerForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Eroare la adugare")
          }
        })
      }
    }else{
      this.updatePlayer()
    }
  }
  updatePlayer() {
    let body = this.playerForm.value;
    body.ID_JUCATOR = this.editData.ID_JUCATOR;
    this.playerService.putPlayer(body)
    .subscribe({
      next: (response: any) => { alert("Jucatorul a fost modificat cu succes")},
      error: (err: any) => { alert("Eroare la modificare")}
    })
  }
  }
  
