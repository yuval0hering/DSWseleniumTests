/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var jhon = {
    fullName: 'Jhon Smith',
    mass: 89,
    height: 1.73,
    BMICalculate: function() {
        this.BMI=(this.mass/(this.height*this.height));
        return this.BMI;
    } 
};

var mark = {
    fullName: 'Mark Smith',
    mass: 70,
    height: 1.75,
    BNICalculate: function() {
        this.BMI=(this.mass/(this.height*this.height));
        return this.BMI;
    } 
};

if(mark.BNICalculate()>jhon.BMICalculate()){
    console.log("Mark");
}
else{
    console.log("Jhon "+ jhon.BMI+ " ,"+mark.BMI );
}