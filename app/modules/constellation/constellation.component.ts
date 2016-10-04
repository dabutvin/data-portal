import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Constellation }                from '../../utils/models/constellation';
import { ConstellationService }         from './constellation.service';

@Component({
    moduleId: module.id,
    selector: 'constellations',
    templateUrl: 'constellation.component.html'
})
export class ConstellationComponent implements OnInit {
    constellations: Constellation[];
    selectedConstellation: Constellation;

    constructor(
        private constellationService: ConstellationService,
        private router: Router) { }

    getConstellations(): void {
        this.constellationService
            .getConstellations()
            .then(constellations => this.constellations = constellations);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.constellationService.create(name)
            .then(constellation => {
                this.constellations.push(constellation);
                this.selectedConstellation = null;
            });
    }

    delete(constellation: Constellation): void {
        this.constellationService
            .delete(constellation.id)
            .then(() => {
                this.constellations = this.constellations.filter(c => c !== constellation);
                if (this.selectedConstellation === constellation) { this.selectedConstellation = null; }
            });
    }

    ngOnInit(): void {
        this.getConstellations();
    }

    onSelect(constellation: Constellation): void {
        this.selectedConstellation = constellation;
    }

    gotoDetail(): void {
        this.router.navigate(['/constellation', this.selectedConstellation.id]);
    }
}