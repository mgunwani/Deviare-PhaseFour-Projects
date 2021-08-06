"use strict";
exports.__esModule = true;
exports.applicationRoutes = void 0;
var users_component_1 = require("./users/users.component");
var search_component_1 = require("./search/search.component");
var home_component_1 = require("./home/home.component");
exports.applicationRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'users', component: users_component_1.UsersComponent }
];
