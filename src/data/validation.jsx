import * as yup from 'yup'

const LETTERS_REGEX = /^[a-zа-яё\s]+$/iu
const NUMBERS_REGEX = /^\d+$/
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/

export const validationSchemaLogin = {
  email: yup
    .string()
    .email(`Введен некорректный email`)
    .required('Обязательно'),

  password: yup
    .string()
    .matches(
      PWD_REGEX,
      'Пароль должен содержать англ заглавные и строчные буквы, цифры. Минимум 6 символов',
    )
    .required('Обязательно'),
}

export const validationSchemaProfile = {
  fullName: yup
    .string()
    .matches(LETTERS_REGEX, 'Только буквы')
    .min(3, 'Слишком короткое Имя')
    .max(20, 'Слишком длинное Имя'),

  email: yup.string().email(`Введен некорректный email`),

  city: yup
    .string()
    .matches(LETTERS_REGEX, 'Только буквы')
    .min(3, 'Минимум 3 буквы')
    .max(20, 'Слишком длинное'),

  birthday: yup
    .string()
    .matches(
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g,
      'Неправильная дата. Формат: ДД/ММ/ГГГГ',
    ),

  phone: yup
    .string()
    .matches(NUMBERS_REGEX, 'Только цифры')
    .min(3, 'Слишком короткий номер')
    .max(20, 'Слишком длинный номер'),
}
export const validationChangePwd = {
  oldPassword: yup
    .string()
    .matches(
      PWD_REGEX,
      'Пароль должен содержать англ заглавные и строчные буквы, цифры. Минимум 6 символов',
    )
    .required('Обязательно'),

  password: yup
    .string()
    .matches(
      PWD_REGEX,
      'Пароль должен содержать англ заглавные и строчные буквы, цифры. Минимум 6 символов',
    )
    // .oneOf([yup.ref(`!oldPassword`)], 'Пароль не должен совпадать со старым')
    .required('Обязательно'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref(`password`)], 'Пароли должны совпадать')
    .required('Обязательно'),
}
export const validationAddSum = {
  sum: yup
    .number()
    .positive('Только положительные числа')
    .integer('Только целые числа')
    .max(300000, 'Лимит пополнения суммы 300000')
    .required('Обязательно'),

  cardNumber: yup
    .string()
    .matches(NUMBERS_REGEX, 'Только цифры')
    .min(16, 'Номер карты должен содержать 16 чисел')
    .max(16, 'Номер карты должен содержать 16 чисел')
    .required('Обязательно'),

  expires: yup
    .string()
    .matches(/([0-9]{2})\/([0-9]{2})/, 'Неправильная дата. Формат: ММ/ГГ')
    .max(5, 'Неправильная дата. Формат: ММ/ГГ')
    .required('Обязательно'),

  cvc: yup
    .string()
    .matches(NUMBERS_REGEX, 'Только цифры')
    .min(3, 'CVC должен содержать 3 числа')
    .max(3, 'CVC должен содержать 3 числа')
    .required('Обязательно'),

  nameOnCard: yup
    .string()
    .matches(LETTERS_REGEX, 'Только буквы')
    .min(3, 'Слишком короткое Имя')
    .max(20, 'Слишком длинное Имя')
    .required('Обязательно'),
}
