import { useState } from 'react';

export function MultipleValidationCheckbox() {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javascript, setJavascript] = useState(false);

  // Checkbox in an Array
  const [skills, setSkills] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  }

  return (
    <section className="input-container">
      <h3 className="input-title">Multiple Checkbox & Validation</h3>

      {/* Multiple Independent Checkbox */}
      <div className="flex">
        <div>
          <div>
            <label className="text flex">
              <input
                type="checkbox"
                className="checkbox"
                value={html}
                onChange={(e) => setHtml(e.target.checked)}
              />
              HTML
            </label>
          </div>

          <div>
            <label className="text flex">
              <input
                type="checkbox"
                className="checkbox"
                value={css}
                onChange={(e) => setCss(e.target.checked)}
              />
              CSS
            </label>
          </div>

          <div>
            <label className="text flex">
              <input
                type="checkbox"
                className="checkbox"
                value={javascript}
                onChange={(e) => setJavascript(e.target.checked)}
              />
              JavaScript
            </label>
          </div>
        </div>

        {/* Using an Array Store Selected Content */}
        <div>
          <div>
            <label className="text flex">
              <input
                type="checkbox"
                className="checkbox"
                value="Football"
                checked={skills.includes('Football')}
                onChange={handleChange}
              />
              Football
            </label>
          </div>

          <div>
            <label className="text flex">
              <input
                type="checkbox"
                className="checkbox"
                value="Basketball"
                checked={skills.includes('Basketball')}
                onChange={handleChange}
              />
              Basketball
            </label>
          </div>

          <div>
            <label className="text flex">
              <input
                type="checkbox"
                className="checkbox"
                value="Volleyball"
                checked={skills.includes('Volleyball')}
                onChange={handleChange}
              />
              Volleyball
            </label>
            <p className="text">Selected: {skills.join(', ')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
