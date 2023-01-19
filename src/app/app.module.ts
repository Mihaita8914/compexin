import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { TeamService } from 'src/service/team.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteteamsComponent } from './deleteteams/deleteteams.component';
import { MatSelectModule } from '@angular/material/select';
import { AddEditteamsComponent } from './add-editteams/add-editteams.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';
import { AddEditplayersComponent } from './add-editplayers/add-editplayers.component';
import { PlayerService } from 'src/service/player.service';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    DeleteteamsComponent,
    AddEditteamsComponent,
    DeleteplayersComponent,
    AddEditplayersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  
  providers: [TeamService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
