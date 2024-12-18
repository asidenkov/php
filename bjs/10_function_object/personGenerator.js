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
            "id_7": "Михаил",
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
    patronymicMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Сергеевич",
            "id_7": "Михайлович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Сергеевна",
            "id_7": "Михайловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Шахтёр",
            "id_3": "Солдат",
            "id_4": "Строитель",
            "id_5": "Водитель",
            "id_6": "Инженер",
            "id_7": "Программист",
            "id_8": "Менеджер",
            "id_9": "Юрист",
            "id_10": "Доктор"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Учитель",
            "id_2": "Доктор",
            "id_3": "Программист",
            "id_4": "Менеджер",
            "id_5": "Дизайнер",
            "id_6": "Журналист",
            "id_7": "Психолог",
            "id_8": "Бухгалтер",
            "id_9": "Юрист",
            "id_10": "Маркетолог"
        }
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
        return gender === this.GENDER_MALE
            ? this.randomValue(this.patronymicMaleJson)
            : this.randomValue(this.patronymicFemaleJson);
    },

    randomBirthYear: function () {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 100; // Максимум 100 лет назад
        const maxYear = currentYear - 18; // Минимум 18 лет (совершеннолетие)
        return this.randomIntNumber(maxYear, minYear);
    },

    randomProfession: function (gender) {
        return gender === this.GENDER_MALE
            ? this.randomValue(this.professionMaleJson)
            : this.randomValue(this.professionFemaleJson);
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
