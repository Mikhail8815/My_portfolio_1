import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();
  
  return {
    t, 
    changeLanguage: (lng: string) => i18n.changeLanguage(lng),
    currentLanguage: i18n.language
  };
};