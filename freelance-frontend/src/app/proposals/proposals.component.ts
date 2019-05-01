import { Component, OnInit } from '@angular/core';
import { Proposal } from "./proposal"
import { ProposalService } from "./proposal.service";
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
  providers: [ ProposalService ]
})

export class ProposalsComponent implements OnInit {

  proposals: Proposal[]

  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
    let time = timer(0, 20000);
    time.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
    .subscribe(props => this.proposals = props,
               error => console.log('Got error'),
               () => console.log('Complete proposals'))
  }

}
