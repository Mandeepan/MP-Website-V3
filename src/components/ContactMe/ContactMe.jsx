import { useState } from 'react';
import './ContactMe.css';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function ContactMe() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        'bot-field': '',
        ...fields,
      }),
    })
      .then(() => {
        setStatus('success');
        setFields({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="contact-panel">
      <h2 className="contact-heading">Get In Touch</h2>
      <p className="contact-sub">
        Open to new opportunities, collaborations, or just a good conversation.
        Drop me a note and I&rsquo;ll get back to you.
      </p>

      {status === 'success' ? (
        <div className="contact-success">
          <span className="contact-success__icon">✓</span>
          <p>Message sent — I&rsquo;ll be in touch soon.</p>
        </div>
      ) : (
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Netlify required hidden inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Do not fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <div className="contact-row">
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                className="contact-input"
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                className="contact-input"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="contact-textarea"
              name="message"
              value={fields.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              rows={6}
              required
            />
          </div>

          {status === 'error' && (
            <p className="contact-error">Something went wrong — please try again.</p>
          )}

          <button
            className="contact-submit"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactMe;
