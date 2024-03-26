enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

type Person = {
    name: string;
    age: number;
    gender: Gender;
}

const person: Person = {
    name: 'Joao da Silva',
    age: 13,
    gender: Gender.MALE
}

function displayPersonInfo( person: Person) : void{
    console.log(`${person.name}`);
    console.log(`${person.age}`);
    console.log(`${person.gender}`);
}

displayPersonInfo(person);