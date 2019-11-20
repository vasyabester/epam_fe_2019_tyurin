let age = 12;// inizialization of variable
if (age > 5) {// check if the age variable is more than five and the condition is true
  age = 5;// rewrite value of age
  console.log('More than 5');
} else if (age < 10) {// this line won't be called because construction "if .. else" has such logic: when statement in "if" has positive condition - another "if..else" would be ignored
  console.log('Less than 5');// so this console.log we wont see
}
