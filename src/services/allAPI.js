import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

export const getAllgadgetsAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/categories/2/products`,"","")
}
export const getAllShoesAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/categories/4/products`,"","")
}
export const getFurnitureAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/categories/3/products`,"","")
}
export const getcategoriesAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/categories`,"","")
}
export const getcategoriesbyidAPI =async(data) =>{
    return await commonAPI("GET",`${BASE_URL}/categories/${data}/products`,"","")
}
export const getusersAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/users`,"","")
}