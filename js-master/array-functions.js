const users = [
    {
        name: "Yasin",
        age: 10,
    },
    {
        name: "Hatice",
        age: 29,
    },
    {
        name: "Ahmet",
        age: 40,
    },
];

// push
// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

// map
// users.map((item) => {
// 	console.log(item.name);
// });

// find
// const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(result);

// filter
// const filtered = users.filter(({ name, age }) => name === "Mehmet" && age < 20);
// console.log(filtered);

// some
// const some = users.some((item) => item.age === 11);
// console.log(some);

// every
// const every = users.every((item) => item.age > 20);
// console.log(every);

// includes

const meyveler = ["cilek", "portakal", "mandalina"];
const isIncluded = meyveler.includes("portakal");

console.log(isIncluded);