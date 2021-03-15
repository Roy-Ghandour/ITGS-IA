const pages = [
    //Setting up the environment
    {
        title   : "Setting up the Environment",
        section : 1,
        video : "https://www.youtube.com/embed/Hl-zzrqQoSE",
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
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_environment_setup.htm"},
            {text : "JRE Download", url: "https://www.oracle.com/ae/java/technologies/javase-jre8-downloads.html"},
            {text : "JDK Download", url: "https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"},
            {text : "Eclipse Download", url: "https://www.eclipse.org/downloads/"}
        ]
    },
    //Variables
    {
        title   : "Variables",
        section : 2,
        video : "https://www.youtube.com/embed/gtQJXzi3Yns",
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
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_variable_types.htm"},
            {text : "Varibales in Depth", url: "https://www.javatpoint.com/java-variables#:~:text=A%20variable%20is%20a%20container,the%20Java%20program%20is%20executed.&text=Variable%20is%20a%20name%20of,%3A%20local%2C%20instance%20and%20static."},
            {text : "W3Schools", url: "https://www.w3schools.com/java/java_variables.asp"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html"}
        ]
    },
    //Operators
    {
        title   : "Operators",
        section : 2,
        video : "https://www.youtube.com/embed/8ZaTSedtf9M",
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
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_basic_operators.htm"},
            {text : "Operators Explained", url: "https://www.geeksforgeeks.org/operators-in-java/"},
            {text : "W3Schools", url: "https://www.w3schools.com/java/java_operators.asp"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html"}
        ]
    },
    //Conditional Statements
    {
        title   : "Conditional Statements",
        section : 3,
        video : "https://www.youtube.com/embed/iMeaovDbgkQ",
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
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_decision_making.htm"},
            {text : "Examples", url: "https://www.programiz.com/java-programming/if-else-statement"},
            {text : "W3Schools", url: "https://www.w3schools.com/java/java_conditions.asp#:~:text=Java%20has%20the%20following%20conditional,the%20first%20condition%20is%20false"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html"}
        ]
    },
    //Loops:
    {
        title   : "Loops",
        section : 3,
        video : "https://www.youtube.com/embed/rjkYAs6gAkk",
        cards : [
            {
                type : "text",
                text : "Loops are a useful tool for any Java developer. They allow code to be written only once and run as many times as needed. Loops can be seen everywhere, in security systems, working with long lists of data, and many more examples that are crucial to programming. There are two types of loops, the for loop, and the while loop. These are further explained below:"
            },
            {
                type : "sub",
                text : "For Loops:"
            },
            {
                type : "text",
                text : "The most useful loop in Java is the for loop. For loops work by running a piece of code for a certain number of times. For example, you might want to order 3 pizzas, but it would be inefficient to make 3 separate orders. Instead, you could use a for loop, meaning you'd only ever have to order once, and then simply loop the order 3 times. A for loop should always be used if you know how many times the code needs to loop."
            },
            {
                type : "code",
                lines : [
                    "for (int i = 0; i < 3; i++)",
                    "   orderPizza();",
                    "}"
                ],
                subtext : "Example of a For Loop"
            },
            {
                type : "img",
                src : "images/5_1.png"
            },
            {
                type : "sub",
                text : "While Loops:"
            },
            {
                type : "text",
                text : "A while loop is the next type of loop available to Java developers. It is less common, however, just as important as the for loop. It is used in cases where you might not know how many times a piece of code needs to be repeated. They work by setting a boolean condition, so long as this condition is met, the loop will continue to run. An example of this is when your pizza arrives and you need to eat it, you wouldn't know how many bites you need to take. Instead, you could take one bite, and check if you are still hungry, then take another. You could say that you will always take a bite while you are hungry, and you will stop when you are not anymore."
            },
            {
                type : "code",
                lines : [
                    "while (hungry == true) {",
                    "   takeBite();",
                    "}"
                ],
                subtext : "Example of a While Loop"
            },
            {
                type : "img",
                src : "images/5_2.png"
            }
        ],
        links : [
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_loop_control.htm"},
            {text : "W3Schools For Loop", url: "https://www.w3schools.com/java/java_for_loop.asp"},
            {text : "W3Schools While Loop", url: "https://www.w3schools.com/java/java_while_loop.asp"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html"}
        ]
    },
    //Input Ouput
    {
        title   : "Input and Output",
        section : 3,
        video : "https://www.youtube.com/embed/5DdacOkrTgo",
        cards : [
            {
                type : "text",
                text : "Input and output are the bread and butter of programming. Without it, computers would be useless. Input is anything that the user gives to a program, like entering a password. Output, is everything the program gives to the user, like the error message when the password is incorrect. This page covers the most basic input and output to get you started but there are many ways to make a java program more interactive with input and output."
            },
            {
                type : "sub",
                text : "Input:"
            },
            {
                type : "text",
                text : "It is crucial that a user can interact with your program. Most if not all programs have some form of input, these could be logging in with a username and password, entering a message into a text box, or even uploading files and documents. Java can be used for all of these cases and more. This tutorial will cover the basic console input, where the user can type whatever they like into the console for you to save and use in your program."
            },
            {
                type : "code",
                lines : [
                    "Scanner input = new Scanner(System.in);",
                    "String text_response = input.nextLine();",
                    "int number_response = input.nextInt();"
                ],
                subtext : "Example of a User Input"
            },
            {
                type : "sub",
                text : "Output:"
            },
            {
                type : "text",
                text : "Most of what you see when a program is running, is output. There are windows, loading bars, prompts, error messages, and more. Output is very important for any program, as it is everything the user can see and interact with. This tutorial will cover the basic console output, allowing any piece of text to be written on the console for the user to read."
            },
            {
                type : "code",
                lines : [
                    "System.out.println(\"Hello world!\");",
                    "System.out.println(\"I am outputting!\");"
                ],
                subtext : "Example of Console Output"
            },
            {
                type : "sub",
                text : "Using I/O:"
            },
            {
                type : "text",
                text : "It is clear now that both input and output are crucial to any program and should be mastered by any Java developer. The most important part, however, is combining to the two to make a complete and useful user experience. An example of how the input and output console commands can be used is below:"
            },
            {
                type : "code",
                lines : [
                    "System.out.println(\"Please enter your name:\");",
                    "Scanner input = new Scanner(System.in);",
                    "String name = input.nextLine();",
                    "",
                    "System.out.println(\"Hello \" + name);"
                ],
                subtext : "Example of Using I/O"
            }
        ],
        links : [
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_files_io.htm"},
            {text : "Detailed Inputs and Outputs", url: "https://www.javatpoint.com/java-io"},
            {text : "W3Schools", url: "https://www.w3schools.com/java/java_user_input.asp"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/QandE/questions_flow.html"}
        ]
    },
    //Classes and Objects
    {
        title   : "Classes and Objects",
        section : 4,
        video : "https://www.youtube.com/embed/XqTg2buXS5o",
        cards : [
            {
                type : "text",
                text : "Java is an object oriented language, meaning that it makes use of classes and objects which can be used to group and abstract code. This is far less complex than it sounds, and when mastered it allows Java developers to quickly make scalable and easy to read programs."
            },
            {
                type : "sub",
                text : "Classes:"
            },
            {
                type : "text",
                text : "The foundation for any object orient language are classes. A class is short for classification, meaning it is a definition of an object. Java programs are made up of a collection of classes that can be used to build a program. Using the example below, it is clear how easy classes can be used to group together useful data and code to create a more understandable object to work with."
            },
            {
                type : "code",
                lines : [
                    "class Dog {",
                    "   String name;",
                    "   String breed;",
                    "",
                    "   void bark() {",
                    "       System.out.println(\"Woof!\");",
                    "   }",
                    "}"
                ],
                subtext : "Example of a Class"
            },
            {
                type : "sub",
                text : "Objects:"
            },
            {
                type : "text",
                text : "Objects are the next important addition by an object oriented language. Objects are variables that can take the definition of a class. We call this, an instance. Objects are able to access all of the variables and methods available to the class. This can be seen in the example below where the object is able to be defined by the class we have previously written and thus inherit all of it's traits."
            },
            {
                type : "code",
                lines : [
                    "Dog mydog = new Dog();",
                    "mydog.name = \"Charlie\";",
                    "mydog.breed = \"Beagle\";",
                    "mydog.bark();"
                ],
                subtext : "Example of an Object"
            },
            {
                type : "text",
                text : "Even with this very simple example, it is clear how powerful using classes and objects together to group variables and code is for building large programs with ease. Understanding how to take advantage of these is important for any Java developer to succeed."
            }
        ],
        links : [
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_object_classes.htm"},
            {text : "More on OOP", url: "https://www.javatpoint.com/java-oops-concepts"},
            {text : "W3Schools", url: "https://www.w3schools.com/java/java_classes.asp"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/index.html"}
        ]
    },
    //Methods and Constructors
    {
        title   : "Methods and Constructors",
        section : 4,
        video : "https://www.youtube.com/embed/7MBgaF8wXls",
        cards : [
            {
                type : "text",
                text : "Methods can be used to give functionality to classes allowing for more advanced and useful objects to be created. Methods are groups of code that can be called at any time by an object of a class to complete regular or repetitive tasks. They can be thought of as the actions that an object can preform."
            },
            {
                type : "sub",
                text : "Arguments:"
            },
            {
                type : "text",
                text : "The first step in understanding methods is the arguments. Methods are unique in that they can take an input of any number of variables to use in processing or completing tasks. These are called arguments. For example, if you were placing an order at a restaurant, you would have to give the argument of what item on the menu you'd like."
            },
            {
                type : "code",
                lines : [
                    "void add(int num1, int num2) {",
                    "   int sum = num1 + num2;",
                    "   System.out.println(sum);",
                    "}"
                ],
                subtext : "Example of Arguments"
            },
            {
                type : "sub",
                text : "Return Types:"
            },
            {
                type : "text",
                text : "Return types are another feature unique to methods. They allow the methods to return with a result or an output. For example a teacher may ask a student if they are present by calling the attendance() method, and the student could return true or false depending on if they were present or not. This allows methods to be very useful tools that can be used throughout a program."
            },
            {
                type : "code",
                lines : [
                    "String myName() {",
                    "   return \"John Smith\";",
                    "}",
                    "",
                    "String name = object.myName();"
                ],
                subtext : "Example of a Return Type"
            },
            {
                type : "sub",
                text : "Constructors:"
            },
            {
                type : "text",
                text : "Having now understood methods, it is important to cover constructors. Constructors are special versions of methods, they act in the same way, however, they must be named the same name as the class and do not have a return type, as the return type by default is the class itself. A constructor is called when a new object of a class is made, in order to return the class itself. The constructor, however, can still include custom blocks of code and can even specify arguments."
            },
            {
                type : "code",
                lines : [
                    "class Student {",
                    "   String studentName;",
                    "",
                    "   Student(String name) {",
                    "       studentName = name;",
                    "   }",
                    "}"
                ],
                subtext : "Example of a constructor"
            }
        ],
        links : [
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_methods.htm"},
            {text : "More on OOP", url: "https://www.javatpoint.com/java-oops-concepts"},
            {text : "W3Schools", url: "https://www.w3schools.com/java/java_class_methods.asp"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/class.html"}
        ]
    },
    //Polymorphism
    {
        title   : "Polymorphism",
        section : 4,
        video : "https://www.youtube.com/embed/9JpNY-XAseg",
        cards : [
            {
                type : "text",
                text : "You have reached the final step in the tutorial and can now make extensive Java programs using Object Oriented programming. Sometimes, however, the classes in a Java program can get confusing and jumbled. To combat this, Java has polymorphism, which allows classes to interact with each other. Polymorphism means that a class can be defined by more than one thing. For example, a dog could be defined as a dog, but could also be defined as an animal or a mammal. The use of this will become apparent by the end of this page."
            },
            {
                type : "sub",
                text : "Inheritance:"
            },
            {
                type : "text",
                text : "The first step to understanding polymorphism is understanding inheritance. Just as it sounds, it allows classes to inherit traits from other parent classes. For example a dog class, would inherit the traits of a mammal class. This helps organize the Java project as well as reduce redundancy, because you would not have to rewrite a lot of variables and methods that another class already has."
            },
            {
                type : "code",
                lines : [
                    "class Mammal {",
                    "   int age;",
                    "   void eat() {",
                    "       Sysetem.out.println(\"Munch!\");",
                    "   }",
                    "}",
                    "class Dog extends Mammal {",
                    "   String name;",
                    "}",
                    "",
                    "Dog dog = new Dog();",
                    "dog.eat();"
                ],
                subtext : "Example of Inheritance"
            },
            {
                type : "sub",
                text : "Interfaces:"
            },
            {
                type : "text",
                text : "Interfaces are another way that polymorphism can be implemented in Java. They are very similar to classes, however, there are some key differences. Interfaces allow you to collect a number of abstract (undefined) methods that other classes can then implement. For example, two different sports may have different ways of keeping score, however, both still keep score in some way. An interface called sport can be created to outline a method to keep score. Then each sport can implement the interface and then define the method independently."
            },
            {
                type : "code",
                lines : [
                    "interface Animal {",
                    "   void eat();",
                    "}",
                    "",
                    "class Mouse implements Animal {",
                    "   void eat() {",
                    "       System.out.println(\"Nibble..\");",
                    "   }",
                    "}",
                    "",
                    "class Elephant implements Animal {",
                    "   void eat() {",
                    "       System.out.println(\"Chomp!\");",
                    "   }",
                    "}"
                ],
                subtext : "Example of Interfaces"
            },
            {
                type : "text",
                text : "Using interfaces and inheritance in combination to add polymorphism to a Java program can help clean up the project and allow for more classes and methods to be implemented extremely easily. Instead of having to repeat a lot of the programming for implementing a new feature, the work done on previous features can be inherited or implemented to make the process easier."
            }
        ],
        links : [
            {text : "TutorialsPoint", url: "https://www.tutorialspoint.com/java/java_polymorphism.htm"},
            {text : "Inheritance Explained", url: "https://www.javatpoint.com/inheritance-in-java#:~:text=Inheritance%20in%20Java%20is%20a,behaviors%20of%20a%20parent%20object.&text=The%20idea%20behind%20inheritance%20in,fields%20of%20the%20parent%20class."},
            {text : "W3Schools", url: "https://www.w3schools.com/java/java_polymorphism.asp"},
            {text : "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/interface.html"}
        ]
    }
];
