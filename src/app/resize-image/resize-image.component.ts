import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-resize-image',
  templateUrl: './resize-image.component.html',
  styleUrls: ['./resize-image.component.css']
})
export class ResizeImageComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: any; // Variable to store file

  width: any = 0;
  height: any = 0;

  urlDownload: string = '';

  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
    this.urlDownload = "";
  }

  // OnClick of button Upload
  onUpload() {
    
    Swal.fire({
      title: 'Cargando y procesando imagen, por favor espere ..',
      icon: 'info'
    })

    setTimeout(() => {

      const reader = new FileReader();
      reader.onloadend = () => {

        let obj = {
          width: this.width,
          height: this.height,
          data: (<string>reader.result).replace("data:image/png;base64,", ""),
          fileName: this.file.name
        }
        
        this.httpService.uploadFile(obj).subscribe((res: any) => {
          
          let interval = setInterval(() => {
            this.httpService.queryFile(res).subscribe((info: any) => {
              if (info['finished'] == true) {
                clearInterval(interval);
                Swal.fire({
                  title: 'Proceso finalizado correctamente, a continuación podrá descargar el archivo',
                  icon: 'success'
                }).then(() => {
                  this.urlDownload = this.httpService.downloadFile(res);
                });
              }
            })
          }, 1000);



        });

      };
      reader.readAsDataURL(this.file);

    }, 500);


  }

}
