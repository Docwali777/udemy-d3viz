
var svg = d3.select("body").append("svg").attr("width", 800).attr("height", 800).attr("class", "blueBlack")

svg.append("rect")
    .attr("width", 40).attr("height", 70).attr("x", 100).attr("y", 300).attr("fill", "teal").attr("stroke", "red").attr("stroke-width", 5).attr("transform", "translate(45)")

svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 50).attr("fill", "purple")
