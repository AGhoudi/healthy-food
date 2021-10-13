import React, { useState } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import SHOP_DATA from './shop.data';

const ShopPage = () => {
  // eslint-disable-next-line
  const [shop, setShop] = useState({
    collections:  SHOP_DATA
  });

  const {collections} = shop;

  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
      }
    </div>
  );
};

export default ShopPage;