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
      var tl   = yaxis.tickLength + 1;
      var midY, lowY, highY, boxBottom, boxTop;

      ctx.save();
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

      boxBottom = yaxis.p2c(0.5*(midY + lowY)) + plot.getPlotOffset().top;
      boxTop    = yaxis.p2c(0.5*(midY + highY))+ plot.getPlotOffset().top;
      boxRight = barOrigin.left + box.width + 1;

      ctx.fillStyle = "rgba(" + series.data[i][1].join(',') + ",1)";
      ctx.beginPath();
      ctx.moveTo(boxRight -tl ,boxTop);
      ctx.lineTo(boxRight,boxTop);
      ctx.lineTo(boxRight,boxBottom);
      ctx.lineTo(boxRight -tl,boxBottom);
      ctx.closePath();
      ctx.lineWidth = 0;
      //ctx.stroke();
      ctx.fill();
      }
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

/* need colorbar:true, data:[[v,[r,g,b]],[v,[r,g,b]]];
*/



$(function(){

var d = [{
colorbar:{show:true, width:10},
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
yaxis:2,

},
{
lines:{show:true},
color:"#338833",
data:[[0,0],[1,1]]
}
];

$.plot($('.graph'),d)


})
