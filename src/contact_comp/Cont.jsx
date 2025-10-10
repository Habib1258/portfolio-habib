import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const Cont = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading('Sending message...');

    emailjs
      .sendForm(
        'service_xf82xxm',   // 🔹 Replace with your actual Service ID
        'template_lon8wd9',  // 🔹 Replace with your actual Template ID
        form.current,
        'TnuhW4wRzijRm3HfP'    // 🔹 Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.dismiss(loadingToast);
          toast.success('✅ Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.dismiss(loadingToast);
          toast.error('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="bg-custom-dark text-white pb-36 font-bebas">
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid-cols-1 pl-10 lg:pl-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:pl-64 w-2/3 lg:gap-48">
            {/* Name */}
            <div className="grid-cols-1 caret-lime-400">
              <h1 className="text-xl lg:text-3xl text-lime-400 py-10 underline underline-offset-8">
                Name
              </h1>
              <input
                type="text"
                name="user_name"
                className="bg-white text-black pl-8 w-full rounded-xl h-14 hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl focus:caret-lime-400"
                placeholder="Name"
                required
              />
            </div>

            {/* Subject */}
            <div className="grid-cols-1">
              <h1 className="text-xl lg:text-3xl text-lime-400 py-10 underline underline-offset-8">
                Subject
              </h1>
              <input
                type="text"
                name="subject"
                className="bg-white text-black pl-8 w-full rounded-xl h-14 hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl"
                placeholder="Hire Me"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-14 mr-4 lg:ml-64">
            <h1 className="text-xl lg:text-3xl text-lime-400 pb-10 underline underline-offset-8">
              E-mail
            </h1>
            <input
              type="email"
              name="user_email"
              className="bg-white text-black pl-8 w-11/12 lg:w-2/3 rounded-xl h-14 hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl"
              placeholder="jane@gmail.com"
              required
            />
          </div>

          {/* Message */}
          <div className="mt-14 mr-4 lg:ml-64">
            <h1 className="text-xl lg:text-3xl text-lime-400 pb-10 underline underline-offset-8">
              Message
            </h1>
            <textarea
              name="message"
              className="bg-white text-black pl-8 w-11/12 lg:w-2/3 pt-2 h-64 rounded-xl hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl"
              placeholder="Message..."
              required
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="mt-14 mr-4 lg:ml-64">
            <button
              type="submit"
              className="bg-lime-700 rounded-xl w-11/12 lg:w-2/3 h-12 text-2xl font-bold hover:bg-lime-500 hover:outline-lime-500 hover:outline-double hover:outline-offset-4 transition"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Cont;
