import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';
import clientsData from '../../assets/clients.json';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  private clients: Client[] = clientsData.clients;
  clientId: string;
  client: Client;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.clients)
    let id = this.route.parent.snapshot.paramMap.get('client');
    this.client = this.clients.find(x => x.id.toLowerCase() == id.toLowerCase());
  }
}
