const msg = document.getElementById('msg')
const form = document.getElementById('form-item')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const file = document.getElementById('cv-file').files[0];
    if(!username || !email || !file){
        msg.style.color = 'red'
        msg.textContent = 'Vui lòng điền đầy đủ thông tin và chọn file CV.';
        return;
    }
        msg.style.color = 'green';
        msg.textContent = `Cảm ơn ${username}, CV của bạn đã được gửi!`;

})