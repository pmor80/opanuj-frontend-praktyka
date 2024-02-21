import { f } from '../functions';

interface ButtonProps {
  a: number;
  b: number;
  operator: string;
  setNum: (num: number | string) => void;
}

export default function Button({ a, b, operator, setNum }: ButtonProps) {
  const doWork = (f: (a: number, b: number, operator: string) => number) => {
    setNum(f(a, b, operator));
  };

  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={() => doWork(f)}
    >
      {operator}
    </button>
  );
}
