import React from 'react';

interface InputProps {
  num: number;
  setNum: (num: number) => void;
}

export default function Input({ num, setNum }: InputProps) {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={num}
      onChange={(e) => setNum(parseFloat(e.target.value))}
    />
  );
}
