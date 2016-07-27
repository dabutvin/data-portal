import { Injectable }     from '@angular/core';

enum devEnv {
    Development,
    Production
}

@Injectable()
export class Config {
    env: devEnv;
    constructor() {
        this.env = window.location.href.indexOf('localhost') > -1 ? devEnv.Development : devEnv.Production;
    }

    getServerUrl() {
        return this.env === devEnv.Development ? 'http://localhost:3000/' : '';
    }

}
