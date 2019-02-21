export default theme => ({
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   minHeight: '39px',
  //   backgroundColor: 'green'
  // },
  // formControl: {
  //   margin: theme.spacing.unit,
  //   minWidth: 120,
  //   maxWidth: 300,
  // },
  input: {
    padding: '2px 0px',
  },  
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    // margin: theme.spacing.unit / 4,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: '4px 2px'
  },
  // noLabel: {
  //   marginTop: theme.spacing.unit * 3,
  // },
});
