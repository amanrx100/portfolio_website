import Image from "next/image";

import Card from "../components/Card";
import Link from "next/link";

const Experience = [
  {
    img: "/img/freelancer.jpeg",
    date: "Jan - Oct 2021",
    title: "Freelance",
    subtitle: "Photo Editor",
  },
  {
    img: "/img/hacto.jpeg",
    date: "Oct - Nov 2021",
    title: "Hacktoberfest",
    subtitle: "Open Source Contributer",
  },
  {
    img: "/img/codens.jpeg",
    date: "May - Jul 2023",
    title: "codenscious.ai",
    subtitle: "ML Trainee",
  },
  {
    img: "/img/emeelan.jpeg",
    date: "May - Jul 2023",
    title: "Emeelan Pvt. Ltd.",
    subtitle: "ReactJS Developer",
  },
  {
    img: "/img/appzeto.png",
    date: "Jan - May 2024",
    title: "Appzeto",
    subtitle: "Junior Developer",
  },
  {
    img: "/img/sparkup.jpeg",
    date: "Jul 24 - Present",
    title: "Sparkup Tech",
    subtitle: "Full Stack Developer",
  },
];

export default function Home() {
  return (
    <>
      <main className="">
        <section className="home-area ">
          <div className="container ">
            <div className="row g-4">
              <div className="col-xl-4">
                <Card />
              </div>
              <div className="col-xl-4">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="card ">
                      <div className="card-body work-experiance-card">
                        <h3 className="card-title ">Work Experience</h3>
                        <div className="work-experiance-main">
                          <ul className="work-experiance-slider list-unstyled">
                            {Experience.map((data, index) => (
                              <li key={index}>
                                <div className="date">
                                  <p>{data.date}</p>
                                </div>
                                <div className="info">
                                  <div className="icon">
                                    <Image
                                      src={data.img}
                                      alt="adobe"
                                      height={100}
                                      width={100}
                                    />
                                  </div>
                                  <div className="text">
                                    <h4 className="title">{data.title}</h4>
                                    <h6 className="subtitle">
                                      {data.subtitle}
                                    </h6>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <ul className="work-experiance-slider list-unstyled">
                            {Experience.map((data, index) => (
                              <li key={index}>
                                <div className="date">
                                  <p>{data.date}</p>
                                </div>
                                <div className="info">
                                  <div className="icon">
                                    <Image
                                      src={data.img}
                                      alt="adobe"
                                      height={100}
                                      width={100}
                                    />
                                  </div>
                                  <div className="text">
                                    <h4 className="title">{data.title}</h4>
                                    <h6 className="subtitle">
                                      {data.subtitle}
                                    </h6>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="card expertise-card ">
                      <div className="card-body">
                        <h3 className="card-title ">My Expert Area</h3>
                        <div className="expertise-main mt-24">
                          <div className="row g-3">
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div className="expertise-item">
                                <div className="image text-center">
                                  <Image
                                    src="/img/react.png"
                                    alt="figma"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">ReactJS</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div className="expertise-item">
                                <div className="image text-center">
                                  <Image
                                    src="/img/next.svg"
                                    alt="notion"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">NextJS</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div className="expertise-item">
                                <div className="image text-center">
                                  <Image
                                    src="/img/nodejs.png"
                                    alt="micro"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">NodeJS</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div className="expertise-item">
                                <div className="image text-center">
                                  <Image
                                    src="/img/java.png"
                                    alt="framer"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">Java</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div className="expertise-item">
                                <div className="image text-center">
                                  <Image
                                    src="/img/wordpress.png"
                                    alt="webflow"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">Wordpress</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div className="expertise-item">
                                <div className="image text-center">
                                  <Image
                                    src="/img/photoshop.png"
                                    alt="zeplin"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">Photoshop</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-projects ">
                  <div className="card-body">
                    <h3 className="card-title ">
                      Recent Projects{" "}
                      <Link
                        className="link-btn d-flex no-underline"
                        href="/works"
                      >
                        All Projects
                        <svg
                          className="icon"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16699 10H15.8337"
                            stroke="#4770FF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.833 15L15.833 10"
                            stroke="#4770FF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.833 5L15.833 10"
                            stroke="#4770FF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </h3>
                    <div className="projects-main mt-24">
                      <div className="row g-4 parent-container">
                        <div className="col-lg-12">
                          <div className="project-item">
                            <div className="image">
                              <Image
                                src="/img/projects/project-2-min.png"
                                alt="project-1"
                                className="img-fluid w-100"
                                height={100}
                                width={500}
                              />
                              <Link
                                href="/works"
                                className="gallery-popup full-image-preview parent-container flex items-center justify-center"
                              >
                                <svg
                                  className="icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                >
                                  <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                                </svg>
                              </Link>
                              <div className="info">
                                <span className="category">Product Design</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="project-item">
                            <div className="image">
                              <Image
                                src="/img/projects/xgnr-min.png"
                                alt="project-2"
                                className="img-fluid w-100"
                                height={100}
                                width={500}
                              />
                              <Link
                                href="/works"
                                className="gallery-popup full-image-preview parent-container flex items-center justify-center"
                              >
                                <svg
                                  className="icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                >
                                  <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                                </svg>
                              </Link>
                              <div className="info">
                                <span className="category">Product Design</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-area mt-24">
              <div className="row g-4">
                <div className="col-xl-8">
                  <div className="card services-card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Services I Offered
                        <a
                          className="link-btn d-flex no-underline"
                          href="/about"
                        >
                          See All Services
                          <svg
                            className="icon"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.16699 10H15.8337"
                              stroke="#4770FF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.833 15L15.833 10"
                              stroke="#4770FF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.833 5L15.833 10"
                              stroke="#4770FF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </h3>
                      <div className="services-main mt-24">
                        <div className="row g-4">
                          <div className="col-md-3 col-sm-6 col-6">
                            <div className="services-item text-center">
                              <div className="image">
                                <Image
                                  src="/img/ui-design.png"
                                  alt="ui-ux"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div className="text">
                                <h3 className="title">UI UX Design</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 col-6">
                            <div className="services-item text-center">
                              <div className="image">
                                <Image
                                  src="/img/app-development.png"
                                  alt="app"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div className="text">
                                <h3 className="title">Web Development</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 col-6">
                            <div className="services-item text-center">
                              <div className="image">
                                <Image
                                  src="/img/api.png"
                                  alt="prd-design"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div className="text">
                                <h3 className="title">API Development</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 col-6">
                            <div className="services-item text-center">
                              <div className="image">
                                <Image
                                  src="/img/search-engine-optimization.png"
                                  alt="branding"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div className="text">
                                <h3 className="title">SEO</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card lets-talk-together-card ">
                    <div className="card-body">
                      <div className="scrolling-info ">
                        <div className="slider-item ">
                          <p>
                            Available For Hire 🚀 Crafting Digital Experiences
                            🎨 Available For Hire 🚀 Crafting Digital
                            Experiences 🎨
                          </p>
                        </div>
                      </div>
                      <h3 className="card-title">
                        Let&#39;s👋
                        <span className="d-block">Work Together</span>
                      </h3>
                      <a
                        className="link-btn d-flex no-underline"
                        href="/contact"
                      >
                        Let&#39;s Talk
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
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
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
    </>
  );
}
