var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('button')?.addEventListener("click", () =>{
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

          function validatePassword(pw: string) {
           var passwordlength = /^\S{10,30}$/m
            return passwordlength.test(pw);
          }

          const pwinput = document.getElementById('password') as HTMLInputElement;
          const pwvalue = emailinput.value;   
          const pwinput2 = document.getElementById('password2') as HTMLInputElement;
          const pwvalue2 = pwinput2.value;    
          if(validatePassword(pwvalue) == false){
            (document.getElementById('pwerror') as HTMLElement).textContent = "A jelszó nem felel meg a követelményeknek"
          }
          else if(pwvalue !== pwvalue2){
            (document.getElementById('pwerror') as HTMLElement).textContent = "A megadott jelszavak címek nem egyeznek egymással"
          }
    })
    
})