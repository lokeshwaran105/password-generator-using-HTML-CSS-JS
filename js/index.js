function generate() {
    let dic = "";

    if(document.getElementById('lowercase').checked){
        dic += "qwertyuiopasdfghjklzxcvbnm";
    }
    if(document.getElementById('uppercase').checked){
        dic += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if(document.getElementById('numbers').checked){
        dic += "0123456789";
    }
    if(document.getElementById('special-characters').checked){
        dic += "@!#$%^&*()_+-=`~?/,.<>{}[]\|';:";
    }

    var length = document.getElementById('range-mtr').value;

    if(dic.length === 0 || length < 0){
        return;
    }

    let password = "";

    for(let i=0; i<length; i++){
        const pos = Math.floor(Math.random() * dic.length);
        password += dic[pos];
    }

    console.log(password);
    document.getElementById('result').value = password;

}


document.getElementById('range-mtr').addEventListener(
    'input', (e)=>{
        document.getElementById('range-res').innerText = e.target.value;
        generate();
    }
)


generate();
