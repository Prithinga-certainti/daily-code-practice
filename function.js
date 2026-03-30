let users = [];
let currentId = 1;   

function addUser(name, age) {
    const user = {
        id: currentId,   
        name: name,
        age: age
    };

    currentId++;   
    users.push(user);

    return user;
}

function getAllUsers() {
    return users;
}


function getUserById(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return "User not found";
}
function updateUser(id, name, age) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].name = name;
            users[i].age = age;
            return users[i];
        }
    }
    return "User not found";
}

function deleteUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users.splice(i, 1)[0];
        }
    }
    return "User not found";
}