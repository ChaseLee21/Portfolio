function Contact() {
    return (
        <section className="bg-white rounded m-2 p-2 lg:m-4 xl:m-8">
            <h2 className="text-xl md:text-2xl xl:text-4xl text-center font-bold mb-2">Contact</h2>
            <p className="text-center text-base lg:text-xl">
                Feel free to reach out to me with any questions or inquiries by: filling out the form below, sending me an email, or via phone.
            </p>
            <form className="flex flex-col m-auto text-base max-w-[90%] lg:max-w-[30%] bg-blue-950  p-2">
                <label className="text-lg lg:text-xl text-white" htmlFor="name">Name:</label>
                <input className="rounded-md p-1" type="text" id="name" name="name" required></input>
                <label className="text-lg lg:text-xl text-white" htmlFor="email">Email:</label>
                <input className="rounded-md p-1" type="email" id="email" name="email" required></input>
                <label className="text-lg lg:text-xl text-white" htmlFor="message">Message:</label>
                <textarea className="rounded-md p-1" id="message" name="message" required></textarea>
                <button className="border-2 my-2 w-fit px-2 rounded-md text-lg lg:text-xl bg-white text-blue-950 font-bold hover:opacity-80" type="submit">Submit</button>
            </form>
        </section>
    );
  }
  
  export default Contact;