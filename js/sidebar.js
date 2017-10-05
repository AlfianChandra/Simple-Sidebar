// SimpleSidebar Plugin Script by Alfian Chandra //
// --------------------------------------------- //
$(document).ready(function(){
  var displayStatus = false;
  //Trigger
  var trigger = $(".sidebar-trigger");
  
  //Default
  $(window).load(function(){
    if(displayStatus === true)
    {
      $(".sidebar-control").removeClass("sidebar-show");
      collapseSidebar();
    }
    else
    {
      $(".sidebar-control").removeClass("sidebar-show");
      collapseSidebar();
    }
  });
  
  //Control Sideber
  function collapseSidebar(wrapper)
  {
    if(displayStatus === true)
    {
      $(".sidebar-control").removeClass("sidebar-show");
      collapseControl("show",wrapper);
    }
    else
    {
      $(".sidebar-control").removeClass("sidebar-show");
      collapseControl("hide",wrapper);
    }
  }
  
  //Control Display
  function collapseControl(cont,wrapper)
  {
    if(cont === "show")
    {
      $(".sidebar-control").removeClass("sidebar-show");
      $(wrapper).addClass("sidebar-show");
      $(wrapper).children(".sidebar-close").fadeIn(500);
      $(wrapper).children(".sidebar-body").fadeIn(500);
    }
    else if(cont === "hide")
    {
      $(".sidebar-control").removeClass("sidebar-show");
      $(wrapper).removeClass("sidebar-show");
      $(wrapper).children(".sidebar-close").fadeOut(500);
      $(wrapper).children(".sidebar-body").fadeOut(500);
    }
    else
    {
      console.log("Error Parameter! Unknown value: "+cont);
    }
  }
  
  //Color Control
  function setSidebarColor(wrapper,color)
  {
    $(wrapper).css("background-color",color);
  }
  
  //Control Click
  trigger.click(function(){
    var wrapper = $(this).attr("sidebar-target");
    var color = $(this).attr("sidebar-color");
    
    setSidebarColor(wrapper,color);
    
    $(".sidebar-control").removeClass("sidebar-show");
    if(displayStatus === true)
    {
      $(".sidebar-control").removeClass("sidebar-show");
      displayStatus = false;
      collapseSidebar(wrapper);
    }
    else
    {
      $(".sidebar-control").removeClass("sidebar-show");
      displayStatus = true;
      collapseSidebar(wrapper);
    }
  });
  
  //Control Dismiss
  var close = $(".sidebar-close");
  close.click(function(){
    if(displayStatus === true)
    {
      displayStatus = false;
      collapseSidebar($(".sidebar-control"));
    }
    else
    {
      displayStatus = true;
      collapseSidebar($(".sidebar-control"));
    }
  });
});