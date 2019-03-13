import { Component, OnInit } from '@angular/core';
import { Proposal } from "./proposal"

@Component({
  selector: 'proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposals.component.scss']
})

export class ProposalNewComponent implements OnInit {
  proposal: Proposal

  constructor() { }
  ngOnInit() {
    this.proposal = new Proposal;
  }
}
