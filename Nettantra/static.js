var team_data = [

    {
        "team_no": 1,
        "teamFullName": "Royal Challenges Banglore",
        "teamSortName": "RCB",
        "teamLogo": "rcb.jpg",
        "topBatsMan": "virat Kohil,AB Devileaus",
        "topBolower": "Harshal patel",
        "totalPlayer": 20,
        "wonMatch": 5,
        "player": [
            {
                "name": "Virat Kohil",
                "photo": "virat.jpg",
                "team": "RCB",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "AB Devileaus",
                "photo": "ab.jpg",
                "team": "RCB",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "Harshal pate",
                "photo": "harsh.jpg",
                "team": "RCB",
                "price": "20cr",
                "status": "Playing",
                "Role": "Bowler"
            }
        ]
    },
    {
        "team_no": 2,
        "teamFullName": "Mumbai Indians",
        "teamSortName": "MI",
        "teamLogo": "mi.jpg",
        "topBatsMan": "Rohit sarma",
        "topBolower": "Suryakumar Yadav",
        "totalPlayer": 15,
        "wonMatch": 10,
        "player": [
            {
                "name": "Rohit sharma",
                "photo": "rohit.jpg",
                "team": "MI",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "Hardik pandya",
                "photo": "hardik.jpg",
                "team": "MI",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "Jasprit bumrah",
                "photo": "boom.jpg",
                "team": "MI",
                "price": "20cr",
                "status": "Playing",
                "Role": "Bowler"
            }
        ]
    },
    {
        "team_no": 3,
        "teamFullName": "Chennai Super King",
        "teamSortName": "CSK",
        "teamLogo": "csk.jpg",
        "topBatsMan": "MS Dhoni",
        "topBolower": "Lungisani Ngidi",
        "totalPlayer": 15,
        "wonMatch": 10,
        "player": [
            {
                "name": "Mahendra shing dhoni",
                "photo": "ms.jpg",
                "team": "CSK",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "Du Plessis",
                "photo": "du.jpg",
                "team": "CSK",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "Lungisani Ngidi",
                "photo": "lungi.jpg",
                "team": "CSK",
                "price": "20cr",
                "status": "Playing",
                "Role": "bowler"
            }1
        ]

    },
    {
        "team_no": 4,
        "teamFullName": "Panjab",
        "teamSortName": "PNB",
        "teamLogo": "pnb.jpg",
        "topBatsMan": "Kannur Lokesh Rahul",
        "topBolower": "Arshdeep Singh",
        "totalPlayer": 15,
        "wonMatch": 10,
        "player": [
            {
                "name": "Kannur Lokesh Rahul",
                "photo": "kl.jpg",
                "team": "PNB",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "Mayank Agrawal",
                "photo": "mk.jpg",
                "team": "PNB",
                "price": "20cr",
                "status": "Playing",
                "Role": "Batsman"
            },
            {
                "name": "Arshdeep Singh ",
                "photo": "ar.jpg",
                "team": "PNB",
                "price": "20cr",
                "status": "Playing",
                "Role": "Bolower"
            }
        ]

    }
]

localStorage.setItem('team_data', JSON.stringify(team_data))