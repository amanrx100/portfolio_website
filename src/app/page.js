import Image from "next/image";

import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <main>
        <section class="home-area">
          <div class="container">
            <div class="row g-4">
              <div class="col-xl-4">
                <Card />
              </div>
              <div class="col-xl-4">
                <div class="row g-4">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body work-experiance-card">
                        <h3 class="card-title">Work Experience</h3>
                        <div class="work-experiance-main">
                          <ul class="work-experiance-slider list-unstyled">
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/adobe.svg"
                                    alt="adobe"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Adobe</h4>
                                  <h6 class="subtitle">
                                    Senior UI UX Designer
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/google.svg"
                                    alt="google"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Google Inc.</h4>
                                  <h6 class="subtitle">
                                    Senior Product Designer
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/meta.svg"
                                    alt="meta"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Meta Inc.</h4>
                                  <h6 class="subtitle">Product Designer</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/adobe.svg"
                                    alt="adobe"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Adobe</h4>
                                  <h6 class="subtitle">
                                    Senior UI UX Designer
                                  </h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul class="work-experiance-slider list-unstyled">
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/adobe.svg"
                                    alt="adobe"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Adobe</h4>
                                  <h6 class="subtitle">
                                    Senior UI UX Designer
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/google.svg"
                                    alt="google"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Google Inc.</h4>
                                  <h6 class="subtitle">
                                    Senior Product Designer
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/meta.svg"
                                    alt="meta"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Meta Inc.</h4>
                                  <h6 class="subtitle">Product Designer</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="date">
                                <p>2021-2024</p>
                              </div>
                              <div class="info">
                                <div class="icon">
                                  <Image
                                    src="/img/icons/adobe.svg"
                                    alt="adobe"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Adobe</h4>
                                  <h6 class="subtitle">
                                    Senior UI UX Designer
                                  </h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="card expertise-card">
                      <div class="card-body">
                        <h3 class="card-title">My Expert Area</h3>
                        <div class="expertise-main mt-24">
                          <div class="row g-3">
                            <div class="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div class="expertise-item">
                                <div class="image text-center">
                                  <Image
                                    src="/img/icons/figma.svg"
                                    alt="figma"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Figma</h4>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div class="expertise-item">
                                <div class="image text-center">
                                  <Image
                                    src="/img/icons/notion.svg"
                                    alt="notion"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Notion</h4>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div class="expertise-item">
                                <div class="image text-center">
                                  <Image
                                    src="/img/icons/mico.svg"
                                    alt="micro"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Miro</h4>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div class="expertise-item">
                                <div class="image text-center">
                                  <Image
                                    src="/img/icons/framer.svg"
                                    alt="framer"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Framer</h4>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div class="expertise-item">
                                <div class="image text-center">
                                  <Image
                                    src="/img/icons/webflow.svg"
                                    alt="webflow"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Webflow</h4>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-4 col-md-4 col-sm-6 col-6">
                              <div class="expertise-item">
                                <div class="image text-center">
                                  <Image
                                    src="/img/icons/zeplin.svg"
                                    alt="zeplin"
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div class="text">
                                  <h4 class="title">Zeplin</h4>
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
              <div class="col-xl-4">
                <div class="card card-projects">
                  <div class="card-body">
                    <h3 class="card-title">
                      Recent Projects{" "}
                      <a class="link-btn d-flex" href="portfolio.html">
                        All Projects
                        <svg
                          class="icon"
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
                    <div class="projects-main mt-24">
                      <div class="row g-4 parent-container">
                        <div class="col-lg-12">
                          <div class="project-item">
                            <div class="image">
                              <Image
                                src="/img/projects/project-1.png"
                                alt="project-1"
                                class="img-fluid w-100"
                                height={100}
                                width={500}
                              />
                              <a
                                href="assets/img/projects/project-1.png"
                                class="gallery-popup full-image-preview parent-container"
                              >
                                <svg
                                  class="icon"
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
                              </a>
                              <div class="info">
                                <span class="category">Product Design</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="project-item">
                            <div class="image">
                              <Image
                                src="/img/projects/project-2.png"
                                alt="project-2"
                                class="img-fluid w-100"
                                height={100}
                                width={500}
                              />
                              <a
                                href="assets/img/projects/project-2.png"
                                class="gallery-popup full-image-preview parent-container"
                              >
                                <svg
                                  class="icon"
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
                              </a>
                              <div class="info">
                                <span class="category">Product Design</span>
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
            <div class="services-area mt-24">
              <div class="row g-4">
                <div class="col-xl-8">
                  <div class="card services-card">
                    <div class="card-body">
                      <h3 class="card-title">
                        Services I Offered
                        <a class="link-btn d-flex" href="services.html">
                          See All Services
                          <svg
                            class="icon"
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
                      <div class="services-main mt-24">
                        <div class="row g-4">
                          <div class="col-md-3 col-sm-6 col-6">
                            <div class="services-item text-center">
                              <div class="image">
                                <Image
                                  src="/img/icons/ui-ux.svg"
                                  alt="ui-ux"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div class="text">
                                <h3 class="title">UI UX Design</h3>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-sm-6 col-6">
                            <div class="services-item text-center">
                              <div class="image">
                                <Image
                                  src="/img/icons/app.svg"
                                  alt="app"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div class="text">
                                <h3 class="title">Mobile App</h3>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-sm-6 col-6">
                            <div class="services-item text-center">
                              <div class="image">
                                <Image
                                  src="/img/icons/prd-design.svg"
                                  alt="prd-design"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div class="text">
                                <h3 class="title">Product Design</h3>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-sm-6 col-6">
                            <div class="services-item text-center">
                              <div class="image">
                                <Image
                                  src="/img/icons/branding.svg"
                                  alt="branding"
                                  height={100}
                                  width={60}
                                  className="ml-8"
                                />
                              </div>
                              <div class="text">
                                <h3 class="title">Branding</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="card lets-talk-together-card">
                    <div class="card-body">
                      <div class="scrolling-info">
                        <div class="slider-item">
                          <p>
                            Available For Hire 🚀 Crafting Digital Experiences
                            🎨 Available For Hire 🚀 Crafting Digital
                            Experiences 🎨
                          </p>
                        </div>
                      </div>
                      <h3 class="card-title">
                        Let's👋
                        <span class="d-block">Work Together</span>
                      </h3>
                      <a class="link-btn d-flex" href="contact.html">
                        Let's Talk
                        <svg
                          class="icon"
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
        <div class="background-shapes">
          <div class="shape-1 common-shape">
            <Image
              src="/img/bg/banner-shape-1.png"
              alt="banner-shape-1"
              height={100}
              width={1000}
            />
          </div>
          <div class="shape-2 common-shape">
            <Image
              src="/img/bg/banner-shape-1.png"
              alt="banner-shape-1"
              height={100}
              width={1000}
            />
          </div>
          <div class="threed-shape-1 move-with-cursor" data-value="1">
            <Image
              src="/img/bg/object-3d-1.png"
              alt="object-3d-1"
              height={100}
              width={60}
            />
          </div>
          <div class="threed-shape-2 move-with-cursor" data-value="1">
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
