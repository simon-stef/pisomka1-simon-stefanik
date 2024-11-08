
"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data: session } = useSession();
  const [value, setValue] = React.useState('/');
  const router = useRouter();
  const handleNavigation = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
    handleClose(); // Close the menu after navigation
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <MenuItem onClick={(event) => handleNavigation(event, '/')}>Domov</MenuItem>
      {!session ? (
        <MenuItem onClick={(event) => handleNavigation(event, '/auth/prihlasenie')}>Prihlásiť sa</MenuItem>
      ) : (
        <MenuItem onClick={(event) => handleNavigation(event, '/auth/odhlasenie')}>Odhlásiť sa</MenuItem>
      )}
    </React.Fragment>
  );
}