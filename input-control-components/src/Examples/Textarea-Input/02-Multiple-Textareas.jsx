import { useState } from 'react';

export function MultipleTextarea() {
  const [formData, setFormData] = useState({
    description: '',
    address: '',
    Comment: '',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.description.trim() ||
      !formData.address.trim() ||
      !formData.comment.trim()
    ) {
      alert('Text field required!');
    }

    setFormData({
      description: '',
      address: '',
      comment: '',
    });
  }

  return (
    <section className="input-container">
      <h3 className="input-title">Multiple Textarea</h3>

      <form onSubmit={handleSubmit} className="btn form">
        <div>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div>
          <textarea
            name="address"
            onChange={handleChange}
            value={formData.address}
            placeholder="Enter your address"
          ></textarea>
        </div>

        <div>
          <textarea
            name="comment"
            onChange={handleChange}
            value={formData.comment}
            placeholder="Enter your comment"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      <h4 className="text-color">Live Display</h4>
      <p className="text">Description: {formData.description}</p>
      <p className="text">Address: {formData.address}</p>
      <p className="text">Comment: {formData.comment}</p>
    </section>
  );
}
