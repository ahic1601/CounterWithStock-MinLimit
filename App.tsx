import * as React from 'react';
import Contador from './src/Component1';

export default function App() {
  const stockDisponible = 5;
  return (
    <div>
      <Contador stockDisponible = {stockDisponible} />
    </div>
  );
}
