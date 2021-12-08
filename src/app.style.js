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
        fontSize: 24,
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
        backgroundColor: '#fff',
    },

    'product__details__close': {
        'float': 'right',
        fontSize: 30,
        cursor: 'pointer'
    },

    'product__details__inner': {
        padding: 20
    }
} );

export default useStyles;

