//Flot colorbar plugin
//
(function ($)
{
  //define color specific options and their default values
  var options = {
    series:{ colorbar: {show:false}}
  };

  function init(plot)
  {

    plot.hooks.processDatapoints.push(
    function(plot, series, datapoints) {
    if (series.colorbar != true){return ;}
    //I think this just disables display of the points on the main plot
    datapoints.format = [{x:false, number:false, required:true}, {y:false, number:false, required:true}];
    }

    plot.hooks.drawSeries.push(
      function(plot, ctx, series){
        if(series.colorbar != true){ return;}

      var yaxis = series.yaxis;
      var box   = yaxis.box;
      var barOrigin = {left:yaxis.box.left, top:yaxis.box.top};
      var i, x, width, colour;
      var ymin = yaxis.min;
      var ymax = yaxis.max;
      var ts   = yaxis.tickSize;
      var midY, lowY, highY, boxBottom, boxTop;

      ctx.save();
      for (i=0; i<series.data.length; i++){
      
      ctx.fillStyle = "rgba(" + series.data[i][1].join(',') + ",1)";

      midY = series.data[i][0];

      if(i===0)
      {lowY = series.data[i][0];}
      else
      {lowY = series.data[i-1][0];}

      if(i===series.data.length)
      {highY = series.data[i][0];}
      else
      {highY = series.data[i+1][0];}

      boxBottom = 0.5*(midY + lowY);
      boxTop    = 0.5*(midY + highY);

      ctx.moveTo(barOrigin.left,boxTop);
      ctx.lineTo(barOrigin.left+ts,boxTop);
      ctx.lineTo(barOrigin.left+ts,boxBottom);
      ctx.lineTo(barOrigin.left,boxBottom);
      


      }
      

      //Off we go with the drawing!
      ctx.save();


      ctx.fillStyle

      });


  }//End init (plugin body)






  $.plot.plugins.push({
    init:init,
    options:options,
    name:"colorbar",
    version:"0.1"
  });


})(jQuery);

/* need colorbar:true, data:[[v,[r,g,b]],[v,[r,g,b]]];
*/



$(function(){

  var d = [
    {
      type: "patch",
      label: "",
      data: [[128.5,24.5],[128.5,22.5],[128.5,20.5],[128.5,6.5],[126.5,24.5],[126.5,22.5],[126.5,20.5],[126.5,12.5],[126.5,10.5],[126.5,6.5],[126.5,4.5],[126.5,2.5],[124.5,34.5],[124.5,32.5],[124.5,28.5],[124.5,26.5],[124.5,24.5],[124.5,22.5],[124.5,8.5],[124.5,6.5],[124.5,4.5],[122.5,46.5],[122.5,34.5],[122.5,32.5],[122.5,28.5],[122.5,26.5],[122.5,24.5],[122.5,22.5],[122.5,6.5],[122.5,4.5],[120.5,46.5],[120.5,38.5],[120.5,34.5],[120.5,32.5],[120.5,28.5],[120.5,26.5],[120.5,24.5],[120.5,14.5],[120.5,6.5],[120.5,4.5],[120.5,2.5],[118.5,46.5],[118.5,44.5],[118.5,38.5],[118.5,34.5],[118.5,32.5],[118.5,28.5],[118.5,26.5],[118.5,16.5],[118.5,6.5],[118.5,4.5],[118.5,2.5],[116.5,46.5],[116.5,44.5],[116.5,40.5],[116.5,32.5],[116.5,30.5],[116.5,28.5],[116.5,8.5],[116.5,6.5],[116.5,2.5],[114.5,46.5],[114.5,44.5],[114.5,40.5],[114.5,38.5],[114.5,32.5],[114.5,30.5],[114.5,8.5],[114.5,6.5],[114.5,0.5],[112.5,42.5],[112.5,40.5],[112.5,38.5],[112.5,36.5],[112.5,34.5],[112.5,32.5],[112.5,6.5],[112.5,0.5],[110.5,46.5],[110.5,44.5],[110.5,42.5],[110.5,40.5],[110.5,38.5],[110.5,36.5],[110.5,32.5],[110.5,10.5],[110.5,8.5],[110.5,6.5],[110.5,4.5],[110.5,2.5],[108.5,46.5],[108.5,44.5],[108.5,42.5],[108.5,40.5],[108.5,38.5],[108.5,36.5],[108.5,34.5],[108.5,32.5],[108.5,10.5],[108.5,8.5],[108.5,6.5],[108.5,4.5],[106.5,44.5],[106.5,42.5],[106.5,40.5],[106.5,38.5],[106.5,36.5],[106.5,10.5],[106.5,8.5],[106.5,6.5],[106.5,2.5],[106.5,0.5],[104.5,44.5],[104.5,42.5],[104.5,40.5],[104.5,38.5],[104.5,34.5],[104.5,10.5],[104.5,6.5],[104.5,4.5],[104.5,2.5],[102.5,44.5],[102.5,42.5],[102.5,40.5],[102.5,38.5],[102.5,36.5],[102.5,34.5],[102.5,30.5],[102.5,10.5],[102.5,6.5],[102.5,4.5],[102.5,2.5],[102.5,0.5],[100.5,40.5],[100.5,38.5],[100.5,36.5],[100.5,34.5],[100.5,30.5],[100.5,8.5],[100.5,6.5],[100.5,4.5],[100.5,2.5],[100.5,0.5],[98.5,44.5],[98.5,42.5],[98.5,40.5],[98.5,38.5],[98.5,36.5],[98.5,34.5],[98.5,8.5],[98.5,4.5],[98.5,2.5],[98.5,0.5],[96.5,44.5],[96.5,42.5],[96.5,40.5],[96.5,38.5],[96.5,36.5],[96.5,34.5],[96.5,32.5],[96.5,30.5],[96.5,8.5],[96.5,4.5],[96.5,2.5],[96.5,0.5],[94.5,44.5],[94.5,42.5],[94.5,40.5],[94.5,38.5],[94.5,36.5],[94.5,32.5],[94.5,4.5],[94.5,2.5],[94.5,0.5],[92.5,44.5],[92.5,38.5],[92.5,36.5],[92.5,34.5],[92.5,4.5],[92.5,2.5],[92.5,0.5],[90.5,44.5],[90.5,42.5],[90.5,40.5],[90.5,38.5],[90.5,36.5],[90.5,34.5],[90.5,32.5],[90.5,2.5],[90.5,0.5],[88.5,44.5],[88.5,40.5],[88.5,38.5],[88.5,36.5],[88.5,34.5],[88.5,6.5],[88.5,4.5],[88.5,2.5],[88.5,0.5],[86.5,46.5],[86.5,44.5],[86.5,42.5],[86.5,40.5],[86.5,38.5],[86.5,36.5],[86.5,34.5],[86.5,8.5],[86.5,6.5],[86.5,4.5],[86.5,0.5],[84.5,44.5],[84.5,36.5],[84.5,34.5],[84.5,32.5],[84.5,6.5],[84.5,4.5],[84.5,2.5],[84.5,0.5],[82.5,46.5],[82.5,44.5],[82.5,42.5],[82.5,32.5],[82.5,30.5],[82.5,6.5],[82.5,4.5],[82.5,2.5],[82.5,0.5],[80.5,46.5],[80.5,44.5],[80.5,42.5],[80.5,34.5],[80.5,30.5],[80.5,2.5],[80.5,0.5],[78.5,44.5],[78.5,34.5],[78.5,32.5],[78.5,30.5],[78.5,2.5],[76.5,46.5],[76.5,40.5],[76.5,36.5],[76.5,34.5],[76.5,32.5],[76.5,30.5],[76.5,0.5],[74.5,36.5],[74.5,32.5],[74.5,30.5],[74.5,0.5],[72.5,40.5],[72.5,36.5],[72.5,34.5],[72.5,32.5],[72.5,30.5],[72.5,0.5],[70.5,36.5],[70.5,34.5],[70.5,30.5],[70.5,0.5],[68.5,40.5],[68.5,36.5],[68.5,30.5],[68.5,2.5],[68.5,0.5],[66.5,42.5],[66.5,40.5],[66.5,30.5],[66.5,2.5],[64.5,30.5],[64.5,0.5],[62.5,32.5],[62.5,30.5],[60.5,30.5],[56.5,32.5],[56.5,30.5],[56.5,28.5],[54.5,30.5],[52.5,28.5],[50.5,30.5],[50.5,28.5],[48.5,30.5],[48.5,28.5],[48.5,26.5],[46.5,28.5],[46.5,26.5],[46.5,24.5],[44.5,28.5],[44.5,26.5],[44.5,24.5],[44.5,22.5],[42.5,28.5],[42.5,26.5],[42.5,24.5],[40.5,28.5],[40.5,22.5],[38.5,26.5],[38.5,22.5],[38.5,20.5],[36.5,20.5],[36.5,0.5],[34.5,18.5],[32.5,18.5],[32.5,16.5],[32.5,2.5],[30.5,16.5],[30.5,14.5],[30.5,12.5],[30.5,6.5],[30.5,4.5],[30.5,2.5],[28.5,16.5],[28.5,14.5],[28.5,12.5],[28.5,8.5],[26.5,14.5],[26.5,10.5],[128.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 1},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[124.5,12.5],[122.5,20.5],[122.5,14.5],[120.5,22.5],[120.5,20.5],[120.5,12.5],[118.5,22.5],[118.5,20.5],[118.5,14.5],[116.5,24.5],[116.5,20.5],[116.5,18.5],[116.5,14.5],[114.5,26.5],[114.5,16.5],[114.5,12.5],[112.5,28.5],[112.5,12.5],[110.5,28.5],[110.5,12.5],[106.5,12.5],[102.5,32.5],[100.5,12.5],[100.5,10.5],[96.5,46.5],[96.5,10.5],[94.5,6.5],[90.5,8.5],[88.5,46.5],[88.5,30.5],[88.5,8.5],[84.5,30.5],[80.5,28.5],[78.5,6.5],[74.5,28.5],[74.5,4.5],[68.5,28.5],[62.5,28.5],[60.5,28.5],[60.5,0.5],[58.5,26.5],[54.5,26.5],[40.5,0.5],[36.5,18.5],[34.5,14.5],[34.5,2.5],[32.5,4.5],[30.5,8.5],[28.5,10.5],[124.5,12.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 1.7321},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[128.5,18.5],[128.5,16.5],[128.5,14.5],[128.5,12.5],[128.5,10.5],[128.5,8.5],[126.5,18.5],[126.5,16.5],[126.5,14.5],[126.5,8.5],[124.5,20.5],[124.5,18.5],[124.5,16.5],[124.5,14.5],[124.5,10.5],[122.5,18.5],[122.5,16.5],[122.5,12.5],[122.5,10.5],[122.5,8.5],[120.5,18.5],[120.5,16.5],[120.5,10.5],[120.5,8.5],[118.5,18.5],[118.5,8.5],[116.5,26.5],[116.5,16.5],[116.5,12.5],[116.5,10.5],[114.5,34.5],[114.5,28.5],[114.5,10.5],[112.5,46.5],[112.5,30.5],[112.5,10.5],[110.5,34.5],[110.5,30.5],[108.5,30.5],[108.5,28.5],[108.5,12.5],[106.5,46.5],[106.5,34.5],[106.5,32.5],[106.5,30.5],[104.5,46.5],[104.5,36.5],[104.5,32.5],[104.5,30.5],[104.5,12.5],[104.5,8.5],[102.5,46.5],[102.5,12.5],[102.5,8.5],[100.5,46.5],[100.5,44.5],[100.5,32.5],[98.5,46.5],[98.5,32.5],[98.5,30.5],[98.5,6.5],[96.5,6.5],[94.5,46.5],[94.5,34.5],[94.5,30.5],[94.5,10.5],[94.5,8.5],[92.5,46.5],[92.5,42.5],[92.5,30.5],[92.5,8.5],[92.5,6.5],[90.5,46.5],[90.5,10.5],[90.5,6.5],[90.5,4.5],[88.5,32.5],[86.5,32.5],[86.5,30.5],[84.5,46.5],[84.5,42.5],[84.5,40.5],[84.5,8.5],[80.5,32.5],[80.5,6.5],[80.5,4.5],[78.5,28.5],[78.5,4.5],[78.5,0.5],[76.5,28.5],[76.5,4.5],[76.5,2.5],[74.5,2.5],[72.5,28.5],[72.5,2.5],[70.5,28.5],[70.5,2.5],[66.5,0.5],[64.5,2.5],[62.5,0.5],[58.5,28.5],[52.5,26.5],[50.5,26.5],[50.5,24.5],[48.5,24.5],[46.5,22.5],[42.5,22.5],[40.5,20.5],[38.5,0.5],[34.5,16.5],[32.5,14.5],[32.5,12.5],[30.5,10.5],[128.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 1.4142},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[116.5,22.5],[114.5,18.5],[108.5,26.5],[104.5,14.5],[100.5,14.5],[98.5,28.5],[94.5,12.5],[86.5,10.5],[80.5,8.5],[74.5,6.5],[68.5,4.5],[62.5,2.5],[60.5,2.5],[44.5,20.5],[36.5,16.5],[32.5,8.5],[32.5,6.5],[116.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 2.4495},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[118.5,24.5],[118.5,12.5],[118.5,10.5],[114.5,14.5],[112.5,26.5],[112.5,14.5],[110.5,26.5],[106.5,28.5],[106.5,14.5],[102.5,14.5],[98.5,10.5],[92.5,10.5],[90.5,30.5],[82.5,8.5],[72.5,4.5],[66.5,28.5],[64.5,28.5],[60.5,26.5],[58.5,0.5],[56.5,26.5],[56.5,0.5],[52.5,24.5],[48.5,22.5],[42.5,20.5],[34.5,12.5],[32.5,10.5],[118.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 2},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[114.5,20.5],[106.5,26.5],[94.5,28.5],[90.5,12.5],[86.5,28.5],[84.5,28.5],[84.5,10.5],[42.5,0.5],[40.5,18.5],[34.5,6.5],[34.5,4.5],[114.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 2.8284},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[114.5,22.5],[112.5,24.5],[96.5,14.5],[88.5,12.5],[78.5,8.5],[72.5,6.5],[66.5,26.5],[64.5,26.5],[64.5,4.5],[58.5,2.5],[56.5,24.5],[56.5,2.5],[38.5,16.5],[36.5,2.5],[34.5,8.5],[114.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 3},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[114.5,24.5],[108.5,14.5],[104.5,28.5],[102.5,28.5],[100.5,28.5],[98.5,12.5],[88.5,10.5],[82.5,28.5],[70.5,4.5],[54.5,24.5],[50.5,22.5],[34.5,10.5],[114.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 2.2361},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[84.5,12.5],[70.5,26.5],[66.5,6.5],[54.5,2.5],[36.5,4.5],[84.5,12.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 3.7417},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[82.5,26.5],[74.5,8.5],[68.5,8.5],[58.5,4.5],[44.5,0.5],[38.5,14.5],[36.5,8.5],[36.5,6.5],[82.5,26.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.1231},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[110.5,24.5],[108.5,16.5],[80.5,10.5],[36.5,10.5],[110.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 3.873},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[88.5,28.5],[82.5,10.5],[72.5,26.5],[68.5,26.5],[68.5,6.5],[52.5,22.5],[36.5,12.5],[88.5,28.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 3.3166},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[104.5,26.5],[98.5,14.5],[86.5,12.5],[52.5,0.5],[48.5,20.5],[38.5,2.5],[36.5,14.5],[104.5,26.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 3.1623},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[100.5,26.5],[98.5,16.5],[90.5,14.5],[86.5,26.5],[40.5,2.5],[38.5,4.5],[100.5,26.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.899},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[78.5,14.5],[62.5,8.5],[38.5,6.5],[78.5,14.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.5678},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[88.5,24.5],[66.5,24.5],[38.5,8.5],[88.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.6569},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[82.5,14.5],[64.5,24.5],[56.5,4.5],[38.5,10.5],[82.5,14.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.1962},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[106.5,24.5],[100.5,16.5],[88.5,14.5],[80.5,12.5],[52.5,2.5],[48.5,18.5],[38.5,12.5],[106.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.7958},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[112.5,16.5],[110.5,14.5],[96.5,28.5],[96.5,12.5],[92.5,12.5],[76.5,6.5],[66.5,4.5],[62.5,26.5],[54.5,0.5],[46.5,20.5],[38.5,18.5],[112.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 2.6458},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[88.5,16.5],[62.5,10.5],[48.5,2.5],[46.5,16.5],[40.5,4.5],[88.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.4031},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[96.5,18.5],[72.5,16.5],[72.5,12.5],[60.5,12.5],[40.5,8.5],[40.5,6.5],[96.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.0711},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[106.5,18.5],[92.5,18.5],[76.5,14.5],[74.5,24.5],[40.5,10.5],[106.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.0828},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[92.5,16.5],[90.5,26.5],[82.5,24.5],[50.5,18.5],[44.5,16.5],[40.5,12.5],[92.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.831},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[110.5,22.5],[98.5,26.5],[40.5,14.5],[110.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.099},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[86.5,14.5],[84.5,26.5],[84.5,14.5],[82.5,12.5],[76.5,10.5],[70.5,8.5],[62.5,6.5],[60.5,4.5],[40.5,16.5],[86.5,14.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.3589},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[78.5,16.5],[76.5,24.5],[72.5,10.5],[68.5,24.5],[56.5,6.5],[42.5,2.5],[78.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[106.5,20.5],[92.5,20.5],[68.5,22.5],[66.5,16.5],[58.5,20.5],[42.5,4.5],[106.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.8102},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[102.5,22.5],[56.5,14.5],[54.5,12.5],[50.5,14.5],[42.5,6.5],[102.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[82.5,20.5],[80.5,22.5],[66.5,18.5],[60.5,20.5],[58.5,16.5],[56.5,12.5],[42.5,8.5],[82.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.1854},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[100.5,18.5],[96.5,24.5],[60.5,14.5],[56.5,8.5],[54.5,18.5],[42.5,10.5],[100.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.9373},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[106.5,22.5],[90.5,22.5],[60.5,22.5],[42.5,12.5],[106.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.2111},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[90.5,24.5],[82.5,16.5],[80.5,24.5],[80.5,16.5],[64.5,12.5],[64.5,10.5],[44.5,2.5],[42.5,14.5],[90.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.3246},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[96.5,26.5],[68.5,10.5],[60.5,6.5],[50.5,2.5],[42.5,16.5],[96.5,26.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.2915},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[112.5,18.5],[110.5,16.5],[90.5,28.5],[76.5,26.5],[70.5,6.5],[62.5,4.5],[58.5,24.5],[42.5,18.5],[112.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 3.6056},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[78.5,20.5],[72.5,22.5],[54.5,10.5],[44.5,4.5],[78.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.9443},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[44.5,6.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.3808},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[44.5,8.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.6437},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[96.5,20.5],[52.5,12.5],[44.5,10.5],[96.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.1104},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[104.5,22.5],[86.5,20.5],[70.5,20.5],[68.5,16.5],[66.5,20.5],[48.5,14.5],[44.5,12.5],[104.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.3666},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[104.5,18.5],[52.5,18.5],[44.5,14.5],[104.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.7823},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[112.5,20.5],[108.5,24.5],[94.5,14.5],[74.5,26.5],[72.5,8.5],[64.5,6.5],[60.5,24.5],[54.5,22.5],[50.5,0.5],[44.5,18.5],[112.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[106.5,16.5],[102.5,26.5],[78.5,26.5],[78.5,10.5],[50.5,20.5],[48.5,0.5],[46.5,0.5],[106.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.2426},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[70.5,12.5],[60.5,10.5],[58.5,8.5],[46.5,2.5],[70.5,12.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.7082},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[76.5,22.5],[56.5,16.5],[54.5,16.5],[46.5,4.5],[76.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.8318},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[100.5,22.5],[46.5,6.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.9499},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[46.5,8.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 10.5357},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[46.5,10.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.798},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[62.5,20.5],[46.5,12.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.4261},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[88.5,20.5],[80.5,18.5],[72.5,18.5],[62.5,14.5],[46.5,14.5],[88.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.746},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[46.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.4721},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[78.5,22.5],[48.5,4.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.3066},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[48.5,6.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.5394},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[48.5,8.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 10.7238},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[48.5,10.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 10.0995},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[74.5,22.5],[64.5,18.5],[48.5,12.5],[74.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.8882},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[102.5,24.5],[64.5,14.5],[62.5,22.5],[48.5,16.5],[102.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.1414},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[98.5,18.5],[68.5,14.5],[66.5,14.5],[50.5,4.5],[98.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.6811},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[50.5,6.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.2736},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[98.5,22.5],[50.5,8.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 10.583},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[76.5,20.5],[50.5,10.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.7468},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[50.5,12.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.2195},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[84.5,22.5],[74.5,18.5],[60.5,16.5],[58.5,18.5],[58.5,10.5],[50.5,16.5],[84.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.874},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[68.5,12.5],[52.5,4.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.4807},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[94.5,20.5],[52.5,6.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.544},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[52.5,10.5],[52.5,8.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.3274},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[52.5,14.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.1652},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[82.5,22.5],[76.5,18.5],[70.5,22.5],[70.5,18.5],[52.5,16.5],[82.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.0623},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[92.5,26.5],[88.5,26.5],[58.5,6.5],[52.5,20.5],[92.5,26.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.4772},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[108.5,18.5],[104.5,24.5],[94.5,26.5],[86.5,24.5],[84.5,24.5],[78.5,24.5],[66.5,10.5],[60.5,8.5],[54.5,20.5],[54.5,4.5],[108.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.9161},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[54.5,6.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.8557},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[70.5,14.5],[62.5,16.5],[58.5,12.5],[54.5,8.5],[70.5,14.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.124},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[58.5,14.5],[54.5,14.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.6023},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[56.5,10.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.7178},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[100.5,24.5],[82.5,18.5],[56.5,18.5],[100.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.4833},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[76.5,16.5],[56.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[94.5,16.5],[92.5,14.5],[64.5,8.5],[62.5,24.5],[56.5,22.5],[94.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.5826},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[110.5,20.5],[74.5,10.5],[70.5,10.5],[58.5,22.5],[110.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.3852},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[60.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.775},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[74.5,14.5],[62.5,12.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.6332},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[68.5,20.5],[62.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.6603},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[98.5,24.5],[92.5,22.5],[78.5,18.5],[70.5,16.5],[66.5,22.5],[64.5,16.5],[98.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[94.5,22.5],[68.5,18.5],[64.5,20.5],[94.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.2462},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[88.5,18.5],[64.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.2801},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[110.5,18.5],[104.5,16.5],[102.5,16.5],[96.5,16.5],[80.5,14.5],[78.5,12.5],[66.5,8.5],[110.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 4.6904},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[108.5,22.5],[86.5,16.5],[72.5,24.5],[70.5,24.5],[66.5,12.5],[108.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.1644},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[90.5,20.5],[88.5,22.5],[86.5,18.5],[84.5,18.5],[72.5,14.5],[90.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.6158},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[98.5,20.5],[72.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.5917},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[90.5,16.5],[84.5,16.5],[74.5,12.5],[90.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.245},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[86.5,22.5],[74.5,16.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.4162},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[102.5,20.5],[100.5,20.5],[74.5,20.5],[102.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.4868},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[112.5,22.5],[92.5,28.5],[80.5,26.5],[76.5,8.5],[112.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 3.4641},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[76.5,12.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 5.7446},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[104.5,20.5],[84.5,20.5],[80.5,20.5],[104.5,20.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 8.4853},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[90.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.9282},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[92.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.3485},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[108.5,20.5],[94.5,18.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 6.5574},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[102.5,18.5],[94.5,24.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 7.5498},
      shadowSize: 0,
      yaxis: 1
    }
    ,
    {
      type: "patch",
      label: "",
      data: [[96.5,22.5]],
      lines: {show:false},
      color: "rgba(10,10,158,1)",
      points: {show: true, lineWidth: 0.5, fill: true, fillColor:"rgba(10,10,158,1)", radius: 9.434},
      shadowSize: 0,
      yaxis: 1
    }


  ];


  $.plot($('.graph'),d)


})
