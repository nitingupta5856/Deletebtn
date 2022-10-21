var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
 // form submit value
 form.addEventListener('submit',additem);
 //function for add item
 function additem(e){
 e.preventDefault();
 // get input value
 var newitem = document.getElementById('item').value;
 // create new li
 var li=document.createElement('li');
 // add class
 li.className='list-group-item';
 console.log(li);
 // add textnode with input value
 li.appendChild(document.createTextNode(newitem));
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