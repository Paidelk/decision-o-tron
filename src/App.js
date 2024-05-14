import React, {useState} from 'react';


function App() {
  const[options, setOptions] = useState([]);
  const[input, setInput ] = useState('');
  const[decision, setDecision] = useState(null);
  const [error, setError] = useState(null);

  const addOption = () => {
    if(input.trim() !== '') {
    setOptions(prevOptions => [...prevOptions, input]);
    setInput('');
    setError('');
  } else {
    setError('Please enter a valid option');
  }
 };

 const makeDecision = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  setDecision(options[randomIndex]);
};

const clearOptions = () => {
  setOptions([]);
  setDecision(null);
};

const handleSubmit = (e) => {
  e.preventDefault();
  addOption();
};


return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
    <h1 className="text-4xl text-white mt-8 mb-4 animate-pulse relative">✨ Decision-O-Tron 8000 ✨
    <span className="absolute top-0 -left-4 animate-bounce">✨</span>
    <span className="absolute top-0 -right-4 animate-bounce">✨</span>
  </h1>
    <p className="text-white text-center mb-8">
      There once was a lass named Amy,
      <br />
      Whose choices made her quite clammy.
      <br />
      But with an app so neat,
      <br />
      With buttons discreet,
      <br />
      Decisions were swift, not so flimflammy!
    </p>
    <form onSubmit={handleSubmit} className="mb-4">
      <input value={input} onChange={(e) => setInput(e.target.value)} className="border p-2 rounded mr-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Option</button>
    </form>
    <button onClick={makeDecision} className="bg-green-500 text-white p-2 rounded mb-2">Make Decision</button>
    <button onClick={clearOptions} className="bg-red-500 text-white p-2 rounded mb-2">Clear Options</button>
    {error && <p className="text-red-500">{error}</p>}
    <ul className="mb-4">
      {options.map((option, index) => <li key={index} className="border p-2 rounded mb-2">{option}</li>)}
    </ul>
    {decision && <h2 className="text-green-500 text-2xl">{decision}</h2>}
  </div>
);
}

export default App;
