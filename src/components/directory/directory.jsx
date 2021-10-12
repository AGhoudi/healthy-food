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
        subtitle: 'Go Green',
        imageUrl: `${vegetables}`,
        id: 1,
        linkUrl: 'vegetables'
      },
      {
        title: 'Fruits',
        subtitle: 'Healthy Fruits',
        imageUrl: `${fruits}`,
        id: 2,
        linkUrl: ''
      },
      {
        title: 'Soups',
        imageUrl: `${soups}`,
        subtitle: 'Delicious Soups',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'Salads',
        imageUrl: `${salads}`,
        subtitle: 'Eat Salads',
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'Juices',
        imageUrl: `${juices}`,
        subtitle: 'Drink Juices',
        size: 'large',
        id: 5,
        linkUrl: ''
      }
    ]

    
  });

  return (
    <div className="directory-menu">
      {
        category.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  );
};

export default Directory;