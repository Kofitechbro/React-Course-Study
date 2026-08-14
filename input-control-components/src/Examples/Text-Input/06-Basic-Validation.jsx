import { useState } from 'react';

export function InputValidation() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '') {
      setError('Name is required');
      return;
    }

    setError('');
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <h3 className="input-title">Basic Input Validation</h3>

      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter text"
        />

        <p className="cap-text">{error}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
