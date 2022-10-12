var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

document.addEventListener("DOMContentLoaded", () => {
    const nameinput = document.getElementById('username') as HTMLInputElement | null;
    const namevalue = nameinput?.value;

    if(namevalue != null) {
        if(namevalue.length > 30 || namevalue.length < 6){
            (document.getElementById('usererror') as HTMLElement).textContent = "A felhasználónév nem felel meg a követelményeknek"
        }
        else if(format.test(namevalue) == true){
            (document.getElementById('usererror') as HTMLElement).textContent = "A felhasználónév nem tartalmazhat speciális karaktert"
        }
    }
    else{
            (document.getElementById('usererror') as HTMLElement).textContent = "A felhasználónév nem lehet üres!"
    }

    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

        const emailinput = document.getElementById('email') as HTMLInputElement;
        const emailvalue = emailinput.value;    
        const emailinput2 = document.getElementById('email2') as HTMLInputElement;
        const emailvalue2 = emailinput2.value;

      if(validateEmail(emailvalue) == false){
        (document.getElementById('emailerror') as HTMLElement).textContent = "Az email cím nem felel meg a követelményeknek"
      }
      else if(emailvalue !== emailvalue2){
        (document.getElementById('emailerror') as HTMLElement).textContent = "A megadott email címek nem egyeznek egymással"
      }
})