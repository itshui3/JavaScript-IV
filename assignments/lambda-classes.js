const msg = (val) => console.log(JSON.stringify(val,null,'\t').replace(/,/g,''));
//Jesus' MSG tool to clean up string/object console.logs

// CODE here for your Lambda Classes
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.location = obj.location;
    this.age = obj.age;
  }
  speak() {
    msg(`Hello my name is ${this.name}, I am from ${this.location}.`);
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
} // {name: , location: , age: };

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subj) {

    msg(`Today we are learning about ${subj}.`);
    return `Today we are learning about ${subj}.`;
  }
  grade(student, subj) {
    msg(`${student.name} receives a perfect score on ${subj}`);
    return `${student.name} receives a perfect score on ${subj}`;
  }
  catchPhr() {
    msg(`Catch-Phrase: ${this.catchPhrase}`);
    return `Catch-Phrase: ${this.catchPhrase}`;
  }
  janks(trgStu) {
    if (Math.random() * 2 > 1) {
      trgStu.grade -= Math.floor(Math.random() * 30);
    }

  }
} // {specialty: , favLanguage: , catchPhrase: , name: , location: , age: };

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    msg(`${this.name} announces to ${channel}, @channel Time for stand-up, don't be LATE!`);
  }
  debugsCode(student, subj) {
    msg(`${this.name} debugs ${student.name}'s code on ${subj}`);
  }
} //{gradClassName: ,favInstructor: ,name: ,location: ,age: };

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.prevBackground = obj.prevBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects; // an array
    this.grade = obj.grade;
  }
  listsSubjects() {
    msg('These are my favorite subjects');
    this.favSubjects.forEach( (elem) => {msg(elem)} );
  }
  PRAssignment(subj) {
    msg(`${this.name} has submitted a PR for ${subj}`);
  }
  sprintChallenge(subj) {
    msg(`${this.name} has begun sprint challenge on ${subj}`);
  }
  brownNose(trg) { // show this off
    trg.janks(this);
  }
  graduate() {
    if(this.grade > 70) {
      msg('Okay fine, you can has job');
    } else {
      msg('You\'re not ready. Git more gudder');
    }
  }
} // {prevBackground: , className: , favSubjects: , name: , location: , age: };

// Instructor Initializations
const josh = new Instructor({
  specialty: 'JS',
  favLanguage: 'JS',
  catchPhrase: 'I\'m a big guy and my last name is Knell',
  name: 'Josh Knell',
  location: 'Utah',
  age: '?'
});
const brit = new Instructor({
  specialty: 'UI',
  favLanguage: 'CSS',
  catchPhrase: 'Ay it\'s cold',
  name: 'Brit Hemming',
  location: 'Canada',
  age: 31
});
const luis = new Instructor({
  specialty: 'Node',
  favLanguage: 'Node',
  catchPhrase: 'Don\'t forget the homies',
  name: 'Luis Hernandez',
  age: '?'
});

// PM Initializations
const itel = new ProjectManager({
  gradClassName: 'WEB17',
  favInstructor: ['Dustin', 'Luis', 'Brady', 'Beej Jorgensen'],
  name: 'Itel',
  location: 'LA',
  age: 27,
  catchPhrase: 'Cool'
});
const dylan = new ProjectManager({
  gradClassName: 'WEB17',
  favInstructor: 'Josh Knell',
  name: 'Dylan Dislers',
  location: 'Seattle',
  age: 28,
  favLanguage: 'JS', 
  catchPhrase: 'Nice!'
});
const joscelyn = new ProjectManager({
  name: 'Joscelyn Owen',
  specialty: 'Super Smash Bros',
  favLanguage: 'Javascript',
  catchPhrase: 'Gotta Catch \'Em All'
});
const tommy = new ProjectManager({
  name: 'Tommy Kindle',
  specialty: 'Node.Js',
  favLanguage: 'C#',
  catchPhrase: 'What\'s sleep?',
  gradClass: 'WEB21',
  age: 'guess',
  favInstructor: 'Luis'
});

// Student Initializations
const hui = new Student({
  prevBackground: 'Data Collection Grunt', 
  className: 'WEB25', 
  favSubjects: ['All of them'], 
  name: 'XuHui Zhu', 
  location: 'SF Bay Area', 
  age: 30,
  grade: 87
});
const ash = new Student({
  prevBackground: 'Other PC things',
  className: 'WEB25',
  favSubjects: ['Jetbrains Webstorm'],
  name: 'Ashley Dunham',
  location: 'The Woods',
  age: 29,
  grade: 76
});
const mona = new Student({
  prevBackground: '',
  className: 'WEB25',
  favSubjects: ['HTML', 'React'],
  name: 'Ramona Burns',
  location: 'Utah',
  age: '?', 
  grade: 45
});
const todd = new Student({
  prevBackground: 'Bicycles',
  className: 'WEB25',
  favSubjects: ['Extreme Bicycling'],
  name: 'Todd Murphy',
  location: 'Canada',
  age: '?',
  grade: 99.7
});

// Instructor Test Cases

msg([josh.speak(), josh.catchPhr(), josh.demo('Lambda Launch'), josh.grade(hui, 'Lambda Launch')]);

msg([brit.speak(), 
brit.catchPhr(), 
brit.demo('Flexbox'), 
brit.grade(ash, 'HTML')]);

msg([luis.speak(),
luis.catchPhr(),
luis.demo('Node.js'),
luis.grade(itel, 'Node.Js')]);

// TL Test Cases

itel.speak();
itel.catchPhr();
itel.standUp('WEB25 Itel');
itel.debugsCode(hui, 'Javascript');

dylan.speak();
dylan.catchPhr();
dylan.standUp('Secretly Joining Stand-Ups');
dylan.debugsCode(mona, 'React');

joscelyn.speak();
joscelyn.catchPhr();
joscelyn.standUp('WEB25 Joscelyn');
joscelyn.debugsCode(todd, 'Python');

tommy.speak();
tommy.catchPhr();
tommy.standUp('WEB25 Tommy');
tommy.debugsCode(hui, 'Node.js');

// Student Test Cases hui, ash, mona, todd

hui.speak();
hui.PRAssignment('Javascript');
hui.sprintChallenge('CSS');
hui.listsSubjects();

ash.speak();
ash.PRAssignment('Javascript');
ash.sprintChallenge('CSS');
ash.listsSubjects();

mona.speak();
mona.PRAssignment('Javascript');
mona.sprintChallenge('CSS');
mona.listsSubjects();

// Extra Janks
msg(hui.grade);
josh.janks(hui);
msg(hui.grade);
hui.brownNose(josh);
msg(hui.grade);

console.log([1, 2, 3, 4, 5]);
msg([1, 2, 3, 4, 5]);