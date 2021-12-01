'use strict';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import useStyles from './app.style';

function Media( props ) {
    const classes = useStyles();
    const [ url, setUrl ] = useState( null );
    
    if( ! props.media ) return null;

    useEffect( () => {
        $.ajax( {
            method: 'GET',
            url: 'https://jteststage.wpengine.com/wp-json/wp/v2/media/' + props.media,
        } )
        .done( data => {
            setUrl( data.source_url );
        } );
    }, [] );

    return (
        <img className={ classes.product__image } src={url} />
    );
}


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
            console.log( data );
        } );
    }, [] );


    
    return (
       <>
            <div className={ classes.row }>
            { products.map( ( product ) => 
                <div className={ classes.column } key={ product.id }>
                    <div className={ classes.product } onClick={ () => setProduct( product ) }>
                        <Media media={product.featured_media}/>
                        <h2>{ product.title.rendered }</h2>
                        <div dangerouslySetInnerHTML={ { __html: product.excerpt.rendered } } />
                    </div>
                </div>
            ) }
            </div>
        
            { product &&
            <div className={ classes.product__details }>
                <a className={ classes.product__details__close } onClick={ () => setProduct( null ) }>&times;</a>
                <div className={ classes.clearfix }></div>

                <div className={ classes.product__details__inner }>

                    <Media media={product.featured_media}/>
                    <h2>{ product.title.rendered }</h2>
                    <div dangerouslySetInnerHTML={ { __html: product.content.rendered } } />
                </div>
            </div>
            }
        </>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById( 'eighty20' )
);
