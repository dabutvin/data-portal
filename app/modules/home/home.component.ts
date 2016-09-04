import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Home }                from './home';
import { HomeService }         from './home.service';

@Component({
    moduleId: module.id,
    selector: 'homes',
    templateUrl: 'app/homes.component.html'
})
export class HomeComponent implements OnInit {
    homees: Home[];
    selectedHome: Home;

    constructor(
        private homeService: HomeService,
        private router: Router) { }

    getHomees(): void {
        this.homeService
            .getHomes()
            .then(homees => this.homees = homees);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.homeService.create(name)
            .then(home => {
                this.homees.push(home);
                this.selectedHome = null;
            });
    }

    delete(home: Home): void {
        this.homeService
            .delete(home.id)
            .then(() => {
                this.homees = this.homees.filter(h => h !== home);
                if (this.selectedHome === home) { this.selectedHome = null; }
            });
    }

    ngOnInit(): void {
        this.getHomees();
    }

    onSelect(home: Home): void {
        this.selectedHome = home;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHome.id]);
    }
}