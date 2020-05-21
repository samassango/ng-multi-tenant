import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientId: string;
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('client');
    // console.log(this.clientId)
  }

}
