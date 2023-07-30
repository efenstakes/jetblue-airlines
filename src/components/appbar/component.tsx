"use client"
import React from 'react'
import { Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, } from '@mui/material'
import { motion } from 'framer-motion'
import { useWindowWidth } from '@react-hook/window-size'
import { MdList, MdPersonOutline } from 'react-icons/md'
import { BsAirplane, } from 'react-icons/bs'

// styles
import { containerVariants, itemVariants, logoContainerVariants, logoVariants } from '@/styles/variants'
import './component.scss'


const Appbar = () => {
    const width = useWindowWidth()
    const isMobile = width < 720
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
      setAnchorEl(null);
    }

    return (
        <motion.div
            className='appbar'
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            
            
            <motion.div variants={containerVariants} className='appbar__section'>
                <motion.svg
                    width="55"
                    height="89"
                    viewBox="0 0 55 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={logoContainerVariants}
                    className='appbar__logo_svg'
                >
                    <motion.path
                        d="M20.2038 13.2024C20.2038 9.59704 24.2743 3 26.1944 3C28.1144 3 33.5674 10.2107 33.5674 13.2024V29.7717L52 42.7357V48.1821H32.2618V65.5185L40.71 71.1183V75.7976L29.4201 73.4196L26.1944 86L22.431 73.4196L10.7571 75.7976V71.1183L20.2038 65.5185V48.1821H3V42.7357L20.2038 29.7717V13.2024Z"
                        stroke="white"
                        stroke-width={ isMobile ? 8 : 5 }
                        stroke-linejoin="round"
                        pathLength={1}
                        strokeDasharray="1 1"
                        variants={logoVariants}
                    />
                </motion.svg>

                {
                    !isMobile &&
                        <motion.p variants={itemVariants} className='appbar__appname'>
                            jetBlue
                        </motion.p>
                }
            </motion.div>

            <motion.div variants={itemVariants} className='appbar__section appbar__section_right'>

                {/* book flight */}
                <Button
                    disableElevation
                    href='/'
                    variant='contained'
                    style={{
                        textTransform: 'none',
                        backgroundColor: 'whitesmoke',
                        color: 'dodgerblue',
                    }}
                >
                    Book Your Flight
                </Button>


                {/* account */}
                <motion.div
                    variants={itemVariants}
                    onClick={handleClick}
                >
                    {/* <MdPersonOutline /> */}
                    <Avatar
                        style={{
                            backgroundColor: 'white',
                            color: 'dodgerblue',
                        }}
                    />
                </motion.div>
            </motion.div>


            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <MdPersonOutline />
                    </ListItemIcon>
                    {/* <Avatar />  */}
                    My Profile
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BsAirplane />
                    </ListItemIcon>
                    My Profile
                </MenuItem>
                
                <Divider />

                <MenuItem onClick={handleClose}>
                    Logout
                </MenuItem>

            </Menu>
        </motion.div>
    )
}

export default Appbar
