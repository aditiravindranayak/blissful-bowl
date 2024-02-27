import React from 'react';

const About = () => {
  return (
    <div>
      <div></div>
      <nav></nav>
      <div className="header"></div>
      <div className="container">
        <div className="about">
          <div className="left">
            <h1>About us</h1>
            <hr />
            <p>Explore our eclectic menu, curated with an artisanal touch and an unwavering commitment to quality. From vibrant, nutrient-packed salads brimming with locally sourced greens to hearty grain bowls teeming with ancient grains and protein-rich legumes, each dish is a testament to our dedication to flavor, freshness, and innovation.</p>
            <p>Our team of dedicated nutritionists stands ready to be your compass on the path to wellness. Drawing upon a wealth of expertise and a deep passion for wholesome living, they offer personalized consultations and expert guidance tailored to your unique lifestyle and dietary needs. Whether you're seeking to ignite your metabolism, enhance your energy levels, or simply savor the joys of mindful eating, we're here to support you every step of the way.</p>
          </div>
          <div className="right">
            <img src="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About us" />
          </div>
          <div className="clear"></div>
        </div>
        <div className="mission">
          <div className="left">
            <img src="https://images.pexels.com/photos/5424049/pexels-photo-5424049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mission Statement" />
          </div>
          <div className="right">
            <h1>Mission Statement</h1>
            <hr />
            <p>Drawing inspiration from nature's bounty and guided by the principles of sustainability and mindfulness, we strive to create culinary experiences that transcend the ordinary and elevate the extraordinary. With an unwavering focus on quality, innovation, and community, we seek to cultivate a culture of vitality, joy, and fulfillment.</p>
            <p>Our mission is to redefine the landscape of nutrition and wellness by curating an exquisite array of wholesome, nutrient-rich bowls that tantalize the taste buds and invigorate the senses. At the heart of our philosophy lies a deep-rooted commitment to sourcing the freshest, locally-sourced ingredients, fostering sustainability, and supporting local farmers.</p>
          </div>
          <div className="clear"></div>
        </div>
        <div className="team">
        <h1> Our Team</h1>
          <div className="card">
            <img src="https://th.bing.com/th/id/OIP.90o6OQ7-jGqViljHVhhfmQHaE8?rs=1&pid=ImgDetMain" alt="Aditya" width="300" height="200" />
            <h2>Aditya</h2>
            <h4>Food Critic</h4>
            <p>Mahesh is our seasoned Food Critic, with a discerning palate and a passion for exploring culinary delights. </p>
          </div>
          <div className="card">
            <img src="https://media.licdn.com/dms/image/C5603AQGXem4sSqgQ8A/profile-displayphoto-shrink_800_800/0/1598468253092?e=2147483647&v=beta&t=vjey-BLpQbHsIe_vV48UJk5RC-KgBhVTcjaYmAdBSkg" alt="Mridul" width="300" height="200" />
            <h2>Mridul</h2>
            <h4>Recipe Curator</h4>
            <p>Mridul is our Recipe Curator, dedicated to sharing mouthwatering recipes and cooking tips with our audience. </p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rajesh" width="300" height="200" />
            <h2>Rajesh</h2>
            <h4>Food Blogger</h4>
            <p>Rajesh is our enthusiastic Food Blogger, always on the lookout for the best eateries and hidden gems in the culinary world. </p>
          </div>
          <div className="card">
            <img src="https://cdn.stocksnap.io/img-thumbs/280h/V4UUQK1VR9.jpg" alt="Bharti" width="300" height="200" />
            <h2>Bharti</h2>
            <h4>Food Photographer</h4>
            <p>Bharti is our talented Food Photographer, capturing stunning images that tantalize the taste buds and evoke cravings. </p>
          </div>
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg" alt="Anhsuman" width="300" height="200" />
            <h2>Adam</h2>
            <h4>Nutritionist</h4>
            <p>Our expert guide to crafting delicious and nutrient-rich bowls tailored to your unique dietary needs and lifestyle.</p>       
          </div>
          <div className="card">
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/woman-model_QLQKAOHIUJ.jpg" alt="Shruti" width="300" height="200" />
            <h2>Shruti</h2>
            <h4>Food Stylist</h4>
            <p>Shruti is our creative Food Stylist, transforming dishes into visual masterpieces that pop off the page. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
