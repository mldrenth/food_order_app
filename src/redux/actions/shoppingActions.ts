import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import { LocationGeocodedAddress } from "expo-location";
import { FoodAvailability } from "../models";

export interface AvailabilityAction {
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability
}

export interface ShoppingErrorAction {
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction

export const onAvailability = (postCode: string) => {

    console.log(`Post Code with request ${postCode}`)
    return async (dispatch: Dispatch<ShoppingAction>) => {
        try {
            const response = await axios.get<FoodAvailability>(`${BASE_URL}/food/availability/78787878`)

            if (!response) {
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Availability error'
                })
            }

            dispatch({
                type: "ON_AVAILABILITY",
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: "ON_SHOPPING_ERROR",
                payload: error
            })
        }
    }
}