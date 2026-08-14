import { useState } from 'react';

export function MultipleInput() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({
    userName: '',
    email: '',
    password: '',
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentError = {
      userName: '',
      email: '',
      password: '',
    };

    if (formData.userName.trim() === '' || formData.email.trim() === '') {
      currentError.userName = 'Username is required';
    }

    if (formData.email.trim() === '') {
      currentError.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      currentError.email = 'Enter a valid email';
    }

    if (formData.password.trim() === '') {
      currentError.password = 'Password is required';
    } else if (formData.password.length < 8) {
      currentError.password = 'Password must be at least 8 characters';
    }

    // Show errors
    setError(currentError);

    // Stop if there are errors
    if (currentError.userName || currentError.email || currentError.password) {
      return;
    }

    // Success
    alert(
      `Username: ${formData.userName} Email: ${formData.email} Password: ${formData.password}`,
    );

    // Clear form
    setFormData({
      userName: '',
      email: '',
      password: '',
    });

    setError({
      userName: '',
      email: '',
      password: '',
    });
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <h3 className="input-title">Multiple Input</h3>

      {/* <p className="cap-text">{error}</p> */}

      <div>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          onChange={handleChange}
          value={formData.userName}
          className={error.userName ? 'error' : 'success'}
        />
        {error.userName && <p className="cap-text">{error.userName}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
          className={error.email ? 'error' : 'success'}
        />
        {error.email && <p className="cap-text">{error.email}</p>}
      </div>
      <div>
        <div className="flex">
          <input
            type={isOpen ? 'text' : 'password'}
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
            className={error.password ? 'error' : 'success'}
          />
          <button type="button" onClick={handleClick}>
            Show
          </button>
        </div>
        {error.password && <p className="cap-text">{error.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
