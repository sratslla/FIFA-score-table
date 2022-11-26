// const api_url = 'https://soccer.sportmonks.com/api/v2.0/standings/season/:SEASON_ID?include=league'
// fetch(api_url, {mode: "no-cors",})
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// fetch("https://livescore-api.com/api-client/competitions/standings.json?competition_id=362&key=HVDNmP9kLvFDh63H&secret=edeIcA7wkAPOMe9uaNhwDrRoWw2dC6VR", {
// 	"method": "GET",
//     mode: "no-cors",
// 	}
// )
// .then(response => response.json().then(data => {
//     var matchesList = data['response']
//     console.log(matchesList);
// }))
async function fetchData(){
    const url = 'https://livescore-api.com/api-client/competitions/standings.json?competition_id=362&key=HVDNmP9kLvFDh63H&secret=edeIcA7wkAPOMe9uaNhwDrRoWw2dC6VR'
    const response = await fetch(url, {mode: "no-cors"})

    // const data = await response
    console.log(response);
}
fetchData()