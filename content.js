const pages = [
    {
        title   : "Loops",
        section : 3,
        video : "https://www.youtube.com/watch?v=XQfO3LsH3vA",
        cards : [
            {
                type : "text",
                text : "You're now able to store data in the form of variables. Now it's important to learn how to manipulate the data to perform calculations. In Java this is done through operators. Operators are special characters that can be used to perfrom different operations on data, such as: adding, subtracting, etc."
            },
            {
                type : "img",
                src : "images/3_1.png"
            },
            {
                type : "sub",
                text : "Numerical Operators"
            },
            {
                type : "img",
                src : "images/3_2.png"
            },
            {
                type : "code",
                lines : [
                    "int sum = 32 + 8;",
                    "   //Returns 40",
                    "",
                    "int diff = 8 - 4;",
                    "   //Returns 4",
                    "",
                    "int prod = 7 * 3;",
                    "   //Returns 21",
                    "",
                    "int quot = 8 / 2;",
                    "   //Returns 4",
                    "",
                    "int rem = 6 % 4;",
                    "   //Returns 2",
                    "",
                    "int plus = 6++;",
                    "   //Returns 7",
                    "",
                    "int minus = 6--;",
                    "   //Returns 5",
                ],
                subtext : "Numerical Operator Examples"
            },
            {
                type : "sub",
                text : "Boolean Operators"
            },
            {
                type : "img",
                src : "images/3_3.png"
            },
            {
                type : "code",
                lines : [
                    "boolean equal = 32 == 8;",
                    "   //Returns false",
                    "",
                    "boolean inequal = 20 != 5;",
                    "   //Returns true",
                    "",
                    "boolean greater = 4 > 3;",
                    "   //Returns true",
                    "",
                    "boolean less = 7 < 6;",
                    "   //Returns false",
                    "",
                    "boolean equal = 8 >= 8;",
                    "   //Returns true",
                    "",
                    "boolean equal = 6 <= 5;",
                    "   //Returns false"
                ],
                subtext : "Boolean Operator Examples"
            }
        ],
        links : [
            {text : "yeet1", url: "#"},
            {text : "yeet2", url: "#"},
            {text : "yeet3", url: "#"},
            {text : "yeet4", url: "#"}
        ]
    },
    //Setting up the environment
    {
        title   : "Setting up the Environment",
        section : 1,
        video : "https://www.youtube.com/watch?v=XQfO3LsH3vA",
        cards : [
            {
                type : "text",
                text : "Java is a object oriented programming language built on top of C. It is frequently used for desktop applications and can be run on any platform. This tutorial covers the basics of Java programming."
            },
            {
                type : "sub",
                text : "Installing Java"
            },
            {
                type : "text",
                text : "<b>JRE</b> <mark>(Java Runtime Environment)</mark> is a software layer that compiles and runs java programs. This is necissary to run any Java applications. When a standard user is prompted to 'download java', they are downloading the JRE. The <b>JDK</b> <mark>(Java Development Kit)</mark> on the other hand is a software layer required to develop / write java code, and includes compilers, error codes, and development tools used to make Java programs. Only developers use the JDK, however, both end-users and developers need the JRE to run the programs."
            },
            {
                type : "text",
                text : "In order to follow this tutorial, you will need to download and install both the JRE and JDK. The links for this can be found below: <br><br><b>JRE:</b><i>https://www.oracle.com/ae/java/technologies/javase-jre8-downloads.html</i> <br><b>JDK:</b><i>https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html</i>"
            },
            {
                type : "img",
                src : "images/1_1.png"
            },
            {
                type : "sub",
                text : "The IDE"
            },
            {
                type : "text",
                text : "An <b>IDE</b> <mark>(Integrated Development Environment)</mark> is a special text editor that is designed specifically to write code. It includes many special features such as syntax highlighting, consoles, and debugging tools. Developers use these tools to aid in making programs. Java is no exception, and the IDE that will be used in this tutorial is Eclipse."
            },
            {
                type : "text",
                text : "Eclipse can be downloaded using the link below: <br><i>https://www.eclipse.org/downloads/</i> <br><br>Make sure to follow all of the directions and run the program to make sure all is working alright. "
            },
            {
                type : "sub",
                text : "First Program"
            },
            {
                type : "text",
                text : "Finally you can start writing your first line of code! All developers start with the simplest possible program, the <i>'Hello World'</i> program. As the title suggests, this program simply outputs the message, <mark>'Hello World!'</mark> to the screen. The following code shows a hello world program that you can use to make sure all the steps above have worked, and get used to using eclipse."
            },
            {
                type : "code",
                lines : [
                    "public static void main (String [] args) {",
                    "   System.out.println(\"Hello World!\");",
                    "}"
                ],
                subtext : "The Hello World Program"
            },
            {
                type : "text",
                text : "<mark>Congratulations!</mark> You have now written your first program, and are ready to start making more advanced Java programs."
            }
        ],
        links : [
            {text : "yeet1", url: "#"},
            {text : "yeet2", url: "#"},
            {text : "yeet3", url: "#"},
            {text : "yeet4", url: "#"}
        ]
    },
    //Variables
    {
        title   : "Variables",
        section : 2,
        video : "https://www.youtube.com/watch?v=XQfO3LsH3vA",
        cards : [
            {
                type : "text",
                text : "Programs handle and process a lot of data. This data is stored in the form of variables. A variable is simply a way to store and reference a value for future use. There are many different types of variables for different kinds of information, each of which is listed here for reference. Below is the syntax for a variable in Java."
            },
            {
                type : "img",
                src : "images/2_1.png"
            },
            {
                type : "sub",
                text : "Numbers"
            },
            {
                type : "img",
                src : "images/2_2.png"
            },
            {
                type : "code",
                lines : [
                    "byte age = 21;",
                    "short users = 10000;",
                    "int distance = 56000;",
                    "long card_number = 8573208402;",
                    "float average_age = 3.2f;",
                    "double average_dist = 3483.2920;"
                ],
                subtext : "Numerical Varibale Examples"
            },
            {
                type : "sub",
                text : "Non-Numerical"
            },
            {
                type : "img",
                src : "images/2_3.png"
            },
            {
                type : "code",
                lines : [
                    "char letter = 'e';",
                    "String name = \"Robert\"",
                    "boolean raining = true;",
                    "",
                    "enum Level {",
                    "   EASY,",
                    "   MEDIUM,",
                    "   HARD",
                    "}",
                    "Level first = Level.EASY;"
                ],
                subtext : "Non-Numerical Varibale Examples"
            },
        ],
        links : [
            {text : "yeet1", url: "#"},
            {text : "yeet2", url: "#"},
            {text : "yeet3", url: "#"},
            {text : "yeet4", url: "#"}
        ]
    },
    //Operators
    {
        title   : "Operators",
        section : 2,
        video : "https://www.youtube.com/watch?v=XQfO3LsH3vA",
        cards : [
            {
                type : "text",
                text : "You're now able to store data in the form of variables. Now it's important to learn how to manipulate the data to perform calculations. In Java this is done through operators. Operators are special characters that can be used to perfrom different operations on data, such as: adding, subtracting, etc."
            },
            {
                type : "img",
                src : "images/3_1.png"
            },
            {
                type : "sub",
                text : "Numerical Operators"
            },
            {
                type : "img",
                src : "images/3_2.png"
            },
            {
                type : "code",
                lines : [
                    "int sum = 32 + 8;",
                    "   //Returns 40",
                    "",
                    "int diff = 8 - 4;",
                    "   //Returns 4",
                    "",
                    "int prod = 7 * 3;",
                    "   //Returns 21",
                    "",
                    "int quot = 8 / 2;",
                    "   //Returns 4",
                    "",
                    "int rem = 6 % 4;",
                    "   //Returns 2",
                    "",
                    "int plus = 6++;",
                    "   //Returns 7",
                    "",
                    "int minus = 6--;",
                    "   //Returns 5",
                ],
                subtext : "Numerical Operator Examples"
            },
            {
                type : "sub",
                text : "Boolean Operators"
            },
            {
                type : "img",
                src : "images/3_3.png"
            },
            {
                type : "code",
                lines : [
                    "boolean equal = 32 == 8;",
                    "   //Returns false",
                    "",
                    "boolean inequal = 20 != 5;",
                    "   //Returns true",
                    "",
                    "boolean greater = 4 > 3;",
                    "   //Returns true",
                    "",
                    "boolean less = 7 < 6;",
                    "   //Returns false",
                    "",
                    "boolean equal = 8 >= 8;",
                    "   //Returns true",
                    "",
                    "boolean equal = 6 <= 5;",
                    "   //Returns false"
                ],
                subtext : "Boolean Operator Examples"
            }
        ],
        links : [
            {text : "yeet1", url: "#"},
            {text : "yeet2", url: "#"},
            {text : "yeet3", url: "#"},
            {text : "yeet4", url: "#"}
        ]
    },
    //Conditional Statements
    {
        title   : "Conditional Statements",
        section : 3,
        video : "https://www.youtube.com/watch?v=XQfO3LsH3vA",
        cards : [
            {
                type : "text",
                text : "<b>Decision making</b> allows programs to interact and function in a non-linear way. It involves evaluating boolean statements and executing portions of code based on the outcome. This can be thought of in a logical way: <mark>If it is raining outside, you’d want to take an umbrella, but if it’s not, an umbrella would be unnecessary.</mark> This is an example of <b>decision making</b> in everyday life, by implementing similar logic in Java programs we can make smarter and more complex programs."
            },
            {
                type : "img",
                src : "images/4_1.png"
            },
            {
                type : "sub",
                text : "If Statements"
            },
            {
                type : "text",
                text : "The most common form of decision making in java is the <b>if statement</b>. It is easiest to think of <b>if statements</b> in simple terms: <mark>if (condition) then {action}</mark>. Following the previous example, we can state: <mark>if it’s raining then bring an umbrella</mark>. In Java, it can be written as follows."
            },
            {
                type : "code",
                lines : [
                    "if (raining == true) {",
                    "  bringUmbrella();",
                    "}"
                ],
                subtext : "Example of an IF statement"
            },
            {
                type : "sub",
                text : "Else Statements"
            },
            {
                type : "text",
                text : "Perhaps you would like to make more complex decisions or have an alternative outcome. For this, an <b>else statement</b> is used. <b>Else statements</b> allow you to expand an if statement to have more than one outcome. It can be thought of as: <mark>if  (condition) then {action 1} or else {action 2}.</mark> An example could be: <mark>if you are sick then stay home or else go to school.</mark> Below the syntax for this can be seen."
            },
            {
                type : "code",
                lines : [
                    "if (sick == true) {",
                    "  stayHome();",
                    "} else {",
                    "  goToSchool();",
                    "}"
                ],
                subtext : "Example of an IF ELSE statement"
            },
            {
                type : "text",
                text : "The <i>else statement</i> can be expanded to make even more complex decisions with the <b>else if statement</b>. This combines the <i>else</i> and <i>if</i> statements to check for multiple conditions at once. Here is an everyday complex decision that requires an <b>else if statement</b>: <mark>if a student arrives before 8AM then they are present, else if a student arrives after 8AM then they are late, else if a student does not arrive then they are absent.</mark> In Java this is written as follows."
            },
            {
                type : "code",
                lines : [
                    "if (arrived < 8) {",
                    "  student = \"present\";",
                    "} else if (arrived >= 8) {",
                    "  student = \"late\";",
                    "} else {",
                    "  student = \"absent\";",
                    "}"
                ],
                subtext : "Example of an ELSE IF statement"
            },
            {
                type : "sub",
                text : "Switch Statements"
            },
            {
                type : "text",
                text : "We have seen how the <i>else if statement</i> can expand the number of outcomes of a decision to infinity, however, writing so many <i>else if statements</i> can be tiring and hard to read. In these rare cases, another syntax can be used. The <b>switch statement</b>. A <b>switch statement</b> checks a variable for multiple different values, otherwise referred to as <i>cases</i>."
            },
            {
                type : "code",
                lines : [
                    "switch (grade) {",
                    "  case \"A\":",
                    "    message = \"Amazing!\";",
                    "    break;",
                    "  case \"B\":",
                    "    message = \"Great Job!\";",
                    "    break;",
                    "  case \"C\":",
                    "    message = \"Good job!\";",
                    "    break;",
                    "  default :",
                    "    message = \"Better luck next time!\";",
                    "}"
                ],
                subtext : "Example of an ELSE IF statement"
            },
            {
                type : "text",
                text : "The <i>switch statement</i> is very strict with its syntax. The key terms <mark>break</mark> and <mark>default</mark> can be seen in the above example. If a <i>case</i> is found to match and executed, all subsequent <i>cases</i> will also be executed. This can be useful in some cases, however, in other cases it might not. A <b>break statement</b> therefore forces Java to break free from the switch statement and move on. The <b>default statement</b> is the equivalent of an <i>else</i> statement in a <i>switch statement</i>."
            },
            {
                type : "sub",
                text : "Logical Operators"
            },
            {
                type : "text",
                text : "The final step in programming complex decision making are <b>logical operators</b>. Using these, more complex boolean statements can be created. An example of this is: <mark>if you are not sick and it is raining then take your umbrella to school.</mark> A list of each of the <b>logical operators</b> and an example can be found below."
            },
            {
                type : "img",
                src : "images/4_2.png"
            }

        ],
        links : [
            {text : "yeet1", url: "#"},
            {text : "yeet2", url: "#"},
            {text : "yeet3", url: "#"},
            {text : "yeet4", url: "#"}
        ]
    },


{}





];
