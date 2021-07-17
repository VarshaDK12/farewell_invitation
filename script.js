const submit = document.getElementById('submit');

const validate = ()=>{
const password = document.getElementById('password').value.toLowerCase();
const download_div = document.getElementById('download_div');
    if(!password){
        window.alert('Please enter the password')
    }
    if(password ==="ecoians"){
        window.alert('Download the file below')
        download_div.hidden = false;
    }else{
        window.alert('Wrong Password\nPlease try again')
        console.log(password);
    }
}