import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assests/logo.PNG';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Jersey Imports" height="25px" className={classes.image} />
                        Jersey Imports
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname == '/' && (
                    <div className={classes.button}>
                        <Link to="/cart">View your cart</Link>
                        <IconButton component={Link} aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar> 
            </AppBar>
        </>
    )
}

export default Navbar
