import { provideRouter, RouterConfig } from '@angular/router';

import { PlacementsAddComponent } from './components/placements/placements.component';
import { HubProviderComponent } from './components/hub-provider/hub-provider.component';
import { MyConstellationComponent } from './components/my-constellation/my-constellation.component';
import { ManageHomesComponent } from './components/manage-homes/manage-homes.component';

const routes: RouterConfig = [
    {
        path: 'placements',
        component: PlacementsAddComponent
    },
    {
        path: 'hub-provider',
        component: HubProviderComponent
    },
    {
        path: 'my-constellation',
        component: MyConstellationComponent
    },
    {
        path: 'manage-homes',
        component: ManageHomesComponent
    },
    {
        path: '',
        redirectTo: 'hub-provider',
        pathMatch: 'full'
    }

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
