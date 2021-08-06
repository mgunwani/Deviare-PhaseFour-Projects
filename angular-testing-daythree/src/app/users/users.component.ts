import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user_list = [];
  err_msg: string = '';
  constructor(public _userService: UsersService) { }

  ngOnInit(): void {
    this._userService.getUserList().subscribe((res) => {
      this.user_list = res;
    }, (err) => {
      this.err_msg = 'Error while loading User List';
    })
  }

}
