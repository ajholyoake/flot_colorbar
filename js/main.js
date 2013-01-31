//Branch TEst
//Flot patch plugin
//
(function ($)
{
  function init(plot)
  {

    var canvas = null;
    var target = null;

    plot.hooks.processOptions.push(checkPatchEnabled);
    //plot.hooks.bindEvents.push(bindEvents);

    function checkPatchEnabled(plot,options)
    {
      if(options.series.patch.show){

        //plot.hooks.processDatapoints.push(processDatapoints); Prols don't need this
        //plot.hooks.drawOverlay.push(drawOverlay); Prols don't need an overlay for this (yet)
        plot.hooks.drawSeries.push(drawSeries);
      }
    }

    //function bindEvents(plot,eventHolder)
    //{

    //}

    function processDatapoints(plot,series,data,datapoints)
    {
      canvas = plot.getCanvas();
      target = $(canvas).parent();
      options = plot.getOptions();
    }

    function drawSeries(plot, ctx, series)
    {
      if (series.type && series.type === "patch")
      {
        var plotOffset = plot.getPlotOffset();
        ctx.save();
        ctx.translate(plotOffset.left,plotOffset.top);
        var points = series.datapoints.points;
        var fillColor = series.fillColor, alpha = series.alpha;
      }

      
      

    }


  }//End init (plugin body)

  //define patch specific options and their default values
  var options = {
    series:{
      patch:{ 
        show:false,
        fillColor:"#888",
        alpha:1,
        lines:{
          lineWidth:2,
          show:false
        }
      }
    }



  };


  $.plot.plugins.push({
    init:init,
    options:options,
    name:"patch",
    version:"0.1"
  });


})(jQuery);


$(function(){

var d = [{
      
      data:[[0, 0], [0, 1], [1, 1], [1, 0]],
      lines:{
      lineWidth:1,
      show:true,
      fill:true,
      fillColor:"#ddd"
      },
      color:"#333"
      },
      {

      data:[[1, 1], [1, 2], [1.5, 1.5], [2, 2], [8, -3], [8,2], [1, 1] ],
      lines:{
      lineWidth:0,
      show:true,
      fill:true,
      fillColor:"#ddd"
      },
      color:"#333",
      shadowSize:0
      }

      ];

$.plot($('.graph'),d)


})
