class Admin{
    //constructor()

    showLogin(){
        const showForm = document.querySelector('.login')
        const htmlForm = `<form action="" method="post">
        <div>
            <label for="email">email</label>
            <input type="email" id="email" />
        </div>
        <div>
            <label for="password">password</label>
            <input type="password" id="password">
        </div>`+
        createSubmitButton()
    `</form>`    
    showForm.insertAdjacentHTML("afterBegin", htmlForm)
    
    }
    //document.querySelector('#loginSubmit').addEventListener()
    
}

function createSubmitButton(){
    //const element = document.createElement("button")

    const buttonSumbit = `<button id="loginSubmit" type="submit">Enter</button>`;
    return buttonSumbit
}

