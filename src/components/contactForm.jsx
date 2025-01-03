// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser';
import $ from 'jquery';
import { useEffect } from "react"

const ContactForm = () => {

  useEffect(() => {

    $("#contact-btn").on("click", function () {

      console.log("sending")

      let data = {}
      data.name = $("#contactName").val().substring(0, 100)
      data.email = $("#contactEmail").val().substring(0, 100)
      data.subject = $("#contactSubject").val().substring(0, 500)
      data.message = $("#contactMessage").val().substring(0, 10000)

      $.ajax({
        type: "POST",
        url: "/contact",
        dataType: 'json',
        data: data,
        success: function (request) {
          console.log(request.message)
          $("#contactSendStatus").text(request.message)
        },
        error: function (request, status, error) {
          console.log(error)
          $("#contactSendStatus").text("Error sending message")
        }
      });

      return false;
    });

  }, [])

  return (
    <div id='contactForm' className='ContactForm'>
      <div id="contactContainer" className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <p>Please feel free to contact us through <a href="email:ezstack.systems@gmail.com">email</a> or the form below. We are available for quotes and we love to talk about technology.</p>
              <form
                id='contact-form'
              >
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      id='contactName'
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'
                      maxLength="100"
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      id='contactEmail'
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email address'
                      maxLength="100"
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      id='contactSubject'
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                      maxLength="500"
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      id='contactMessage'
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                      maxLength="10000"
                    ></textarea>
                  </div>
                </div>

                <button
                  id='contact-btn'
                  className='contact-btn btn btn-primary'
                >
                  Send
                </button>
                <div id="contactSendStatus"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;