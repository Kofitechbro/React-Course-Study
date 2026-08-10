import { useState } from 'react';

export function UpperCaseLowercase() {
  const [text, setText] = useState('');

  function handleClear() {
    setText('');
  }

  return (
    <section className="input-container">
      <h3 className="input-title">Transform User Input</h3>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
      </div>
      <p className="text">Lowercase: {text.toLowerCase()}</p>
      <p className="text">Uppercase: {text.toUpperCase()}</p>

      <button onClick={handleClear}>Clear</button>
    </section>
  );
}
