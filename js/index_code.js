const date_today = new Date()

function displayDate() {
    document.querySelector('#date').insertAdjacentHTML('beforeend', `${date_today.getDate()}/${date_today.getMonth()+1}/${date_today.getFullYear()}`)
}