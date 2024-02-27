
import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Embark on a Flavorful Journey with Our Chef-Crafted Selections",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Tailor Your Dining Experience to Suit Your Lifestyle",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "From Our Kitchen to Your Doorstep in a Blink of an Eye",
    },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            <Link to="/ordernow">Order Now <FiArrowRight /></Link>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text">
            Unveiling the Magic of Flavor and Nutrition in Every Bite
          </p>
          <p className="primary-text">
            Experience the Fusion of Taste and Wellness in Every Dish
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">
              <Link to="/bowlbuilder">Build Your Own Bowl</Link>
            </button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Work</p>
          <h1 className="primary-heading">How It Works</h1>
          <p className="primary-text">
            Simplify Your Life with Our Effortless Meal Planning Solution
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Testimonial</p>
          <h1 className="primary-heading">What They Are Saying</h1>
          <p className="primary-text">
            Join the Chorus of Satisfied Customers Singing Praises
          </p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Absolutely delicious meals every time! The flavors are out of this
            world, and the convenience is unbeatable.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>John Doe</h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have a Question in Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home; 