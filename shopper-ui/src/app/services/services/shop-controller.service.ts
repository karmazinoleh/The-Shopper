/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createShop } from '../fn/shop-controller/create-shop';
import { CreateShop$Params } from '../fn/shop-controller/create-shop';
import { deleteShop } from '../fn/shop-controller/delete-shop';
import { DeleteShop$Params } from '../fn/shop-controller/delete-shop';
import { getAllShops } from '../fn/shop-controller/get-all-shops';
import { GetAllShops$Params } from '../fn/shop-controller/get-all-shops';
import { getShopById } from '../fn/shop-controller/get-shop-by-id';
import { GetShopById$Params } from '../fn/shop-controller/get-shop-by-id';
import { Shop } from '../models/shop';

@Injectable({ providedIn: 'root' })
export class ShopControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllShops()` */
  static readonly GetAllShopsPath = '/shops';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllShops()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllShops$Response(params?: GetAllShops$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Shop>>> {
    return getAllShops(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllShops$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllShops(params?: GetAllShops$Params, context?: HttpContext): Observable<Array<Shop>> {
    return this.getAllShops$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Shop>>): Array<Shop> => r.body)
    );
  }

  /** Path part for operation `createShop()` */
  static readonly CreateShopPath = '/shops';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createShop()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createShop$Response(params: CreateShop$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createShop(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createShop$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createShop(params: CreateShop$Params, context?: HttpContext): Observable<number> {
    return this.createShop$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getShopById()` */
  static readonly GetShopByIdPath = '/shops/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShopById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShopById$Response(params: GetShopById$Params, context?: HttpContext): Observable<StrictHttpResponse<Shop>> {
    return getShopById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getShopById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShopById(params: GetShopById$Params, context?: HttpContext): Observable<Shop> {
    return this.getShopById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Shop>): Shop => r.body)
    );
  }

  /** Path part for operation `deleteShop()` */
  static readonly DeleteShopPath = '/shops/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteShop()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShop$Response(params: DeleteShop$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteShop(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteShop$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShop(params: DeleteShop$Params, context?: HttpContext): Observable<void> {
    return this.deleteShop$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
