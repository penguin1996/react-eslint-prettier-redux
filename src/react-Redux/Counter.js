import { add, reduce } from "../ConsetVriable";


export function add(number){
    return {
        type: Add,
        number,
    };
}

export function reduce(number){
    return {
        type: Reduce,
        number,
    };
} 