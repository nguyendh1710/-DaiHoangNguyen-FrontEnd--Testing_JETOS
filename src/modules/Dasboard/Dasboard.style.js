import { Box, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "305.84px",
    fontSize: "18px", // Giảm kích thước font trên màn hình nhỏ
  },
}));

export const DashboardContent = styled(Grid2)(({ theme }) => ({
  width: "1305.84px",
  height: "754.62px",
  marginLeft: "213px",
  backgroundColor: "#282C35",
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "1fr", // Thiết lập mặc định là 1 cột (mobile first)
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr", // 2 cột trên màn hình nhỏ
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, 1fr)", // 4 cột trên màn hình lớn
  },
}));

export const Item = styled(Box)(({ theme }) => ({
  marginTop: "33px",
  display: "flex",
  alignItems: "center",
  padding: "37.34px",
  marginLeft: "23.34px",
  width: "190.82px",
  height: "25.75px",
  borderRadius: "8.33px 8.33px 8.33px 8.33px",
  backgroundColor: "#1A1C22",
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  borderRadius: "8.33px 8.33px 8.33px 8.33px",
  width: "39.97px",
  height: "39.97px",
  marginRight: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#282C35",
  // Bạn có thể chèn ảnh SVG ở đây
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "16px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "14.66px",
  fontWeight: 400,
  lineHeight: "17.49px",
  color: "#9E9E9E",
  marginBottom: "4px",
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "26.64px",
  fontWeight: 500,
  lineHeight: "39.97px",
  color: "#FFFFFF",
}));
