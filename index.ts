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

let Alim = new Student(3,"Алимхан", 18)
Alim.introduce()
Alim.talkAboutCourse()

/*Переопределите метод `talkAboutCourse` в классе "Студент" так, чтобы он выводил следующую информацию: "Привет, меня зовут {имя}. Я студент {курс} курса."
Создайте по одному экземпляру класса "Человек" и "Студент", затем вызовите метод `talkAboutCourse` для каждого из них. */

