import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConst } from '../app.const';
import { environment } from '../environments/environment';
import { ProductListComponent } from '../products/products.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = `${environment.apiEndpoint}${appConst.apiRoute.products}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductListComponent[]> {
    return this.http.get<ProductListComponent[]>(this.apiUrl);
  }
}







