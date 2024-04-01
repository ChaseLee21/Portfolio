import { useState, useEffect } from 'react';

function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    useEffect(() => {
        document.getElementById('email').value = email;
    }, [email]);

    useEffect(() => {
        document.getElementById('name').value = name;
    }, [name]);

    useEffect(() => {
        document.getElementById('message').value = message;
    }, [message]);

    const handleInputChange = (e) => {
        setErrorMessage('');
        setSuccessMessage('');

        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

    const formLostFocus = () => {
        setErrorMessage('');
        setSuccessMessage('');
        if (name === '') {
            setErrorMessage('Name is required');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (message === '') {
            setErrorMessage('Message is required');
            return;
        }
    };

    const validateEmail = (email) => {
    const expression = /\S+@\S+\.\S+/;
    return expression.test(String(email).toLowerCase());
    };

    const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    setErrorMessage('');
    setSuccessMessage('Message sent successfully!');

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setMessage('');
    setEmail('');
    setName('');
    };


    return (
        <section className="bg-white bg-opacity-85 rounded m-2 p-2 lg:m-4 xl:m-8">
            <h2 className="text-xl md:text-2xl xl:text-4xl text-center font-bold mb-2">Contact</h2>
            <p className="text-center text-base lg:text-xl">
                Feel free to reach out to me with any questions or inquiries by filling out the form below
            </p>
            <form onBlur={formLostFocus} className="flex flex-col my-2 rounded-md mx-auto text-base max-w-[90%] lg:max-w-[30%] bg-blue-950 p-2" onSubmit={handleFormSubmit}>
                <label className="text-lg lg:text-xl text-white" htmlFor="name">Name:</label>
                <input className="rounded-md p-1" type="text" id="name" name="name" onChange={handleInputChange} required></input>
                <label className="text-lg lg:text-xl text-white" htmlFor="email">Email:</label>
                <input className="rounded-md p-1" type="email" id="email" name="email" onChange={handleInputChange} required></input>
                <label className="text-lg lg:text-xl text-white" htmlFor="message">Message:</label>
                <textarea className="rounded-md p-1" id="message" name="message" onChange={handleInputChange} required></textarea>
                <button className="border-2 my-2 w-fit px-2 rounded-md text-lg lg:text-xl bg-white text-blue-950 font-bold hover:opacity-80" type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                <p className="text-center text-red-600 font-bold text-lg">{errorMessage}</p>
                </div>
            )}
            {successMessage && (
                <div>
                <p className="text-center text-green-600 font-bold text-lg">{successMessage}</p>
                </div>
            )}
        </section>
    );
  }
  
  export default Contact;