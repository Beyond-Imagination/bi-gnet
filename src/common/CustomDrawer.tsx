import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import StatIcon from "@mui/icons-material/QueryStats";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {Link, useNavigate} from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
`
export default function CustomDrawer() {
    const navigation = useNavigate();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({...state, ['right']: open});
            };

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem key={'terms'} disablePadding>
                    <ListItemButton onClick={() => {
                        navigation("/terms")
                    }}> <ListItemIcon>
                        <StatIcon/>
                    </ListItemIcon>
                        <ListItemText primary={'약관'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Home'} disablePadding>
                    <ListItemButton onClick={() => {
                        navigation("/")
                    }}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'홈'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Benefits'} disablePadding>
                    <ListItemButton onClick={() => {
                        navigation("/benefit")
                    }}>
                        <ListItemIcon>
                            <StatIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'귀농 혜택'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Stat'} disablePadding>
                    <ListItemButton onClick={() => {
                        navigation("/stat")
                    }}>
                        <ListItemIcon>
                            <StatIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'귀농 현황'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Experience'} disablePadding>
                    <ListItemButton onClick={() => {
                        navigation("/experience")
                    }}> <ListItemIcon>
                        <StatIcon/>
                    </ListItemIcon>
                        <ListItemText primary={'귀농 체험'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Trend'} disablePadding>
                    <ListItemButton onClick={() => {
                        navigation("/trend")
                    }}> <ListItemIcon>
                        <StatIcon/>
                    </ListItemIcon>
                        <ListItemText primary={'귀농 트렌드'}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
        </Box>
    );
    return (
        <Header>
            <React.Fragment>
                <Button><KeyboardArrowLeftIcon style={{color: "#000"}} onClick={() => {
                    navigation('/')
                }}/></Button>
            </React.Fragment>
            <React.Fragment>
                <Typography variant={'subtitle1'} onClick={() => {
                    navigation('/')
                }}>귀농어때</Typography>
            </React.Fragment>
            <React.Fragment key={'right'}>
                {/*<div style={{width: 10}}></div>*/}
                <Button disabled={true}></Button>
                {/*<Drawer*/}
                {/*    anchor={'right'}*/}
                {/*    open={state['right']}*/}
                {/*    onClose={toggleDrawer(false)}*/}
                {/*>*/}
                {/*    {list()}*/}
                {/*</Drawer>*/}
            </React.Fragment>
        </Header>
    );
}

