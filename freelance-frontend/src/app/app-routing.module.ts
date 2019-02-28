import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalsComponent } from './proposals/proposals.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/documents' },
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals', component: ProposalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
