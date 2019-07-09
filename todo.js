var ul = document.getElementById('list');
var li;

var addBtn = document.getElementById('add');
addBtn.addEventListener('click', addItem);

var removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', removeItem);

var removeAllBtn = document.getElementById('removeall');
removeAllBtn.addEventListener('click', removeEverything);

function addItem(){
    // console.log("Add Button clicked")
    var input  = document.getElementById('input')
    var newVal = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(newVal);

    if(newVal === ''){
        return false;

    } else{
        //create li element
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')
        
        //create label
        var label = document.createElement('label');
        
        //adding elemnts 

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout( () => {
            li.className = 'visual';
        },3);

        input.value ='';
        


    }
}

    function removeItem(){
        li = ul.children
        for(let i=0; i<li.length; i++){
            while(li[i] && li[i].children[0].checked){
                ul.removeChild(li[i])
            }
        }
    }

function removeEverything(){
    li = ul.children
    for(let i=0; i <li.length; i++){
        while(li[i] &&  li[i].children[0]){
            ul.removeChild(li[i]);
        }
    }
}