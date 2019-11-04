import { FormGroup } from '@angular/forms';
import * as d3 from 'd3';

// custom validator to check that two fields match
export function ProfilePageWorkChartSVG(svgViewport, myHoriData, myVertData, myJobData, myXAxisData) {
    

   

    var horizontLines = svgViewport.selectAll("horizontal").data(myHoriData).enter().append("rect")
    horizontLines.attr("x", function(d,i) { return d.x;})
        .attr("y", function(d,i) { return d.y;})
        .attr("width", 680).attr("height", 1).attr("fill","#cccccc").attr("stroke","none").attr("stroke-width",0);
  
    var verticalLines = svgViewport.selectAll("vertical").data(myVertData).enter().append("rect")
    verticalLines.attr("x", function(d,i) { return d.x;})
        .attr("y", function(d,i) { return d.y;})
        .attr("width", 1).attr("height", 240).attr("fill","#cccccc").attr("stroke","none").attr("stroke-width",0);
       
  
    var job = svgViewport.selectAll("job").data(myJobData).enter().append("rect");
    job.attr("x", function(d,i) { return d.x;})
        .attr("y", function(d,i) { return d.y;})
        .attr("rx", 4).attr("ry", 4).attr("width", 76).attr("height", 20)
        .attr("fill",function(d,i) { 
          if(d.jobStatus=="success"){return "#0AAD43";}else if(d.jobStatus=="pending"){return "#92D1FF";}
          else if(d.jobStatus=="due"){return "red";}});
  
   
   
    var jobText = svgViewport.selectAll("jobText").data(myJobData).enter().append("text"); 
   
    jobText.attr("x", function(d,i) { return d.tx;})
        .attr("y", function(d,i) { return d.ty;})
        .attr("fill", "#fff")
        .attr("font-family", "Verdana")
        .attr("font-size", 10)     
        .html( function(d,i) { return d.jobTitle;});
    
      var xAxisText = svgViewport.selectAll("xAxisText").data(myXAxisData).enter().append("text"); 
  
      xAxisText.attr("x", function(d,i) { return d.x;})
          .attr("y", function(d,i) { return d.y;})
          .attr("fill", "#cccccc")
          .attr("font-family", "Verdana")
          .attr("font-size", 14)  
          .html(function(d,i) { return d.calDate;});

}