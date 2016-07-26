import { Injectable }     from '@angular/core';

// import { Home } from 'app/models/home'; // Is this necessary?
import { HttpUtilsService } from '../utils/httpUtils.service';

@Injectable()
export class HomeDataService {

    constructor(private httpUtil: HttpUtilsService) { }

    getHomeDetail(constellationId: string, hostAgencyId: string) {
        let url = `app/data/home/${constellationId}/${hostAgencyId}`;
        return this.httpUtil.get(url);
    }
}

