import React from "react";
import RedirectWindow from '../../../components/RedirectWindow/RedirectWindow.jsx';
import LINKS from '@/constants/links.js';

export default function IOSDownload() {
  return (
    <RedirectWindow url={LINKS.AppleStore}/>

  );
}