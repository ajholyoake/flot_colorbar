/*
 Flot plugin for adding a colorbar to the side of a plot (like MATLAB)

 In the data object:

var d = [{
colorbar:{show:true, width:15, position:"right"},
data:[[0,[0, 0, 0]], 
[10,[10, 10, 10]], 
[20,[20, 20, 20]], 
[30,[30, 30, 30]], 
[40,[70, 40, 40]], 
[50,[100, 50, 50]], 
[60,[130, 60, 60]], 
[80,[180, 80, 80]], 
[90,[200, 90, 90]], 
[100,[250, 250, 250]]],
yaxis:3,
},
{
lines:{show:true},
color:"#338833",
data:[[0,0],[1,1]]
}
];

$.plot($('.graph'),d)

*/

(function ($)
{

  var margin = 5;

  //define color specific options and their default values
  var options = {
    series:{ colorbar: {show:false, position:"right", width:15}}
    };

  function init(plot)
  {



    plot.hooks.processRawData.push(
    function(plot,series,data,datapoints){
    datapoints.points = [];
    if (!series.colorbar || series.colorbar.show != true){return ;}
    datapoints.format = [{y:true, number:true, required:true, autoscale:true},{x:false, number:false, required:true}];
    var data = series.data.sort(function(a,b){return a[0] - b[0]});
    for (i = 0; i<data.length; i++) {
    datapoints.points.push(data[i]);
    }

    });

    plot.hooks.processDatapoints.push(
    function(plot, series, datapoints) {
    if (!series.colorbar || series.colorbar.show != true){return ;}
    console.log('here');
    var opts = series.yaxis.options;
    opts.position = series.colorbar.position;
    opts.tickLength = series.colorbar.width + margin;
    opts.max = datapoints.points[datapoints.points.length-2];
    opts.min = datapoints.points[0];
    opts.tickColor = "rgba(255,255,255,0)";
    

    //Pop another axis on the right if there isn't already one!


    });

    plot.hooks.drawSeries.push(
      function(plot, ctx, series){
        if(!series.colorbar || series.colorbar.show != true){ return;}

      var yaxis = series.yaxis;
      var box   = yaxis.box;
      var barOrigin = {left:yaxis.box.left, top:yaxis.box.top};
      var i, x, width, colour;
      var ymin = yaxis.min;
      var ymax = yaxis.max;
      var tl   = yaxis.tickLength;
      var lw   = 1; //Flot line width for ticks etc?
      var midY, lowY, highY, boxBottom, boxTop, boxWidth, boxRight;

      ctx.save();

      if (yaxis.position === "left") {
      boxRight = barOrigin.left + box.width + lw;
      } else { 
      boxRight = barOrigin.left + tl + lw;}

      boxWidth = tl - margin;


      for (i=0; i<series.data.length; i++){
      

      midY = series.data[i][0];

      if(i===0)
      {lowY = series.data[i][0];}
      else
      {lowY = series.data[i-1][0];}

      if(i===series.data.length-1)
      {highY = series.data[i][0];}
      else
      {highY = series.data[i+1][0];}



      boxBottom = yaxis.p2c(0.5*(midY + lowY)) + plot.getPlotOffset().top+lw;
      boxTop    = yaxis.p2c(0.5*(midY + highY))+ plot.getPlotOffset().top;

      ctx.fillStyle = "rgba(" + series.data[i][1].join(',') + ",1)";
      ctx.beginPath();
      ctx.moveTo(boxRight -boxWidth ,boxTop);
      ctx.lineTo(boxRight           ,boxTop);
      ctx.lineTo(boxRight           ,boxBottom);
      ctx.lineTo(boxRight -boxWidth ,boxBottom);
      ctx.closePath();
      ctx.lineWidth = 0;
      //ctx.stroke();
      ctx.fill();
      }
      
      boxBottom = yaxis.p2c(series.data[0][0]) + plot.getPlotOffset().top + 2*lw;
      boxTop    = yaxis.p2c(series.data[series.data.length-1][0]) + plot.getPlotOffset().top - 2*lw;

      //Draw a box round the outside
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.lineWidth = 0.2;
      ctx.beginPath();
      ctx.lineTo(boxRight - boxWidth - 2*lw ,boxTop);
      ctx.lineTo(boxRight + 2*lw            ,boxTop);
      ctx.lineTo(boxRight + 2*lw            ,boxBottom);
      ctx.lineTo(boxRight - boxWidth - 2*lw ,boxBottom);
      ctx.closePath();
      ctx.stroke();


      ctx.restore();
      
      });


  }//End init (plugin body)


  $.plot.plugins.push({
    init: init,
    options: options,
    name: "colorbar",
    version:"0.1"
  });


})(jQuery);

/* need colorbar:{show:true, width:10}, data:[[v,[r,g,b]],[v,[r,g,b]]], yaxis:3 ;




$(function(){

var d = [{
colorbar:{show:true, width:15, position:"right"},
data:[[0,[0, 0, 0]], 
[10,[10, 10, 10]], 
[20,[20, 20, 20]], 
[30,[30, 30, 30]], 
[40,[70, 40, 40]], 
[50,[100, 50, 50]], 
[60,[130, 60, 60]], 
[80,[180, 80, 80]], 
[90,[200, 90, 90]], 
[100,[250, 250, 250]]],
yaxis:3,
},
{
lines:{show:true},
color:"#338833",
data:[[0,0],[1,1]]
}
];

$.plot($('.graph'),d)


})*/
