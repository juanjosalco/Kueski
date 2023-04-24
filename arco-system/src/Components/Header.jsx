import React from 'react'
import { Box, AppBar, Toolbar, Button,Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DropdownFilter from './DropdownFilter';

const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor: '#063970'
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className ={classes.appbar}>
                <Toolbar>
                    <Button sx={{marginLeft: 'auto'}} variant="contained">
                        View1{" "}
                    </Button>
                    <Button sx={{marginLeft: '10px'}} variant="contained">
                        View2{" "}
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Header; 