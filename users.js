


let users = [
  {
    id: "123456789",
    createdDate: "06-01-2021",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
    action: "",
  },
  {
    id: "987654321",
    createdDate: "25-07-2021",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
    action: "",
  },
  {
    id: "852963741",
    createdDate: "15-09-2021",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
    action: "",
  },
];

const mytable = document.getElementById("table");

users.forEach((user) => {
  let newRow = document.createElement("tr");
  Object.values(user).forEach((value) => {
    let cell = document.createElement("td");
    cell.innerText = value;
    newRow.appendChild(cell);
    newRow.classList.add("cell1");
    newRow.appendChild(cell);
    cell.classList.add(user.id);
    if (cell.innerHTML === "") {
      users.forEach((personId) => {
        cell.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        cell.classList.add("trash");
      });
    }
    if(cell.innerHTML === "En validation"){
      cell.classList.add('enValidation')
    }
    if(cell.innerHTML === "Validé"){
      cell.classList.add('Validé')
    }
    if(cell.innerHTML === "Rejeté"){
      cell.classList.add('Rejeté')
    }
    const deleteUser = document.querySelectorAll(".trash");
    deleteUser.forEach((icon) => {
      icon.addEventListener("click", () => {
        let index;
        for (let i = 0; i < mytable.rows.length; i++) {
          mytable.rows[i].onclick = function () {
            index = this.rowIndex;
            mytable.deleteRow(index);
            console.log(index);
          };
        }
      });
    });
  });
  mytable.appendChild(newRow);
});


const form = document.querySelectorAll('.form');
const submitInput = document.querySelector('.submit');
let arrayOfUsers = [];
const getDataForm = (e)=>{
  e.preventDefault();
  let newUser = {
    id:Date.now(),
    createdDate: document.getElementById('date').value,
    status: document.getElementById("stat").value,
    firstName: document.getElementById("name").value,
    lastName: document.getElementById("lastName").value,
    userName: document.getElementById("userName").value,
    registrationNumber: document.getElementById("matricule").value,
    action: "",
  }
  arrayOfUsers.push([...arrayOfUsers,newUser]);
  document.forms[0].reset();
  
    const rowCount = mytable.rows.length;
    const row = mytable.insertRow(rowCount);
  
    const cell1 = row.insertCell(0);
    cell1.innerHTML = newUser.id;
  
    const cell2 = row.insertCell(1);
    cell2.innerHTML = newUser.createdDate;
  
    const cell3 = row.insertCell(2);
    cell3.innerHTML = newUser.status;
    
    const cell4 = row.insertCell(3);
    cell4.innerHTML = newUser.firstName;
  
    const cell5 = row.insertCell(4);
    cell5.innerHTML = newUser.lastName;
  
    const cell6 = row.insertCell(5);
    cell6.innerHTML = newUser.userName;
  
    const cell7 = row.insertCell(6);
    cell7.innerHTML = newUser.registrationNumber;
  
    const cell8 = row.insertCell(7);
    cell8.innerHTML = `<i class="fa-solid fa-trash-can "></i>`;
    cell8.classList.add("trash")

    form_container.classList.toggle("popUp")
}

const deleteUser = document.querySelectorAll(".trash");
    deleteUser.forEach((icon) => {
      icon.addEventListener("click", () => {
        let index;
        for (let i = 0; i < mytable.rows.length; i++) {
          mytable.rows[i].onclick = function () {
            index = this.rowIndex;
            mytable.deleteRow(index);
            console.log(index);
          };
        }
      });
    });
submitInput.addEventListener('click',getDataForm);

const showForm = document.querySelector('.showForm');
const form_container = document.querySelector('.form_container');
showForm.addEventListener('click',()=>{
  form_container.classList.toggle("popUp")
})





























//let users = [
//     {
//       id: "123456789",
//       createdDate: "2021-01-06",
//       status: "En validation",
//       firstName: "Mohamed",
//       lastName: "Taha",
//       userName: "mtaha",
//       registrationNumber: "2584",
      
