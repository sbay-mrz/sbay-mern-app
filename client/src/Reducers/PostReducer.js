import { FETCH_PRODUCTS,GET_SINGLE_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART,SET_USER_TOKEN, RESET_USER_TOKEN } from '../actions/types';

const initialState = {

    items: [],
    description: {},
    item: {},
    cart: [],
    quantity: 1,
    addedIds: [],
    itemremoved: [],
    totalPrice: [],
    cartPrices: [],
    cartCounter: 0,
    username: '',
    password: '',
    userToken: undefined,
    status: false

};


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
            case ADD_TO_CART:
            console.log("redux" , state.cart);
            return {
                ...state,
                cart: [...state.cart, action.products],
                cartCounter: state.cartCounter+1,
                addedIds: [...state.addedIds,action.addedId]
            }

                case GET_SINGLE_PRODUCT:
            console.log(action.obj);
            return {
                ...state,
                description: action.obj
            }

                 case REMOVE_FROM_CART:

                 {
                     console.log("addedids ",state.addedIds)
                    var newCart = state.cart.map(elm =>{
                        if(elm._id !== action.productID){
                            return elm;
                        }
                    });
                    var addedIds = state.addedIds.map(elm =>{
                        console.log("action added",action.addedId)
                        if(elm !== action.productID){
                            return elm;
                        }
                    });
                    var cartCounter = state.cartCounter-1;
                    newCart = newCart.filter(elm=> elm !== undefined);
                   
                     addedIds = addedIds.filter(elm=>elm!==undefined )

                    return {
                    ...state,
                    cart: newCart,
                    cartCounter,
                    addedIds
                }}
                
                case SET_USER_TOKEN:
                    return {
                        ...state,
                        status: !action.status
                    }
        
                case RESET_USER_TOKEN:
                    return {
                        ...state,
                        status: !action.status
                    }
        //      {
        //         var newCart = state.cart.filter(item => item !== action.object),
        //         cartCounter =  state.cartCounter-1
            
        //         newCart = newCart.filter(elm=> elm != undefined);
                
        //         return {
        //         ...state,
        //         cart: newCart,
        //         cartCounter
        //     }
        // }

               default:
            return state;
    }
}