import { Routes } from '@angular/router';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import path from 'path';
import { PagePublicidadeComponent } from './page-publicidade/page-publicidade.component';
import { PageIdvisualComponent } from './page-idvisual/page-idvisual.component';

export const routes: Routes = [
    {
        path: "",
    redirectTo: "/principal",
    pathMatch: "full"
    },
    {
        path: "principal",
        component: PagePrincipalComponent,
    },
    {
        path: "publicidades",
        component: PagePublicidadeComponent,
    },
    {
        path: "idvisual",
        component: PageIdvisualComponent,
    }
];
