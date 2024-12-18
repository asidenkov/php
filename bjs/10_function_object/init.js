window.onload = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender; // Пол
    document.getElementById('firstNameOutput').innerText = initPerson.firstName; // Имя
    document.getElementById('surnameOutput').innerText = initPerson.surname; // Фамилия
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic; // Отчество
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear; // Год рождения
    document.getElementById('professionOutput').innerText = initPerson.profession; // Профессия
};
