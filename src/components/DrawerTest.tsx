import { Box, Button, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import List from '@mui/material/List';import React from 'react'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { useState } from 'react'

function DrawerTest() {
    const [open, setOpen] = useState(false);
    const list = () => (
        <Box sx={{width: 250}}>
            <List>
                {
                    ['user', 'product', 'about', 'contact'].map((item, index) =>(
                        <ListItem key={index} >
                            <ListItemButton>
                                <ListItemIcon>
                                    <AddBusinessIcon />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
    return (
    <div>
        <Button 
            variant='outlined'
            onClick={()=> setOpen(true)}
        >Drawer</Button>
        <Drawer 
            anchor='left'
            open={open}
            onClose={() => setOpen(false)}
        >
            {list()}
        </Drawer>
    </div>
    )
}

export default DrawerTest