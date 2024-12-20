const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Сергей",
            "id_7": "Федор",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Екатерина",
            "id_4": "Елена",
            "id_5": "Ольга",
            "id_6": "Татьяна",
            "id_7": "Наталья",
            "id_8": "Светлана",
            "id_9": "Виктория",
            "id_10": "Анастасия"
        }
    }`,

    // Профессии для мужчин и женщин
    professionJson: `{
        "male": [
            "Слесарь", "Шахтёр", "Солдат", "Строитель", "Водитель", "Инженер", 
            "Программист", "Менеджер", "Юрист", "Доктор"
        ],
        "female": [
            "Медсестра", "Учитель", "Дизайнер", "Журналист", "Психолог", "Бухгалтер", 
            "Маркетолог", "Художник", "Повар", "Менеджер по продажам"
        ]
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function () {
        return this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function (gender) {
        return gender === this.GENDER_MALE
            ? this.randomValue(this.firstNameMaleJson)
            : this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function (gender) {
        const surname = this.randomValue(this.surnameJson);
        return gender === this.GENDER_MALE ? surname : `${surname}а`;
    },

    randomPatronymic: function (gender) {
        const maleName = this.randomValue(this.firstNameMaleJson);
        const lastChar = maleName.slice(-1);
        const lastTwoChars = maleName.slice(-2);
        let suffix;
    
        if (lastChar === 'й' || lastChar === 'ь') {
            suffix = gender === this.GENDER_MALE ? 'евич' : 'евна';
            return maleName.slice(0, -1) + suffix;
        } else if (lastTwoChars === 'ий') {
            suffix = gender === this.GENDER_MALE ? 'евич' : 'евна';
            return maleName.slice(0, -2) + 'ь' + suffix;
        } else if (lastChar === 'а') {
            suffix = gender === this.GENDER_MALE ? 'ич' : 'ична';
            return maleName.slice(0, -1) + suffix;
        } else if (['ж', 'ч', 'ш', 'щ', 'ц'].includes(lastChar)) {
            suffix = gender === this.GENDER_MALE ? 'евич' : 'евна';
            return maleName + suffix;
        } else {
            suffix = gender === this.GENDER_MALE ? 'ович' : 'овна';
            return maleName + suffix;
        }
    },

    randomBirthYear: function () {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 100; // Максимум 100 лет назад
        const maxYear = currentYear - 18; // Минимум 18 лет (совершеннолетие)
        return this.randomIntNumber(maxYear, minYear);
    },

    // Генерация профессии в зависимости от пола
    randomProfession: function (gender) {
        const professions = JSON.parse(this.professionJson);
        const professionList = gender === this.GENDER_MALE ? professions.male : professions.female;
        return professionList[this.randomIntNumber(professionList.length - 1, 0)];
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};

// Пример использования
const person = personGenerator.getPerson();
console.log(person);
