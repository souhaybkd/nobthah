// import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Woman from "../../assets/woman.png";
import { Autoplay } from 'swiper/modules';

import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import { useNavigate } from "react-router-dom";

import Berlin from "../../assets/berlin.png";
import Barcelona from "../../assets/barcelona.png";
import Crisp from "../../assets/crisp.png";
import Diamond from "../../assets/diamond.png";
import London from "../../assets/london.png";
import Madrid from "../../assets/madrid.jpg";
import Rome from "../../assets/rome.png";
import Santiago from "../../assets/santiago.png";
import Singapore from "../../assets/singapore.png";

// Import Swiper modules

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <Navbar />

      <div id="home" className="hero-section">
        <div className="hero-section__left">
          <h1 className="hero-section__title">ATS Friendly & Beautiful Resume !!</h1>
          <h2 className="hero-section__subtitle">CREATE BETTER RESUMES</h2>
          <p className="hero-section__description">
            Just in a matter of 3 clicks create a beautiful & ATS friendly resume without
            spending hours on it. Get good resumes & get hired quickly & easily. Try Now !!
          </p>
          <div className="hero-section__btns">
            <button className="hero-section__button" onClick={() => navigate("navigate/dashboard/create-resume-from-scratch")}>
              <h2 className="hero-section__button-text">Create Resume</h2>
            </button>
          </div>
        </div>
        <div className="hero-section__right">
          <img src={Woman} alt="Woman" className="hero-section__image" />
        </div>
      </div>

      <div id="portfolio" className="swiper-container">
        <h1 className="hero-section__subtitle" style={{ textAlign: 'center' }}><span>WITH PROFESSIONAL </span> RESUME DESIGN</h1>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          className="swiper-wrapper"

          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="swiper-slide">
            <img src={Berlin} alt="Juice Plus Product" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={Barcelona} alt="Artisans Craft" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={Santiago} alt="Transform FIT" />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <img src={Crisp} alt="Juice Plus Product" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={Diamond} alt="Artisans Craft" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={Singapore} alt="Transform FIT" />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <img src={Madrid} alt="Juice Plus Product" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={Rome} alt="Artisans Craft" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={London} alt="Transform FIT" />
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>

      <div id="home" className="hero-section">
        <div className="hero-section__left">
          <h1 className="hero-section__title">Only 2% of resumes make it past the first round !!</h1>
          <h2 className="hero-section__subtitle">ENJOY BECOMING THE TOP 2%</h2>
          <p className="hero-section__description">
            Just in a matter of 3 clicks create a beautiful & ATS friendly resume without
            spending hours on it. Get good resumes & get hired quickly & easily. Try Now !!
          </p>
          <div className="hero-section__btns">
            <button className="hero-section__button" onClick={() => navigate("navigate/dashboard/create-resume-from-scratch")}>
              <h2 className="hero-section__button-text">Create Resume</h2>
            </button>
          </div>
        </div>

        <div className="hero-section__right">
          <img src={Woman} alt="Woman" className="hero-section__image" />
        </div>
      </div>
    </div>
  );
}
