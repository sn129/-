function addTodoPicture() {
    navigator.camera.getPicture(addTodo, function() {
        alert("Failed to get camera.");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 100,
        targetHeight : 100
    });
}
function addTodo(camera_url) {
    var title = $("#todo-title").val();
    var body = $("#todo-body").val();
    var img_tag = "";
    if (camera_url) {
        img_tag = "<img src='" + camera_url + "'>";
    }
    $.mobile.changePage($("#list-page"));
    $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
    $("#todo-list").listview('refresh');

};

window.onload = function clear() {
  var clearBtn = document.getElementById("clear");
  clearBtn.onclick = function(){
  alert("記載内容を削除します。");
  
  var title = document.getElementById("todo-title")
  var body = document.getElementById("todo-body")

  title.value = "";
  body.value = "";  
  };

};