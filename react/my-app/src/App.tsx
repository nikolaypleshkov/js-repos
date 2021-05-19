import React from 'react';

import './App.css';
import { TextField } from './TextField';

function App() {
  return (
   <TextField text='hello' person={{ firstName: 'Nikolay', secondName: 'Pleshkov'}}
   />
  );
}

export default App;
