import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { applicationRoutes } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { AppComponent } from "./app.component";

describe("Router: App", () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(applicationRoutes)],
            declarations: [HomeComponent, SearchComponent, AppComponent]
        });

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);

        fixture = TestBed.createComponent(AppComponent);
    });


    it("navigate to '' redirects you to '/home'", fakeAsync(() => {
        router.navigate([""]).then(() => {
            expect(location.path()).toBe('/home');
        })
    }));

    it("navigate to 'home' redirects you to '/home'", fakeAsync(() => {
        router.navigate(["/home"]).then(() => {
            expect(location.path()).toBe('/home');
        })
    }));

    it("navigate to 'search' redirects you to '/search'", fakeAsync(() => {
        router.navigate(["/search"]).then(() => {
            expect(location.path()).toBe('/search');
        })
    }));

});
