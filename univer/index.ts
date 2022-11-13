import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};
type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};
type SearchEventsOptions = {
  query: string | number;
  eventType: string;
};
const searchEvents = (options: SearchEventsOptions): (Course | StudyGroup)[] => {
  const events:(Course | StudyGroup)[] = options.eventType === "courses" ? courses : studyGroups;
 return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return options.query === event.id;
    }
  });
};
const searchResults = searchEvents({query:2, eventType: 'art'})
console.log(searchResults[0]);

let enrolledEvents: (Course | StudyGroup)[] = [];
const enroll = (event:(Course | StudyGroup)) => {
enrolledEvents = [...enrolledEvents, event]
console.log(enrolledEvents)
}
enroll(searchResults[0]);
