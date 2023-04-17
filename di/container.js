const Service = require('../service');

class Container {
    constructor() {
        this.dependencies = new Map();
        console.log('this.dependencies: ', this.dependencies);
        this.instances = new Map();
        console.log('this.instances: ', this.instances);
    }

    register(name, dependency) {
        this.dependencies.set(name, dependency);
        console.log('this.dependencies: ', this.dependencies);
    }

    // Resolve a dependency by name
    // If the dependency is registered as a singleton
    // the cached instance is returned
    // Otherwise a new instance is created
    resolve(name) {
        console.log('name: ', name);
        console.log('this.instances 111: ', this.instances);
        // Check if the dependency is already registered
        // in the instances map the cached instance is returned
        if (this.instances.has(name)) {
            return this.instances.get(name);
        }

        const dependency = this.dependencies.get(name);

        if (!dependency) {
            throw new Error(`Dependency not found: ${name}`);
        }

        let instance;

        // way 1 dependency is a instance of a class
        // console.log('dependency: ', dependency);
        // console.log('typeof dependency: ', typeof dependency)
        // if (typeof dependency === 'function') {
        //     instance = dependency(this);
        // } else if (typeof dependency === 'object') {
        //     instance = dependency;
        // } else {
        //     throw new Error(`Invalid dependency type for ${name}`);
        // }

        // way 2 dependency is a function
        console.log('dependency: ', dependency);
        console.log('typeof dependency: ', typeof dependency)
        console.log('instanceof dependency: ', dependency instanceof Service )
        if (typeof dependency === 'function') {
            instance =  new dependency(this);
            console.log('instanceof dependency22222: ', instance instanceof Service )
        } else if (typeof dependency === 'object') {
            instance = dependency;
        } else {
            throw new Error(`Invalid dependency type for ${name}`);
        }

        this.instances.set(name, instance);
        console.log('this.instances set: ', this.instances);
        return instance;
    }

    resolveWithNoCache(dependency) {
        // Check if the dependency is already registered
        console.log('dependence', dependency);
        console.log('this.dependencies: ', this.dependencies);
        if (!this.dependencies.get(dependency)) {
            throw new Error(`Dependency '${dependency}' is not registered.`);
        }

        // Resolve the dependency and return a new instance
        const dependencyFunction = this.dependencies.get(dependency);
        return dependencyFunction(this);
    }
}

module.exports = Container;
