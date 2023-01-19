import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "src/models/team";


@Injectable({
    providedIn: 'root'
})
export class TeamService {

    teamscomponent: Team[] = [];

    constructor(private httpClient: HttpClient) { }

    getTeamList(): Observable<any> {
        return this.httpClient.get<any>("https://recrutare.compexin.ro/api/web/echipe");
    }

    getTeam() {
        return this.httpClient.get<any>("https://recrutare.compexin.ro/api/web/echipe");
    }
    postTeam(data: Team) {
        return this.httpClient.post<any>("https://recrutare.compexin.ro/api/web/echipe", data);
    }
    putTeam(data: Team) {
        return this.httpClient.put<any>("https://recrutare.compexin.ro/api/web/echipe/", data);
    }
    deleteTeam(data: any) {
        return this.httpClient.request('delete', "https://recrutare.compexin.ro/api/web/echipe/", { body: data });
    }
}