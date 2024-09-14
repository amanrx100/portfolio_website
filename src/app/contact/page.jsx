"use client";
import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to server via Axios
      const response = await axios.post(
        "https://contact-api-ruddy.vercel.app/api/contact",
        formData
      );
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000, // Toast will disappear after 3 seconds
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error sending message. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div id="page-content">
        <main>
          <section className="content-box-area mt-4">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-4">
                  <Card />
                </div>
                <div className="col-xl-8">
                  <div className="card content-box-card">
                    <div className="card-body portfolio-card contact-card">
                      <div className="top-info">
                        <div className="text">
                          <h1 className="main-title">
                            Let&#39;s 👋 <span>Work</span> Together
                          </h1>
                          <p>
                            I&#39;m here to help if you&#39;re searching for a
                            product designer to bring your idea to life or a
                            design partner to help take your business to the
                            next level.
                          </p>
                        </div>
                      </div>
                      <div className="contact-area">
                        <div className="leave-comments-area">
                          <div className="comments-box">
                            <form id="contact-form" onSubmit={handleSubmit}>
                              <div className="row gx-3">
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">Name</label>
                                    <input
                                      name="name"
                                      required
                                      type="text"
                                      className="form-control shadow-none"
                                      placeholder="Enter your name"
                                      value={formData.name}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">Email</label>
                                    <input
                                      name="email"
                                      required
                                      type="email"
                                      className="form-control shadow-none"
                                      placeholder="Enter your email"
                                      value={formData.email}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">
                                      Subject
                                    </label>
                                    <input
                                      name="subject"
                                      required
                                      type="text"
                                      className="form-control shadow-none"
                                      placeholder="Subject"
                                      value={formData.subject}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">Phone</label>
                                    <input
                                      name="phone"
                                      required
                                      type="tel"
                                      className="form-control shadow-none"
                                      placeholder="Phone no."
                                      value={formData.phone}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="mb-4">
                                    <label className="form-label">
                                      Comment
                                    </label>
                                    <textarea
                                      name="message"
                                      className="form-control shadow-none"
                                      rows="4"
                                      placeholder="Type details about your Enquiry"
                                      value={formData.message}
                                      onChange={handleChange}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <button className="submit-btn" type="submit">
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </form>
                            <p className="ajax-response mb-0"></p>
                          </div>
                        </div>
                        <div className="contact-map-area">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14727.155014394506!2d75.818531!3d22.6616635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726315173758!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div className="frequently-asked-questions">
                          <h2 className="main-common-title">
                            Frequently Asked Questions
                          </h2>
                          {/* <div className="frequently-asked-questions-main">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What does a product designer need to know?
                                <span className="ms-auto">
                                  <span className="icon ms-4">
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus"/>
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus"/>
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What does a product designer need to know?
                                <span className="ms-auto">
                                  <span className="icon ms-4">
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus"/>
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus"/>
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What does a product designer need to know?
                                <span className="ms-auto">
                                  <span className="icon ms-4">
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus"/>
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus"/>
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What does a product designer need to know?
                                <span className="ms-auto">
                                  <span className="icon ms-4">
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus"/>
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus"/>
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFive">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What does a product designer need to know?
                                <span className="ms-auto">
                                  <span className="icon ms-4">
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus"/>
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus"/>
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- background shape area start --> */}
          <div className="background-shapes">
            <div className="shape-1 common-shape">
              <Image
                src="/img/bg/banner-shape-1.png"
                alt="banner-shape-1"
                height={100}
                width={1000}
              />
            </div>
            <div className="shape-2 common-shape">
              <Image
                src="/img/bg/banner-shape-1.png"
                alt="banner-shape-1"
                height={100}
                width={1000}
              />
            </div>
            <div className="threed-shape-1 move-with-cursor" data-value="1">
              <Image
                src="/img/bg/object-3d-1.png"
                alt="object-3d-1"
                height={100}
                width={60}
              />
            </div>
            <div className="threed-shape-2 move-with-cursor" data-value="1">
              <Image
                src="/img/bg/object-3d-2.png"
                alt="object-3d-2"
                height={100}
                width={120}
              />
            </div>
          </div>
        </main>
        {/* <!-- main area part end --> */}

        {/* <!-- footer part start --> */}
        <footer className="footer-area">
          <div className="container">
            <div className="text text-center">
              <p>
                @Aman 2024, Design By <a href="#">AmanKumawat</a>
              </p>
            </div>
          </div>
        </footer>
        {/* <!-- footer part end --> */}
      </div>
    </div>
  );
};

export default Page;
