import { fade } from '@material-ui/core/styles';
import { container, title } from '../../../material-kit-react';
import headerLinksStyle from '../../../material-kit-react/components/headerLinksStyle';

const navbarsStyle = (theme) => ({
  section: {
    padding: '70px 0',
    paddingTop: '0',
  },
  container,
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  navbar: {
    marginBottom: '-20px',
    zIndex: '100',
    position: 'relative',
    overflow: 'hidden',
    '& header': {
      borderRadius: '0',
    },
  },
  navigation: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    marginTop: '0',
    minHeight: '740px',
  },
  formControl: {
    margin: '0 !important',
    paddingTop: '0',
  },
  inputRootCustomClasses: {
    margin: '0!important',
  },
  searchIcon: {
    width: '20px',
    height: '20px',
    color: 'inherit',
  },
  ...headerLinksStyle(theme),
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  imageDropdownButton: {
    padding: '0px',
    top: '4px',
    borderRadius: '50%',
    marginLeft: '5px',
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
  searchIconMUI: {
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
});

export default navbarsStyle;
