window = typeof window !== undefined ? window : {};
window.assignmentTracker = window.assignmentTracker || {};

Assignment = function (options) {
    this.name = options.name;
}

window.assignmentTracker.Assignment = Assignment;

document.getElementById("add-btn").addEventListener("click", function () {
    console.log("here!");
});