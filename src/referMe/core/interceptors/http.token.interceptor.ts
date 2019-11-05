import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const updatedRequest = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('_authToken')}`)
        });

        return next.handle(updatedRequest).pipe(
            tap(
                event => {
                    //logging the http response to browser's console in case of a success
                    if (event instanceof HttpResponse) {
                       
                    }
                },
                error => {
                    //logging the http response to browser's console in case of a failuer
                    if (event instanceof HttpResponse) {
                       
                    }
                }
            )
        );
    }
}