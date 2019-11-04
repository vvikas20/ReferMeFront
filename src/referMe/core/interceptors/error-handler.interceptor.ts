import { Injectable } from "@angular/core";
import { tap, retry, catchError, finalize } from "rxjs/operators";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService } from "../helper/alert.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    count: number = 0;

    constructor(private spinner: Ng4LoadingSpinnerService, private alert: AlertService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        this.spinner.show()
        this.count++;

        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    debugger;
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }

                    this.alert.error('ERROR', errorMessage);
                    return throwError(error);

                }), finalize(() => {
                    this.count--;
                    if (this.count == 0) this.spinner.hide()
                }
                ));
    }
}