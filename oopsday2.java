 // parameterized constructor

 class student {
    int age;
    int mark;
    student(int a, int m){
        age=a;
        mark=m;
    }
    void display(){
        System.out.println("Age"+ age);
        System.out.println("Mark"+ mark);
    } 
 }
class main{
    public static void main(String [] args){
        student s= new student(20, 90);
        s.display();
    }
} 

// encapsulation

class student{
    private String name;
    private int age;
    public void setName(String n){
        name=n;
    }
    public String getName(){
        return name;
    }
    public void setAge(int a){
        age=a;
    }
    public int getAge(){
        return age;
    }
}
class main{
    public static void main(String args[]){
        student s= new student();
        s.setName("Prithi");
        s.setAge(20);
        System.out.println("Name"+ s.getName());
        System.out.println("Age"+ s.getAge());                  
    }
}

//inheritance

class animal{
    int legs=4;
    void eat(){
        System.out.println("Animal can  eats");
    }
    void sleep(){
        System.out.println("Animal can sleeps");
    }
}
class dog extends animal{
    void bark(){
        System.out.println("Dog can barks");        
    }
}
class inheritance{
    public static void main(String [] args){
        animal a=new animal();
        a.eat();
        a.sleep(); 
    }
}


// polymorphism

// poly means many and morphism is the form
// a method has many forms is called polymorphism
// in one name many forms is polymorphism 

//overloading

// it has the same method name with different parameters
// its is the type of compile time polymorphism

class calculator{
    int add(int a, int b){
        return a+b;
    }
    double add(double a, double b){
        return a+b;
    }
}
class main{
    public static void main(String args[]){
        calculator c= new calculator();    
        c.add(10, 20);
        c.add(10.5, 20.5);
    }
}


// overriding

// it is the process of changing the method body of the parent class in the child class
// it is the type of runtime polymorphism
class animal{
    void eat(){
        System.out.println("Animal can  eats");
    }
}
class dog extends animal{   
    void eat(){
        System.out.println("Dog can eat");        
    }
}
class main{
    public static void main(String [] args){
        dog d= new dog();
        d.eat(); 
    }   
}

//types of inhertaince 

// single inheritance , MULTIPLE INHERITANCE, MULTILEVEL INHERITANCE, HIERARCHICAL INHERITANCE  

// single inheritance

class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}
class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}
class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat(); 
        d.bark(); 
    }
}


// multilevel inherritance
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}
class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}
class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy is weeping");
    }
}
class Main {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();  
        p.bark();  
        p.weep();  
    }
}


// hierachical inheritance
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}
class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}
class Cat extends Animal {
    void meow() {
        System.out.println("Cat is meowing");
    }
}
class Cow extends Animal {   
    void moo() {
        System.out.println("Cow is mooing");
    }
}
class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        Cat c = new Cat();
        Cow cw = new Cow();
        d.eat();
        d.bark();
        c.eat();
        c.meow();
        cw.eat();
        cw.moo();
    }
}


// hybrid inheritance
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

// Hierarchical
class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}
// Multilevel
class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy is weeping");
    }
}
//hierarchical branch
class Cat extends Animal {
    void meow() {
        System.out.println("Cat is meowing");
    }
}
class Main {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        Cat c = new Cat();
        p.eat();
        p.bark();
        p.weep();
        c.eat();
        c.meow();
    }
}


// abstraction 
// it is the process of daata hiding and showing only the neccessary detials to the user
abstract class shape{
    abstract void area();
}
class circle extends shape{
    void area(){
        System.out.println("Area of circle is 3.14*r*r");
    }
}

class rectangle extends shape{
    void area(){
        System.out.println("Area of rectangle is l*b");
    }
}
class main{
    public static void main(String args[]){
        circle c= new circle(); 
        c.area();
        rectangle r= new rectangle();
        r.area();
    }
}

// interface
// it is a collection of abstract methods , it should be contain only abstract methods but not the method body
// it is used in the multiple inheritance

interface father{
    abstract talk();
    abstract walk();
}
class interface implements father{
    void talk(){
        System.out.println("Father can talk");
    }
    void walk(){
        System.out.println("Father can walk");
    }
}
class main{
    public static void main(String args[]){
        interface i= new interface();
        i.talk();
        i.walk();
    }
}

// multiple inheritence using the interface 

interface father{
    abstract talk();
    abstract walk();
}
interface mother{
    abstract talk();
    abstract walk();
}
class son implements father, mother{
    void talk(){
        System.out.println("Father can talk");
    }
    void walk(){
        System.out.println("Father can walk");
    }
}
class main{
    public static void main(String args[]){
        son s= new son();
        s.talk();
        s.walk();
    }
}
