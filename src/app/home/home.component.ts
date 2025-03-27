import { Component,  OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.home().subscribe(response => {
      this.data = response;
    });
  }
}