let data: number | string;

data = 'test';

export interface ICar {
    color : string;
    model : string;
    topSpeed? : number; // ? used to set 'topSpeed' in optionl situation
}

const car1 : ICar = {
    color: 'red',
    model: 'BMW'
}

const car2 : ICar = {
    color: 'blue',
    model: 'Toyota',
    topSpeed : 255
}

const miltifly = (x:number, y:number) => {
    return x*y;
}

export const cars =[car1, car2];