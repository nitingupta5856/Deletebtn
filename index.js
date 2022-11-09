var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
 // form submit value
 form.addEventListener('submit',additem);
 //function for add item
 function additem(e){
 e.preventDefault();
 // get input value
 var newitem = document.getElementById('item').value;
 var des = document.getElementById('description').value;
 // create new li
 var li=document.createElement('li');
 // add class
 li.className='list-group-item';
 console.log(li);
 // add textnode with input value
 li.appendChild(document.createTextNode(newitem));
 li.appendChild(document.createTextNode(des));
 console.log(li);
 // create edit btn
 var editbtn=document.createElement('button');
 // add class to editbtn
 editbtn.className= 'btn btn-primary btn-sm float-right edit';
 // append textnode 
 editbtn.appendChild(document.createTextNode('E'));


 // create del button
 var deletebtn = document.createElement('button');
 // add class to delete btn
 deletebtn.className= 'btn btn-danger btn-sm float-right delete';
 // append textnode 
 deletebtn.appendChild(document.createTextNode('x'));
 // append button to li
 li.appendChild(deletebtn);
  // append button to li~
 li.appendChild(editbtn);
 itemList.appendChild(li);

 }

 // for delete
 itemList.addEventListener('click', removeitem);
 function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
    }
    

    }
 }

 var filter =document.getElementById('filter');
 filter.addEventListener('keyup',filterItems);
 // filter item
 function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    // get lis
    var items = itemList.getElementsByTagName('li');
    // converts to an array
    Array.from(items).forEach(function(item){
   var itemName = item.firstChild.textContent;
   var desc = item.childNodes[1].textContent;
   if(itemName.toLowerCase().indexOf(text)!=-1 || desc.toLowerCase().indexOf(text)!=-1){
    item.style.display='block';
   }
   else{
    item.style.display='none';
   }
    })
 }


// const obj ={
//    "name1":"nitin",
//    "name2":"rohan",
//    "name3":"rinku"
// }

// // console.log(Object.keys(obj));
// var objArr =Object.keys(obj);
// objArr.forEach(value => {
//    console.log(obj[value])
// });


// call function
// var obj ={num:2};
//  var addToThis= function (a, b){
//     return this.num +a+b;
// };

// console.log(addToThis.call(obj, 3, 2));

// Apply function
// var obj ={num:2};
//  var addToThis= function (a, b){
//     return this.num +a+b;
// };
// var arr = [1,2]
// console.log(addToThis.apply(obj, arr));

// bind function
// var obj ={num:2};

//  var addToThis= function (a, b){
//     return this.num +a+b;
// };
// var arr = [1,2]
// var bound = addToThis.bind(obj)
// console.log(bound(1,2));

// printAge
// var student = {age:20};
// function printAge(){
//    return this.age;
// }
// var bound= printAge.bind(student);
// console.log(bound(this.age));


// function curring
    // by bind mehod
    let multiply = function (x,y){
      console.log(x*y);
    };
   let  multiplyByTwo = multiply.bind (this,3);
   multiplyByTwo(2);
   let  multiplyByThree = multiply.bind (this,3);
   multiplyByThree(5);

     // by closer mehod
     let multiply2 =function(x){
      return function(y){
         console.log(x*y);
      }
     };
     let  multiplyByTwo2 = multiply2 (3);
     multiplyByTwo2(2);

 
 