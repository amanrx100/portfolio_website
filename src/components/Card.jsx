import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

const Card = () => {
  return (
    <div>
      <div className="card profile-card ">
        <div className="card-body">
          <div className="image text-center">
            <Image src="/img/p.jpg" alt="profile" height={300} width={500} />
          </div>
          <div className="text">
            <h3 className="card-title ">Aman Kumawat 👋</h3>
            <p className=" text-[#576076]">
              A Passionate <strong>Full Stack Developer</strong> 🖥️ &{" "}
              <strong>Product Designer</strong> having <strong>2+ years</strong>{" "}
              of Experiences and Completed Over 30+ Projects.
            </p>
            <div className="common-button-groups d-flex">
              <a
                className="btn btn-call d-flex"
                href="/Aman_SDE1.pdf"
                download="Aman_Resume.pdf"
              >
                <SiReaddotcv className="inline mt-1 mr-2" />
                Resume
              </a>

              <button
                className="btn btn-copy  d-flex"
                data-clipboard-text="kumawatbaman@gmail.com"
              >
                <svg
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[14px]  text-black">Copy Email</span>
              </button>
            </div>
            <div className="social-media-icon">
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100087493901618&name=xhp_nt_fbaction_open_user"
                    target="_blank"
                  >
                    <FaFacebookF className="m-2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/its_amanrx100/"
                    target="_blank"
                  >
                    <FaInstagram className="m-2 " />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/amanrx100" target="_blank">
                    <FaGithub className="m-2 " />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aman-kumawat-238074202/"
                    target="_blank"
                  >
                    <FaLinkedin className="m-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
