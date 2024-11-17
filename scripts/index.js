function get_data(){
const form = document.forms['mform']


return form['username'] , form['password']
}

function check_pw(data){
    user,password= get_data()
    if (user in data){
        if(data[user]["password"]==password){
            alert('Welcome' + username)
            return 
        }
        else{
            alert('Try again')
            return
        }
    }
    else{
        alert('Try again')
        return
    }
}
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('scripts/pw.json', 'utf8')); //the path is the path relative to the HTML FILE NOT THE JS FILE

// import data from './pw.json' assert { type: 'json' }


getElementById('submit').onclick=check_pw(data)