import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'my-food-app';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home' }
        ]);

        this.router = router;
    }
}