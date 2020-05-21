import { Injectable } from '@angular/core';
import clientsData from '../assets/clients.json';
import { Client } from './models/client';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientGuardService  implements CanActivate{

  private clients: Client[] = clientsData.clients;

  constructor(private router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree
  {    
    let id: string = route.params['client'];
    if(!id) {
      return this.router.parseUrl('');
    }
    let found: Client = this.clients.find(x => x.id.toLowerCase() == id.toLowerCase());
    if(!found) {
      return this.router.parseUrl('');
    }
    else {
      return true;
    }
  }
}
