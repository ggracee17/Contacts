import React from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

// Creates the sidebar containing other functionalities such as settings
function Sidebar() {
  return (
    <div className="sidebar">
        <br></br>
        <br></br>
        <DashboardOutlinedIcon sx={{ fontSize: 30 }}></DashboardOutlinedIcon>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <SettingsOutlinedIcon sx={{ fontSize: 30 }}></SettingsOutlinedIcon>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <HelpOutlineOutlinedIcon sx={{ fontSize: 30 }}></HelpOutlineOutlinedIcon>
    </div>
  );
}

export default Sidebar;