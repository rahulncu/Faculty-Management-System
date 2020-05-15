// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
@Component({
templateUrl: "admin.component.html",
styleUrls: ['./auth.component.css']
})
export class AdminComponent {
constructor(private auth: AuthService,
private router: Router) { }
logout() {
this.auth.clear();
this.router.navigateByUrl("/");
}
}