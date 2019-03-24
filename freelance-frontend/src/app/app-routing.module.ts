import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProposalNewComponent } from './proposals/proposal-new.component';
import { ProposalShowComponent } from './proposals/proposal-show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'proposals/new', component: ProposalNewComponent },
  { path: 'proposal/:id', component: ProposalShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
