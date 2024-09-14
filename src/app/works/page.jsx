"use client"
import Card from "@/components/Card";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    title: "Quixpay - Fintech Application",
    subtitle: "NextJS App | UI UX Design",
    url: "https://quixpayy.netlify.app/",
    img: "/img/projects/quixpay-min.png",
  },
  {
    title: "x-gnr8 - A Refreshment Drink Website",
    subtitle: "Wordpress | Graphic Design",
    url: "https://xgnr8.com/",
    img: "/img/projects/xgnr-min.png",
  },
  {
    title: "AnimeMerch - Ecommerce Website",
    subtitle: "NextJS App | UI UX Design",
    url: "https://animemerch-w7od.onrender.com/",
    img: "/img/projects/animemerch-min.png",
  },
  {
    title: "Sparkup Tech - Fintech Company Website",
    subtitle: "NextJS App | ReactJS",
    url: "https://sparkuptech.in/",
    img: "/img/projects/sparkup-min.png",
  },
  {
    title: "Aurabotanik - Cosmetic Website",
    subtitle: "Wordpress | UI UX Design",
    url: "https://aurabotanik.com/",
    img: "/img/projects/aurabotanik-min.png",
  },
  {
    title: "goExploreTrip - Booking website",
    subtitle: "Wordpress | UI UX Design",
    url: "https://goexploretrip.com/",
    img: "/img/projects/travel-min.png",
  },
  {
    title: "HomiDrapes - Drapes website",
    subtitle: "Wordpress | UI UX Design",
    url: "https://homidrapes.in/",
    img: "/img/projects/homidrapes-min.png",
  },
  {
    title: "GinniKanhaResort - Booking website",
    subtitle: "Wordpress | UI UX Design",
    url: "https://ginnikanharesort.com/",
    img: "/img/projects/ginni-min.png",
  },
];

const ITEMS_PER_PAGE = 3;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the data for the current page
  const currentProjects = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div id="page-content d-block">
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
                    <div className="card-body portfolio-card">
                      <div className="top-info">
                        <div className="text">
                          <h1 className="main-title">
                            Check Out My Latest <span>Projects</span>
                          </h1>
                          <p>
                            I&#39;m here to help if you&#39;re searching for a product
                            designer to bring your idea to life or a design
                            partner to help take your business to the next
                            level.
                          </p>
                        </div>
                      </div>
                      <div className="portfolio-area">
                        <div className="row g-4 parent-container">
                          <div className="col-lg-12">
                            {currentProjects.map((data, index) => (
                              <div key={index} className="portfolio-item">
                                <div className="image">
                                  <Image
                                    src={data.img}
                                    alt="project-1"
                                    height={100}
                                    width={500}
                                    className="img-fluid w-100"
                                  />
                                </div>
                                <div className="text">
                                  <div className="info">
                                    <a
                                      href={data.url}
                                      className="title no-underline"
                                      title="_blank"
                                    >
                                      {data.title}
                                    </a>
                                    <p className="subtitle">{data.subtitle}</p>
                                  </div>
                                  <div className="visite-btn hidden md:block">
                                    <a
                                      href={data.url}
                                      className="no-underline flex"
                                      target="_blank"
                                    >
                                      Visit Site
                                      <svg
                                        className="arrow-up"
                                        width="14"
                                        height="15"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.91634 4.5835L4.08301 10.4168"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                        <path
                                          d="M4.66699 4.5835H9.91699V9.8335"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Pagination Controls */}
                        <div className="pagination mt-4">
                          <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="px-3 md:px-4 py-2 bg-gray-200 text-black mr-2 rounded"
                          >
                            Previous
                          </button>
                          <span className="px-4 py-2 text-[14px] md:text-[16px]">
                            Page {currentPage} of {totalPages}
                          </span>
                          <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-3 md:px-4 py-2 bg-gray-200 text-black ml-2 rounded"
                          >
                            Next
                          </button>
                        </div>
                      </div>

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
