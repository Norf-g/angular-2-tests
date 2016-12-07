import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/hero';
import { HeroService } from '../common/services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html' ,
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(
            responce => {
                let heroes = JSON.parse(JSON.stringify(responce));
                this.heroes = heroes.splice(0,4);
            }
        )
    }
}