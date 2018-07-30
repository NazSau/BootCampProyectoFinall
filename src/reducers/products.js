import actionTypes from '../constants/actionTypes';

const initialState = {
 list: [{
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli7QZhfgDkkK87B9BA9gw9jPlKtNTmol6Yh0pW1zaWtsgiVVI7w',
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. Una cerveza de estilo inglés con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 92
    },{
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli7QZhfgDkkK87B9BA9gw9jPlKtNTmol6Yh0pW1zaWtsgiVVI7w',
        name: 'Cerveza Porter',
        description: 'Más magica que harry ',
        price: 32
    },{
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli7QZhfgDkkK87B9BA9gw9jPlKtNTmol6Yh0pW1zaWtsgiVVI7w',
        name: 'Cerveza Patagonia Larger',
        description: 'Llegó la cerveza más blanca de Patagonia. Una cerveza de estilo frances con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 55
    },{
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli7QZhfgDkkK87B9BA9gw9jPlKtNTmol6Yh0pW1zaWtsgiVVI7w',
        name: 'Cerveza Patagonia Larger',
        description: 'Llegó la cerveza más blanca de Patagonia. Una cerveza de estilo frances con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 55
    },{
        id: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli7QZhfgDkkK87B9BA9gw9jPlKtNTmol6Yh0pW1zaWtsgiVVI7w',
        name: 'Cerveza Patagonia Larger',
        description: 'Llegó la cerveza más blanca de Patagonia. Una cerveza de estilo frances con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 55
    }
]};

const productsReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.PRODUCTS_GET_LIST: {
            return state;
        }

        default:
            return state;
    }

};

export default productsReducer;