// import * as fs from 'node:fs/promises'
function get_data(){
const form = document.forms['mform']


return {user:form['username'].value ,
        pw: form['password'].value
    }
}

function check_pw(){
   
    let user
    let pw
    user= get_data().user
    pw=get_data().pw
    fetch('scripts/pw.json')
    .then(response => response.json())/// I feel this can be more optimal where u dont have to make the whole json file (data u only get the user that u need)
    .then(data => {var cond= data[user]['password']==pw;/// !!!! fetch is async getting it the program wont wait for it to execute and getting variable from it outside the then wont work you will only get the promise
        if (cond==1){alert('Welcome  ' + user) /// so treating the json file like an API is your bestoption call the fetch exactly when u need it

            return 
        }
        else{   
            alert('Try again LATERR IF1')
            return
        }
    });
    
    
}

// const data = JSON.parse(fs.readFileSync('scripts/pw.json', 'utf8')); //!!!!the path is the path relative to the HTML FILE NOT THE JS FILE

//  import data from '/scripts/pw.json'
// fetch('scripts/pw.json')
//     .then(response => response.json())
//     .then(data => {console.log(data);
//         document.getElementById('submit').onclick=() => check_pw(data)});
a




    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('submit').onclick=() => check_pw()
        // document.getElementById("submit").onclick= () => alert('DONEE')  ///!!!! onclick is now a function that returns alert none ! 
       //Previously in this example: document.getElementById("submit").onclick=alert('DONEE')  onclick will get none and alert('DONE') will be executed no matter what 
    });
