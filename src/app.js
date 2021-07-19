'use strict';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function Media( props ) {
    const [ url, setUrl ] = useState( null );
    
    if( ! props.media ) return null;

    useEffect( () => {
        $.ajax( {
            method: 'GET',
            url: 'https://jteststage.wpengine.com/wp-json/wp/v2/media/' + props.media,
            dataType: 'jsonp'
        } )
        .done( data => {
            setUrl( data.source_url );
        } );
    }, [] );

    return (
        <img src={url} />
    );
}

function App() {
    const [ products, setProducts ]  = useState( [] );

    useEffect( () => {
        $.ajax( {
            method: 'GET',
            url: 'https://jteststage.wpengine.com/wp-json/wp/v2/products',
            dataType: 'jsonp'
        } )
        .done( data => {
            setProducts( data );
        } );
    }, [] );
    
    return (
       <>
            <div className="products">
            { products.map( ( product ) => 
                <div className="product" key={ product.id }>
                    <Media media={product.featured_media} />
                    <h2>{ product.title.rendered }</h2>
                    <div dangerouslySetInnerHTML={ { __html: product.content.rendered } } />
                </div>
            ) }
            </div>
        </>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById( 'eighty20' )
);
