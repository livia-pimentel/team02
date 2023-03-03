<<<<<<< HEAD:src/js/Admin.mjs
export class Admin{
    constructor()
=======
class Admin{
    //constructor()
>>>>>>> 70367f8 (kevins changes):src/js/admin.mjs

    showLogin(){
        const showForm = document.querySelector('.login')
        const creatingFunction =  creatingFunction();
        const htmlForm = `<form action="" method="post">
        <div>
            <label for="email">email</label>
            <input type="email" id="email" />
        </div>
        <div>
            <label for="password">password</label>
            <input type="password" id="password">
<<<<<<< HEAD:src/js/Admin.mjs
        </div>
        ${creatingFunction}
        <button id="loginSubmit" type="submit">Enter</button>
    </form>`    
=======
        </div>`+
        createSubmitButton()
    `</form>`    
>>>>>>> 70367f8 (kevins changes):src/js/admin.mjs
    showForm.insertAdjacentHTML("afterBegin", htmlForm)
    
<<<<<<< HEAD:src/js/Admin.mjs
    //document.querySelector('#loginSubmit').addEventListener()
}
=======
    }
    //document.querySelector('#loginSubmit').addEventListener()
    
}

function createSubmitButton(){
    //const element = document.createElement("button")

    const buttonSumbit = `<button id="loginSubmit" type="submit">Enter</button>`;
    return buttonSumbit
}

>>>>>>> 70367f8 (kevins changes):src/js/admin.mjs
