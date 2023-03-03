export class Admin{

    

    showLogin(){
        const mainElement = document.querySelector('.login')
        mainElement.innerHTML = creatingFormTemp();
          
    showForm.insertAdjacentHTML("afterBegin", htmlForm)
    }
    
    //document.querySelector('#loginSubmit').addEventListener()
}

function creatingFormTemp(){
    
    return `<form action="" method="post">
    <div>
        <label for="email">email</label>
        <input type="email" id="email" />
    </div>
    <div>
        <label for="password">password</label>
        <input type="password" id="password">
    </div>
    <button id="loginSubmit" type="submit">Enter</button>
</form>`
}
