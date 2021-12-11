import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://th.bing.com/th/id/R16c18de8ee888c7e77f2594356c27ec0?rik=i6s14x8y6gsM8Q&riu=http%3a%2f%2fweneedfun.com%2fwp-content%2fuploads%2f2015%2f10%2fCute-puppy-Pictures-17.jpg&ehk=ze7quF7Cv0qELfP9Nqjo%2fz%2bbqopYX0oyxngx4szj4wU%3d&risl=&pid=ImgRaw"
                alt="profile"
                style={{ height: 75, width: 75, borderRadius: 100 }}
              />
            </div>
       {/* <Avatar
       alt="Trevor Henderson" 
       src="https://th.bing.com/th/id/R16c18de8ee888c7e77f2594356c27ec0?rik=i6s14x8y6gsM8Q&riu=http%3a%2f%2fweneedfun.com%2fwp-content%2fuploads%2f2015%2f10%2fCute-puppy-Pictures-17.jpg&ehk=ze7quF7Cv0qELfP9Nqjo%2fz%2bbqopYX0oyxngx4szj4wU%3d&risl=&pid=ImgRaw"/> */}
         <MenuItem onClick={handleMenuClose}>abcd@gmail.com</MenuItem>
         <MenuItem onClick={handleMenuClose} className="download-button"> Manage Your Account</MenuItem>
         <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
         <MenuItem onClick={handleMenuClose}>Forget password</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <div className={classes.search}>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
        <Avatar
        alt="Trevor Henderson" 
        src="https://th.bing.com/th/id/R16c18de8ee888c7e77f2594356c27ec0?rik=i6s14x8y6gsM8Q&riu=http%3a%2f%2fweneedfun.com%2fwp-content%2fuploads%2f2015%2f10%2fCute-puppy-Pictures-17.jpg&ehk=ze7quF7Cv0qELfP9Nqjo%2fz%2bbqopYX0oyxngx4szj4wU%3d&risl=&pid=ImgRaw"/>
          
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon /> */}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}















// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Avatar from '@material-ui/core/Avatar';

// export default function SimpleMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div style={{flex:1,display:'default-left'}}>
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//       <Avatar alt="Trevor Henderson" 
//       src="https://th.bing.com/th/id/R16c18de8ee888c7e77f2594356c27ec0?rik=i6s14x8y6gsM8Q&riu=http%3a%2f%2fweneedfun.com%2fwp-content%2fuploads%2f2015%2f10%2fCute-puppy-Pictures-17.jpg&ehk=ze7quF7Cv0qELfP9Nqjo%2fz%2bbqopYX0oyxngx4szj4wU%3d&risl=&pid=ImgRaw"/>
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//       <div className="profile">
//       <Avatar
//       alt="Trevor Henderson" 
//       src="https://th.bing.com/th/id/R16c18de8ee888c7e77f2594356c27ec0?rik=i6s14x8y6gsM8Q&riu=http%3a%2f%2fweneedfun.com%2fwp-content%2fuploads%2f2015%2f10%2fCute-puppy-Pictures-17.jpg&ehk=ze7quF7Cv0qELfP9Nqjo%2fz%2bbqopYX0oyxngx4szj4wU%3d&risl=&pid=ImgRaw"/>
//       </div>
//         <MenuItem onClick={handleClose}>abcd@gmail.com</MenuItem>
//         <MenuItem onClick={handleClose} className="download-button">Click To Manage Your Account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//         <MenuItem onClick={handleClose}>Forget password</MenuItem>
//       </Menu>
//     </div>
//   );
// }