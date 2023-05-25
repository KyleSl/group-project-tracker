var timer = setInterval(time(), 1000);
var addProject = $("#addProject");

// Pulls projects array from localStorage and returns it
// If nothing is found
function loadProjects (){
    var projects = JSON.parse(localStorage.getItem("projects"));
    if(projects !== null){
        return projects;
    }else{
        return [];
    }
}

// Saves array of projects into local storage
function saveProjects (projects){
    localStorage.setItem("projects", JSON.stringify(projects));
}

// TODO
// Displays the current date and time at the top of the page
// Used with setInterval()
function time (){

}

// Removes a single project from the array and saves the new array to local storage
function removeProject (name){
    var projects = loadProjects();
    for(var i = 0; i < projects.length; i++){
        if(projects[i].name === name){
            projects.splice(i, 1);
            break;
        }
    }
    saveProjects(projects);
    updateDisplay();
}

// TODO
// Updates the display to show all the current projects
function updateDisplay (){

}

// Adds a project to local storage
// Will be used to handle an event
function addProject (){
    var projects = loadProjects();
    var newProject = {name: nameEl.val(), type: typeEl.val(), due: dueEl.val()}

    projects.push(newProject);

    saveProjects(projects);
    updateDisplay();
}