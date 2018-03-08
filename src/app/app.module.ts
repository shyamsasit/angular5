import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    TestimonialComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,   
    AppRoutingModule, 
    HttpClientModule,
      Ng2PageScrollModule,
     MDBBootstrapModule.forRoot(),
      ToastrModule.forRoot(),
     BrowserAnimationsModule,
     NoopAnimationsModule
  ],
  providers: [DataService],
    schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
