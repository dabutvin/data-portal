import { Injectable }     from '@angular/core';

// import { Child } from 'app/models/child';
import { HttpUtilsService } from '../utils/httpUtils.service';

@Injectable()
export class DataService {

    constructor(private httpUtil: HttpUtilsService) { }

    getYouthDetail(constellationId: string, hostAgencyId: string) {
        let url = `app/data/youth/${constellationId}/${hostAgencyId}`;
        return this.httpUtil.get(url);
    }
}

