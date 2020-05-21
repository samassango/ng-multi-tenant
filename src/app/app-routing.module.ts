import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientGuardService } from './client-guard.service';
import { ClientNotFoundComponent } from './client-not-found/client-not-found.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

const routes: Routes = [
    {
        path: ':client',
        component: DashboardComponent,
        canActivate: [ClientGuardService],
        children: [
            {
              path: 'detail',
              component: ClientDetailsComponent
            }
          ]
    },
    {
        path: '**',
        component: ClientNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }