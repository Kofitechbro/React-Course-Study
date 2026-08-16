import { useState } from 'react';

export function BasicTextarea() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleClear() {
    setMessage('');
  }

  const maxLength = 100;

  const wordCount = message.trim() ? message.trim().split(/\s+/).length : 0;

  function handleSubmit(e) {
    e.preventDefault();

    if (message.trim() === '') {
      setError('Message is required.');
      return;
    }

    setMessage('');
  }

  return (
    <form className="input-container">
      <h3 className="input-title">Basic Textarea</h3>

      {/* Error Message */}
      {error && <p className="cap-text">{error}</p>}

      <div>
        <textarea
          name="message"
          placeholder={message === '' ? 'Start typing...' : message}
          value={message}
          maxLength={maxLength}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* display message */}
      <p className="text">Message: {message}</p>

      {/* Character Count */}
      <p className="text">
        Count: {message.length === 0 ? '' : message.length}
      </p>

      {/* Max Character Length */}
      <p className="text">
        Character Length: {message.length === 100 ? maxLength : ''}
      </p>

      {/* Word Count */}
      <p className="text">Word Count: {wordCount === 0 ? '' : wordCount}</p>

      {/* clear */}
      <div className="flex flex-btn">
        <button type="submit">Submit</button>

        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
}
