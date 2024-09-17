import "../index.css";
export default function Contact() {
  return (
    <div className="contact-container" id="Contact">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-form"
      >
        <input
          type="hidden"
          name="access_key"
          value="9e38623d-5b9a-4347-8032-7a0fb5a77d5c"
        ></input>
        <p className="p-bold ">get in touch</p>
        <h1 className=" lg-heading ">Contact Me</h1>
        <p className=" contact-p">
          I&apos;d love to hear from you — drop me a message and let&apos;s
          connect!
        </p>
        <br />
        <br />
        <div className="contact-flex">
          <section className="fname">
            <label htmlFor="fname">First Name</label>
            <br />
            <input type="text" name="fname" id="fname" required />
            <br />
          </section>
          <section className="lname">
            <label htmlFor="lname">Last Name</label>
            <br />
            <input type="text" name="lname" id="lname" required />
          </section>
        </div>
        <div className="contact-flex">
          <section className="email">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" required />
            <br />
          </section>
          <section className="phone">
            <label htmlFor="phone">Phone Number</label>
            <br />
            <input type="phone" name="phone" id="phone" required />
            <br />
          </section>
        </div>
        <section className="message">
          <label htmlFor="message">Message</label>
          <br />
          <textarea type="text" name="message" id="message" required />
          <br />
        </section>

        <button type="submit" className="btn1 btn2 ">
          Send Message
        </button>
      </form>
    </div>
  );
}
