//Initializing the lesson info
const lessons = [
    {
        title: "Setting up Environment",
        section: "Introduction",
        text: "Installing and getting started with Java",
        link: "template.html"
    },
    {
        title: "Variables",
        section: "The Basics",
        text: "Learning to store and use data",
        link: "template.html"
    },
    {
        title: "Operators",
        section: "The Basics",
        text: "Manipulating data with mathematical operators",
        link: "template.html"
    },
    {
        title: "Conditional Statements",
        section: "Application",
        text: "Making decisions with Java",
        link: "template.html"
    },
    {
        title: "Loops",
        section: "Application",
        text: "Repeating and controlling tasks",
        link: "template.html"
    },
    {
        title: "Input and Output",
        section: "Application",
        text: "Interacting with users in Java",
        link: "template.html"
    },
    {
        title: "Classes and Objects",
        section: "Object Oriented Programming",
        text: "Defining classes and objects in Java programs",
        link: "template.html"
    },
    {
        title: "Methods and Constructors",
        section: "Object Oriented Programming",
        text: "Adding functionality to object oriented programs",
        link: "template.html"
    },
    {
        title: "Polymorphism",
        section: "Object Oriented Programming",
        text: "Organising and scaling programs with Java",
        link: "template.html"
    }
]

//Drawing all the lesson cards to the DOM object
for (i in lessons) {
    let card = document.createElement("div");
    card.className = "card";

    let forward = document.createElement("a");
    forward.setAttribute("href", lessons[i].link + "?" + i);
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
