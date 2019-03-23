import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProposalNewComponent } from './proposals/proposal-new.component';
import { ProposalShowComponent } from './proposals/proposal-show.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    ProposalsComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
