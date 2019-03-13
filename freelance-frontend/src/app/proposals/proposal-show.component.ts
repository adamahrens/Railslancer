import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from "./proposal"

@Component({
  selector: 'proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposals.component.scss']
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;
  proposal: Proposal;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.proposal = new Proposal();
    this.routeId = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('Got this id = ' + this.id);
    })
  }
}
