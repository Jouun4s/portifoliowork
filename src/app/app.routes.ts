import { Routes } from '@angular/router';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import path from 'path';

export const routes: Routes = [
    {
        path: "",
    redirectTo: "/principal",
    pathMatch: "full"
    },
    {
        path: "principal",
        component: PagePrincipalComponent,
    }
];
