// import styled from "@emotion/styled";
// import { CommentOutlined, Send } from "@mui/icons-material";
// import { IconButton, InputBase } from "@mui/material";
// import { grey } from "@mui/material/colors";
// import React from "react";

// const Search = styled("div")(({ theme }) => ({
//   borderRadius: 20,
//   width: "90%",
//   backgroundColor: grey[200],
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "3px",
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   color: "black",
//   marginLeft: "10px",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   paddingLeft: "1rem",
//   width: "100%",
// }));

// const PostInput = ({setShowComment, showComment}) => {
//   return (
//     <>
//       <Search>
//         <StyledInputBase
//           placeholder="write something"
//           inputProps={{ "aria-label": "search" }}
//         />
//         <SearchIconWrapper>
//           <IconButton sx={{pl:"2px", m:"0"}} onClick={()=>setShowComment(!showComment)}>
//             <CommentOutlined />
//           </IconButton>
//           <IconButton sx={{pl:"2px", m:"0"}}>
//             <Send />
//           </IconButton>
//         </SearchIconWrapper>
//       </Search>
//     </>
//   );
// };

// export default PostInput;
