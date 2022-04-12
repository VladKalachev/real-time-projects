import {makeAutoObservable} from 'mobx';
import { createContext } from 'react';

export default class Store {
  value = '';
  message = 'Hello';
  age = 30;

  constructor() {
    makeAutoObservable(this);
  }

  setValue (value) {
    this.value = value;
  }
}


export const StoreExample = new Store();

export const StoreContext = createContext(new Store);