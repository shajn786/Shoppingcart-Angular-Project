import { Component } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  title=""
  rate=""
  description=""
  image=""
  sellername=""
  quantity=""

  readValues=()=>
  {
    let data: any ={"title":this.title,"rate":this.rate,"description":this.description,
   "image":this.image,"sellername":this.sellername,"quantity":this.quantity}

   console.log(data)
  }

}
