var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                { x: 71.5, y: 3678 },
            ],
            label: "China",
            borderColor: "#FFFF00",
            backgroundColor: "#FFFF00",
            borderWidth: 2,

        }, {
            data: [
                { x: 61.1, y: 2548 },
            ],
            label: "India",
            borderColor: "#FF671F",
            backgroundColor: "#FF671F",
            borderWidth: 2,

        }, {
            data: [
                { x: 77.1, y: 45986 },
            ],
            label: "US",
            borderColor: "#002868",
            backgroundColor: "#002868",
            borderWidth: 2,

        }, {
            data: [
                { x: 68.3, y: 5878 },
            ],
            label: "Indonesia",
            borderColor: "#ff0000",
            backgroundColor: "#ff0000",
            borderWidth: 2,

        }, {
            data: [
                { x: 71.9, y: 11461 },
            ],
            label: "Brazil",
            borderColor: "#009c3b",
            backgroundColor: "#009c3b",
            borderWidth: 2,

        }, {
            data: [
                { x: 65.4, y: 13173 },
            ],
            label: "Russia",
            borderColor: "#A020F0",
            backgroundColor: "#A020F0",
            borderWidth: 2,

        }, {
            data: [
                { x: 62.6, y: 3366 },
            ],
            label: "Pakistan",
            borderColor: "#964B00",
            backgroundColor: "#964B00",
            borderWidth: 2,

        }, {
            data: [
                { x: 65.8, y: 1632 },
            ],
            label: "Bangladesh",
            borderColor: "#FFC0CB",
            backgroundColor: "#FFC0CB",
            borderWidth: 2,

        }, {
            data: [
                { x: 81.1, y: 32193 },
            ],
            label: "Japan",
            borderColor: "#C0C0C0",
            backgroundColor: "#C0C0C0",
            borderWidth: 2,

        }, {
            data: [
                { x: 55.8, y: 2836 },
            ],
            label: "Nigeria",
            borderColor: "#36454F",
            backgroundColor: "#36454F",
            borderWidth: 2,

        }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Life Expectancy by GDP per Capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'In general, countries with a higher GDP per Capita also tend to have a higher life expectancy.'
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
                    text: 'GDP per Capita'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Life Expectancy'
                }
            }
        }
    }
});