import { useState } from 'react';

export function BasicCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="input-container">
      <h3 className="input-title">Basic Checked Box</h3>
      {/* Display Checkbox Status */}
      <div>
        <label className="text flex">
          <input
            type="checkbox"
            className="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          Subscribe to newsletter
        </label>

        <p className="text">
          Status: {isChecked ? 'Subscribed' : 'Not subscribed'}
        </p>
      </div>

      {/* Toggle (show/hide) Content */}
      <div>
        <label className="text flex">
          <input
            type="checkbox"
            className="checkbox"
            checked={showContent}
            onChange={(e) => setShowContent(e.target.checked)}
          />
          Show more Information
        </label>
        {showContent && <p className="text">Here is additional information</p>}
      </div>

      {/* Accept Terms */}
      <div>
        <label className="text flex">
          <input
            type="checkbox"
            className="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          I agree to the Terms and Condition
        </label>

        <button
          type="submit"
          className={!accepted ? 'disable-btn' : ''}
          disabled={!accepted}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
