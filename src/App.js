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
  <div>
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add Option</button>
    </form>
    <button onClick={makeDecision}>Make Decision</button>
    <button onClick={clearOptions}>Clear Options</button>
    {error && <p>{error}</p>}
    <ul>
      {options.map((option, index) => <li key={index}>{option}</li>)}
    </ul>
    {decision && <h2>{decision}</h2>}
  </div>
);
}

export default App;
