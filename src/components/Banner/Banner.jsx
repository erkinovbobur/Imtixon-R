import React from 'react'
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
   <ul className='flex'>
        <li>  <a href="#" className="text-gray-800 hover:underline font-semibold text-lg">
             {t('h1')}
               </a> </li>
                 <li> <a href="#" className="text-gray-600 hover:underline flex items-center">{t('h2')}</a></li>
                  <li> <a href="#" className="text-gray-600 hover:underline">{t('h3')}</a></li>
                    <li><a href="#" className="text-gray-600 hover:underline">{t('h4')}</a></li>
                      <li><a href="#" className="text-gray-600 hover:underline">{t('h5')}</a></li>
                       <li><a href="#" className="text-gray-600 hover:underline">{t('h6')}</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">{t('h7')}</a></li>
                      <li><a href="#" className="text-gray-600 hover:underline">{t('h8')}</a></li>
                    <li><a href="#" className="text-gray-600 hover:underline">{t('h9')}</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">{t('h10')}</a></li>
                 <li><a href="#" className="text-gray-600 hover:underline">{t('h11')}</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">{t('h12')}</a></li>
        <li><a href="#" className="text-gray-600 hover:underline">{t('h13')}</a></li>
          </ul>
        </>
   
  )
}

export default Banner