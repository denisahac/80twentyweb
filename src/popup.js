'use strict';

import React from 'react';

import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

import Media from './media';
import useStyles from './app.style';

const styles = createUseStyles( {
    'popup__inner': {
        position: 'fixed',
        top: 100,
        left: '50%',
        bottom: 100,
        zIndex: 1000,
        transform: 'translateX(-50%)',
        maxHeight: 800,
        boxShadow: '0 0 8px rgba(0,0,0,.6)',
        background: '#fff',
        overflowY: 'auto',
    },

    'metadata': {
        display: 'flex',
        flexWrap: 'wrap',
    },

    'metadata__column': {
        flex: '0 0 50%',
        width: '50%',
        background: '#f9f9f9',

        '&:nth-child(even)': {
            background: '#efefef'
        }
    },

    'metadata__inner': {
        padding: 20
    },

    'metadata__header': {
        marginTop: 0,
        marginBottom: 12,
        fontSize: 24,
        fontWeight: 900,
        color: '#1E2061',
        lineHeight: 1.2
    },

    'feature': {
    },

    'product__description': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right',
    },

    'product__media': {
        
    }
} );

function Feature( props ) {
    const { feature } = props;

    const cl = styles();

    return (
        <div className={ cl.feature }>
            <p dangerouslySetInnerHTML={ { __html: feature } } />
        </div>
    );
}


function Popup( props ) {
    const classes = useStyles();
    const cl = styles();

    const { 
        product,
        onClose
    } = props;

    let features = Array();

    if( product ) {
        features = product.acf.features;
    }

    return (
        <>
            { product &&
            <div className={ classes.product__details } onClick={ onClose }>
                <a className={ classes.product__details__close } onClick={ onClose }>&times;</a>
                <div className={ classes.clearfix }></div>

                <div className={ cl.popup__inner } onClick={ e => e.stopPropagation() }>
                    <div className={ classes.product__details__inner }>
                        <div className={ cl.product__description }>
                            <h2 className={ classes.product__title }>{ product.title.rendered }</h2>
                            <p className={ classes.product__subtitle }>{ product.acf.subtitle } </p>

                            <div dangerouslySetInnerHTML={ { __html: product.content.rendered } } />
                        </div>

                        <div className={ cl.product__media }>
                            <Media media={product.featured_media}/>
                        </div>
                    </div>

                    <div className={ cl.metadata }>
                        <div className={ cl.metadata__column }>
                            <div className={ cl.metadata__inner }>
                                <h3 className={ cl.metadata__header }>Features</h3>

                                { features.map( ( { feature }, i ) => 
                                    <Feature key={ i } feature={ feature } />
                                ) }
                            </div>
                        </div>

                        <div className={ cl.metadata__column }>
                            <div className={ cl.metadata__inner }>
                                <h3 className={ cl.metadata__header }>Additional Information</h3>
                                <div dangerouslySetInnerHTML={ { __html: product.acf.additional_info } } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default Popup;


