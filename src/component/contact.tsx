import "../css/contact.css";
export const Contact = () => {
  return (
    <div className="container" id="contact__section">
      <div className="footer_wrapper">
        <h3 className="footer_title">
          let’s build Something
          <br />
          great
        </h3>
        <h4 className="footer_title footer_title_gradient">together</h4>
        <div className="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            action="https://formspree.io/f/{form_id}"
            method="post"
            className="form"
            data-wf-page-id="664fd4dea68e5673362f36bc"
            data-wf-element-id="39c1d189-3088-e07f-fa62-00943dafbe1c"
            aria-label="Email Form"
          >
            <div className="form-group">
              <label htmlFor="name" className="form_group_label">
                Name
              </label>
              <input
                className="form_group_input w-input"
                maxLength={256}
                name="name"
                data-name="Name"
                placeholder="Write you name"
                type="text"
                id="name"
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form_group_label">
                Email
              </label>
              <input
                className="form_group_input w-input"
                maxLength={256}
                name="email"
                data-name="email"
                placeholder="Write Your email"
                type="email"
                id="email"
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form_group_label">
                Message
              </label>
              <textarea
                required={true}
                placeholder="Write your message please"
                maxLength={5000}
                id="message"
                name="message"
                data-name="message"
                className="form_group_input text_area w-input"
              ></textarea>
            </div>
            <button
              type="submit"
              data-wait="Please wait..."
              className="btn_submit w-button"
            >
              Submit
            </button>
          </form>
          <div
            className="success-message w-form-done"
            tabIndex={-1}
            role="region"
            aria-label="Email Form success"
          >
            <div className="text-block-5">
              Thank you for reaching out! Your message has been received. I will
              get back to you shortly.
            </div>
          </div>
          <div
            className="error_msg w-form-fail"
            tabIndex={-1}
            role="region"
            aria-label="Email Form failure"
          >
            <div className="text-block-6">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/ariffakorizada/"
          className="link-block w-inline-block"
        >
          <img
            src="https://cdn.prod.website-files.com/664fd4dea68e5673362f36b6/6654b9ecbf42a76a1c1d9578_btn.svg"
            loading="lazy"
            alt="Button to hire Mohammad Arif Fakorizada"
            className="image-10"
          />
        </a>
        <p className="copyrights">
          Designed and developed by me, with all love and creativity 🤍 all
          copyrights reserved
        </p>
      </div>
    </div>
  );
};
