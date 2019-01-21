import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule} from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SocialComponent } from './social/social.component';
import { VisionComponent } from './vision/vision.component';
import { ContactComponent } from './contact/contact.component';
import { ImpactComponent } from './impact/impact.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { CampaignsComponent } from './campaigns/campaigns.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SocialComponent,
    VisionComponent,
    ContactComponent,
    ImpactComponent,
    EventsComponent,
    StoriesComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
