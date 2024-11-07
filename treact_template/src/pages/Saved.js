import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Header from "components/headers/light.js";
import SavedSlider from "components/cards/ThreeColSlider.js";
import SavedGrid from "components/cards/SavedTabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

export default () => {
  return (
    <AnimationRevealPage>
      <SavedGrid />
    </AnimationRevealPage>
  );
};
