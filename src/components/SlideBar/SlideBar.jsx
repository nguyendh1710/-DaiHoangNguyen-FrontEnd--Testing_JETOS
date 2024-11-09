import React from "react";
import { ListItem, Typography } from "@mui/material";
import {
  SlidebarContainer,
  Logo,
  RightBox,
  MenuContainer,
  TextBox,
  IconImage,
} from "./SlideBar.style";

// Dữ liệu menu
const menus = [
  {
    id: 1,
    logo: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/3eaaa9642ccd35caeeb2d2d9c76c26c366d18bde/src/components/Header/SlideBar/dashboard.svg",
    lable: "Dashboard",
  },
  {
    id: 2,
    logo: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/3eaaa9642ccd35caeeb2d2d9c76c26c366d18bde/src/components/Header/SlideBar/Transactions.svg",
    lable: "Transactions",
  },
  {
    id: 3,
    logo: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/3eaaa9642ccd35caeeb2d2d9c76c26c366d18bde/src/components/Header/SlideBar/Wallet.svg",
    lable: "Wallet",
  },
  {
    id: 4,
    logo: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/3eaaa9642ccd35caeeb2d2d9c76c26c366d18bde/src/components/Header/SlideBar/Analytics.svg",
    lable: "Analytics",
  },
  {
    id: 5,
    logo: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/3eaaa9642ccd35caeeb2d2d9c76c26c366d18bde/src/components/Header/SlideBar/Personal.svg",
    lable: "Personal",
  },
  {
    id: 6,
    logo: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/3eaaa9642ccd35caeeb2d2d9c76c26c366d18bde/src/components/Header/SlideBar/Message.svg",
    lable: "Message",
  },
  {
    id: 7,
    logo: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/3eaaa9642ccd35caeeb2d2d9c76c26c366d18bde/src/components/Header/SlideBar/Setting.svg",
    lable: "Setting",
  },
];

export default function Slidebar() {
  return (
    <SlidebarContainer>
      {/* Logo */}
      <Logo>
        <img
          src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/e418410823aaab211b09a377e8ff0106e6f22920/src/components/Header/SlideBar/Logo.svg"
          alt="logo group"
        />
      </Logo>
      {/* Right Box */}
      <RightBox />
      {/* Menu */}
      <MenuContainer>
        {menus.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              paddingY: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingX: {
                xs: "4px",
                sm: "8px",
                md: "12px",
              },
            }}
          >
            {/* Icon Image hiển thị SVG */}
            <IconImage>
              <img
                src={item.logo}
                alt={item.name}
                style={{ width: "100%", height: "100%" }}
              />
            </IconImage>
            {/* Text Box */}
            <TextBox>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "11.66px", // Font size nhỏ hơn trên màn hình nhỏ
                    sm: "14.66px",
                  },
                  fontWeight: 400,
                  lineHeight: "17.49px",
                  color: "#A9A9A9",
                }}
              >
                {item.lable}
              </Typography>
            </TextBox>
          </ListItem>
        ))}
      </MenuContainer>
    </SlidebarContainer>
  );
}
