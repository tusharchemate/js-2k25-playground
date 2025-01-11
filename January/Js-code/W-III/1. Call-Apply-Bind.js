// call function

function sayGoobBy(greet) {
	return `${greet} my name is ${this.name}. I'm from ${this.city}`
}

const person = {
	name:'tushar',
    city:'Pune',
}


console.log(sayGoobBy.call(person, 'Hi'));

// apply

function applyMe  (greet, punc)  {
	return `${greet} are you playing ${this.play} , ${punc}`
}

const play = {
	play:'cricket'
}

console.log(applyMe.apply(play,['Hey', 'Cool!']))

// bind

function bindMe (greet, punc) {
	console.log( `${this.name}, ${greet} , ${punc}`)
}

const student = {
	name:'John',
    age:22
}

const sayGoodbyeFromCharlie = bindMe.bind(person);

sayGoodbyeFromCharlie('Welcome', '!!'); 
