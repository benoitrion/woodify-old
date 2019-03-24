import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const logoUrl = 'static/images/logo.svg';

const styles = theme => ({
  appBar: {
    position: 'relative',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',
  },
  inline: {
    display: 'inline-block'
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
})

const Header = (props) => {
  const { classes } = props;

  return (
    <div>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={24} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link href='/' className={classes.link}>
                    <React.Fragment>
                      <img style={{"verticalAlign": "middle"}} width={35} src={logoUrl} alt="" />
                      <span className={classes.tagline}>Woodify</span>
                    </React.Fragment>
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default withStyles(styles)(Header);