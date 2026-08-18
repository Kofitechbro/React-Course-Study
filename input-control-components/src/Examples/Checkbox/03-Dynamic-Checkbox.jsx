import { useState } from 'react';

export function DynamicCheckbox() {
  const [skills, setSkills] = useState([]);

  const skillOptions = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

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
      <h3 className="input-title">With Map</h3>

      <div>
        {skillOptions.map((skill) => (
          <label key={skill} className="flex text">
            <input
              className="checkbox"
              type="checkbox"
              value={skill}
              checked={skills.includes(skill)}
              onChange={handleChange}
            />
            {skill}

            <br />
          </label>
        ))}
      </div>

      <p className="text">Selected: {skills.join(', ')}</p>
    </section>
  );
}
