/*Определите класс "Человек" (`Person`) со следующими свойствами:

- `имя` (string)
- `возраст` (number)

Добавьте методы:

-  `introduce`, который выводит приветствие в виде: "Привет, меня зовут {имя}."
 */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Привет, меня зовут ${this.name}`);
    
  }
}

/* Создайте класс "Студент" (`Student`), который наследуется от класса "Человек" и добавляет новые свойства:

- `cours` (number)

Добавьте методы:

-  `talkAboutCourse`, который выводит информацию в виде: "Я учусь на {курс} курсе."
*/

class Student extends Person {
  cours: number;

  constructor(cours: number, name: string, age: number) {
    super(name, age)
    this.cours = cours
  }

  talkAboutCourse(): void {
    console.log(`Привет, меня зовут ${this.name}.Я учусь на ${this.cours} курсе`);
    
  }
}


/*Переопределите метод `talkAboutCourse` в классе "Студент" так, чтобы он выводил следующую информацию: "Привет, меня зовут {имя}. Я студент {курс} курса."
Создайте по одному экземпляру класса "Человек" и "Студент", затем вызовите метод `talkAboutCourse` для каждого из них. */

const person1 = new Person("Алимхан", 18);
const student1 = new Student(3, "Алимхан", 18);

person1.introduce();
student1.talkAboutCourse();

/*Создайте класс `Animal`, который имеет следующие свойства:

- `name` (строковое имя животного)
- `age` (возраст животного в годах)
- И методы:
- `speak` (выводит сообщение в консоль "Unknown sound...").
    

Затем создайте класс `Dog`, который наследует от класса `Animal` и переопределяет метод `speak` так, чтобы он выводил сообщение "Woof, woof!". */

class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): void {
    console.log("Unknown sound...");
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  speak(): void {
    console.log("Woof, woof!");
  }
}

let animal = new Animal("Barsik", 3);
let dog = new Dog("neBarsik", 2);

animal.speak();
dog.speak(); 

/*Дополните предыдущее задание, добавив класс Cat, который также наследует от класса Animal и переопределяет метод speak, чтобы он выводил сообщение "Meow, meow!".
Создайте массив из различных объектов классов Dog и Cat и вызовите метод speak для каждого объекта в массиве. Обратите внимание на то, как этот метод работает для каждого класса. */

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  speak(): void {
    console.log("Meow, meow!");
  }
}

const dog1 = new Dog("Лев", 3);
const cat1 = new Cat("Рыжик", 4);

const animals: Animal[] = [dog1, cat1];

for (const animal of animals) {
  animal.speak();
}