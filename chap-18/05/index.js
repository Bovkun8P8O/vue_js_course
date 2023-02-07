// const name = 'WFM';
// const age = 35;
//
// const obj = {name, age,};
//
// console.log(obj);`

const createPerson = (name, surname, fieldName, fieldPostfix) => {
    const fullname = name + ' ' + surname;
    // const person = {
    //     fullname,
    //     name,
    //     surname,
    //     getJob() {
    //         return 'Front End 1';
    //     },
    // };
    // let finalFieldName = fieldName + fieldPostfix;
    // person[finalF`ieldName] = 50;
    // return person;
    return {
        fullname,
        name,
        surname,
        getJob() {
            return 'Front End 1';
        },
        [fieldName + fieldPostfix]: 100
    };
};

const person = createPerson('WFM', 'WFM2', /*age*/'car', '-model');
console.log(person);