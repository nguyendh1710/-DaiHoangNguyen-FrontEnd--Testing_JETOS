import React from "react";
import {
  DashboardContainer,
  DashboardContent,
  Item,
  IconContainer,
  TextContainer,
  Title,
  Text,
} from "./Dasboard.style";
import { Grid2 } from "@mui/material";
import Header from "./../../components/Header/Header";

// Dữ liệu menu
const items = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/13722abb3e38b87fa547dce341ca01bb96131263/src/modules/Dashboard/Balance.svg",
    title: "Balance",
    text: "$41,210",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/13722abb3e38b87fa547dce341ca01bb96131263/src/modules/Dashboard/Income.svg",
    title: "Income",
    text: "$41,210",
  },

  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/e0341d59b32aa49635f4df2cee453e48cacf76e8/src/modules/Dashboard/Expenses.svg",
    title: "Expenses",
    text: "$41,210",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN_FrontEnd_Testing_JETOS/13722abb3e38b87fa547dce341ca01bb96131263/src/modules/Dashboard/Savings.svg",
    title: "Savings",
    text: "$41,210",
  },
];

export default function Dashboard() {
  return (
    <DashboardContainer container spacing={2}>
      {/* Header */}
      <Header />
      {/* Content */}
      <DashboardContent>
        {items.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={3} key={item.id}>
            <Item>
              {/* Icon box bên trái */}
              <IconContainer>
                <img src={item.image} alt="icon" width="60%" height="60%" />
              </IconContainer>
              {/* Text box bên phải */}
              <TextContainer>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
              </TextContainer>
            </Item>
          </Grid2>
        ))}
      </DashboardContent>
    </DashboardContainer>
  );
}
