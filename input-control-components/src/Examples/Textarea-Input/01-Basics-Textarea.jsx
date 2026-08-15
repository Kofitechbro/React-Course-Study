import { useState } from 'react';

export function BasicTextarea() {
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleClear() {
    setMessage('');
  }

  return (
    <section className="input-container">
      <h3 className="input-title">Basic Textarea</h3>

      <div>
        <textarea
          name="message"
          placeholder={message === '' ? 'Start typing...' : message}
          value={message}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* display message */}
      <p className="text">{message}</p>

      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </section>
  );
}
