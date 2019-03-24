import Header from './Header'
import { withStyles } from '@material-ui/core/styles';

const backgroundImgUrl = 'static/images/background_trees.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundImgUrl}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  }
});

const Layout = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Header />
      {props.children}
    </div>
  )
}

export default withStyles(styles)(Layout);