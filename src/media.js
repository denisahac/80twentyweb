'use strict';

import React, { useState, useEffect } from 'react';
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

export default Media;

