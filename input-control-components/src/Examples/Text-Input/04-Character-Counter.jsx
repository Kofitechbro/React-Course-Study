import { useState } from 'react';

export function CharacterCounter() {
  const [text, setText] = useState('');

  

  return (
    <section className="input-container">
      <h3 className="input-title">Character Counter</h3>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Type Something...'
        />
      </div>

      <p className="text">Text: {text.length <= 20 ? text : <p className='cap-text'>You can not type beyond 20 characters</p>}</p>
      <p className="text">Count: {text.length === 0 ? '' : text.length}</p>
    </section>
  );
}
