const followers = require("./followers_and_following/followers_1.json");
const following = require("./followers_and_following/following.json");
let snakes = [];
for (let i = 0; i < following.relationships_following.length; i++) {
	let x = following.relationships_following[i].string_list_data[0].value;
	let c = 0;

	for (let j = 0; j < followers.length; j++) {
		if (followers[j].string_list_data[0].value === x) {
			c++;
			break;
		}
	}

	if (c === 0) {
		snakes.push(x);
	}
}

console.log("SNAKES:");
for (let i = 0; i < snakes.length; i++) {
	console.log(`${i + 1}) ${snakes[i]}`);
}
