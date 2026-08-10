import { useState } from 'react';

export function LiveDisplay() {
  const [name, setName] = useState('');

  return (
    <section className="input-container">
        <h3 className="input-title">Live Display</h3>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
      </div>

      <p className="text">Hello! {name}</p>
    </section>
  );
}
