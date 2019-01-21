import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisionComponent } from './vision/vision.component';
import { ContactComponent } from './contact/contact.component';
import { ImpactComponent } from './impact/impact.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

const routes: Routes = [
  {path: '', redirectTo: 'vision', pathMatch: 'full'},
  {path: 'vision', component: VisionComponent},
  {path: 'events', component: EventsComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'impact', component: ImpactComponent},
  { path: '**',  redirectTo: 'vision' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
