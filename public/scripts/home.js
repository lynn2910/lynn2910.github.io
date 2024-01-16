var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { load_project_json } from "./projects.js";
document.addEventListener('DOMContentLoaded', function () {
    // Init skills table
    init_skills_table();
    // Load projects
    load_projects()
        .then(function () { return console.log("Projects loaded"); }, function (error) { return console.error(error); });
});
//
//
// Projects loader
//
//
var PROJECTS_ON_MAIN_PAGE = 4;
function load_projects() {
    return __awaiter(this, void 0, void 0, function () {
        var projects, shown_projects;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, load_project_json()];
                case 1:
                    projects = _a.sent();
                    if (!projects || !projects.show) {
                        document.getElementById("project_container").innerHTML = "<p class='no_project'>Aucun projet à afficher pour le moment</p>";
                        return [2 /*return*/];
                    }
                    shown_projects = projects.projects.sort(function (a, b) { return b.score - a.score; }).slice(0, PROJECTS_ON_MAIN_PAGE);
                    shown_projects.forEach(add_project);
                    return [2 /*return*/];
            }
        });
    });
}
function add_project(project) {
    var html = "<div class=\"project\">\n    <div class=\"head\">\n        <h3>".concat(project.name, "</h3>\n        <div class=\"links\">\n            ").concat(project.links.reverse().map(link_to_html).join(""), "\n        </div>\n    </div>\n    <p>").concat(project.description, "</p>\n    <div class=\"technologies\">\n        ").concat(project.technologies.map(function (t) { return "<p>".concat(t, "</p>"); }).join(""), "\n    </div>\n</div>");
    document.querySelector("#project_container")
        .innerHTML += html;
}
function link_to_html(link) {
    var html = "<a href=\"".concat(link.url, "\" target=\"_blank\">");
    switch (link.type) {
        case "github": {
            html += "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z\"></path></svg>";
            break;
        }
        case "discord": {
            html += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z\"></path></svg>";
            break;
        }
        case "website": {
            html += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z\"></path></svg>";
            break;
        }
        case "gitlab": {
            html += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20.892 9.889a.664.664 0 0 0-.025-.087l-2.104-6.479a.84.84 0 0 0-.8-.57.822.822 0 0 0-.789.575l-2.006 6.175H8.834L6.826 3.327a.823.823 0 0 0-.786-.575h-.006a.837.837 0 0 0-.795.575L3.133 9.815c0 .005-.005.01-.007.016l-1.067 3.281a1.195 1.195 0 0 0 .435 1.34l9.227 6.706c.167.121.393.12.558-.003l9.229-6.703a1.2 1.2 0 0 0 .435-1.34l-1.051-3.223zM17.97 3.936l1.809 5.566H16.16l1.81-5.566zm-11.94 0 1.812 5.566H4.228L6.03 3.936zm-2.982 9.752a.253.253 0 0 1-.093-.284l.793-2.437 5.817 7.456-6.517-4.735zm1.499-3.239h3.601l2.573 7.916-6.174-7.916zm7.452 8.794-2.856-8.798h5.718l-1.792 5.515-1.07 3.283zm1.282-.877 2.467-7.588.106-.329h3.604l-5.586 7.156-.591.761zm7.671-4.678-6.519 4.733.022-.029 5.794-7.425.792 2.436a.25.25 0 0 1-.089.285z\"></path></svg>";
            break;
        }
        default:
            html += link.type;
    }
    html += "</a>";
    return html;
}
//
//
//  SKILLS TABLE
//
//
function init_skills_table() {
    document.querySelectorAll("#skills_selector li")
        .forEach(function (li) {
        var id = li.id;
        // define the skills
        li.addEventListener("click", function () {
            open_skill_box(id);
        });
    });
}
var BOX_DISPLAY = "grid";
function open_skill_box(id) {
    // Close every box and open the good one
    document.querySelectorAll(".box")
        .forEach(function (box) {
        if (!box.classList.contains(id)) {
            box.style["display"] = "";
        }
        else if (box.style["display"] != BOX_DISPLAY) {
            box.style["display"] = BOX_DISPLAY;
        }
    });
    // Un-select every title
    document.querySelectorAll("#skills_selector li")
        .forEach(function (li) {
        if (id === li.id && !li.classList.contains("selected")) {
            li.classList.add("selected");
        }
        else {
            li.classList.remove("selected");
        }
    });
}
