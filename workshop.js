// #Problem :1

function multiplier(){
    this.num1=1;

    //first method initially returns the number supplied * 1
    this.multiply=function(number) {
        this.num1 = this.num1 * number;
    }

    // second method returns the last answer returned from multiply
    this.getCurrentValue=function() {
        console.log("Last answer returned: "+ this.num1);
    }
} 
var myNum = new multiplier();

myNum.multiply(7);
myNum.getCurrentValue();



// #Problem :2


// function Album(photos) {
//     this.photos=[];

//     // method to add new photo
//     this.addPhoto = function(photo_instance) {              
//          this.photo_instance = photo_instance;
//          this.photos.push(photo_instance);      
//     }

//     // another method to return all photos 
//     this.getPhotos = function() {
//         for(let x of this.photos){
//           console.log("List of my Pictures: "+ x.photo_name);
//         }
//     }
    
//     // another method to access a specific photo by the order it was added
//     this.getphotoindex = function(photo_index) {
//             this.photo_index=[];
//         console.log(this.photos[photo_index]);            
//     }
// }

// function Photo(photo_name, location) {
//     this.photo_name = photo_name;
//     this.location = location;
// }
// var Pictures = new Album();          
// var photo_one = new Photo("Image1.jpg","\Desktop\nycda\Aug6\Workshop");         
// var photo_two = new Photo("Image2.jpg","\Desktop\day1");
// var photo_four = new Photo("Sunrise.jpg","\dfvdfvf/cdfv");


// Pictures.addPhoto(photo_one);
// Pictures.addPhoto(photo_two);
// Pictures.addPhoto(photo_four);

// // console.log(photo_one);
// // console.log(photo_two);

//  Pictures.getPhotos();

// Pictures.getphotoindex(1);



//Problem : 3


// function Person(fname,lname,email,age) {
//     this.fname=fname;
//     this.lname=lname;
//     this.email=email;
//     this.age=age;
// }
  
// function Teacher(fname,lname,email,age,subject_taught) {
//     this.subject_taught=subject_taught;
    
//     Person.call(this,fname,lname,email,age);
  
//      this.get_teacherinfo = function() {
//         console.log(fname + " ," +lname+" ,"+ email + " ," + " , " + age +" ," +subject_taught);
//     }
// }
  
// function Student(fname,lname,email,age,grades) {
//     this.grades=grades;
    
//   Person.call(this,fname,lname,email,age);
  
//   this.get_studentinfo = function() {
//         console.log(fname + " ," + lname + " ," + email + " ," + age +" ," + grades);
//     }
// }

// function School() {
//     this.students=[];
//     this.teachers=[];
    
//     this.addstudent = function(stud) {
//         this.students.push(stud);
//     }
//     this.addteacher = function(teach) {
//         this.teachers.push(teach);
//     }
//     this.liststudents = function() {
//         for(let x of this.students) {
//             console.log(x);
//         }
//     }

//     this.listteachers = function() {
//         for (let teacher of this.teachers) {
//             console.log(teacher)
//         }
//     }
// }
// // instances  
// var my_school = new School();
// var name1= new Student("abcd","wertyu","qwrt@gmail.com",20,4);
// var name2= new Student("tarana","patel","tarana@gmail.com",28,4);
// my_school.addstudent(new Student("mike","ertyu","mike@yahoo.com",21,3));
// my_school.addstudent(new Student("tisa","heldef","tisa@yahoo.com",26,2));

// my_school.addteacher(new Teacher("hjluot","tyujku","fgthy@gmail.com",40,"Maths"));
// my_school.addteacher(new Teacher("asdfel","gojluo","really@gmail.com",35,"English"));
// my_school.addteacher(new Teacher("bryan","king","bryan@nycda.com",30,"Javascript"));

// my_school.addstudent(name1);
// my_school.addstudent(name2);

// my_school.liststudents();
// my_school.listteachers();


