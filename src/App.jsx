import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person person="Misha" age="37" isMerried partnerName="Natasha" sex="m" />
    <Person person="Olya" isMerried partnerName="Maksym" sex="f" />
    <Person person="Alex" age="25" isMerried={false} />
  </div>
);
