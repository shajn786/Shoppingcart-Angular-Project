import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-view-all',
  templateUrl: './product-view-all.component.html',
  styleUrls: ['./product-view-all.component.css']
})
export class ProductViewAllComponent {

constructor(private api :ApiService)
{
    api.fetchData().subscribe(
    (response)=>
        {
            this.data=response
          }

    )
}

  data:any =[]

}
