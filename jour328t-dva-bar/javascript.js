//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {
    //Define the chart type
    type: 'bar',
    data: {
        //These are the chart labels
        labels: ['Baltimore City', 'Baltimore County', 'Wicomico County', 'Dorchester County', 'Prince Georges County', 'Cecil County', 'Anne Arundel County', 'Charles County', 'Worcester County', 'Allegany County', 'Somerset County', 'Washington County', 'Caroline County', 'Frederick County','Kent County', 'Harford County', 'Garrett County', 'St. Marys County', 'Talbot County', 'Queen Annes County', 'Howard County', 'Montgomery County','Carroll County', 'Calvert County'],
        //This is the data for each bar
        datasets: [{
            label: 'Average Violent Crime Rate per 1,000 people Over 10 Years',
            data: [16.17, 5.35, 5.11, 5.11, 4.53, 4.20, 4.06, 3.80, 3.65, 3.39, 3.28, 3.15, 2.51, 2.45, 2.43, 2.40, 2.37, 2.30, 2.20, 2.06, 1.99, 1.77, 1.70, 1.44],
            backgroundColor: [
                '#8b0000'
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
                text: 'Average Violent Crime Rate per 1,000 people in Each Maryland County',
                font: {
                    size: 18
                }
            },
            //Chart subtitle
            subtitle: {
                display: true,
                text: 'In the last 10 years, Baltimore City has a significantly higher violent crime rate than the rest of Maryland. Violent crime includes murder, rape, robbery and aggrivated assault.'
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