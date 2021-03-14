var tracker = (function(window, $) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var init = function() {
        console.log("Activity tracking initialized");
        $(document).mousemove(function(event){
          send({
            'x': event.pageX,
            'y': event.pageY
          });
        });
    };
    var send = function (activity) {
        fetch("http://localhost:5000/activity", {
            'method': 'POST',
            'headers': myHeaders,
            'body': JSON.stringify(activity)
        })
        .then(response => response.json())
        .catch((error) => {
            console.error("Request failed.");
        });
    };
    return {
        init: init
    }
})(window, $);