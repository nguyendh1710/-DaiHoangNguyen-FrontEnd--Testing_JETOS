import { Box, Typography, List } from "@mui/material";
import { styled } from "@mui/system";

export const SlidebarContainer = styled(Box)(({ theme }) => ({
  width: "213.16px",
  height: "845.62px",
  backgroundColor: "#1A1C22",
  display: "flex",
  flexDirection: "column",
  marginTop: "-845px",
  gap: "0px",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Responsive cho màn hình nhỏ
    height: "auto",
  },
}));

// Styled component cho Logo
export const Logo = styled(Typography)({
  width: "55.44px",
  height: "36px",
  color: "#FFFFFF",
  paddingLeft: "10%",
  paddingTop: "18%", // Khoảng cách dưới logo
});

// Styled component cho Box bên phải Slidebar
export const RightBox = styled(Box)({
  width: "6.66px",
  height: "19.98px",
  backgroundColor: "#FFC01E",
  borderRadius: "4.16px 0px 0px 4.16px",
  position: "absolute",
  top: "113.24px",
  left: "206.49px",
});

// Styled component cho Menu
export const MenuContainer = styled(List)({
  width: "138.22px",
  height: "299.75px",
  paddingLeft: "33.31px",
  paddingTop: "42px",
});
// Styled component cho Icon Image với Responsive
export const IconImage = styled(Box)(({ theme }) => ({
  width: "19.98px",
  height: "19.98px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "8px",
  [theme.breakpoints.down("sm")]: {
    width: "16px",
    height: "16px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "14px",
    height: "14px",
  },
}));

// Styled component cho Text Box với Responsive
export const TextBox = styled(Box)(({ theme }) => ({
  width: "67px",
  height: "17px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "8px",
  [theme.breakpoints.down("sm")]: {
    width: "45px",
    paddingLeft: "6px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "40px",
    paddingLeft: "4px",
  },
}));
