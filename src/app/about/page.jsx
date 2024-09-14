"use client";
import Card from "@/components/Card";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";

const data = [
  {
    title: "B.Tech Computer Science",
    subtitle: "IPS Academy, Indore",
    img: "/img/passing_certi.jpg",
    duration: "2020 - 2024",
  },
  {
    title: "Kriyeta Hackathon",
    subtitle: "Acropolis Institute of Technology",
    img: "/img/kriyeta.jpg",
    duration: "July 2023",
  },
  {
    title: "Cloud Development with HTML, CSS and JS",
    subtitle: "IBM",
    img: "/img/web.png",
    duration: "October 2021",
  },
  {
    title: "Java: Beginner to Advance",
    subtitle: "Udemy",
    img: "/img/javaa.png",
    duration: "August 2022",
  },
  {
    title: "Python for Data Science",
    subtitle:"IBM",
    img: "/img/python.png",
    duration: "July 2022",
  },
];

const Page = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
    setSelectedImage(null); // Reset selected image
  };
  return (
    <div>
      <div id="page-content">
        {/* <!-- main area part start --> */}
        <main>
          <section className="content-box-area mt-4">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-4">
                  <Card />
                </div>
                <div className="col-xl-8">
                  <div className="card content-box-card">
                    <div className="card-body">
                      <div className="flex flex-col md:flex-row">
                        <div className="text">
                          <h1 className="main-title">
                            Hi, This Is <span className="text-[#4770FF]">Aman</span> 👋
                          </h1>
                          <p className="text-[22px]">
                            A Passionate <b>Full Stack Developer</b> 🖥️ &amp;{" "}
                            <b>Product Designer</b> having
                            <b>2+ years</b> of Experiences and over 10+ Projects
                            completed.{" "}
                          </p>
                        </div>
                        <div className="available-btn">
                          <span>
                            <i className="fas fa-circle"></i> Available For Hire
                          </span>
                        </div>
                      </div>
                      <div className="counter-area mt-5 md:mt-0">
                        <div className="counter">
                          <div className="counter-item">
                            <h3 className="number">02+</h3>
                            <p className="subtitle">Year of Experience</p>
                          </div>
                          <div className="counter-item">
                            <h3 className="number">10+</h3>
                            <p className="subtitle">Project Completed</p>
                          </div>
                          <div className="counter-item">
                            <h3 className="number">02+</h3>
                            <p className="subtitle">Happy Client</p>
                          </div>
                        </div>
                        <div className="circle-area hidden md:block" >
                          <div className="circle-text p-3">
                            <Image
                              className="circle-image"
                              src="/img/circle-text.svg"
                              alt="circle-text"
                              height={100}
                              width={100}
                            />
                            <Image
                              className="circle-image circle-image-light d-none"
                              src="assets/img/about-us/circle-text-light.svg"
                              alt="circle-text"
                              height={100}
                              width={100}
                            />
                            <span className="arrow-down">
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20 5V35"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M15 30L20 35L25 30"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="awards-recognitions">
                        <h2 className="main-common-title">
                          Courses and Certificates
                        </h2>
                        <div className="awards-recognitions-main">
                          <ul className="list-unstyled">
                            <li>
                              <div className="d-block w-100">
                                {data.map((data, index) => (
                                  <div key={index} className="awards-item ">
                                    <div className="award-name">
                                      <div
                                        onClick={() => openModal(data.img)}
                                        style={{ cursor: "pointer" }}
                                      >
                                        <Image
                                          src={data.img}
                                          alt="certificate"
                                          height={100}
                                          width={200}
                                        />
                                      </div>
                                      <div className="text">
                                        <h4 className="max-w-[300px] text-[22px]">
                                          {data.title}
                                        </h4>
                                        <h4 className="title">
                                          {data.subtitle}
                                        </h4>
                                        <p className="year">{data.duration}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Modal for enlarged image */}
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Enlarged Image"
                        style={{
                          overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
                          content: {
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "-50%",
                            transform: "translate(-50%, -50%)",
                          },
                        }}
                      >
                        {selectedImage && (
                          <div>
                            <Image
                              src={selectedImage}
                              alt="Enlarged Image"
                              height={500}
                              width={800}
                            />
                            <button
                              onClick={closeModal}
                              style={{ marginTop: "10px" }}
                            >
                              Close
                            </button>
                          </div>
                        )}
                      </Modal>

                      <div className="work-together-slider">
                        <div className="slider-main d-flex gap-4 align-items-center">
                          <div className="slider-item">
                            <a href="contact.html">Let&#39;s 👋 Work Together</a>
                            <a href="contact.html">Let&#39;s 👋 Work Together</a>
                          </div>
                          <div className="slider-item">
                            <a href="contact.html">Let&#39;s 👋 Work Together</a>
                            <a href="contact.html">Let&#39;s 👋 Work Together</a>
                          </div>
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
          {/* <!-- background shape area end --> */}
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
