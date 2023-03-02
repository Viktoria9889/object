
const conteiner = document.querySelector('.conteiner > ol')
const btnPush = document.querySelector('.btn_push');
const btnClear = document.querySelector('.btn_clear');
const inputName = document.querySelector('.input_name');
const inputSurname = document.querySelector('.input_surname');
const inputBirthday = document.querySelector('.input_birthday')

let name = "";
let surname = "";
let birthday = "";

let arr = [
    {name: inputName.value, surname: inputSurname.value, birthday: inputBirthday.value}
];

console.log(arr)

const render = () => {
 
    const html = arr.map((item)  => {
        htmlChange = `<li class="li">${item.name} ${item.surname} ${item.birthday}</li>`
        return htmlChange
    
    })
    console.log(html)
    conteiner.innerHTML = html;
   
}

btnPush.addEventListener('click', () => {
  
    if (inputName.value === '') {
        return;
    }
     else if (inputSurname.value === '') {
            return;
    } else if (inputBirthday.value == 'дд.мм.рррр') {
        return;
    } 
    else  {
       arr.push({name: inputName.value, surname: inputSurname.value, birthday: inputBirthday.value});
        render();
        
    } 
    
})

btnClear.addEventListener('click', () => {
    arr = [];
    conteiner.innerHTML = '';
    
})