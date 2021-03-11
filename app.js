d3.json('samples.json').then(({ names }) => {
    names.forEach(name => {
        d3.select('select').append('option').text(name);
    });
    showData()
});


function showData() {
    var name = d3.select('select').property('value');

    d3.json('samples.json').then(({ metadata, samples }) => {
        var metadata = metadata.filter(obj => obj.id == name)[0];
        var sample = samples.filter(obj => obj.id == name)[0];

        Object.entries(metadata).forEach(([key,val])=>{
            d3.select('.panel-body').append('h5').text(key.toUpperCase()+': '+val);
        });


        var data = [
            {
                //y: [0, 100, 150],
            x: ['OTU 1167', 'OTU 2859', 'OTU 482', 'OTU 2264', 'OTU 41', 'OTU 1189', 'OTU 352', 'OTU 2318', 'OTU 1977'],
            y: [0, 100, 150],
              type: 'bar'
              
            }
          ];
          
          Plotly.newPlot('bar', data);

          var trace1 = {
            x: [500, 1000, 2000, 2500, 3000, 3500],
            y: [0, 100, 150, 200],
            mode: 'markers',
            marker: {
              size: [40, 60, 80, 100]
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: 'Bacteria Cultures Per Sample',
            showlegend: false,
            height: 600,
            width: 600
          };
          
          Plotly.newPlot('bubble', data, layout);


          var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: 450,
              title: { text: "Belly Button Washing Frequency" },
              type: "indicator",
              mode: "gauge+number",
              delta: { reference: 400 },
              gauge: { axis: { range: [null, 500] } }
            }
          ];
          
          var layout = { width: 600, height: 400 };
          Plotly.newPlot('gauge', data, layout);

    });
};

function optionChanged(name) {
    showData();
};