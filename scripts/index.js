//Initializing the lesson info
const lessons = [
    {
        title: "Setting up Environment",
        section: "Introduction",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Variables",
        section: "The Basics",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Operators",
        section: "The Basics",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Conditional Statements",
        section: "Application",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Loops",
        section: "Application",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Input and Output",
        section: "Application",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Classes and Objects",
        section: "Object Oriented Programming",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Methods and Constructors",
        section: "Object Oriented Programming",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    },
    {
        title: "Polymorphism",
        section: "Object Oriented Programming",
        text: "Lorem ipsum dolor toma binnoto sebastian bordaux",
        link: "template.html"
    }
]

//Drawing all the lesson cards to the DOM object
for (i in lessons) {
    let card = document.createElement("div");
    card.className = "card";

    let forward = document.createElement("a");
    forward.setAttribute("href", lessons[i].link);
    card.appendChild(forward);

    let title = document.createElement("span");
    title.innerHTML = lessons[i].title;
    forward.appendChild(title);

    let section = lessons[i].section.replace(/\s/g, '').toLowerCase();
    card.className += " " + section;

    let text = document.createElement("p");
    text.innerHTML = "<u>" + lessons[i].section + "</u><br>" + lessons[i].text;
    forward.appendChild(text);

    document.getElementById('lessons').appendChild(card);
}
