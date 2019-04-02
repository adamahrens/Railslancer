import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Document } from './document';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3000/indentures.json'

  constructor(private http: Http) {
  }

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsUrl)
                    .pipe(map((res: Response) => <Document[]>res.json() ))
  }
}
