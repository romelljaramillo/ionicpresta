import { Component, OnInit } from '@angular/core';
import { ProdutsService } from 'src/app/services/produts.service';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(private ProdutsService: ProdutsService) { }

  ngOnInit() {
    this.getProduct('1');
  }

  getProduct(id: string) {
    this.ProdutsService.getProduct(id)
    .subscribe(data => {
      console.log(data);
      //this.product = resp;
    });
  }
}
