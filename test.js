var khronos = require('./lib/khronos.js');

khronos.setLifespan(10);

console.log("Lifespan 10 secs, Added test subjects");
khronos.add("Booooooom1", "Bomb");
khronos.add("Booooooom2", "Bodb", false, 15);
khronos.add("Booooooom3", "Bo2b", false, 20);
khronos.add("Booooooom4", "Bumb", false, 17);

console.log("The cake is a lie, we delete an entry");
khronos.delete("Bo2b");

setTimeout(function () {
	console.log("Testing the Get");
	console.log(khronos.get("Bomb"));
	console.log(khronos.get("Bodb"));
}, 13000);
