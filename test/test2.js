const osu = require('../index.js');

const osuToken = require('./settings.json').osuToken;
const _user = require('./settings.json').u;
const _beatmap = require('./settings.json').b;

const osuApi = new osu.Api('', osuToken, {
	baseUrl: "https://osu.ppy.sb/api",
	beatmapBaseUrl: "https://osu.ppy.sh/api",
	notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
	completeScores: true, // When fetching scores also fetch the beatmap they are for (Allows getting accuracy) (default: false)
	parseNumeric: false // Parse numeric values into numbers/floats, excluding ids
});

async function test() {
	osuApi.getScores({ u: _user, b: _beatmap }).then(item => {
		console.log(JSON.stringify(item[0]));
	});
}

test();
