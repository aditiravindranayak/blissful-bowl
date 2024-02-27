import React from "react";

// Importing ingredient images
import Avocado from "../Assets/avocado.jpg";
import BakedTofu from "../Assets/baked-tofu.jpg";
import Barley from "../Assets/barley.jpg";
import Beans from "../Assets/beans.jpg";
import BellPeppers from "../Assets/bell-peppers.jpg";
import Broccoli from "../Assets/broccoli.jpg";
import BrownRice from "../Assets/brown-rice.jpg";
import Bulgur from "../Assets/bulgar.jpg";
import Carrot from "../Assets/carrot.jpg";
import Cashews from "../Assets/cashews.jpg";
import ChiaSeeds from "../Assets/chia-seeds.jpg";
import Fish from "../Assets/fish.jpg";
import Flaxseeds from "../Assets/flaxseeds.jpg";
import GrilledChickenBreast from "../Assets/grilled-chicken-breast.jpg";
import GreekYogurtBasedDressing from "../Assets/greek-yogurt-based-dressing.jpg";
import LeafyVegetable from "../Assets/leafy-vegetable.jpg";
import Lentils from "../Assets/lentils.jpg";
import OliveOil from "../Assets/olive-oil.jpg";
import Quinoa from "../Assets/quinoa.jpg";
import SweetPotatoes from "../Assets/sweet-potatoes.jpg";
import Tomatoes from "../Assets/tomatoes.jpg";
import Walnut from "../Assets/walnuts.jpg";
import WholeWheatCouscous from "../Assets/whole-wheat-couscous.jpg";
import Edamame from "../Assets/edamame.jpg";
import Hummus from "../Assets/hummus.jpg";
import MisoDressing from "../Assets/miso-dressing.jpg";
import OliveOilAndLemonJuice from "../Assets/olive-oil-and-lemon-juice.jpg";
import Sprouts from "../Assets/sprouts.jpg";
import TahiniSauce from "../Assets/tahini-sauce.jpg";
import Cheese from "../Assets/cheese.jpg";
import Olives from "../Assets/olives.jpg";

