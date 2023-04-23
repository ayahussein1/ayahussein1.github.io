var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Violent Crime Rate per 1,000 people',
            data: [14.61, 14.24, 14.11, 14.06, 13.52, 15.58, 17.97, 20.43, 18.53, 18.73, 16.11],
            fill: false,
            borderColor: '#8b0000',
            backgroundColor: '#8b0000',
            tension: 0.1
        }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Violent Crime Rate in Baltimore City Over 10 Years',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The violent crime rate in Baltimore City increased in 2014 to 2017 before steadily declining again towards the end of the decade. A potential cause for the drop in 2020 could be the COVID pandemic.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});