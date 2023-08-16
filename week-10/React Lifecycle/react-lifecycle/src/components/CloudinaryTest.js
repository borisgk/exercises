import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { sepia } from "@cloudinary/url-gen/actions/effect";
import { fill, minimumFit } from "@cloudinary/url-gen/actions/resize";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { byRadius, max } from "@cloudinary/url-gen/actions/roundCorners";
import { png } from "@cloudinary/url-gen/qualifiers/format";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";


// Import any actions required for transformations.
import {crop} from "@cloudinary/url-gen/actions/resize";

function CloudinaryTest() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwbttdmxo'
    }
  });


  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('DJI_0809_piuxhr'); 


  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(800))
  myImage.roundCorners(byRadius(20))


  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
      <div>
        <h1>Cloudinary Demo</h1>
        <AdvancedImage cldImg={myImage} />
      </div>
  )

};

export default CloudinaryTest
