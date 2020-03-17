import React, { Fragment } from "react";

const faker = require('faker');
const people = [];


function createValues() {
    for (let i = 1; i < 1001; i++) {
        const ran = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        let activity;
        let colorOfSkin;

        if (faker.random.boolean()) {
            activity = 'active';
        } else {
            activity = 'passive';
        }

        if (ran === 1) {
            colorOfSkin = 'white';
        } else if (ran === 2) {
            colorOfSkin = 'black'
        } else {
            colorOfSkin = 'yellow'
        }

        const person = {
            id: i,
            name: faker.name.findName(),
            activity: activity,
            job: faker.name.jobType(),
            number: faker.random.number(),
            currency: faker.finance.currencySymbol(),
            country: faker.address.country(),
            city: faker.address.city(),
            colorOfSkin: colorOfSkin,
        }
        
        people.push(person);
    }
}

createValues();

export { people };