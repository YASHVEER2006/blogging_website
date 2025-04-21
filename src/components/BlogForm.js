import { useState } from 'react';

function BlogForm({ initialData, onSubmit, isEditing }) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2>{isEditing ? 'Edit Story' : 'Share Your Story'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Your post title..."
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your thoughts here..."
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isEditing ? 'Update Post' : 'Publish Post'}
        </button>
      </form>
    </div>
  );
}

export default BlogForm;