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
        question: "What does polymorphism mean in programming?",
        a: "The ability to change data types.",
        b: "The ability of one type to take multiple forms.",
        c: "A way to write complex code.",
        d: "A method to override parent classes.",
        correct: "b"
    },
    {
        question: "Name the two types of polymorphism in Java.",
        a: "Static and Dynamic",
        b: "Early and Late",
        c: "Compile-time and Runtime",
        d: "Both A and C",
        correct: "d"
    },
    {
        question: "What is another name for static polymorphism?",
        a: "Runtime Polymorphism",
        b: "Late Binding",
        c: "Compile-time Polymorphism",
        d: "Method Overriding",
        correct: "c"
    },
    {
        question: "What is another name for dynamic polymorphism?",
        a: "Compile-time Polymorphism",
        b: "Method Overloading",
        c: "Runtime Polymorphism",
        d: "Early Binding",
        correct: "c"
    },
    {
        question: "What is method overloading?",
        a: "Defining methods with the same name but different parameters.",
        b: "Overriding methods from a parent class.",
        c: "Using methods without parameters.",
        d: "None of the above.",
        correct: "a"
    },
    {
        question: "How does constructor overloading differ from method overloading?",
        a: "Constructor overloading doesn't exist.",
        b: "Constructor overloading applies to constructors only.",
        c: "Method overloading applies to constructors only.",
        d: "Both are the same.",
        correct: "b"
    },
    {
        question: "Does Java support operator overloading explicitly?",
        a: "Yes",
        b: "No",
        c: "Only for addition",
        d: "Only for subtraction",
        correct: "b"
    },
    {
        question: "What is type promotion in method overloading?",
        a: "Converting a large data type to a smaller one.",
        b: "Automatically converting a smaller data type to a larger one.",
        c: "Promoting methods to the parent class.",
        d: "None of the above.",
        correct: "b"
    },
    {
        question: "What is method overriding?",
        a: "Methods sharing the same name and parameters in different classes.",
        b: "Methods in the same class with different parameters.",
        c: "Methods in the same class with no parameters.",
        d: "None of the above.",
        correct: "a"
    },
    {
        question: "What determines which overridden method is executed at runtime?",
        a: "The reference type.",
        b: "The actual object type.",
        c: "The compiler.",
        d: "None of the above.",
        correct: "b"
    },
    {
        question: "What is dynamic method dispatch?",
        a: "Resolving overloaded methods at compile time.",
        b: "Resolving overridden methods at runtime.",
        c: "Invoking methods based on static reference types.",
        d: "None of the above.",
        correct: "b"
    },
    {
        question: "What is late binding?",
        a: "Resolving methods at compile time.",
        b: "Resolving overridden methods during runtime.",
        c: "Resolving static methods during runtime.",
        d: "None of the above.",
        correct: "b"
    },
    {
        question: "Which of the following is NOT a benefit of polymorphism?",
        a: "Code reusability",
        b: "Flexibility",
        c: "Fixed behavior",
        d: "Easier maintenance",
        correct: "c"
    },
    {
        question: "How does polymorphism enhance maintainability?",
        a: "By adding more code.",
        b: "By using the same method for different objects.",
        c: "By avoiding dynamic behavior.",
        d: "By simplifying logic.",
        correct: "b"
    },
    {
        question: "What allows objects to share methods and behave differently as needed?",
        a: "Abstraction",
        b: "Polymorphism",
        c: "Encapsulation",
        d: "Inheritance",
        correct: "b"
    },
    {
        question: "Which access modifier is required for method overriding?",
        a: "private",
        b: "public",
        c: "protected or public",
        d: "No modifier",
        correct: "c"
    },
    {
        question: "Can static methods be overridden in Java?",
        a: "Yes",
        b: "No",
        c: "Only if marked final",
        d: "Only if in the same package",
        correct: "b"
    },
    {
        question: "What happens if the parent and child classes have the same method but different return types?",
        a: "It causes an error.",
        b: "It results in overriding.",
        c: "It’s allowed only if the return types are covariant.",
        d: "It results in overloading.",
        correct: "c"
    },
    {
        question: "What is a covariant return type?",
        a: "A return type that matches the parent class exactly.",
        b: "A return type that is a subclass of the parent class's return type.",
        c: "A completely different return type.",
        d: "None of the above.",
        correct: "b"
    },
    {
        question: "Which keyword prevents a method from being overridden?",
        a: "final",
        b: "static",
        c: "protected",
        d: "private",
        correct: "a"
    },
    {
        question: "Can static methods be overridden in Java?",
        a: "Yes",
        b: "No",
        c: "Only if marked final",
        d: "Only if in the same package",
        correct: "b"
    },
    {
        question: "What happens if the parent and child classes have the same method but different return types?",
        a: "It causes an error.",
        b: "It results in overriding.",
        c: "It’s allowed only if the return types are covariant.",
        d: "It results in overloading.",
        correct: "c"
    },
    {
        question: "What is a covariant return type?",
        a: "A return type that matches the parent class exactly.",
        b: "A return type that is a subclass of the parent class's return type.",
        c: "A completely different return type.",
        d: "None of the above.",
        correct: "b"
    },
    {
        question: "Which keyword prevents a method from being overridden?",
        a: "final",
        b: "static",
        c: "protected",
        d: "private",
        correct: "a"
    },
    {
        question: "Why is polymorphism important in real-world applications?",
        a: "It enforces strict coding rules.",
        b: "It allows flexibility and reusable code.",
        c: "It improves hardware performance.",
        d: "It makes debugging easier.",
        correct: "b"
    },
    {
        question: "Which of the following is an example of polymorphism in Java?",
        a: "Method overloading",
        b: "Method overriding",
        c: "Interfaces",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "How can polymorphism reduce code redundancy?",
        a: "By writing unique methods for every object.",
        b: "By using inheritance and overriding.",
        c: "By avoiding abstraction.",
        d: "By ignoring dynamic behavior.",
        correct: "b"
    },
    {
        question: "Can an interface support polymorphism?",
        a: "Yes",
        b: "No",
        c: "Only with abstract classes",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which of the following cannot be used as a return type for method overriding?",
        a: "Covariant types",
        b: "Primitive data types",
        c: "Unrelated types",
        d: "Abstract classes",
        correct: "c"
    },
    {
        question: "What happens if the overridden method in the parent class throws an exception, but the child class method does not?",
        a: "Compilation error",
        b: "It is allowed",
        c: "The exception is ignored",
        d: "Runtime error",
        correct: "b"
    },
    {
        question: "Which type of polymorphism is implemented using interfaces in Java?",
        a: "Static",
        b: "Dynamic",
        c: "Compile-time",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "What is the role of the super keyword in method overriding?",
        a: "Calls the parent class's method.",
        b: "Prevents overriding.",
        c: "Refers to the current object.",
        d: "Creates a new method.",
        correct: "a"
    },
    {
        question: "Why can't private methods be overridden?",
        a: "They are static.",
        b: "They are final by default.",
        c: "They are not visible in subclasses.",
        d: "None of the above.",
        correct: "c"
    },
    {
        question: "How does polymorphism promote scalability in software?",
        a: "By allowing hardcoding",
        b: "By supporting dynamic behavior",
        c: "By limiting flexibility",
        d: "By avoiding inheritance",
        correct: "b"
    },
    {
        question: "Which design principle is directly supported by polymorphism?",
        a: "Encapsulation",
        b: "Code reuse",
        c: "Open-Closed Principle",
        d: "Single Responsibility Principle",
        correct: "c"
    },
    {
        question: "Why is polymorphism considered an OOP pillar?",
        a: "It is unique to Java.",
        b: "It integrates other OOP concepts.",
        c: "It is used in procedural programming.",
        d: "It works without objects.",
        correct: "b"
    },
    {
        question: "Which of the following can break polymorphism?",
        a: "Final methods",
        b: "Interfaces",
        c: "Abstract classes",
        d: "Method overloading",
        correct: "a"
    },
    {
        question: "What is required to implement polymorphism in real-world applications?",
        a: "Using static methods only",
        b: "Having a parent-child class relationship",
        c: "Avoiding dynamic behavior",
        d: "Using primitive types",
        correct: "b"
    },
    {
        question: "What does it mean if a reference variable is 'polymorphic'?",
        a: "It can hold objects of different types.",
        b: "It is restricted to one type only.",
        c: "It cannot access overridden methods.",
        d: "It is only used for interfaces.",
        correct: "a"
    },
    {
        question: "Which of these is an example of dynamic polymorphism?",
        a: "A method overloaded in the same class",
        b: "A subclass overriding a parent class method",
        c: "A method with no parameters",
        d: "A private method",
        correct: "b"
    },
    {
        question: "Why is method overriding commonly used in frameworks?",
        a: "To simplify object creation",
        b: "To allow customization of behavior",
        c: "To eliminate inheritance",
        d: "To restrict dynamic behavior",
        correct: "b"
    },
    {
        question: "What happens when an overridden method in a child class is called using a parent class reference?",
        a: "The parent's version is executed.",
        b: "The child's version is executed.",
        c: "Both versions are executed.",
        d: "Compilation error.",
        correct: "b"
    },
    {
        question: "Which keyword should be used to avoid breaking polymorphism in a subclass?",
        a: "final",
        b: "static",
        c: "protected",
        d: "private",
        correct: "c"
    },
    {
        question: "How does polymorphism simplify API design?",
        a: "By supporting fixed behavior",
        b: "By allowing a single interface for multiple implementations",
        c: "By avoiding inheritance",
        d: "By promoting static methods",
        correct: "b"
    },
    {
        question: "Which keyword prevents a method from being overridden?",
        a: "final",
        b: "static",
        c: "protected",
        d: "private",
        correct: "a"
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method\nChild method",
        b: "Child method\nParent method",
        c: "Parent method",
        d: "Child method",
        correct: "a",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    void display() {
        super.display();
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
        child.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent constructor\nChild constructor",
        b: "Child constructor\nParent constructor",
        c: "Parent constructor",
        d: "Child constructor",
        correct: "a",
        code: `class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        System.out.println("Child constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method",
        b: "Child method",
        c: "Compilation error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    }
];