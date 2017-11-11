import { BookcatalogueService } from './services/bookcatalogue.service';
import { AccordionModule } from 'ngx-accordion';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationbarComponent } from './components/header/navigationbar.component';
import { BookcatalogueComponent } from './components/bookcatalogue/bookcatalogue.component';
import { QueryPipe } from './pipes/query.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationbarComponent,
    BookcatalogueComponent,
    QueryPipe
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [BookcatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
