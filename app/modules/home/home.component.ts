import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Home }                from './home';
import { HomeService }         from './home.service';

@Component({
    moduleId: module.id,
    selector: 'homes',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    homes: Home[];
    selectedHome: Home;

    constructor(
        private homeService: HomeService,
        private router: Router) { }

    gethomes(): void {
        this.homeService
            .getHomes()
            .then(homes => this.homes = homes);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.homeService.create(name)
            .then(home => {
                this.homes.push(home);
                this.selectedHome = null;
            });
    }

    delete(home: Home): void {
        this.homeService
            .delete(home.id)
            .then(() => {
                this.homes = this.homes.filter(h => h !== home);
                if (this.selectedHome === home) { this.selectedHome = null; }
            });
    }

    ngOnInit(): void {
        this.gethomes();
    }

    onSelect(home: Home): void {
        this.selectedHome = home;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHome.id]);
    }
}