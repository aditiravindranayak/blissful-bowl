import React from "react";
import CustomerImage1 from "../Assets/customer1.jpg";
import CustomerImage2 from "../Assets/customer2.jpg";
import CustomerImage3 from "../Assets/customer3.jpg";
import CustomerImage4 from "../Assets/customer4.jpg";
import CustomerImage5 from "../Assets/customer5.jpg";
import CustomerImage6 from "../Assets/customer6.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {/* Testimonial 1 */}
        <div className="testimonial">
          <img src={CustomerImage3} alt="Customer 1" />
          <h3>Anna Mae</h3>
          <p>"The food at Foodie is absolutely amazing! Every dish is packed with flavor, and the presentation is top-notch. I highly recommend trying their dishes."</p>
          <div className="rating">&#9733; &#9733; &#9733; &#9733; &#9734;</div>
        </div>
        {/* Testimonial 2 */}
        <div className="testimonial">
          <img src={CustomerImage1} alt="Customer 2" />
          <h3>Noah Smith</h3>
          <p>"I've been ordering from Foodie for months now, and I'm always impressed with the quality of the ingredients and the taste of the meals. It's like having a personal chef!"</p>
          <div className="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        </div>
        {/* Testimonial 3 */}
        <div className="testimonial">
          <img src={CustomerImage2} alt="Customer 3" />
          <h3>Alice Johnson</h3>
          <p>"Foodie has made mealtime so much easier for me. Their meals are not only delicious but also healthy, which aligns perfectly with my dietary goals. Thank you, Foodie!"</p>
          <div className="rating">&#9733; &#9733; &#9733; &#9734; &#9734;</div>
        </div>
        {/* Testimonial 4 */}
        <div className="testimonial">
          <img src={CustomerImage4} alt="Customer 4" />
          <h3>Michael Brown</h3>
          <p>"The variety of dishes offered by Foodie is impressive. Whether I'm in the mood for something light or indulgent, I can always find the perfect meal on their menu."</p>
          <div className="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        </div>
        {/* Testimonial 5 */}
        <div className="testimonial">
          <img src={CustomerImage5} alt="Customer 5" />
          <h3>Emily Wilson</h3>
          <p>"Foodie's delivery service is excellent. The meals always arrive on time and are packaged securely. It's convenient and hassle-free!"</p>
          <div className="rating">&#9733; &#9733; &#9733; &#9733; &#9734;</div>
        </div>
        {/* Testimonial 6 */}
        <div className="testimonial">
          <img src={CustomerImage6} alt="Customer 6" />
          <h3>David Lee</h3>
          <p>"I've tried several meal delivery services, but Foodie stands out for its exceptional quality and taste. It's become a staple in my weekly routine."</p>
          <div className="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
