const { Text, CalendarDay, Select, Relationship, Integer } = require('@keystonejs/fields')

const ownerType = [
  'Чабан',
  'Коневодство',
  'Владелец фермы',
  'КРС'
]

const Owner = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
      label: 'ФИО'
    },
    birth: {
      type: CalendarDay,
      yearRangeFrom: '1990',
      yearRangeTo: '2020',
      label: 'Дата Рождения'
    },
    field: {
      type: Select,
      options: ownerType,
      dataType: 'string',
      label: 'Род деятельности'
    },
    address: {
      type: Text,
      label: 'Адрес'
    },
    phone: {
      type: Text,
      label: 'Номер телефона'
    },
    horses: {
      type: Relationship,
      ref: 'Horse.owner',
      many: true,
      label: 'Лошади'
    },
    emergencyContactName: {
      type: Text,
      label: "Имя доп. контакта"
    },
    emergencyContact: {
      Type: Text,
      label: "Телефон"
    }
  }
}

const Horse = {
  fields: {
    name: {
      type: Text,
      isRequired: true
    },
    birth: {
      type: CalendarDay,
      yearRangeFrom: '1990',
      yearRangeTo: '2020',
      label: 'Дата Рождения'
    },
    owner: {
      type: Relationship,
      ref: 'Owner.horses',
      many: false,
      label: 'Хозяин'
    },
    height: {
      type: Integer,
      label: 'Высота в холке'
    },
    width: {
      type: Integer,
      label: 'Обхват, ширина груди'
    },
    long: {
      type: Integer,
      label: 'Косая длина туловища'
    },
    mouth: {
      type: Integer,
      label: 'Обхват пясти',
    },
    head: {
      type: Integer,
      label: 'Обхват головы'
    },
    neck: {
      type: Integer,
      label: 'Обхват шеи'
    }
  }
}

module.exports = {
  Owner,
  Horse
}