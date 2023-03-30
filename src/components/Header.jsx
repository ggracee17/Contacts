import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "./Sidebar";

// Creates the header containing a search bar
// TODO: fix the layout and display of side menu
function Header() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function collapse() {
    setExpanded(false);
  }

  return (
    <header>
        <Toolbar>
          <h1><IconButton 
            edge="start"
            color="inherit"
            onClick={isExpanded ? collapse: expand}
          > 
          <MenuIcon sx={{ fontSize: 25 } } />
          {/* {isExpanded ? <Sidebar></Sidebar> : null} */}
          </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;Contacts</h1>
          <Typography sx={{ flexGrow: 1}}></Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
            />
          </Search>
        </Toolbar>
    </header>
  );
}

export default Header;
