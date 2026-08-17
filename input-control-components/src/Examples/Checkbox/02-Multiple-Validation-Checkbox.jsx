import { useState } from 'react';

export function MultipleValidationCheckbox() {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javascript, setJavascript] = useState(false);

  return (
    <section className="input-container">
      <h3 className="input-title">Multiple Checkbox & Validation</h3>

      <div>
        <label className="text flex">
          <input
            type="checkbox"
            className="checkbox"
            value={html}
            onChange={(e) => setHtml(e.target.checked)}
          />
        </label>
      </div>
    </section>
  );
}
