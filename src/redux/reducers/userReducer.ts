import { LocationGeocodedAddress } from 'expo-location'
import {UserAction} from '../actions'
import { UserModel, UserState } from '../models'

const initalState: UserState = {
    user: {} as UserModel,
    location: {} as LocationGeocodedAddress,
    error: undefined
}

const UserReducer = (state: UserState = initalState, action: UserAction) => {
    switch (action.type) {
        case 'ON_UPDATE_LOCATION':
            return {
                ...state,
                location: action.payload
            }
    
        default:
            return state
    }
}

export {UserReducer}