const BowlBuilder = () => {
  return (
    <div className="bowl-builder-container">
        
      {/* Base */}
      <div className="ingredient-section">
        <h2 className="green-heading">Base: Start with a whole grain or a nutrient-rich carbohydrate source:</h2>
        <div className="ingredient-images">
          <div className="ingredient">
            <img src={BrownRice} alt="Brown Rice" />
            <h3>Brown Rice</h3>
          </div>
          <div className="ingredient">
            <img src={Quinoa} alt="Quinoa" />
            <h3>Quinoa</h3>
          </div>
          <div className="ingredient">
            <img src={Barley} alt="Barley" />
            <h3>Barley</h3>
          </div>
          <div className="ingredient">
            <img src={Bulgur} alt="Bulgur" />
            <h3>Bulgur</h3>
          </div>
          <div className="ingredient">
            <img src={SweetPotatoes} alt="Sweet Potatoes" />
            <h3>Sweet Potatoes</h3>
          </div>
          <div className="ingredient">
            <img src={WholeWheatCouscous} alt="Whole Wheat Couscous" />
            <h3>Whole Wheat Couscous</h3>
          </div>
        </div>
      </div>

      {/* Protein */}
      <div className="ingredient-section">
        <h2 className="green-heading">Protein: Incorporate lean protein sources for muscle repair and satiety:</h2>
        <div className="ingredient-images">
          <div className="ingredient">
            <img src={GrilledChickenBreast} alt="Grilled Chicken Breast" />
            <h3>Grilled Chicken Breast</h3>
          </div>
          <div className="ingredient">
            <img src={BakedTofu} alt="Baked Tofu" />
            <h3>Baked Tofu</h3>
          </div>
          <div className="ingredient">
            <img src={Lentils} alt="Lentils" />
            <h3>Lentils</h3>
          </div>
          <div className="ingredient">
            <img src={Beans} alt="Beans" />
            <h3>Beans</h3>
          </div>
          <div className="ingredient">
            <img src={Edamame} alt="Edamame"s tyle={{ height: '125px', width: '188px' }}  />
            <h3>Edamame</h3>
          </div>
          <div className="ingredient">
            <img src={Fish} alt="Fish" />
            <h3>Fish</h3>
          </div>
        </div>
      </div>

      {/* Vegetables */}
      <div className="ingredient-section">
        <h2 className="green-heading">Vegetables: Add a variety of colorful vegetables for vitamins, minerals, and fiber:</h2>
        <div className="ingredient-images">
          <div className="ingredient">
            <img src={LeafyVegetable} alt="Leafy Vegetable" />
            <h3>Leafy Vegetable</h3>
          </div>
          <div className="ingredient">
            <img src={BellPeppers} alt="Bell Peppers" />
            <h3>Bell Peppers</h3>
          </div>
          <div className="ingredient">
            <img src={Broccoli} alt="Broccoli" />
            <h3>Broccoli</h3>
          </div>
          <div className="ingredient">
            <img src={Carrot} alt="Carrot" />
            <h3>Carrot</h3>
          </div>
          <div className="ingredient">
            <img src={Tomatoes} alt="Tomatoes" />
            <h3>Tomatoes</h3>
          </div>
        </div>
      </div>

      {/* Healthy Fats */}
      <div className="ingredient-section">
        <h2 className="green-heading">Healthy Fats: Include sources of healthy fats for heart health and satiety:</h2>
        <div className="ingredient-images">
          <div className="ingredient">
            <img src={Avocado} alt="Avocado" />
            <h3>Avocado</h3>
          </div>
          <div className="ingredient">
            <img src={Cashews} alt="Cashews" />
            <h3>Cashews</h3>
          </div>
          <div className="ingredient">
            <img src={Flaxseeds} alt="Flaxseeds" />
            <h3>Flaxseeds</h3>
          </div>
          <div className="ingredient">
            <img src={OliveOil} alt="Olive Oil" />
            <h3>Olive Oil</h3>
          </div>
          <div className="ingredient">
            <img src={Walnut} alt="Walnut" />
            <h3>Walnut</h3>
          </div>
        </div>
      </div>

      {/* Dressing or Sauce */}
      <div className="ingredient-section">
        <h2 className="green-heading">Dressing or Sauce: Use homemade or store-bought dressings sparingly to add flavor:</h2>
        <div className="ingredient-images">
          <div className="ingredient">
            <img src={TahiniSauce} alt="Tahini Sauce" />
            <h3>Tahini Sauce</h3>
          </div>
          <div className="ingredient">
            <img src={GreekYogurtBasedDressing} alt="Greek Yogurt Based Dressing" />
            <h3>Greek Yogurt Based Dressing</h3>
          </div>
          <div className="ingredient">
            <img src={OliveOilAndLemonJuice} alt="Olive Oil and Lemon Juice" />
            <h3>Olive Oil and Lemon Juice</h3>
          </div>
          <div className="ingredient">
            <img src={Hummus} alt="Hummus" />
            <h3>Hummus</h3>
          </div>
          <div className="ingredient">
            <img src={MisoDressing} alt="Miso Dressing" />
            <h3>Miso Dressing</h3>
          </div>
        </div>
      </div>

      {/* Optional Extras */}
      <div className="ingredient-section">
        <h2 className="green-heading">Optional Extras: Consider adding extra toppings or garnishes for added flavor and texture:</h2>
        <div className="ingredient-images">
          <div className="ingredient">
            <img src={Sprouts} alt="Sprouts" />
            <h3>Sprouts</h3>
          </div>
          <div className="ingredient">
            <img src={Cheese} alt="Cheese" />
            <h3>Cheese</h3>
          </div>
          <div className="ingredient">
            <img src={Olives} alt="Olives" />
            <h3>Olives</h3>
          </div>
          <div className="ingredient">
            <img src={ChiaSeeds} alt="Chia Seeds" />
            <h3>Chia Seeds</h3>
          </div>
          <div className="ingredient">
            <img src={Flaxseeds} alt="Flaxseeds" />
            <h3>Flaxseeds</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BowlBuilder;
