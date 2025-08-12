import React from 'react';
import { Link } from 'react-router-dom';
import {shopRoutes} from '@packages/shared/src/routes/shop'

const Shop = () => {
    return (
        <h1>
            <h1>SHOP</h1>
            <Link to={shopRoutes.second}>SHOP second</Link>
        </h1>
    );
};

export default Shop;