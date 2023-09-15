import { CommentOutlined, MoreHoriz, Send } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";

const CreatePost = () => {
  // Inputbar styling all

  const Search = styled("div")(({ theme }) => ({
    borderRadius: 20,
    width: "90%",
    backgroundColor: grey[200],
    display: "flex",
    justifyContent: "space-between",
    padding: "3px",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: "black",
    marginLeft: "10px",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    paddingLeft: "1rem",
    width: "100%",
  }));

  // comment section on and off

  const [showComment, setShowComment] = useState(false);

  // Posted comments section

  const [commentList, setCommentList] = useState([
    {text:"hoome"}
  ])

   // State for the current input

   
   const [input, setInput] = useState('');

   // Function to handle input change
   const handleInputChange = (event) => {
    setInput(event.target.value);
  };
 
  const handleSendClick = (event) => {
    event.preventDefault();
    setCommentList([...commentList, { text: input }]);
    setInput(''); 
  };

  return (
    <>
      <Box
        mt={1}
        bgcolor={"white"}
        borderRadius={6}
        width={"30rem"}
        boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
        p={1}
      >
        <Typography
          p={"2px 8px"}
          fontWeight={"bold"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Create Post
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Typography>
        <Box
          borderRadius={1}
          m={"0 0.6rem"}
          sx={{ backgroundColor: grey[200] }}
          gap={1}
        >
          <Typography
            variant="p"
            fontSize={"0.5rem"}
            sx={{ overflowWrap: "break-word", wordWrap: "break-word" }}
          >here</Typography>
        </Box>
        <Box
          component={"div"}
          bgcolor={"white"}
          p={"10px 8px"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <Avatar src="https://i.pravatar.cc/300" />
          <Search>
            <StyledInputBase
                placeholder="write something"
                value={input} 
                onChange={handleInputChange} 
            />
            <SearchIconWrapper>
              <IconButton
                sx={{ pl: "2px", m: "0" }}
                onClick={() => setShowComment(!showComment)}
              >
                <CommentOutlined />
              </IconButton>
              <IconButton sx={{ pl: "2px", m: "0" }} onClick={handleSendClick}>
                <Send />
              </IconButton>
            </SearchIconWrapper>
          </Search>
        </Box>
        <Box sx={{ display: showComment ? "block" : "none" }}>
          <Divider />
          <Box
            width={"98%"}
            p={"10px 15px"}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            borderRadius={4}
            sx={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              flexWrap: "wrap",
            }}
          >
            {commentList.map((item, idx) => (
              <Typography width={"100%"} sx={{ wordBreak: "break-all" }} key={idx}  borderRadius={4} bgcolor={grey[200]} p={1}>
                {item.text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreatePost;
