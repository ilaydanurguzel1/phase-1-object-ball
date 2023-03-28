function gameObject(){
    return {
      "home": {
        "teamName": "Brooklyn Nets",
        "colors": ["black", "white"],
        "players": {
          "Alan Anderson": {
            "number": 0,
            "shoe": 16,
            "points": 22,
            "rebounds": 12,
            "assists": 12,
            "steals": 3,
            "blocks": 1,
            "slamDunks": 1
          },
          "Reggie Evans":  {
            "number": 30,
            "shoe": 14,
            "points": 12,
            "rebounds": 12,
            "assists": 12,
            "steals": 12,
            "blocks": 12,
            "slamDunks": 7
          },
          "Brook Lopez": {
            "number": 11,
            "shoe": 17,
            "points": 17,
            "rebounds": 19,
            "assists": 10,
            "steals": 3,
            "blocks": 1,
            "slamDunks": 15
          },
          "Mason Plumlee": {
            "number": 1,
            "shoe": 19,
            "points": 26,
            "rebounds": 12,
            "assists": 6,
            "steals": 3,
            "blocks": 8,
            "slamDunks": 5
          },
          "Jason Terry": {
            "number": 31,
            "shoe": 15,
            "points": 19,
            "rebounds": 2,
            "assists": 2,
            "steals": 4,
            "blocks": 11,
            "slamDunks": 1
          }
        }
      },
      "away": {
        "teamName": "Charlotte Hornets",
        "colors": ["turquoise", "purple"],
        "players": {
          "Jeff Adrian": {
            "number": 4,
            "shoe": 18,
            "points": 10,
            "rebounds": 1,
            "assists": 1,
            "steals": 2,
            "blocks": 7,
            "slamDunks": 2
          },
          "Bismak Biyombo": {
            "number": 0,
            "shoe": 16,
            "points": 12,
            "rebounds": 4,
            "assists": 7,
            "steals": 7,
            "blocks": 15,
            "slamDunks": 10
          },
          "DeSagna Diop": {
            "number": 2,
            "shoe": 14,
            "points": 24,
            "rebounds": 12,
            "assists": 12,
            "steals": 4,
            "blocks": 5,
            "slamDunks": 5
          },
          "Ben Gordon": {
            "number": 8,
            "shoe": 15,
            "points": 33,
            "rebounds": 3,
            "assists": 2,
            "steals": 1,
            "blocks": 1,
            "slamDunks": 0
          },
          "Brendan Haywood": {
            "number": 33,
            "shoe": 15,
            "points": 6,
            "rebounds": 12,
            "assists": 12,
            "steals": 22,
            "blocks": 5,
            "slamDunks": 12
          }
        }
      }
    }
  }
  const teams = gameObject();


function whichHomeOrArray(name){
    for(const team in teams){
        for(const player in teams[team]["players"]){
            if(player===name){
                return team
            }
        }

    }
}

function numPointsScored(namePlayer) {
    return teams[whichHomeOrArray].players[namePlayer].points 
  }


function shoeSize(sizePlayer) {
    return teams[whichHomeOrArray].players[sizePlayer].shoe 
  }


    
function teamColors(colorTeam) {
    for (const team in teams) {
        if (teams[team].teamName === colorTeam) {
          return teams[team].colors;
        }
      }
  }


  function teamNames() {
    let allTeamNames = [];
    for (const property in allTeams) {
      allTeamNames.push(allTeams[property].teamName)
    }
    return allTeamNames;
  }


  function playerNumbers(number) {
    for (const team in teams) {
        if (teams[team].teamName === number) {
          return teams[team].number;
        }
      }
  }


  function playerStats(stats) {
    return teams[whichHomeOrArray].players[stats] 
  }


  function bigShoeRebounds(bigNumber){
    let arr = Object.values(teams.shoe);
    let max = Math.max(...arr);
    for (const team in teams) {
        if (teams[team].shoe === bigNumber) {
          return teams[team].bigNumber;
        }
      }
      return max.rebounds
  }


  function winningTeam(winning){
    let arr = Object.values(teams.players);
    let max = Math.max(...arr);
    for (const team in teams) {
        if (teams[team].shoe === winning) {
          return teams[team].winning;
        }
      }
  }
    

  
  function playerWithLongestName(longest){
    let longestName=0
    for (let i = 0; i < longest.options.length; i++) {
        if (longest.options[i].selected>longest.options.length) {
            return longestName
          }
      }
  }


  function doesLongNameStealATon(){
    return teams[playerWithLongestName].players[steals] 
  }
