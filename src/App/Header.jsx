/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'right',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      style={{
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          size="medium"
        >
          <MenuIcon style={{ fontSize: '4vh' }} />
        </IconButton>
        <Typography variant="h2" className={classes.title}>
          Jamie
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
