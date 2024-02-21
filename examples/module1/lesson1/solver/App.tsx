import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input num={numA} setNum={setNumA} />
        <Input num={numB} setNum={setNumB} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button a={numA} b={numB} operator="+" setNum={setNumC} />
        <Button a={numA} b={numB} operator="-" setNum={setNumC} />
        <Button a={numA} b={numB} operator="*" setNum={setNumC} />
        <Button a={numA} b={numB} operator="/" setNum={setNumC} />
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};
export default App;
