import { useState } from 'react';

export function BasicInput() {
  const [name, setName] = useState('');

  return (
    <section className="input-container">
      <h3 className="input-title">Basic Input</h3>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your username'
        />
      </div>
    </section>
  );
}
