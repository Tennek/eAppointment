import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ServiceType } from '../shared/service-type.model';

const dummyServiceTypes : ServiceType[] = [
    {id: '1', name:'address change'}
    , {id: '2', name:'fetch documents'}
    , {id: '3', name:'marriage'}
    , {id: '4', name:'birth'}
    , {id: '5', name:'visa'}
]

@Injectable({
    providedIn: 'root'
  })
  export class ServiceTypeService {
  
    constructor() { }
  
    getServiceTypes() : Observable<ServiceType[]> {
      return of(dummyServiceTypes);
    }
  
    getServiceTypeById(id: string) : Observable<ServiceType | undefined> {
      const filtered = dummyServiceTypes.find((type) => { return type.id === id });
      return of(filtered);
    }
  }