import { Component, OnInit } from '@angular/core';
import { Document } from "./document"

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})

export class DocumentsComponent implements OnInit {

  documents: Document[]

  constructor() { }

  ngOnInit() {
    this.documents = [
      {title: 'My Document', description: 'A sample document to use', file_url: '', updated_at: '1/28/2019', image_url: 'https://via.placeholder.com/150'},
      {title: 'W2 Form', description: 'A W2 form that should be filled out', file_url: '', updated_at: '1/28/2019', image_url: 'https://via.placeholder.com/150'},
      {title: 'Reimbursement Form', description: 'Use when travelling to expense items', file_url: '', updated_at: '1/28/2019', image_url: 'https://via.placeholder.com/150'},
      {title: 'Syllabus', description: 'Course syllabus to follow', file_url: '', updated_at: '1/28/2019', image_url: 'https://via.placeholder.com/150'},
      {title: 'Code of Conduct', description: 'A ethical handbook for navigating the business world', file_url: '', updated_at: '1/28/2019', image_url: 'https://via.placeholder.com/150'},
      {title: 'Health Directive', description: 'Health directive to follow.', file_url: '', updated_at: '1/28/2019', image_url: 'https://via.placeholder.com/150'}
    ]
  }
}
