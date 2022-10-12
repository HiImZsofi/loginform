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
})