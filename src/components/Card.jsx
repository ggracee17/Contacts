import React from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

function Card(contact) {
  return (
    <dl className="card">
      <h1>{contact.name}</h1>
      <p><PersonOutlineOutlinedIcon sx={{ fontSize: 16 }}/> {contact.username}</p>
      <p><EmailOutlinedIcon sx={{ fontSize: 16 }}/> {contact.email}</p>
      <p><HomeOutlinedIcon sx={{ fontSize: 16 }}/> {contact.address}</p>
      <p><PhoneIphoneOutlinedIcon sx={{ fontSize: 16 }}/> {contact.phone}</p>
      <p><LanguageOutlinedIcon sx={{ fontSize: 16 }}/> {contact.website}</p>
      <p><ApartmentOutlinedIcon sx={{ fontSize: 16 }}/> {contact.company}</p>
    </dl>
  );
}

export default Card;
