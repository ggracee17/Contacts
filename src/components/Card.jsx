import React, { useState } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function Card(contact) {
  const [isMousedOver, setMouseOver] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#31363869',
      color: '#f4f5f7',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function expand() {
    setExpanded(true);
  }

  function collapse() {
    setExpanded(false);
    setMouseOver(false);
  }

  return (
    <div className="card" 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{backgroundColor: isMousedOver ? "white":"#E8E9EB"}}
      onClick={isExpanded ? collapse: expand}
    >
      {isExpanded ? <LightTooltip title="Click to close">
        <div>
          <h1>{contact.name}</h1>
          <h2>{contact.username}</h2>
          <p><PhoneIphoneOutlinedIcon sx={{ fontSize: 16 }}/>&nbsp;{contact.phone}</p>
          <p><EmailOutlinedIcon sx={{ fontSize: 16 }}/>&nbsp;{contact.email}</p>
          <p><HomeOutlinedIcon sx={{ fontSize: 16 }}/>&nbsp;{contact.address}</p>
          <p><LanguageOutlinedIcon sx={{ fontSize: 16 }}/>&nbsp;<a href={contact.website}>{contact.website}</a></p>
          <p><ApartmentOutlinedIcon sx={{ fontSize: 16 }}/>&nbsp;{contact.company}</p>
        </div>
      </LightTooltip> : <LightTooltip title="Click to expand">
        <div>
          <h1>{contact.name}</h1>
          <h2>{contact.username}</h2>
          <p><PhoneIphoneOutlinedIcon sx={{ fontSize: 16 }}/>&nbsp;{contact.phone}</p>
          <p><EmailOutlinedIcon sx={{ fontSize: 16 }}/>&nbsp;{contact.email}</p>
        </div></LightTooltip>
        
      }
    </div>
  );
}

export default Card;
