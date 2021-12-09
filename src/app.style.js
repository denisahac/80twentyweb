'use strict';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles( {
    clearfix: {
        display: 'block',
        content: '.',
        clear: 'both',
        color: 'transparent'
    },

    row: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    column: {
        display: 'flex',
        flex: '0 0 25%',
        width: '25%'
    },

    product: {
        margin: 12,
        padding: 20,
        borderRadius: 12,
        cursor: 'pointer',
        background: '#f9f9f9',
        transition: 'background 0.3s ease-in-out',

        '&:hover': {
            background: '#efefef'
        }
    },

    'product__image': {
        display: 'block',
        maxWidth: '100%',
        maxHeight: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 12
    },

    'product__title' : {
        marginBottom: 12,
        fontSize: '24px !important',
        fontWeight: 900,
        color: '#1E2061',
        textAlign: 'center',
        lineHeight: 1.2
    },

    'product__subtitle': {
        marginTop: 0,
        fontWeight: 700,
        textAlign: 'center'
    },

    'product__details': {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 999,
        padding: 20,
        overflow: 'auto',

        '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: '#0b0b0b',
            opacity: 0.8,
            color: 'transparent',
        }
    },


    'product__details__close': {
        position: 'fixed',
        top: 50,
        right: 20,
        zIndex: 1000,
        display: 'inline-block',
        width: 40,
        height: 40,
        lineHeight: '40px',
        borderRadius: '50%',
        boxShadow: '0 0 8px rgba(0,0,0,.6)',
        background: '#fff',
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        cursor: 'pointer'
    },

    'product__details__inner': {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 20,

        '& div': {
           flex: '0 0 50%',
           width: '50%',
           padding: 20,
           boxSizing: 'border-box'
        },

        '& $product__image': {
            marginLeft: 0,
            maxHeight: 320
        }
    }
} );

export default useStyles;

