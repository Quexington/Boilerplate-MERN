export default function clickDispatch(action){
  return function(dispatch){
    switch (action) {
      case "GET":
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
          if (this.readyState == 4) {
            var data = JSON.parse(ajax.responseText);
            console.log(data);
            dispatch({
              type: "INIT",
              data: parseInt(data.clicks)
            });
          }
        }
        ajax.open("GET", "clicks", true);
        ajax.send();
        break;
      default:
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "", true);
        ajax.send();
        dispatch({
          type: "CLICK"
        });
    }
  }
}
