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
import React from 'react';

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
        textAlign:"center"
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
    const educationData = [
        {date:"September 2022 - Present",name:"Conestoga College, Canada",course:"Post-Graduate in Web Development"},
        {date:"July 2017 - July 2021",name:"Amritsar College Of Engineering And technology, India",course:"B.Tech CSE [PTU] - Average 8.9CGPA"},
        {date:"2017",name:"Orchid Higher Secondary School, Nepal",course:"Grade XI and XII [NEB] - 76%"},
        {date:"2015",name:"Little Flower School, Nepal",course:"Grade X [SLC] - 85.9%"},
    ];
    const projectData=[
        {image:"https://i.imgur.com/MVoOWRH.gif",name:"Instagram Clone",desc:"The project is build with ReactJs, TailwindCSS and Firebase. As the name suggests it's a clone of instagram where you can create account, add post, likes, comment and edit profile for now.",viewLive:"https://instagram.siwani.com.np/"},
        {image:"https://i.imgur.com/FampZw1.gif",name:"Amazone Clone",desc:"Amazon Clone is a web app build with React Js. The app uses tailwind CSS for styling and have firebase for authentication of user using email and password. It uses pagination to display the product data in different pages dynamicallty.",viewLive:"https://amazon.siwani.com.np/",seeCode:"https://github.com/santos-parajuli/Amazon-clone"},
        {image:"https://i.imgur.com/xulCSoN.gif",name:"Santosh Sakar Pustak pasal",desc:"It is an MERN full stack app for my home shop Santosh Sakar Pustak Pasal. I created this website so that our customers can order the book online.",viewLive:"https://santoshsakar.netlify.app/",},
        {image:"https://i.imgur.com/NMkzZy5.gif",name:"Lyrical",desc:"This is a react app with Node and Express as backend. This app shows the Lyrics of the searched song using Genius API. This project helped me lear redux,axios multiple request,class components of react and many more.",viewLive:"https://lyricalmern.netlify.app/",seeCode:"https://github.com/santos-parajuli/Lyrical"},
        {image:"https://i.imgur.com/cdt8z5B.gif",name:"TicTacToe",desc:"A simple responsive web application made with vanilla JS. It is a responsive website where two players can play tic tac toe game.",viewLive:"https://tictactoe.siwani.com.np/tictactoe.html",seeCode:"https://github.com/santos-parajuli/tictactoe"},
        {image:"https://i.imgur.com/uEj5Sbv.gif",name:"Inaiwish Cleaning Services",desc:"A responsive website where different responsive aspects are displayed. Different components like slideshow, cards, login page forms etc are made using pure HTML CSS and JS.",viewLive:"https://frontendproject.siwani.com.np/",seeCode:"https://github.com/santos-parajuli/InawishCleaningService"},
        {image:"https://i.imgur.com/Js1KHHV.gif",name:"Mern Oauth",desc:"This app is an upgraded verison of Mern authentication. It includes authentication with third party provider like facebook and google which is widely used nowdays.It have better worl structure in project.",viewLive:"https://oauthmern.netlify.app/#/",seeCode:"https://github.com/santos-parajuli/MERN_OAUTH"},
        {image:"https://i.imgur.com/HfCSMEm.png",name:"INAWISH",desc:"This is a mobile application build with android studio.This is just an try to imitate instagram. This is a photo sharing app. It use firebase for authenticating user and firestore to store data uploaded.",seeCode:"https://github.com/santos-parajuli/MADProject"},
        {image:"https://i.imgur.com/dkbrU9T.gif",name:"Mern Authentication",desc:"As the name implies. It is an MERN full stack app for authentication. It use React as front end, MongoDB for storing users data, PassportJS for authentication, bcrypt for password hashing and many other modules.",viewLive:"https://oauthmern.netlify.app/#/",seeCode:"https://github.com/santos-parajuli/MERN_Authentication"},
        
    
    ];
    const skills=[
        {name:"HTML,CSS",value:"90"},
        {name:"ReactJS",value:"85"},
        {name:"NodeJS",value:"70"},
        {name:"Django",value:"50"},
        {name:"Firebase, MongoDB",value:"70"},
    ];
    const aboutMe =[
        {topic:"Programming",desc:"C++/C , JavaScript , Python , Java"},
        {topic:"Web technologies",desc:"Django , NodeJS , React , Angular , Express"},
        {topic:"Interest",desc:"Web Development , Mobile App Development , Big Data , IOT , AI"},
        {topic:"Languages",desc:"English , Hindi , Nepali"},
        {topic:"Nationality",desc:"Nepali"},
    ];
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
                                    <ListItemText primary="+15197745905"  />
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <MailIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="santosh.parajuli255@gmail.com"  />                                
                                </ListItem >
                                <a target="_blank" rel="noreferrer" href="https://www.siwani.com.np/">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="www.siwani.com.np"  />
                                </ListItem>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/santos-parajuli">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <GitHubIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="santos-parajuli"  />
                                </ListItem>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santosh-parajuli-a15057184/">
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
                            <p>As a graduate student, I am looking for web development opportunities where I can utilize my technical skills for developing real-life projects and enhance my knowledge in new and emerging technologies of web development.</p>
                        </Grid>
                        <Divider  style={{marginTop:"10px"}} />
                        <Grid item className={classes.social}>
                            <List >
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/santosh.parajuli.37">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <FacebookIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Santosh Parauli"  />
                                </ListItem>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/santosparajuli_/">
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <InstagramIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="@santosparajuli_"  />
                                </ListItem>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/SntoshParajuli/">
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
                                        {aboutMe.map((item)=>{
                                            return (<>
                                                <ListItem>
                                                    <ListItemText 
                                                    primary={item.topic}
                                                    secondary={
                                                    <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                        {item.desc}
                                                    </Typography>   
                                                    }/>
                                                </ListItem>
                                            </>)
                                        })}
                                        
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography align="left" variant="h3" color="#fff" >
                                                Skills
                                    </Typography> 
                                    <List>
                                        {skills.map((skill)=>{
                                            return <>
                                                <ListItem>
                                                    <ListItemText 
                                                    primary={skill.name}
                                                    secondary={
                                                        <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value={skill.value}/>   
                                                    }/>
                                                </ListItem>
                                            </>
                                        })}
                                    </List>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Typography align="center" variant="h3" color="#fff" >
                                Education
                            </Typography> 
                        <Grid items>
                            <Timeline align="alternate">
                                {
                                    educationData.map((education)=>{
                                        return <>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <SchoolIcon/>
                                                    </TimelineDot>
                                                    <TimelineConnector/>
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <Typography variant="body2">
                                                        {education.date}
                                                    </Typography>
                                                    <Paper elevation={3} className={classes.timelinePaper} >
                                                        <Typography variant="h6" component="h1">
                                                            {education.name}
                                                        </Typography>
                                                        <Typography>
                                                            {education.course}
                                                        </Typography>
                                                    </Paper>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </>
                                    })
                                }
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
                    {projectData.map((project)=>{
                        return <>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia component="img" alt="project" image={project.image} height="200px" style={{objectFit:"contain"}}/>
                                    <CardContent style={{paddingBottom:"5px"}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project.name}
                                        </Typography>
                                        <Divider/>
                                        <Typography variant="body2" component="p">
                                            {project.desc}
                                        </Typography>
                                        <Divider/>
                                        <CardActions disableSpacing>
                                            {(project.viewLive)?<a href={project.viewLive}><Button size="small">View Live</Button></a>:false}
                                            {(project.seeCode) ?<a href={project.seeCode}><Button size="small">See Code</Button></a>:false}
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </>
                    })}
                </Grid>
            </Grid>
        </Grid>

    )
}
