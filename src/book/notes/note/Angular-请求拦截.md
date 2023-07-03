# Angular-请求拦截

```typescript
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { timeout, delay, retryWhen, scan, tap, catchError  } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
/** Pass untouched request through to the next request handler. */
 
import { MessageProvider } from "../tools/message";
 
/** 超时时间 */
const DEFAULTTIMEOUT = 5000;
 
/** 最大重试次数 */
const MAXRETRYCOUNT = 3;
 
/** 防止重复点击 网络重复请求 */
const MAXDEBOUNCETIME = 1000;
 
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
 
  constructor(
    private router: Router, 
    private messagePvd: MessageProvider
    ) { 
  };
  
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    // console.log('test ckick3');
    let time = new Date().getTime();
    let accessToken: string = "";
    const authReq = req.clone({
      setHeaders: {
        // REQUEST_FROM: "WEB_OFFICIAL",
        Ver: "1.0.0",
        TIMESTAMP: time.toString(),
        ACCESS_TOKEN: accessToken,
      }
    });
    // ACCESS_TOKEN:accessToken}});
 
    return <any>next.handle(authReq).pipe(
      debounceTime(MAXDEBOUNCETIME),
      timeout(DEFAULTTIMEOUT),
      retryWhen(err$ => {
        // 重试
        return err$.pipe(
          scan((errCount, err) => {
            if (errCount >= MAXRETRYCOUNT) {
              throw err;
            }
            return errCount + 1;
          }, 0),
          delay(1000),
          tap(errCount => {
            // 副作用
            if (errCount == 1) {
              // 第一次重试时，提示用户
              this.messagePvd.errorMsg('网络超时,正在重新请求中...');
            }
          })
        )
      }),
      catchError((err: HttpErrorResponse) => {
        this.messagePvd.errorMsg('网络超时, 请重试');
        return throwError('网络超时' + err.name + err.message)
      }),
      mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.status != 200) {
          return Observable.create(event);
        } 
        
        if (event instanceof HttpResponse && event.body.code == 2) {
          this.messagePvd.errorMsg(event.body.msg);
          this.router.navigate(['/passport']);
          return Observable.create(event);
        }
        
        if (event instanceof HttpResponse && event.body.code != undefined && event.body.code != 0) {
          this.messagePvd.errorMsg(event.body.msg);
          return Observable.create(event);
        }
 
        return Observable.create(observer => observer.next(event)); //请求成功返回响应
 
      }),
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 401: 
            this.messagePvd.errorMsg('服务器错误代码:401');
            console.log(err);
          break;
          case 403:
            this.messagePvd.errorMsg('服务器错误代码:403');
            console.log(err);
            break;
          case 404:
            this.messagePvd.errorMsg('服务器错误代码:404');
            console.log(err);
            break;
          case 500:
            this.messagePvd.errorMsg('服务器错误代码:500');
            console.log(err);
            break;
          case 502:
            this.messagePvd.errorMsg('服务器错误代码:502');
            console.log(err);
            break;
          default:
            console.log(err);
            break;
        }
        return throwError(err.status);
      })
    );
  }
}
```

> 参考：[https://blog.csdn.net/strong90/article/details/88965483](https://blog.csdn.net/strong90/article/details/88965483)

