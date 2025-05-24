'use client';

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

import enMessages from '../i18n/en.json';
import ruMessages from '../i18n/ru.json';
import tmMessages from '../i18n/tm.json';
import trMessages from '../i18n/tr.json';

export type Language = 'en' | 'ru' | 'tr' | 'tm';

type LanguageContextType = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
};

const messages = {
	en: enMessages,
	ru: ruMessages,
	tr: trMessages,
	tm: tmMessages,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language') as Language;
		if (savedLanguage) {
			setCurrentLanguage(savedLanguage);
		} else {
			const browserLang = navigator.language.split('-')[0] as Language;
			if (['en', 'ru', 'tr', 'tm'].includes(browserLang)) {
				setCurrentLanguage(browserLang);
			} else {
				setCurrentLanguage('en');
			}
		}
		setMounted(true);
	}, []);

	const setLanguage = (lang: Language) => {
		setCurrentLanguage(lang);
		localStorage.setItem('language', lang);
		if (typeof document !== 'undefined') {
			document.documentElement.lang = lang;
		}
	};

	const t = (key: string) => {
		const keys = key.split('.');
		let value: unknown = messages[currentLanguage];

		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = (value as Record<string, unknown>)[k];
			} else {
				return key;
			}
		}

		return typeof value === 'string' ? value : key;
	};

	if (!mounted) {
		return null;
	}

	return (
		<LanguageContext.Provider
			value={{
				language: currentLanguage,
				setLanguage,
				t,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
