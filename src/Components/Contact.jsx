export default function Contact() {
  return (
    <main className="container">
      <section className="card">
        <h1>Contact</h1>
        <p>
          Have feedback or feature ideas? Send a message using the form below.
        </p>

        {/* Replace 'your-form-id' with your actual Formspree ID */}
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <label htmlFor="name">
            Your Name
            <input type="text" id="name" name="name" required />
          </label>

          <label htmlFor="email">
            Your Email
            <input type="email" id="email" name="email" required />
          </label>

          <label htmlFor="message">
            Message
            <textarea id="message" name="message" rows="5" required></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}