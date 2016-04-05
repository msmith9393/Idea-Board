(function() {

  var starredIdeas = [
    {title: 'War', description: 'build a war app', creator: 'allison', starred: true},
    {title: 'Coding', description: 'build a coding app', creator: 'megan', starred: true},
    {title: 'Weather', description: 'build a weather app', creator: 'megan', starred: true},
    {title: 'Cooking', description: 'build a cooking app', creator: 'allison', starred: true}
  ];

  var ideas = [
    {title: 'Vegetable', description: 'build a vegetable app', creator: 'ashley', starred: false},
    {title: 'Dessert ', description: 'build a dessert app', creator: 'kyle', starred: false},
    {title: 'Fruit', description: 'build a fruit app', creator: 'ashley', starred: false},
    {title: 'Garten', description: 'build a garten app', creator: 'kyle', starred: false}
  ];

  var allIdeas = ideas.concat(starredIdeas).map(function(obj, index) {
    obj.index = index+1;
    return obj;
  });

  var json = JSON.stringify(allIdeas);
  
  // D3 Bubble Chart
  var diameter = 400;
  var color = d3.scale.category20b();
  console.log('COLOR', color)

  var svg = d3.select('#graph').append('svg')
    .attr('width', diameter)
    .attr('height', diameter);

  var bubble = d3.layout.pack()
    .size([diameter, diameter])
    .value(function(d) {
      return d.size;
    }).sort(function(a, b) {
      return -(a.value - b.value)
    }).padding(10);
  
  // generate data with calculated layout values
  var nodes = bubble.nodes(processData(allIdeas))
    .filter(function(d) { return !d.children; }); // filter out the outer bubble
 
  var bubbles = svg.selectAll('circle')
    .data(nodes);
  
  bubbles.enter().append('circle')
    .style("fill", function(d) { return color(d.value); })
    .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
    .attr('r', function(d) { return d.r; })
    .attr('class', function(d) { return d.className; });
    
  bubbles.enter().append('text')
    .attr('x', function(d) { return d.x; })
    .attr('y', function(d) { return d.y + 5; })
    .attr('font-size', function(d) { return 8 + d.size + 'px' })
    .attr('text-anchor', 'middle')
    .text(function(d) { return d.name; })
    .style({
      'fill': 'white',
      'font-family': 'Arial'
    });

  
  function processData(data) {
    var newDataSet = [];
    for (var i=0; i<data.length; i++) {
      if (data[i].starred) {
        var name = String.fromCharCode(9734) + ' ' + data[i].title;
        var useClass = 'starredBubble';
      } else {
        var name = data[i].title;
        var useClass = 'regularBubble';
      }
      newDataSet.push({name: name, othername: data[i].title, className: useClass + ' ' + data[i].title, size: data[i].index})
    }
    return {children: newDataSet};
  };
    

  bubbles.on('mouseover', function(bubble) {
    d3.selectAll('.' + bubble.othername).transition('linear').duration(1000)
      .attr('r', function(d) { return 1.25 * d.r; })
  });

  bubbles.on('mouseleave', function(bubble) {
    d3.selectAll('.' + bubble.othername).transition('linear').duration(1000)
      .attr('r', function(d) { return d.r; })
  });

})();