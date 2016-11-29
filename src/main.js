"use strict";

var main = typeof main !== "undefined" ? main : {};

main.currentTab = 0;

main.Form = function (options) {
    this.id = options.id;
    this.name = options.name;
    this.init = options.init || null;
};

main.forms = [
    new main.Form({
        name: "Home",
        id: "home",
    }),
    new main.Form({
        name: "Add Assignment",
        id: "add"
    }),
    new main.Form({
        name: "View Assignments",
        id: "view"
    }),
    new main.Form({
        name: "Add Topic",
        id: "add-topic"
    })
];

main.changeForm = function (selector) {
    if (Number.isInteger(selector) && main.forms.length > parseInt(selector)) {
        main.switchForm(parseInt(selector));
    } else {
        var i = 0,
            length = main.forms.length,
            formIndex = null;

        for (; i < length; i++) {
            if (main.forms[i].id === selector) {
                formIndex = i;
                break;
            }
        }

        if (formIndex !== null) {
            main.switchForm(formIndex);
        } else {
            throw new Error("Form under selector (" + selector + ") cannot be found.");
        }
    }
}

main.switchForm = function (index) {
    if (index < window.main.forms.length) {
        // We should expect only one form not to be hidden
        document.querySelector("div:not([hide])").className = "hide";
        document.getElementById(main.forms[index].id).className = "";
    }
}

document.getElementById("add-btn").addEventListener("click", function () {
    main.changeForm("add");
});

document.getElementById("view-btn").addEventListener("click", function () {
    main.changeForm("view")
});