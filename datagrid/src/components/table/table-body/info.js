import React, { Fragment } from "react";

const faker = require('faker');
const people = [];
// const numbers = [];
// const trueOrFalse = [];

function createValues() {
    for (let i = 1; i < 1001; i++) {
        // const name = faker.name.findName();
        // names.push(name);
        // const numberPhone = faker.random.number(); 
        // numbers.push(numberPhone);
        // const trueOrFalseValue = faker.random.boolean(); 
        // trueOrFalse.push(trueOrFalseValue);
        let sex;

        if (faker.random.boolean()) {
            sex = 'female';
        } else {
            sex = 'male';
        }

        const person = {
            id: i,
            name: faker.name.findName(),
            sex: sex,
            job: faker.name.jobType(),
            number: faker.random.number(),
            currency: faker.finance.currencySymbol(),
            country: faker.address.country(),
            city: faker.address.city(),
        }
        
        people.push(person);
    }
}

createValues();

export { people };