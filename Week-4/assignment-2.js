function Person(name) {
    this.name = name;
}
  
Person.prototype.teach = function(subject) {
    return `${this.name} teacher is teaching ${subject}`;
};

let teacher = new Person("XYZ");
console.log(teacher.teach("Math"));
