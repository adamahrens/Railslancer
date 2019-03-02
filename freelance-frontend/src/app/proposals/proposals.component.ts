import { Component, OnInit } from '@angular/core';
import { Proposal } from "./proposal"

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  proposals: Proposal[]

  constructor() { }

  ngOnInit() {
    this.proposals = [
      new Proposal(1, 'When I Work', 'http://www.wheniwork.com', 'PHP React Go Swift', 40, 41, 36, 'support@wheniwork.com'),
      new Proposal(2, 'Appsbyahrens', 'http://www.appsbyahrens.com', 'Swift Objective-C Ruby on Rails', 40, 41, 36, 'support@appsbyahrens.com'),
      new Proposal(3, 'SmartThings', 'http://www.smartthings.com', 'Swift Objective-C Kotlin', 40, 41, 36, 'support@smartthings.com'),
      new Proposal(4, 'Thomson Reuters', 'http://www.thomsonreuters.com', 'C# Selenium', 40, 41, 36, 'support@reuters.com')
    ]
  }

}
