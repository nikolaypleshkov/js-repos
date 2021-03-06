import React from 'react';
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider
} from 'react95';

export default {
  title: 'AppBar',
  component: AppBar,
  decorators: [
    story => (
      <div
        style={{
          padding: '5rem',
          background: 'teal'
        }}
      >
        {story()}
      </div>
    )
  ]
};

export const Default = () => {
    const [open, setOpen] = React.useState(false);
  
    return (
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              
              Start
            </Button>
            {open && (
              <List
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%'
                }}
                onClick={() => setOpen(false)}
              >
                <ListItem>
                  <span role='img' aria-label='👨‍💻'>
                    👨‍💻
                  </span>
                  Profile
                </ListItem>
                <ListItem>
                  <span role='img' aria-label='📁'>
                    📁
                  </span>
                  My account
                </ListItem>
                <Divider />
                <ListItem disabled>
                  <span role='img' aria-label='🔙'>
                    🔙
                  </span>
                  Logout
                </ListItem>
              </List>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
