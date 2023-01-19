import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/models/player';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerscomponent: Player[] = [];


  constructor(private httpClient: HttpClient) { }

  getPlayerList(): Observable<any> {
    return this.httpClient.get<any>("https://recrutare.compexin.ro/api/web/jucatori");
}

getPlayer() {
    return this.httpClient.get<any>("https://recrutare.compexin.ro/api/web/jucatori");
}
postPlayer(data: Player) {
  return this.httpClient.post<any>("https://recrutare.compexin.ro/api/web/jucatori", data);
}
putPlayer(data: Player) {
  return this.httpClient.put<any>("https://recrutare.compexin.ro/api/web/jucatori/", data);
}
deletePlayer(data: any) {
  return this.httpClient.request('delete', "https://recrutare.compexin.ro/api/web/jucatori/", { body: data });
}
}
