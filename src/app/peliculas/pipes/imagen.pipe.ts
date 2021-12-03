import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';


const url = environment.imgPath


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {


  transform(imagen: string, size: string ='w500'): string {
    
    // if(!imagen) {
    //   return;
    // }

    const urlImg = `${url}/${size}/${imagen}`
    
    console.log('URL', urlImg)
    
    
    return urlImg;
  }


  // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

}
