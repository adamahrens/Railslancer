import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Proposal } from "./proposal"
import { ProposalService } from "./proposal.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposals.component.scss'],
  providers: [ ProposalService ]
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  @Input()
  proposal: Proposal;

  constructor(private route: ActivatedRoute, private proposalService: ProposalService ) {

  }

  ngOnInit() {
    let request = this.route.params.flatMap(params =>
      this.proposalService.getProposal(+params['id'])
    )

    request.subscribe(prop => this.proposal = prop,
               error => console.log('Got error'),
               () => console.log('Complete for show proposal'))
  }
}
