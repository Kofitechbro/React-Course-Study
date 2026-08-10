import { useState } from 'react';

export function ClearInput() {
  const [name, setName] = useState('');

  function handleClear() {
    setName('')
  }

  return (
    <section className="input-container">
      <h3 className="input-title">Clear Input</h3>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
      </div>

      <p className="text">Full Name: {name}</p>

      <button onClick={handleClear}>Clear</button>
    </section>
  );
}
