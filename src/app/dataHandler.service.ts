import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject, map } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class DataHanlerService {

    constructor(private http: HttpClient) { }

    url = "https://jsonblob.com/api/jsonBlob/1118854887592181760";

    updLists: BehaviorSubject<any> = new BehaviorSubject('a')
    postData(res: any) {
        return this.http.post(this.url, res)         

    }

    getData() {
        return this.http.get(this.url);
    }

} 