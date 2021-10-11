import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item";

import vegetables from "../../assets/images/vegetables.png";
import fruits from "../../assets/images/fruits.png";
import soups from "../../assets/images/soups.png";
import salads from "../../assets/images/salads.png";
import juices from "../../assets/images/juices.png";

import './directory.scss';

const Directory = () => {
  // eslint-disable-next-line
  const [category, setCategory] = useState({
    sections: [
      {
        title: 'Vegetables',
        imageUrl: `${vegetables}`,
        id: 1
      },
      {
        title: 'Fruits',
        imageUrl: `${fruits}`,
        id: 2
      },
      {
        title: 'Soups',
        imageUrl: `${soups}`,
        id: 3
      },
      {
        title: 'Salads',
        imageUrl: `${salads}`,
        size: 'large',
        id: 4
      },
      {
        title: 'Juices',
        imageUrl: `${juices}`,
        size: 'large',
        id: 5
      }
    ]

    
  });

  return (
    <div className="directory-menu">
      {
        category.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))
      }
    </div>
  );
};

export default Directory;