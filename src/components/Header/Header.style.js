import { Box, Typography, TextField, Grid2 } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  marginLeft: "213.16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1257.84px",
  height: "74.94px",
  backgroundColor: "#1A1C22",
  padding: "0 24px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "auto",
    padding: "16px",
  },
}));

export const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "19.98px",
  fontWeight: 600,
  lineHeight: "29.98px",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px", // Giảm kích thước font trên màn hình nhỏ
  },
}));

export const SearchBar = styled(TextField)(({ theme }) => ({
  borderRadius: "6.66px 6.66px 6.66px 6.66px",
  marginLeft: "726.96px",
  "& .MuiInputBase-root": {
    color: "#9E9E9E",
    fontSize: "14px",
    "&::placeholder": {
      color: "#9E9E9E",
      opacity: 0.4,
    },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    backgroundColor: "#282C35",
  },
}));
export const UserAccountContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: "10px",
  },
}));
