import { useState } from 'react';

export function BasicInput() {
  const [name, setName] = useState('');

  return (
    <section className="input-container">
      <h2 className="sub-title">Basic Input</h2>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
      </div>
    </section>
  );
}
