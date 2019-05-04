import { Component, OnInit } from '@angular/core';
import { Proposal } from "./proposal"
import { ProposalService } from "./proposal.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposals.component.scss'],
  providers: [ ProposalService ]
})

export class ProposalNewComponent implements OnInit {
  proposal: Proposal;
  submitted: boolean = false;

  constructor(private proposalService: ProposalService ) { }
  ngOnInit() {
    this.proposal = new Proposal;
  }

  createProposal(proposal: Proposal) {
    this.submitted = true
    this.proposalService.createProposal(proposal)
    .subscribe(data => { return true },
               error => {
                 console.log('Got error saving proposal')
                 return Observable.throw(error)
                },
               () => console.log('Complete for creating new proposal'))
  }
}
