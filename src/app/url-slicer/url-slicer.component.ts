import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-url-slicer',
  templateUrl: './url-slicer.component.html',
  styleUrls: ['./url-slicer.component.css']
})
export class UrlSlicerComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  public urlLarga:string = '';
  public urlCorta:string = '';

  public urlCortaBusqueda:string = '';
  public urlLargaBusqueda:string = '';

  ngOnInit(): void {
  }

  acortar(){
    this.httpService.urlSlicer(this.urlLarga).subscribe( (res:any) => {
      this.urlCorta = res.shortUrl
    });
  }

  buscar(){
    let urlEncode = this.urlCortaBusqueda.replace("https://go.com/", "");
    console.log("url encode: ",urlEncode);
    this.httpService.queryShortUrl(urlEncode).subscribe( (res:any) => {
      this.urlLargaBusqueda = res.longUrl
    });
  }

}
