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
var PROJECTS_ON_MAIN_PAGE = 2;
function load_projects() {
    return __awaiter(this, void 0, void 0, function () {
        var projects, shown_projects;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, load_project_json()];
                case 1:
                    projects = _a.sent();
                    console.log(projects);
                    if (!projects || !projects.show) {
                        document.getElementById("project_container").innerHTML = "<p class='no_project'>Aucun projet à afficher pour le moment</p>";
                        return [2 /*return*/];
                    }
                    shown_projects = projects.projects.sort(function (a, b) { return a.score + b.score; }).slice(0, PROJECTS_ON_MAIN_PAGE);
                    console.log(shown_projects);
                    return [2 /*return*/];
            }
        });
    });
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
