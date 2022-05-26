document.getElementById('button1').addEventListener('click',loaded);

function loaded(){

    xhr=new XMLHttpRequest();
    xhr.open('GET','customer.json',true);

    xhr.onload=function(){
        if(this.status===200){
           customers=JSON.parse(this.responseText);
           output=`
               <ul>
               <li>name:${customers.name}</li>
               <li>gender:${customers.gender}</li>
               <li>age:${customers.age}</li>
               </ul>           
           
           `
           document.getElementById('output').innerHTML=output;  
        }
    }

xhr.send();
}