// File: app.js

const Container = require('./di/container');
const { createDatabaseConnection } = require('./database');
const { createUsersController } = require('./controller/users');
const Service = require('./service');

const container = new Container();

// Register dependencies with the container
// case 1
// function
const db = createDatabaseConnection();
console.log('db: ', db);
container.register('db', () => createDatabaseConnection());
container.register('usersController', (c) => {
    console.log('c: ', c);
    return createUsersController(c.resolveWithNoCache('db'));
});


// case 2
// class

// register the service with the container
container.register('service', Service);
// Resolve dependencies and start the application
const usersController = container.resolveWithNoCache('usersController');
console.log('usersController: ', usersController)
usersController.getUsers();
const serviceInstance = container.resolve('service');
console.log('serviceInstance: ', serviceInstance);
serviceInstance.setName('New Service Name');
console.log('serviceInstance: ', serviceInstance);

// case 3
// object
const myObj = {
    foo: 'bar',
    baz: () => {
      console.log('Hello, world!');
    },
};

container.register('myObj', myObj);
const result = container.resolve('myObj');

console.log(result.foo); // outputs: bar
result.baz(); // outputs: Hello, world!
