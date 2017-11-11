import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookcatalogueComponent } from './components/bookcatalogue/bookcatalogue.component';

export const router: Routes = [
    { path: '', redirectTo: 'BookCatalogue', pathMatch: 'full' },
    { path: 'BookCatalogue', component: BookcatalogueComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);