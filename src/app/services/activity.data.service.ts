import { Injectable }     from '@angular/core';

// import { Activity } from 'app/models/activity'; // Is this necessary?
import { HttpUtilsService } from '../utils/httpUtils.service';

@Injectable()
export class ActivityDataService {

    constructor(private httpUtil: HttpUtilsService) { }

    getActivityDetail(constellationId: string, hostAgencyId: string) {
        let url = `app/data/activity/${constellationId}/${hostAgencyId}`;
        return this.httpUtil.get(url);
    }
}

