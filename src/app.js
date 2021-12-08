'use strict';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Product from './product';
import Media from './media';
import Popup from './popup';

import useStyles from './app.style';

function App() {
    const classes = useStyles();

    const [ products, setProducts ]  = useState( [] );
    const [ product, setProduct ] = useState( null );

    useEffect( () => {
        $.ajax( {
            method: 'GET',
            url: 'https://jteststage.wpengine.com/wp-json/wp/v2/products?per_page=100',
        } )
        .done( data => {
            setProducts( data );
        } );
    }, [] );


    
    return (
       <>
            <div className={ classes.row }>
            { products.map( ( product ) => 
                <Product key={ product.id } product={ product } setProduct={ () => setProduct( product ) } />
            ) }
            </div>

            <Popup onClose={ () => setProduct( null ) } product={ product } />
        </>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById( 'eighty20' )
);
