import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  uploadFile(obj:any){
    return this.http.post('http://localhost:8081/msresizeimage/api/v1/resize-image', obj)
  }

  queryFile(idProcess:number){
    return this.http.get('http://localhost:8081/msresizeimage/api/v1/query-state/'+idProcess)
  }

  downloadFile(idProcess:number){
    return 'http://localhost:8081/msresizeimage/api/v1/download/'+idProcess
  }

  urlSlicer(longUrl:string){
    let obj = {
      "longUrl" : longUrl
    }
    return this.http.post('http://localhost:8082/msurlslicer/api/v1/url-slicer', obj)
  }

  queryShortUrl(shortUrl:string){
    return this.http.get('http://localhost:8082/msurlslicer/api/v1/url-slicer/'+shortUrl)
  }

}
