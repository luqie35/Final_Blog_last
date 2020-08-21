// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/mwkrjpvy'
        method='POST'
      >
        <div className='py-5'>
          <div className='heading text-center'>
            <h1 style={{ color: "#00FFE0  " }}>Hit us up</h1>
            <hr className='divider light my-4' />
            <h3 style={{ color: "white " }}>
              Feel free to send us feedback or enquire on any info that you find
              interesting. We enjoy customer feedback{" "}
            </h3>
          </div>
        </div>

        <label style={{ color: "white " }}>Email:</label>
        <input type='email' name='email' />
        <label style={{ color: "white " }}>Message:</label>
        <input type='text' name='message' />
        {status === "SUCCESS" ? (
          <h3 style={{ color: "white " }}>Thank you for your feedback.</h3>
        ) : (
          <button className='btn btn-primary'>Submit</button>
        )}
        {status === "ERROR" && (
          <p style={{ color: "red " }}>Ooops! There was an error.</p>
        )}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
