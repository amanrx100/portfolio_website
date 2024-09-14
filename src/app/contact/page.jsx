import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
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
                            I&#39;m here to help if you&#39;re searching for a product
                            designer to bring your idea to life or a design
                            partner to help take your business to the next
                            level.
                          </p>
                        </div>
                      </div>
                      <div className="contact-area">
                        <div className="leave-comments-area">
                          <div className="comments-box">
                            <form
                              id="contact-form"
                              action="assets/mail.php"
                              method="POST"
                            >
                              <div className="row gx-3">
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">Name</label>
                                    <input
                                      name="name"
                                      required=""
                                      type="text"
                                      className="form-control shadow-none"
                                      placeholder="Enter your name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">Email</label>
                                    <input
                                      name="email"
                                      required=""
                                      type="email"
                                      className="form-control shadow-none"
                                      placeholder="Enter your email"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">Subject</label>
                                    <input
                                      name="subject"
                                      required=""
                                      type="text"
                                      className="form-control shadow-none"
                                      placeholder="Subject"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-4">
                                    <label className="form-label">Budget</label>
                                    <select
                                      name="budget"
                                      required=""
                                      className="form-select shadow-none"
                                    >
                                      <option disabled="" selected="">
                                        Select budget...
                                      </option>
                                      <option value="$5000">$5000</option>
                                      <option value="$5000 - $1000">
                                        $5000 - $10000
                                      </option>
                                      <option value="$10000 - $2000">
                                        $10000 - $20000
                                      </option>
                                      <option value="$20000">$20000+</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="mb-4">
                                    <label className="form-label">Comment</label>
                                    <textarea
                                      name="message"
                                      className="form-control shadow-none"
                                      rows="4"
                                      placeholder="Type details about your inquiry"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <button className="submit-btn" type="submit">
                                    Send Message
                                    <svg
                                      className="icon"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.5 11.6665V6.6665H12.5"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </form>
                            <p className="ajax-response mb-0"></p>
                          </div>
                        </div>
                        <div className="contact-map-area">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1711832776336!5m2!1sen!2sbd"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        {/* <div className="frequently-asked-questions">
                      <h2 className="main-common-title">Frequently Asked Questions
                      </h2>
                      <div className="frequently-asked-questions-main">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What does a product designer need to know?
                                <span className="ms-auto">
                                  <span className="icon ms-4">
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus">
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus">
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
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus">
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus">
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
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus">
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus">
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
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus">
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus">
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
                                    <img className="icon-plus" src="assets/img/icons/plus.svg" alt="plus">
                                    <img className="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus">
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
                      </div>
                    </div> */}
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

export default page;
