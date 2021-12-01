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
        flex: '0 0 25%'
    },
    product: {
        padding: 20,
        marginBottom: '1rem',
        cursor: 'pointer'
    },

    'product__image': {
        maxWidth: '100%',
        height: 200,
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

