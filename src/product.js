'use strict';

import React from 'react';
import Media from './media';

import useStyles from './app.style';

function Product( props ) {
    
    const {
        product,
        setProduct
    } = props;

    const classes = useStyles();

    return (
        <div className={ classes.column }>
            <div className={ classes.product } onClick={ setProduct }>
                <Media media={product.featured_media}/>
                <h2 className={ classes.product__title }>{ product.title.rendered }</h2>
                <p className={ classes.product__subtitle }>{ product.acf.subtitle } </p>

                <div dangerouslySetInnerHTML={ { __html: product.excerpt.rendered } } />
            </div>
        </div>
    );
}

export default Product;

