import { useState } from 'react';

export function InputValidation() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name.trim() === '' || formData.password.trim() === '') {
      setErrorMessage('Input fields required!');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters!');
      return;
    }

    setErrorMessage('');
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      password: '',
    });
  }

  function handleVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <h3 className="input-title">Input Validation</h3>

      {errorMessage && <p className="cap-text">{errorMessage}</p>}

      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="flex">
        <input
          type={isVisible ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />
        <button type="button" onClick={handleVisible}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
