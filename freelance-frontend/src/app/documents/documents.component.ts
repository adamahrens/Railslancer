import { Component, OnInit } from '@angular/core';
import { Document } from "./document"
import { DocumentService } from "./document.service";
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [ DocumentService ]
})

export class DocumentsComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    let time = timer(0, 20000);
    time.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
    .subscribe(docs => this.documents = docs,
               error => console.log('Got error'),
               () => console.log('Complete documents'))
  }
}
