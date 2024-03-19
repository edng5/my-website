// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, Tooltip } from '@mui/material';
import { ArrowBack} from '@mui/icons-material';
import { Link } from "react-router-dom";

const Sidebar2 = () => {
const handleClick = () => {
    window.location.hash = '';
    };
  return (
    <div className="sidebar2">
      <List>
        <ListItem button className="sidebar-item2" >
          <Tooltip title="Home" placement="right">
            <ListItemIcon>
            <Link to="/" onClick={handleClick}><ArrowBack style={{ color: '#333' }}/></Link>
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        </List>
    </div>
  );
}

export default Sidebar2;