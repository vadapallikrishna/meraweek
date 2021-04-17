var app = {}



window.onload = function() {
var createbtn = document.getElementById("create");
  var startbn = document.getElementById("start");
  var stopbn = document.getElementById("stop");
  var endbn = document.getElementById("end");
  var tasks = [];
  var ctname = "";
  var current = {};
  var info;
  var completedTasks = [];
  var intervalid = 0;
  function iProgress() {
    var width = parseInt(current.style.width.replace("px",""));
    current.style.width = width+1+"px";
  }
createbtn.onclick = function() {
  if(current == HTMLDivElement) {
    alert("A task is running");
    return;
  }
  var taskinput = document.getElementById("task");
  var currentTask = document.getElementById("current-task");
  var timeline = document.getElementById("timeline");
  var progress = document.createElement("div")
  info = document.getElementById("info")
  progress.className = "progress started";
  progress.style.width = "1px";
  info.style.display="block";
  current = progress;
  timeline.append(progress)
  var task = {task:taskinput.value,status:"started"};
  tasks.push(task)
  ctname = taskinput.value;
  currentTask.innerText = taskinput.value;
  startbn.disabled = true;
  intervalid = setInterval(iProgress,1000);
}
  
  
  
  console.log(stopbn);
  
  
  startbn.onclick = function() {
    current.className = "progress started";
    intervalid = setInterval(iProgress,1000);
    startbn.disabled = true;
    stopbn.disabled = false;
  }
  
  stopbn.onclick = function() {
    current.className ="progress stop";  
    startbn.disabled = false;
    stopbn.disabled = true;
    clearInterval(intervalid);
  }
  
  endbn.onclick = function(){
    clearInterval(intervalid);
    stopbn.disabled = false;
    var completed = document.getElementById("completed");
    current.className = "progress completed";
    var task = document.createElement("p")
    task.innerText = ctname;
    info.style.display="none";
    var li = document.createElement("li");
    li.append(task);
    completed.append(li);
  }
}