//     },
//      {
//       id: "987654321",
//       createdDate: "2021-07-25",
//       status: "Validé",
//       firstName: "Hamid",
//       lastName: "Orrich",
//       userName: "horrich",
//       registrationNumber: "1594",
      
//     },
//        {
//       id: "852963741",
//       createdDate: "2021-09-15",
//       status: "Rejeté",
//       firstName: "Rachid",
//       lastName: "Mahidi",
//       userName: "rmahidi",
//       registrationNumber: "3576",
      
//     }
// ];

// let table = document.querySelector('#di-locations');

// users.forEach(user => {
//     let tr = document.createElement('tr');
//     user.action = `<i class='fa-solid fa-trash-can  '  ></i>`
//     Object.entries(user).forEach(value => { 
//       let td = document.createElement('td');
//       td.innerHTML= value[1];
//       tr.appendChild(td);
//       tr.lastChild.setAttribute('onclick',"deleteRow(this)");
//       td.parentNode.setAttribute('id',user.id)
//     });
//     table.appendChild(tr);
// });



// function deleteRow(r) {
//   let i2 = r.parentNode.rowIndex;
//   table.deleteRow(i2);
// }


// let adduser = document.querySelector('.adduser');
// let form = document.querySelector('.formcontainer');
// let submit = document.querySelector('#submit');

// let nameinput = document.querySelector('#nameinput');
// let usernameinput = document.querySelector('#usernameinput');
// let matriculeinout = document.querySelector('#matriculeinout');
// let lastnameinput = document.querySelector('#lastnameinput');
// let dateinput = document.querySelector('#dateinput');
// let etatinput = document.querySelector('#etatinput');
// let formInputs = document.querySelector('#form');

// formInputs.addEventListener('sbumitt',(e)=>{
//   e.preventDefault();
//   let name = nameinput.value;
//   let userName = usernameinput.value;
//   let matricule = matriculeinout.value;
//   let lastName = lastnameinput.value;
//   let date = dateinput.value;
//   let etat = etatinput.value;
//   let id = Math.random(100 * 500);

//   let newPbjectValues = {
//     id : id,
//     createdDate: date,
//     status: etat,
//     firstName: name,
//     lastName: lastName,
//     userName: userName,
//     registrationNumber: matricule,
//   }
//   users.push([...users , newPbjectValues]);

//   nameinput.innerHTML = '';
//   usernameinput.innerHTML = '';
//   matriculeinout.innerHTML = '';
//   lastnameinput.innerHTML ='';
//   dateinput.innerHTML ='';
//   etatinput.innerHTML='';

// })

// adduser.addEventListener('click',()=>{
//   form.classList.add('active');
// })
// submit.addEventListener('click',()=>{
 
//   console.log(users);

//   // form.classList.remove('active');
// })




















// // let uniqueValue =()=>{
// //     users.filter((userElem,i)=>userElem.id !== userElem.id);
// // }
// // deletebtn.forEach(btn => {
// //         btn.addEventListener('click',(e)=>{
// //             let delData = e.target.getAttribute('data_id');
// //             let deletedItem = users.splice(delData,1);
            
// //             console.log(uniqueValue);
// //             //const value = users.map(user => user.id)
// //             //console.log(value);
// //             // let row = button.parentNode.parentNode;
// //             // table.deleteRow(row.rowIndex);
// //             // let rowCount = users.length;  
// //             // for (let i = 0; i < rowCount; i++) {  
// //             //     let row = table.rows[i];  
// //             //     let rowObj = row.cells[0].childNodes[0];  
// //             //     if (rowObj.name == users.name) {  
// //             //         table.deleteRow(i);  
// //             //         rowCount--;  
// //             //     }  
// //             // }  
// //             // users = [...users,newObj];
// //             // console.log(users);
// //             //let rowCount = table.rows.length;
// //             // table.deleteRow(deletedItem);
// //             // if(rowCount > users.length){
// //             //     let row = table.deleteRow(rowCount-1);
// //             //     console.log(row);
// //             //     rowCount--;
// //             // }
// //         })
// // });

