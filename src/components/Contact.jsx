function Contact() {
    return (
        <section className="Contact">
            <h2>Contact</h2>
            <p>
                Feel free to reach out to me with any questions or inquiries by: filling out the form below, sending me an email, or via phone.
            </p>
            <p>Email: chase.seeberger@gmail.com</p>
            <p>Phone: (208) 995 - 5987</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
  }
  
  export default Contact;