let ageUser = prompt("Сколько вам лет")
let nameUser = prompt("Как вас зовут")

let majority = ageUser < 18 ? "Вы несовршеннолетний" : nameUser == "admin" ? "Доступ разрешен" : "Доступ запрещен"

console.log(majority)