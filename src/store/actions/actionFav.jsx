export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE" 
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
// export const INCREMENT_COUNT = "INCREMENT_COUNT"
// export const DECREMENT_COUNT = "DECREMENT_COUNT"
export const addToFavourite = (payload)=>{
 
    return {
        type: ADD_TO_FAVOURITE,
        payload
    }
}
export const removeFromFavourite = (id)=>{
    return {
        type: REMOVE_FROM_FAVOURITE,
        id 
    }
}
// export const incrementCount = (payload)=>{
//     console.log("myAction",payload)
//     return {
//         type:INCREMENT_COUNT,
//         payload
//     }
// }
// export const decrement = (payload)=>{
//     return{
//         type:DECREMENT_COUNT,
//         payload
//     }
// }

