//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {
    //Define the chart type
    type: 'bar',
    data: {
        //These are the chart labels
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        //This is the data for each bar
        datasets: [{
            label: 'Average of GDP per Capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#3a4c40'
            ]
        },
        ]
    },

    //Define chart options
    options: {
        responsive: true,
        plugins: {
            //Chart title
            title: {
                display: true,
                text: 'Average GDP per Capita by Region',
                font: {
                    size: 18
                }
            },
            //Chart subtitle
            subtitle: {
                display: true,
                text: 'Europe and Central Asia has the highest average GDP per Capita in the world, while South Asia has the lowest.'
            }
        },
        //Scale options
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});