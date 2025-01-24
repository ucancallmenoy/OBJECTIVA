export interface QuizData {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct: string;
    code?: string;
  }
export const quizData: QuizData[] = [
        {
            question: "What does encapsulation mean in Java?",
            a: "Combining data and methods into a single unit.",
            b: "Separating data from methods.",
            c: "Accessing private data directly.",
            d: "Hiding methods from other classes.",
            correct: "a"
        },
        {
            question: "Which of the following is NOT a benefit of encapsulation?",
            a: "Security",
            b: "Flexibility",
            c: "Code complexity",
            d: "Maintainability",
            correct: "c"
        },
        {
            question: "What is data hiding in encapsulation?",
            a: "Making data public for easy access.",
            b: "Protecting data by making it private.",
            c: "Deleting unused data.",
            d: "Storing data in external files.",
            correct: "b"
        },
        {
            question: "Which of these is an example of encapsulation?",
            a: "A bank account with private balance and public methods.",
            b: "A method that prints data directly.",
            c: "A program with only global variables.",
            d: "A class with only public attributes.",
            correct: "a"
        },
        {
            question: "Which access modifier restricts access to within the same class only?",
            a: "Public",
            b: "Protected",
            c: "Private",
            d: "Default",
            correct: "c"
        },
        {
            question: "What is the purpose of getters in Java?",
            a: "To directly access private variables.",
            b: "To set values for private variables.",
            c: "To retrieve values of private variables.",
            d: "To delete private variables.",
            correct: "c"
        },
        {
            question: "Which access modifier allows access within the same package and subclasses?",
            a: "Private",
            b: "Default",
            c: "Public",
            d: "Protected",
            correct: "d"
        },
        {
            question: "Why should we validate input in setters?",
            a: "To improve runtime speed.",
            b: "To ensure data integrity.",
            c: "To avoid writing getters.",
            d: "To bypass encapsulation.",
            correct: "b"
        },
        {
            question: "What is the main purpose of encapsulation?",
            a: "To increase program size.",
            b: "To group unrelated classes.",
            c: "To protect and organize data.",
            d: "To simplify algorithms.",
            correct: "c"
        },
        {
            question: "Which of the following is NOT a real-world example of encapsulation?",
            a: "ATM system hiding hardware details.",
            b: "Bank account with private balance.",
            c: "Public variables shared globally.",
            d: "Mobile phone with hidden components.",
            correct: "c"
        },
        {
            question: "What does 'private' keyword in Java signify?",
            a: "Variable can be accessed by all classes.",
            b: "Variable can be accessed only within the class.",
            c: "Variable can be accessed by subclasses only.",
            d: "Variable can be accessed within the package.",
            correct: "b"
        },
        {
            question: "Which access modifier provides the most restricted access?",
            a: "Public",
            b: "Protected",
            c: "Private",
            d: "Default",
            correct: "c"
        },
        {
            question: "What does a setter method typically do?",
            a: "Retrieve the value of a variable.",
            b: "Modify the value of a private variable.",
            c: "Delete a variable.",
            d: "Access a protected method.",
            correct: "b"
        },
        {
            question: "Why is encapsulation important for reusability?",
            a: "It hides unrelated classes.",
            b: "It ensures code is independent of internal changes.",
            c: "It merges all methods into a single function.",
            d: "It provides global variables.",
            correct: "b"
        },
        {
            question: "What is the default access modifier in Java?",
            a: "Private",
            b: "Public",
            c: "Protected",
            d: "Default (package-private)",
            correct: "d"
        },
        {
            question: "What is the purpose of data validation in encapsulation?",
            a: "To write longer programs.",
            b: "To ensure objects remain in a valid state.",
            c: "To allow unlimited access to variables.",
            d: "To merge unrelated classes.",
            correct: "b"
        },
        {
            question: "What is a key characteristic of encapsulated classes?",
            a: "Directly accessible public fields.",
            b: "Methods to control data access.",
            c: "Unlimited visibility of variables.",
            d: "Only static methods.",
            correct: "b"
        },
        {
            question: "Why should fields in an encapsulated class be private?",
            a: "To restrict unauthorized access.",
            b: "To increase program length.",
            c: "To allow unrestricted access.",
            d: "To make debugging harder.",
            correct: "a"
        },
        {
            question: "Which of the following best describes a 'getter' method?",
            a: "A method to directly access public variables.",
            b: "A method that returns private field values.",
            c: "A method to delete variables.",
            d: "A method to validate user input.",
            correct: "b"
        },
        {
            question: "What is a real-world analogy of a setter method?",
            a: "Reading a book.",
            b: "Adding money to a bank account.",
            c: "Deleting old files.",
            d: "Viewing a movie.",
            correct: "b"
        },
        {
            question: "Which access modifier provides unrestricted access?",
            a: "Public",
            b: "Private",
            c: "Protected",
            d: "Default",
            correct: "a"
        },
        {
            question: "What happens if data validation in setters is skipped?",
            a: "Data integrity remains intact.",
            b: "Invalid data may be stored.",
            c: "Objects become immutable.",
            d: "Private variables become public.",
            correct: "b"
        },
        {
            question: "Why is encapsulation crucial in software design?",
            a: "To eliminate the need for constructors.",
            b: "To manage dependencies effectively.",
            c: "To maintain object integrity and security.",
            d: "To enable public access to all methods.",
            correct: "c"
        },
        {
            question: "Which method validates input before setting a value?",
            a: "Constructor",
            b: "Getter",
            c: "Setter",
            d: "Destructor",
            correct: "c"
        },
        {
            question: "What is the Java keyword for creating encapsulated fields?",
            a: "Static",
            b: "Private",
            c: "Global",
            d: "External",
            correct: "b"
        },
        {
            question: "Encapsulation helps in achieving:",
            a: "Data exposure",
            b: "Loose coupling",
            c: "Global visibility",
            d: "Code redundancy",
            correct: "b"
        },
        {
            question: "Which of these violates encapsulation principles?",
            a: "Using private fields",
            b: "Using getters and setters",
            c: "Using public fields directly",
            d: "Validating input in setters",
            correct: "c"
        },
        {
            question: "What does encapsulation help prevent?",
            a: "Inheritance",
            b: "Global access to sensitive data",
            c: "Usage of constructors",
            d: "Polymorphism",
            correct: "b"
        },
        {
            question: "What is a Java class designed to follow encapsulation called?",
            a: "Abstract class",
            b: "Encapsulated class",
            c: "Static class",
            d: "Polymorphic class",
            correct: "b"
        },
        {
            question: "What is an example of poor encapsulation practice?",
            a: "Validating user input in setters",
            b: "Using meaningful variable names",
            c: "Making all fields public",
            d: "Providing controlled access through methods",
            correct: "c"
        },
        {
            question: "Which access modifier is typically used with getters and setters?",
            a: "Public",
            b: "Private",
            c: "Protected",
            d: "Default",
            correct: "a"
        },
        {
            question: "What is a valid use of the 'this' keyword in setters?",
            a: "To access global variables.",
            b: "To refer to the current object’s fields.",
            c: "To override public methods.",
            d: "To delete private fields.",
            correct: "b"
        },
        {
            question: "How does encapsulation improve maintainability?",
            a: "By exposing internal logic.",
            b: "By centralizing data access.",
            c: "By eliminating constructors.",
            d: "By increasing code complexity.",
            correct: "b"
        },
        {
            question: "What is a common naming convention for getters in Java?",
            a: "fetch[Property]()",
            b: "retrieve[Property]()",
            c: "get[Property]()",
            d: "access[Property]()",
            correct: "c"
        },
        {
            question: "What principle ensures sensitive data is only accessed via methods?",
            a: "Inheritance",
            b: "Encapsulation",
            c: "Polymorphism",
            d: "Abstraction",
            correct: "b"
        },
        {
            question: "What is the best practice for making an immutable field?",
            a: "Provide a getter only.",
            b: "Provide a setter only.",
            c: "Use public variables.",
            d: "Use global modifiers.",
            correct: "a"
        },
        {
            question: "What is encapsulation compared to in real life?",
            a: "An open book",
            b: "A bank vault",
            c: "A broken lock",
            d: "An exposed wire",
            correct: "b"
        }
    
];