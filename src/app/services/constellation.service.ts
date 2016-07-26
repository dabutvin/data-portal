import { Injectable }     from '@angular/core';

import { HttpUtilsService } from '../utils/httpUtils.service';

@Injectable()
export class ConstellationService {

    constructor(private httpUtil: HttpUtilsService) { }

    getConstellationOverview(userUPN: string) {
        let url = `api/constellation/${userUPN}`;
        return this.httpUtil.get(url);
    }
}
