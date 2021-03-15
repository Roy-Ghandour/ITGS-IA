//Document builder

//Useful functions for shortcuts
function make(item, classname) {
    let obj = document.createElement(item);
    if (classname == null) classname = "";
    obj.className = classname;
    return obj;
}

function setText(obj, text) {
    obj.innerHTML = text;
}

function add(parent, child) {
    parent.appendChild(child);
}

//Imports
const current = parseInt(location.search.substring(1));

const page = pages[current];
const cards = page.cards;

const doc = document.getElementById('cards');

//Adding components
document.title = page.title;
document.getElementById('title').innerHTML = page.title;
document.getElementById('video').src = page.video;

let pallate = document.documentElement;
const colors1 = ["#66ffcc", "#ff5e62", "#F4A966", "#2952ff"];
const colors2 = ["#5eff91", "#ff9966", "#F2C94C", "#798EF6"];

pallate.style.setProperty('--color1', colors1[page.section - 1]);
pallate.style.setProperty('--color2', colors2[page.section - 1]);
pallate.style.setProperty('--grad', "linear-gradient(125deg, var(--color1), var(--color2))");

let prev = current - 1;
let next = current + 1;

let temp; //value for page

//Round Robbin
if (prev < 0) prev = pages.length - 1;
if (next > pages.length - 1) next = 0;

//Prev bubble
temp = pages[prev];
pallate.style.setProperty('--grad2', "linear-gradient(125deg,"+ colors1[temp.section - 1] +
    ", " + colors2[temp.section - 1] + ")");

//Next bubble
temp = pages[next];
pallate.style.setProperty('--grad3', "linear-gradient(125deg,"+ colors1[temp.section - 1] +
    ", " + colors2[temp.section - 1] + ")");



for (i in cards) {

    let item = cards[i];

    let slot = make("div", "slot");
    slot.id = i;

    if (item.type != "sub") {

        let card = make('div', 'card ' + item.type);

        switch (item.type) {
            case "text" :
                let para = make("span");
                setText(para, item.text);
                add(card, para);
                break;
            case "img" :
                let image = make("img");
                image.src = item.src;
                add(card, image);
                break;

            case "code" :
                let snippet = make("section", "snip");

                let lines = item.lines;
                let spaces = "";

                for (j in lines) {
                    spaces += " 1fr";
                    let line = make("div", "line");

                    let bar = make("div", "bar");
                    add(line, bar);

                    let text = make("div", "text");
                    let pre = make("pre");

                    setText(pre, lines[j]);

                    add(text, pre);
                    add(line, text)

                    add(snippet, line);
                }

                snippet.style.gridTemplateRows = spaces;
                add(card, snippet);

                let sub = make("div", "sub");
                let subtext = make("span");
                setText(subtext, item.subtext);
                add(sub, subtext);
                add(card, sub);
                break;
        }

        add(slot, card);
    } else {
        let subtitle = make("h2", "subtitle");
        setText(subtitle, item.text);
        add(slot, subtitle);
    }

    add(doc, slot);
}

//chnage header and description text here after content and index are merged

let links = page.links;
let list = document.getElementById("extras");
for (i in links) {
    let li = make("li");

    let a = make("a");
    a.href = links[i].url;
    setText(a, links[i].text);

    add(li, a);
    add(list, li);
}

let prevPage = document.getElementById("prev");
prevPage.href = "template.html?" + prev;

let nextPage = document.getElementById("next");
nextPage.href = "template.html?" + next;

let prevTitle = document.getElementById("prevTitle");
prevTitle.innerHTML = pages[prev].title;

let nextTitle = document.getElementById("nextTitle");
nextTitle.innerHTML = pages[next].title;
