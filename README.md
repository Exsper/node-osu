# node-osu

*Add private server support* 

### Changes

org: https://github.com/brussell98/node-osu 

#### Constructor
```js
const osuApi = new osu.Api('yourServerToken', 'osuToken', {
	baseUrl: "https://your.osu.server/api", 
	beatmapBaseUrl: "https://osu.ppy.sh/api",
	notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
	completeScores: false, // When fetching scores also fetch the beatmap they are for (Allows getting accuracy) (default: false)
	parseNumeric: false // Parse numeric values into numbers/floats, excluding ids
});
```
