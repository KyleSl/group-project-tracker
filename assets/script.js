var timer = setInterval(time(), 1000);

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

function updateDisplay (){

}