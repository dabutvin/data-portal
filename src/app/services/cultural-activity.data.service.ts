import { Injectable }     from '@angular/core';

// import { CulturalActivity } from 'app/models/cultural-activity'; // Is this necessary?
import { HttpUtilsService } from '../utils/httpUtils.service';

@Injectable()
export class CulturalActivityDataService {

    constructor(private httpUtil: HttpUtilsService) { }

    getCulturalActivityDetail(constellationId: string, hostAgencyId: string) {
        let url = `app/data/cultural-activity/${constellationId}/${hostAgencyId}`;
        return this.httpUtil.get(url);
    }
}

