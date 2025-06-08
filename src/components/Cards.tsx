import { Stack } from "@mui/material";
import { Person, Home, Bento } from '@mui/icons-material';
import Card from "./Card";
import MiniCard from "./MiniCard";

import AppCard from "/AppCard.png";


const Cards:React.FC = () => {
  return (
    <>
        <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={3}
        >
            <Card cardTitle="ApplePay-detailCard">
                <MiniCard
                    miniCardTitle="Apple Card"
                    miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                    miniCardSubtitle2="•••• 1234" 
                    miniCardIcon={AppCard}
                    miniCardBgColor="primary.light" 
                />
                <MiniCard
                    miniCardTitle="Contact"
                    miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                    miniCardSubtitle2="•••• 1234"
                    miniCardIcon={<Person />}
                    miniCardBgColor="primary.light" 
                />
                <MiniCard
                    miniCardTitle="Shipping"
                    miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                    miniCardSubtitle2="•••• 1234"
                    miniCardSubtitle3="jjjjn"
                    miniCardIcon={<Home />}
                    miniCardBgColor="primary.light" 
                />
                <MiniCard
                    miniCardTitle="Shipping"
                    miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                    miniCardSubtitle2="•••• 1234"
                    miniCardIcon={<Bento />}
                    miniCardBgColor="primary.light" 
                />
            </Card>
            <Card cardTitle="ApplePay-paymentDetails">
                <MiniCard
                    miniCardTitle="ApplePay-paymentDetails"
                    miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                    miniCardSubtitle2="•••• 1234"
                    miniCardIcon="/icons/apple-pay.svg"
                    miniCardBgColor="primary.light" />
            </Card>
            <Card cardTitle="ApplePay-summarySheet">
                <MiniCard
                    miniCardTitle="ApplePay-summarySheet"
                    miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                    miniCardSubtitle2="•••• 1234"
                    miniCardIcon="/icons/apple-pay.svg"
                    miniCardBgColor="primary.light" />
            </Card>
        </Stack>
    </>
  );
}       
export default Cards;