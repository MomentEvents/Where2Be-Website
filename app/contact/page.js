import React from 'react'
import RedirectWindow from '../../components/RedirectWindow/RedirectWindow.jsx';
import LINKS from '@/constants/links.js';

export default function Contact() {
  return (
    <RedirectWindow url={LINKS.Discord}/>
  )
}