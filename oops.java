// methods 

class oops{
    public static void main(String[] args) {
    void display(){
        System.out.println("hello world");
    }
    void student(){
        System.out.println("welcome to java programming");
    }

        oops obj = new oops();
        obj.display();
        obj.student();
    }
}


// recursion
class recurcion{
    public static void main(String[] args){
        int result= factorial(5);
        System.out.println(result);
    }
    static int factorial(int r){
        if(r==0 || r==1){
            return 1;
        }else{
            
            return r*factorial(r-1);
        }
    }
}


// class and object 

// class is the collection of variables (fields) and the methods 

class student{
    String name;
    int age;
    void display(){
        System.out.println("Name" + name);
        System.out.println("Age"+ age);
    }
    public static void main(String args[]){
        student s= new student();
        s.name="Prithi";
        s.age=20;
        s.display();
        student s1= new student();
        s1.name="Vel";
        s1.age=19;
        s1.display();
    }
}

//creating the object

class student{
    String name;
    int age;
    void display(){
        System.out.println("Name" + name);
        System.out.println("Age"+ age);
    }
}
class main{
    public static void main(String args[]){
        student s= new student();
        s.name="Prithi";
        s.age=20;
        s.display();
        student s1= new student();
        s1.name="Vel";
        s1.age=19;
        s1.display();
        student s2= new student();
        s2.student("Siva", 21);
        s2.display();
    }
}



// access modifiers

// public: accessible from anywhere
// private: accessible only within the class
// protected: accessible within the package and subclasses
// default: accessible within the package


class Example {

    public int publicVar = 1;
    private int privateVar = 2;
    protected int protectedVar = 3;
    int defaultVar = 4;

    public void showValues() {
        System.out.println("Public: " + publicVar);
        System.out.println("Private: " + privateVar);
        System.out.println("Protected: " + protectedVar);
        System.out.println("Default: " + defaultVar);
    }
}

class Test {
    public static void main(String[] args) {
        Example obj = new Example();

        System.out.println(obj.publicVar);     
        System.out.println(obj.privateVar); // Not accessible
        System.out.println(obj.protectedVar);  
        System.out.println(obj.defaultVar);    
    }
}

class Example {
    private int secret = 100;
    public int getSecret() {
        return secret; //private
    }
}

// constructor
class Student {
    String name;
    int age;

    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}