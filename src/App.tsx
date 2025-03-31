import React, { useState } from 'react';
import { Equal, Delete, Plus, Minus, X, Divide } from 'lucide-react';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (number: string) => {
    if (shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + operator + ' ');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
    setShouldResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleDelete = () => {
    setDisplay(display.length === 1 ? '0' : display.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-xs p-6">
        <div className="mb-6">
          <div className="text-gray-400 text-right h-6 text-sm">
            {equation}
          </div>
          <div className="text-white text-right text-4xl font-light truncate">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-500/80 hover:bg-red-600/80 text-white rounded-lg p-3 transition-colors"
          >
            AC
          </button>
          <button
            onClick={handleDelete}
            className="bg-gray-500/80 hover:bg-gray-600/80 text-white rounded-lg p-3 transition-colors"
          >
            <Delete className="w-6 h-6 mx-auto" />
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="bg-orange-500/80 hover:bg-orange-600/80 text-white rounded-lg p-3 transition-colors"
          >
            <Divide className="w-6 h-6 mx-auto" />
          </button>
          
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-gray-700/80 hover:bg-gray-800/80 text-white rounded-lg p-3 transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('*')}
            className="bg-orange-500/80 hover:bg-orange-600/80 text-white rounded-lg p-3 transition-colors"
          >
            <X className="w-6 h-6 mx-auto" />
          </button>
          
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-gray-700/80 hover:bg-gray-800/80 text-white rounded-lg p-3 transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="bg-orange-500/80 hover:bg-orange-600/80 text-white rounded-lg p-3 transition-colors"
          >
            <Minus className="w-6 h-6 mx-auto" />
          </button>
          
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-gray-700/80 hover:bg-gray-800/80 text-white rounded-lg p-3 transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('+')}
            className="bg-orange-500/80 hover:bg-orange-600/80 text-white rounded-lg p-3 transition-colors"
          >
            <Plus className="w-6 h-6 mx-auto" />
          </button>
          
          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-gray-700/80 hover:bg-gray-800/80 text-white rounded-lg p-3 transition-colors"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="bg-gray-700/80 hover:bg-gray-800/80 text-white rounded-lg p-3 transition-colors"
          >
            .
          </button>
          <button
            onClick={handleEqual}
            className="bg-orange-500/80 hover:bg-orange-600/80 text-white rounded-lg p-3 transition-colors"
          >
            <Equal className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;