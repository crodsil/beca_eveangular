
import { Component } from '@angular/core';
//import { ProductService } from './product.service';
import { Product } from './product';
import {SharedService} from './shared.service';
//import { LoggerService } from './logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
  //providers: [ProductService, LoggerService]
  
})

export class AppComponent {
  title = "angular-first";
}


  /*
  products:Product[];
  //productService;

  constructor(private productService:ProductService) {
    //this.productService = new ProductService();
  }

  getProducts() {
    this.products=this.productService.getProducts();
  }
}
*/


//implementacao hooks//
/*
  public onSignup(data: any): void {
    let strMessage: string = "Obrigado por se cadastrar " + data.name + ". ";

    strMessage += "Email " + data.email + " foi registrado com sucesso.";

    alert(strMessage);

  }
}
*/


/*
  // implementação do modelo de Event Binding

public showAlert() : void {
  console.log('You clicked on the button...');
  alert("Click Event Fired...");
}*/

//códigos implementados para estudo de Data Binding
/*
public value1: number = 10;
public array1: Array<number> = [10,22,14];
public dt1: Date = new Date();

public status: boolean = true;

public returnString(): string {
return "String return from function";
}
}
*/
//implementações de Interpolation Data Binding


// implementação do two-way binding
//public val: string = "";