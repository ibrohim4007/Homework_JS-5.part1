
let users = {};

for (let i = 1; i <= 10; i++) {
    let name = prompt(`Введите имя пользователя ${i}:`);
    let age = prompt(`Введите возраст пользователя ${i}:`);


    if (isNaN(age)) {
        alert("введите число.");
        i--;
        continue;
    }

    users[i] = {
        name: name,
        age: age
    };
}

for (let id in users) {
    console.log(`Пользователь - ${id}`);
    console.log(`Имя - ${users[id].name}`);
    console.log(`Возраст - ${users[id].age}`);
}

console.log(users);

