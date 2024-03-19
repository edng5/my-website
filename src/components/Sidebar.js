// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, Tooltip } from '@mui/material';
import { Person, Code, Widgets, Work, Mail } from '@mui/icons-material';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling animation
      block: 'start' // Scroll to the top of the section
    });
  }
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button className="sidebar-item" onClick={() => scrollToSection('about-me')}>
          <Tooltip title="About Me" placement="right">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => scrollToSection('resume')}>
          <Tooltip title="Resume" placement="right">
            <ListItemIcon>
              <Work />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => scrollToSection('projects')}>
          <Tooltip title="Projects" placement="right">
            <ListItemIcon>
              <Code />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => scrollToSection('skills')}>
          <Tooltip title="Skills" placement="right">
            <ListItemIcon>
              <Widgets />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => scrollToSection('contact')}>
          <Tooltip title="Contact" placement="right">
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;