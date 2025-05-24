import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ru from './ru.json';
import tm from './tm.json';
import tu from './tr.json';

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: en },
		ru: { translation: ru },
		tm: { translation: tm },
		tu: { translation: tu },
	},
	lng: 'ru', // язык по умолчанию
	fallbackLng: 'ru',
	interpolation: {
		escapeValue: false, // для React не нужно экранировать
	},
});

export default i18n;
