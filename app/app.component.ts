// this is a SystemJS call
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ICacheObject} from "angular2/src/upgrade/angular_js";

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

// Nothing in our class yet, but we have defined the 'my-app' selector to inject template
@Component({
    selector: 'my-app',
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
    `],
    directives: [HeroDetailComponent],
    providers: [HeroService],
    template: `
                <h1>{{title}}</h1>
                <h2>My Heroes</h2>
                <ul class="heroes">
                  <li
                  *ngFor="#hero of heroes"
                  (click)="onSelect(hero)"
                  [class.selected]="hero === selectedHero">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                  </li>
                </ul>
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>
              `
})



export class AppComponent implements OnInit{

    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(
        private _heroService: HeroService
    ) { }

    // use this guy to do any heavy lifting on init (NOT constructor) avoid critical errors.
    // e.g. if web service call throws err in contr, then app completely fails to init,
    // rather than fail gracefully, or attempt to recover
    ngOnInit():any {
        this.getHeroes();
    }

    onSelect(hero: Hero){
        this.selectedHero = hero;
    }

    getHeroes(){
        // arrow is more succinct than equivalent function expression, and gracefully handles _this_
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}


