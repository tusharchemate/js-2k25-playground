const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function(city, country) {
        return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
    }
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith"
};

const boundFunc = person.getFullName.bind(person2, "New York");
console.log(boundFunc("USA"));
