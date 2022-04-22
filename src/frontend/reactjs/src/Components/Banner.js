import React from 'react'
import {Typography, Container, makeStyles} from '@material-ui/core';
import './Banner.css'

const useStyles=makeStyles(() => ({
    banner: {
        backgroundImage: "url(./public/LikeHomeBanner.jpg",
    },
    bannerContent: {
        height:300,
        display:"flex",
        flexDirection:"column",
        paddingTop: 100,
    },
    tagline: {
        display:"flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}));
//comment
const Banner = () => {
    const classes= useStyles();

  return (
    <div className={classes.banner}>
        <Container className="bannerContent">
            <div className="description">
                <Typography
                    style={{
                        fontWeight: "bold",
                        marginBottom:15,
                    }}
                >
                </Typography>

                <Typography
                    variant='subtitle2'
                >
                </Typography>
            </div>
        </Container>
    </div>
  )
}

export default Banner;