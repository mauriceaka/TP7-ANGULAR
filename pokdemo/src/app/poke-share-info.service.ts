import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {
  public stringVar = new Subject<string>();

  // Create an observable to watch the subject
  getObservable(): Subject<string>{
    return  this.stringVar;
  }

  // How to update the subject
  // Create a method that allows you to update
  // tslint:disable-next-line:typedef
  public  setValue(newStringVar: string){
    this.stringVar.next(newStringVar);
  }


}
