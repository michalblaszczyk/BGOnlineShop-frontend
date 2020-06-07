import { Component, OnInit,Output, Input,EventEmitter } from '@angular/core';
import { User } from '../../ecommerce/models/User';
import { Router } from '@angular/router';
import { HttpClientService } from '../../ecommerce/services/http-client.service';



@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {


  @Input()
  user: User
	
  @Output()
  userDeletedEvent = new EventEmitter();
	
  constructor(private httpClientService: HttpClientService,private router: Router) { }

  ngOnInit(): void {
  }
  
  deleteUser() {
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
		this.userDeletedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }

}
