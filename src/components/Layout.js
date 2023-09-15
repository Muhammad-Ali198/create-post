import { Box, Typography } from '@mui/material';
import React from 'react'
import CreatePost from './CreatePost';

const Layout = () => {
  return (
    <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box m={2}>
        <Typography variant='h4' >Card Create-Post</Typography>
        <CreatePost />
      </Box>
    </Box>
  )
}

export default Layout;