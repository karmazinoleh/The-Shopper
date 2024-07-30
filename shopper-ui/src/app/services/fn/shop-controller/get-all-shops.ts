/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Shop } from '../../models/shop';

export interface GetAllShops$Params {
}

export function getAllShops(http: HttpClient, rootUrl: string, params?: GetAllShops$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Shop>>> {
  const rb = new RequestBuilder(rootUrl, getAllShops.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Shop>>;
    })
  );
}

getAllShops.PATH = '/shops';
