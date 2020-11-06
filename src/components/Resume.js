import {  Button, Card, CardActions,CardContent, CardMedia, Container, Divider, Grid, Grow, LinearProgress, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SchoolIcon from '@material-ui/icons/School';
import DomainIcon from '@material-ui/icons/Domain';
import ApartmentIcon from '@material-ui/icons/Apartment';
import React from 'react'

const useStyles= makeStyles({
    leftContainer:{
        textAlign:"center",
        backgroundColor:"#fff"
    },rightContainer:{
        backgroundColor:"#3d3e42",
        color:"#fff",
    },photoContainer:{
        margin:"auto",
        marginTop:"50px"
    },photo:{
        objectFit:"cover",
        height:"150px",
        width:"150px",
        borderRadius:"50%",
    },name:{
        fontFamily: '-apple-system',
        fontSize:"2.5em",
        color:"#3d3e42",
        lineHeight:"1.1em",
        textTransform:"uppercase"
    },occupation:{
        fontFamily: '-apple-system',
        fontSize:"1.5em",
        color:"#5d6163",
        lineHeight:"1em",
        textTransform:"uppercase"
    },contact:{
        textAlign:"left",
        display:"flex",
        justifyContent:"center",
        lineHeight:"1em",
        "& a":{
        textDecoration:"none",
        color:"black",
    }
    },listItem:{
        "&:hover":{
            color:"#5d6163",
        }
    },objective:{
        width:"80%",
        margin:"auto",
        color:"#696564",
        textAlign:"justify"
    },social:{
    width:"80%",
    margin:"auto",
        lineHeight:"1em",
        "& a":{
        textDecoration:"none",
        color:"black",
    }
    },card:{
        width:"85%",
        margin:"auto",
        marginTop:"20px",
        marginBottom:"20px",
        "&:hover":{
            boxShadow:"5px 5px #888888",
            backgroundColor:"#fafeff",
        },"& a":{
        textDecoration:"none"
    }
    },timelinePaper:{
        padding: '6px 16px',
        "&:hover":{
            boxShadow:"5px 5px #888888",
            backgroundColor:"#fafeff",
        }
    }
})

export default function Resume() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grow in="true">
                <Grid item xs={12} md={4} className={classes.leftContainer}>
                    <Grid container direction="column">
                        <Grid item className={classes.photoContainer}>
                            <img src="https://i.imgur.com/FSYzANj.jpg" alt="profile" className={classes.photo} />
                        </Grid>
                        <Grid item className={classes.name}>
                            Santosh Parajuli
                        </Grid>
                         <Grid item className={classes.occupation}>
                            Web Developer
                        </Grid>
                          <Divider  style={{marginTop:"10px"}} />
                        <Grid item className={classes.contact}>
                            <List >
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <PhoneIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="+9779845082738"  />
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <MailIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="santosh.parajuli255@gmail.com"  />                                
                                </ListItem >
                                <a href="https://www.siwani.com.np/">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="www.siwani.com.np"  />
                                </ListItem>
                                </a>
                                <a href="https://github.com/santos-parajuli">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <GitHubIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="santos-parajuli"  />
                                </ListItem>
                                </a>
                                <a href="https://www.linkedin.com/in/santosh-parajuli-a15057184/">
                                 <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <LinkedInIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="santosh-parajuli-a15057184"  />
                                </ListItem>  
                                </a>                              
                            </List>
                        </Grid>
                        <Divider  style={{marginTop:"10px"}} />
                        <Grid item className={classes.objective}>
                            <p>As a final year student, I am looking for web development internship opportunities where I can utilize my technical skills for developing real-life projects and enhance my knowledge in new and emerging technologies of web development.</p>
                        </Grid>
                        <Divider  style={{marginTop:"10px"}} />
                        <Grid item className={classes.social}>
                            <List >
                                <a href="https://www.facebook.com/santosh.parajuli.37">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <FacebookIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Santosh Parauli"  />
                                </ListItem>
                                </a>
                                <a href="https://instagram.com/santos_parajuli">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <InstagramIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="@santos_parajuli"  />
                                </ListItem>
                                </a>
                                <a href="https://twitter.com/SntoshParajuli/">
                                 <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <TwitterIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="@SntoshParajuli"  />
                                </ListItem>  
                                </a>                              
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grow>
            <Grid item xs={12} md={8}  className={classes.rightContainer}>
                <Container maxWidth="lg" style={{marginTop:"50px"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item xs={12} sm={6} className={classes.aboutMe}> 
                                    <List dense>
                                        <ListItem>
                                            <Typography align="center" variant="h3" color="#fff" >
                                                About Me
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Programming"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                C++/C , JavaScript , Python , Java
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Web"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                Django , NodeJS , React , Angular , Express
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Intrest"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                Web Development , Mobile App Development , Big Data , IOT , AI
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Languages"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                English , Hindi , Nepali
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Nationality"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                Nepali
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography align="left" variant="h3" color="#fff" >
                                                Skills
                                    </Typography> 
                                    <List>
                                        <ListItem>
                                            <ListItemText 
                                            primary="HTML , CSS"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="80"/>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="NodeJs"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="60"/>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="React"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="70"/>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Django"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="40"/>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Firebase , Mongo"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="65"/>   
                                            }/>
                                        </ListItem> 
                                    </List>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Typography align="center" variant="h3" color="#fff" >
                                Education
                            </Typography> 
                        <Grid items>
                            <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <DomainIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="body2">
                                                2014-2016
                                            </Typography>
                                            <Paper elevation={3} className={classes.timelinePaper} >
                                                <Typography variant="h6" component="h1">
                                                Little Flower School
                                                </Typography>
                                                <Typography>
                                                    Grade X [SLC] - 85.9% 
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <ApartmentIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                                <Typography variant="body2">
                                                Jan. 2014 - Jan. 2016
                                            </Typography>
                                            <Paper elevation={3} className={classes.timelinePaper} >
                                                <Typography variant="h6" component="h1">
                                                Orchid Higher Secondary School
                                                </Typography>
                                                <Typography>
                                                    Grade XI and XII [NEB] - 76% 
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <SchoolIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="body2">
                                                July 2016 - July 2021
                                            </Typography>
                                            <Paper elevation={3} className={classes.timelinePaper} >
                                                <Typography variant="h6" component="h1">
                                                Amritsar College Of Engineering And technology
                                                </Typography>
                                                <Typography>
                                                    B.Tech CSE [PTU] - Average 8.9CGPA 
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                            </Timeline>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid items xs={12} style={{margin:"30px"}}>
                  <Typography align="center" variant="h3" color="#fff" >
                        Projects Showcase
                    </Typography> 
                    <Grid container direction="row">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia component="img" alt="project" image="https://i.imgur.com/NMkzZy5.gif" height="200px" style={{objectFit:"contain"}}/>
                                <CardContent style={{paddingBottom:"5px"}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lyrical
                                    </Typography>
                                    <Divider/>
                                    <Typography variant="body2" component="p">
                                        This is a react app with Node and Express as backend. This app shows the Lyrics of the searched song using Genius API. This project helped me lear redux,axios multiple request,class components of react and many more.
                                    </Typography>
                                    <Divider/>
                                    <CardActions disableSpacing>
                                        <a href="https://github.com/santos-parajuli/Lyrical">
                                        <Button size="small">
                                            See Code
                                        </Button>
                                        </a>
                                        <Button size="small">
                                            View Live
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia component="img" alt="project" image="https://i.imgur.com/dkbrU9T.gif" height="200px" style={{objectFit:"contain"}}/>
                                <CardContent style={{paddingBottom:"5px"}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mern Authentication
                                    </Typography>
                                    <Divider/>
                                    <Typography variant="body2" component="p">
                                            As the name implies. It is an MERN full stack app for authentication. It use React as front end, MongoDB for storing users data, PassportJS for authentication, bcrypt for password hashing and many other modules.
                                    </Typography>
                                    <Divider/>
                                    <CardActions disableSpacing>
                                        <a href="https://github.com/santos-parajuli/MERN_Authentication">
                                        <Button size="small">
                                            See Code
                                        </Button>
                                        </a>
                                        <Button size="small">
                                            View Live
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia component="img" alt="project" image="https://i.imgur.com/HfCSMEm.png" height="200px" style={{objectFit:"contain"}}/>
                                <CardContent style={{paddingBottom:"5px"}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        INAWISH
                                    </Typography>
                                    <Divider/>
                                    <Typography variant="body2" component="p">
                                        This is a mobile application build with android studio.This is just an try to imitate instagram. This is a photo sharing app. It use firebase for authenticating user and firestore to store data uploaded.
                                    </Typography>
                                    <Divider/>
                                    <CardActions disableSpacing>
                                        <a href="https://github.com/santos-parajuli/MADProject">
                                        <Button size="small">
                                            See Code
                                        </Button>
                                        </a>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>        
                    </Grid>
            </Grid>
        </Grid>

    )
}
