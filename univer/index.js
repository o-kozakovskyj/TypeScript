"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
const searchEvents = (options) => {
    const events = options.eventType === "courses" ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === "number") {
            return options.query === event.id;
        }
    });
};
const searchResults = searchEvents({ query: 2, eventType: 'art' });
console.log(searchResults[0]);
let enrolledEvents = [];
const enroll = (event) => {
    enrolledEvents = [...enrolledEvents, event];
    console.log(enrolledEvents);
};
enroll(searchResults[0]);
