import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public data :any;
  constructor(private http:HttpClient) { 
 
  }

  ngOnInit() {
    let path = "https://reqres.in/api/users";

    this.http.get(path).subscribe(res=>{
      this.data = res;
      console.log(this.data);
    });

  }

}
