import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Proposal } from './proposal';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3001/proposals.json'

  constructor(private http: Http) {
  }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .pipe(map((res: Response) => <Proposal[]>res.json() ))
  }

  getProposal(id: number): Observable<Proposal> {
    let url = 'http://localhost:3001/proposals/' + id + '.json'
    return this.http.get(url).pipe(map((res: Response) => <Proposal>res.json() ))
  }

  createProposal(proposal: Proposal) {
    let headers = new Headers({ 'Content-Type' : 'application/json' })
    let options = new RequestOptions({'headers' : headers})
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), { headers : headers})
  }
}
