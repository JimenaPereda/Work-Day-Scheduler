$(document).ready(function(){
    $(".saveBtn").on("click" ,  function(){
      var value = $(this).siblings(".event-input-block").val();
      var time = $(this).parent().attr("id");
     
      localStorage.setItem(value, time)
    })
        function setTime (){
         
            var timeDate = moment().hours();
            $(".hour").each(function (){
            var currentHour = parseInt($(this).attr("id").split("-")[1]);
            if(currentHour < timeDate){
              $(this).addClass("past");
            }else if (currentHour === timeDate){
              $(this).removeClass("past");
              $(this).addClass("present");
            }else {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
            };
    
           });
    
        }
    
        setTime();
        var interval = setInterval(setTime , 15000);
        $("#9Row .event-input-block").val(localStorage.getItem("9Row"));
        $("#10Row .event-input-block").val(localStorage.getItem("10Row"));
        $("#11Row .event-input-block").val(localStorage.getItem("11Row"));
        $("#12Row .event-input-block").val(localStorage.getItem("12Row"));
        $("#1Row .event-input-block").val(localStorage.getItem("1Row"));
        $("#2Row .event-input-block").val(localStorage.getItem("2Row"));
        $("#3Row .event-input-block").val(localStorage.getItem("3Row"));
        $("#4Row .event-input-block").val(localStorage.getItem("4Row"));
        $("#5Row .event-input-block").val(localStorage.getItem("5Row"));
    
    
       $("#currentDay").text(moment().format("dddd, MMMM Do"))
        
      
        
    
    
          
    
    
    
    });
    
    
    
    