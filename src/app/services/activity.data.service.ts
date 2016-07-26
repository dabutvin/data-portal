import { Injectable }     from '@angular/core';

// import { Activity } from 'app/models/activity'; // Is this necessary?
import { HttpUtilsService } from '../utils/httpUtils.service';

@Injectable()
export class ActivityDataService {

    constructor(private httpUtil: HttpUtilsService) { }

    getActivityDetail(constellationId: string, hostAgencyId: string) {
        let url = `app/data/activity/${hostAgencyId}/${constellationId}`;
        return this.httpUtil.get(url);
    }
}

