var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                { x: 6682, y: 16.17 },
            ],
            label: "Baltimore City",
            borderColor: "#FF0000",
            backgroundColor: "#FF0000",
            borderWidth: 2,

        }, {
            data: [
                { x: 1208, y: 5.35 },
            ],
            label: "Baltimore",
            borderColor: "#FF7F00",
            backgroundColor: "#FF7F00",
            borderWidth: 2,

        }, {
            data: [
                { x: 254, y: 5.11 },
            ],
            label: "Wicomico",
            borderColor: "#FFD400",
            backgroundColor: "#FFD400",
            borderWidth: 2,

        }, {
            data: [
                { x: 56, y: 5.11 },
            ],
            label: "Dorchester",
            borderColor: "#FFFF00",
            backgroundColor: "#FFFF00",
            borderWidth: 2,

        }, {
            data: [
                { x: 1795, y: 4.53 },
            ],
            label: "Prince George's",
            borderColor: "#BFFF00",
            backgroundColor: "#BFFF00",
            borderWidth: 2,

        }, {
            data: [
                { x: 296, y: 4.20 },
            ],
            label: "Cecil",
            borderColor: "#6AFF00",
            backgroundColor: "#6AFF00",
            borderWidth: 2,

        }, {
            data: [
                { x: 954, y: 4.06 },
            ],
            label: "Anne Arundel",
            borderColor: "#00EAFF",
            backgroundColor: "#00EAFF",
            borderWidth: 2,

        }, {
            data: [
                { x: 242, y: 3.80 },
            ],
            label: "Charles",
            borderColor: "#0095FF",
            backgroundColor: "#0095FF",
            borderWidth: 2,

        }, {
            data: [
                { x: 74, y: 3.65 },
            ],
            label: "Worchester",
            borderColor: "#0040FF",
            backgroundColor: "#0040FF",
            borderWidth: 2,

        }, {
            data: [
                { x: 168, y: 3.39 }],
            label: "Allegany",
            borderColor: "#AA00FF",
            backgroundColor: "#AA00FF",
            borderWidth: 2,

        }, {
            data: [
                { x: 81, y: 3.28 }],
            label: "Somerset",
            borderColor: "#FF00AA",
            backgroundColor: "#FF00AA",
            borderWidth: 2,

        }, {
            data: [
                { x: 321, y: 3.15 },
            ],
            label: "Washington",
            borderColor: "#EDB9B9",
            backgroundColor: "#EDB9B9",
            borderWidth: 2,

        }, {
            data: [
                { x: 101, y: 2.51 },
            ],
            label: "Caroline",
            borderColor: "#E7E9B9",
            backgroundColor: "#E7E9B9",
            borderWidth: 2,

        }, {
            data: [
                { x: 369, y: 2.45 },
            ],
            label: "Fredrick",
            borderColor: "#B9EDE0",
            backgroundColor: "#B9EDE0",
            borderWidth: 2,

        }, {
            data: [
                { x: 48, y: 2.43 },
            ],
            label: "Kent",
            borderColor: "#B9D7ED",
            backgroundColor: "#B9D7ED",
            borderWidth: 2,

        }, {
            data: [
                { x: 475, y: 2.40 },
            ],
            label: "Harford",
            borderColor: "#DCB9ED",
            backgroundColor: "#DCB9ED",
            borderWidth: 2,

        }, {
            data: [
                { x: 45, y: 2.37 },
            ],
            label: "Garrett",
            borderColor: "#8F2323",
            backgroundColor: "#8F2323",
            borderWidth: 2,

        }, {
            data: [
                { x: 310, y: 2.30 },
            ],
            label: "St. Mary's",
            borderColor: "#8F6A23",
            backgroundColor: "#8F6A23",
            borderWidth: 2,

        }, {
            data: [
                { x: 78, y: 2.20 },
            ],
            label: "Talbot",
            borderColor: "#4F8F23",
            backgroundColor: "#4F8F23",
            borderWidth: 2,

        }, {
            data: [
                { x: 96, y: 2.06 },
            ],
            label: "Queen Anne's",
            borderColor: "#23628F",
            backgroundColor: "#23628F",
            borderWidth: 2,

        }, {
            data: [
                { x: 1228, y: 1.99 },
            ],
            label: "Howard",
            borderColor: "#6B238F",
            backgroundColor: "#6B238F",
            borderWidth: 2,

        }, {
            data: [
                { x: 2032, y: 1.77 },
            ],
            label: "Montgomery",
            borderColor: "#000000",
            backgroundColor: "#000000",
            borderWidth: 2,

        }, {
            data: [
                { x: 371, y: 1.70 },
            ],
            label: "Carroll",
            borderColor: "#737373",
            backgroundColor: "#737373",
            borderWidth: 2,

        }, {
            data: [
                { x: 264, y: 1.44 },
            ],
            label: "Calvert",
            borderColor: "#CCCCCC",
            backgroundColor: "#CCCCCC",
            borderWidth: 2,

        }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Violent Crime Rate by Population Density',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: "There doesn't seem to be a strong relationship between population density and violent crime rate, however, Baltimore City is a massive outlier as it has by far the highest population density and violent crime rate. When there are more people living in close proximity, it can be a factor for increased crime rate."
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Violent Crime Rate'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Population Density (per square miles)'
                }
            }
        }
    }
});
  