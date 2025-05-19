import React from 'react'
import { useTranslation } from 'react-i18next';

const page = () => {
  const { t } = useTranslation(); 
  return (
    <div>
<h1>{t('greeting')}</h1>
      <p>{t('welcomeMessage')}</p>
    </div>
  )
}

export default page