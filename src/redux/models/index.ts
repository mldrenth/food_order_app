import { LocationGeocodedAddress } from 'expo-location'

export interface Category {
    title: string,
    icon: string
}

export interface FoodModel {
    _id: string,
    name: string,
    description: string,
    category: string,
    price: number,
    readyTime: number,
    image: [string]
}

export interface RestaurantModel {
    _id: string,
    name: string,
    foodType: string,
    address: string,
    phone: string,
    images: string,
    foods: [FoodModel]
}

export interface FoodAvailability {
    categories: [Category],
    restaurants: [RestaurantModel],
    foods: [FoodModel]
}

export interface UserModel {
    firstName: string,
    lastName: string,
    contactNumber: string,
    token: string
}

export interface UserState {
    user: UserModel,
    location: LocationGeocodedAddress,
    error: string | undefined 
}

export interface ShoppingState {
    availability: FoodAvailability,
}