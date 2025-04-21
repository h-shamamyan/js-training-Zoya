/*
Homework: Create an `Employee` Class (No Inheritance)

🚀 Objective:
Create a JavaScript class named `Employee` that represents an employee with strict validation rules 
and meaningful output using getters and methods.

✅ Properties:
Your class should have the following properties, all validated via setters:

1. name (String):
   - Must be between 2 and 15 characters.
   - Must be a string.
   - Normalized: first letter uppercase, the rest lowercase.

2. surname (String):
   - Same validation rules and normalization as name.

3. email (String):
   - Must follow the basic format: x.x@xx.
   - Should be trimmed (no leading/trailing spaces).
   - Must be converted to lowercase.

4. phoneNumber (String):
   - Must be a string.
   - Must be exactly 9 digits.
   - Must start with one of the valid Armenian mobile prefixes: 
     091, 093, 094, 095, 096, 097, 098, or 099.
   - No extra characters allowed (only digits, no "+" or dashes).

5. position (String):
   - Must be between 2 and 50 characters.

6. salary (Number):
   - Must be a number.
   - Must be greater than or equal to 68,000 AMD (minimum net salary in Armenia).

7. isRemote (Boolean):
   - Must be either true or false.

All values must be assigned through their respective setters during object construction. 
If any validation fails, throw an Error with a descriptive message.

📤 Getter:
Create a getter named `info` that returns a complete summary of the employee:

Example:
"Employee information: Bob Henderson is a QA Automation Engineer. He works remotely. 
His salary is 670000 AMD. Phone number: 098666666. 
Email: bob.henderson@email.com"

- If `isRemote` is false, the sentence should say: "He works on-site."

🔧 Methods:

1. giveRaise(amount):
   - Increases the salary by the given amount (number).
   - Validates that the input is a number.

2. raiseSalary(percent):
   - Increases the employee’s current salary by the given percent.
   - The percent input:
     - Must be a number.
     - Must be greater than 0.
   - Throws an error if input is invalid.

3. changePosition(newPosition):
   - Changes the employee’s position to the given value.
   - Validation rules:
     - Must be a string.
     - Must be between 2 and 50 characters.
   - Throws an error if the input is invalid.
*/
class Employee { 
  //Name
  constructor(name, surname, email, phoneNumber, position, salary, isRemote) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.position = position;
    this.salary = salary;
    this.isRemote = Boolean(isRemote);
  }
  set name(value) {
    if (typeof value !== 'string'){
      throw new Error('Name must be a string');
    }
    if (value.length < 2 || value.length > 15) {
      throw new Error('Invalid character count for name')
    }
    let normalizedValue = value[0].toUpperCase() + value.slice(1,value.length).toLowerCase();
    this._name = normalizedValue;
  };

  get name() {
    return this._name;
  }

  set surname(value) {
    if (typeof value !== 'string'){
      throw new Error('Surname mmust be a string');
    }
    if (value.length < 2 || value.length > 15) {
      throw new Error('Invalid character count for surname')
    }
    let normalizedValue = value[0].toUpperCase() + value.slice(1,value.length).toLowerCase();
    this._surname = normalizedValue;
  }
  get surname() {
    return this._surname;
  }
  //Email
  set email(value) {
    if (!value.includes('@')) {
      throw new Error('Email format is incorrect');
    }
    let finalValue = value.trim().toLowerCase();
    this._email = finalValue;
  };
  get email() {
    return this._email;
  }
  //phonenumber
  set phoneNumber(value) {
    if (value.length !== 9) {
      throw new Error('Invalid character count for phone number. Character count is 9')
    }
    if (typeof value !== 'string'){
      throw new Error('Input must be a string for phone number');
    }
    const validPrefixes = ["091", "093", "094", "095", "096", "097", "098", "099"];
    if (!validPrefixes.some(prefix => value.startsWith(prefix))) {
      throw new Error("Incorrect mobile prefix");
    }
    for (let i = 0; i < value.length; i ++) { 
      if (isNaN(parseInt(value[i]))) {
        throw new Error ('No extra characters allowed for phone Number')
      }
    }
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  //Position
  set position(value) {
    if (typeof value !== 'string'){
      throw new Error('Input must be a string for position');
    }
    if (value.length < 2 || value.length > 50) {
      throw new Error('Invalid character count for position')
    }
    this._position = value;
  }
  get position() {
    return this._position; // this._position = value;
  }
  //Salary
  set salary(value){
    if (typeof value !== 'number') {
      throw new Error('Input must be a number for salary');
    }
    if (value <= 68000 )
    {
      throw new Error('Salary must be greater than or equal to AMD 68,000')
    }
    this._salary = value;
  }
  get salary() {
    return this._salary;
  }
  
  get info() {
    const remoteStatus = this.isRemote ? "remotely" : "in the office";
    return `Employee information: ${this.name} ${this.surname} is a ${this.position}. She works ${remoteStatus}. Her salary is AMD ${this.salary} . Phone number ${this.phoneNumber}. Email: ${this.email}.`
  }

  giveRaise(amount) {
    if (typeof amount !== 'number') {
      throw new Error('Value for salary raise must be a number');
    }
    let raisedSalary = this.salary * amount; // this multiplies the current salary by the amount, instead of adding the raise to the current salary.
     // the correct code should be 
     let raisedSalary = this.salary + amount;
    return raisedSalary;
  };

  raiseSalary(percent) {
    if (typeof percent !== 'number') {
     throw new Error('Percent must be a number');
    }
    if (percent < 0) {
      throw new Error('Percent must be greater than 0');
    };
    let increasedSalary = (this.salary * percent) / 100; // The method calculates the increase but doesn't apply it to the current salary.
     // correct code should be 
     this._salary += this._salary * (percent / 100);
    return increasedSalary;
  }

  changePosition(newPosition) {
    this.position = newPosition;
    if (typeof newPosition !== 'string'){
      throw new Error('New position must be a string');
    }
    if (newPosition.length < 2 || newPosition.length > 50){
      throw new Error('New position invalid character count');
    }
    return newPosition;
  }
}
const EmployeeOne = new Employee(
  'Zoya',
  'Karapetyan',
  'zoya_k@purlin.com',
  '094921191',
  'QA Team Lead',
  80000,
  false,
)

//I cant see my errors in terminal, i have to use try catch to see them
console.log(EmployeeOne.info);
console.log(EmployeeOne.giveRaise(5));
console.log(EmployeeOne.raiseSalary(5));
console.log(EmployeeOne.changePosition('Automation QA'));




