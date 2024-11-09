import React from "react";
import { InputAdornment, Box, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  HeaderContainer,
  Logo,
  SearchBar,
  UserAccountContainer,
} from "./Header.style";

export default function Header() {
  return (
    <HeaderContainer>
      {/* Logo Section */}
      <Logo>Dashboard</Logo>
      {/* Search Bar */}
      <SearchBar
        variant="outlined"
        placeholder="Search…"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box>
                <SearchIcon
                  sx={{ color: "#9E9E9E", width: "18.99px", height: "18.99px" }}
                />
              </Box>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            backgroundColor: "#282C35",
            width: "281.82px",
            height: "33.31px",
          },
        }}
      />
      {/* User Account Section */}
      <UserAccountContainer>
        {/* User Icon */}
        <Box sx={{ width: "19.98px", height: "19.98px", color: "#FFFFFF" }}>
          {/* Icon would go here, e.g., <AccountCircleIcon /> */}
          <img
            src="https://github.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/blob/main/src/components/Header/Notification.png?raw=true"
            alt="notification"
          />
        </Box>
        {/* User Avatar Image */}
        <Avatar
          sx={{
            width: "33.31px",
            height: "33.31px",
            borderRadius: "8.33px 8.33px 8.33px 8.33px",
          }}
          alt="User Avatar"
          src="https://github.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/blob/main/src/components/Header/avatar.jpg?raw=true" // Placeholder image path
        />
      </UserAccountContainer>
    </HeaderContainer>
  );
}
