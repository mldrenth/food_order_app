import { ShoppingAction } from "../actions"
import { FoodAvailability, ShoppingState } from '../models'

const initalState = {
    availability: {} as FoodAvailability
}

const ShoppingReducer = (state: ShoppingState = initalState, action: ShoppingAction) => {
    switch (action.type) {
        case 'ON_AVAILABILITY':
            return {
                ...state,
                availability: action.payload
            }
            break;

        default:
            return state
    }
}

export { ShoppingReducer }