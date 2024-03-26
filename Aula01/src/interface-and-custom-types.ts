type Coordinate = {
    x: number;
    y: number;
};



function calculateDistance( pointA: Coordinate, pointB: Coordinate): number {
    const dx = pointB.x - pointA.y;
    const dy = pointB.y - pointA.y;

    const result = Math.sqrt(dx * dx  + dy * dy);

    return result;
}

const CoordinateA :Coordinate  = {
    x: 20,
    y: 8
}

const CoordinateB :Coordinate  = {
    x: 15,
    y: 30
}

// console.log(calculateDistance(CoordinateA, CoordinateB)); // 

////////////////////////////////////

interface Car {
    brand: string;
    model: string;
    year: number;
    startEngine:  () => void;
}

const myCar:  Car = {
    brand: 'Audi',
    model:  'A3',
    year:  2023,
    startEngine: () => {
        console.log("Engine Started!");
        
    },
}

function drive(Car: Car): void {
    console.log(`Driving ${Car.brand}, ${Car.model}`);
    Car.startEngine();
}

drive(myCar);