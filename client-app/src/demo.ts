let data : number | string ;
 
data = 'dd';

export interface ICar {
    color: string;
    model: string;
    topSpeed? : number; // ? used to set 'topSpeed' in optionl situation
}

const car1 : ICar = {
    color: 'blue',
    model: 'Mercedes'
}

const car2 : ICar = {
    color: 'red',
    model: 'BMW',
    topSpeed: 100
}

const multiply = (x : number,y : number) => {
    return x*y;
}

export const cars = [car1, car2];