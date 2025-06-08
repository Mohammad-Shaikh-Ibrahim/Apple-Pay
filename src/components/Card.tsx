import { Box, Stack, Typography } from "@mui/material";
import type { CardProps } from "../types/index";


const Card: React.FC<CardProps> =({cardTitle,children})=> {
  return (
    <Stack direction={"column"} spacing={2} >
        <Typography variant="caption">
            {cardTitle}
        </Typography>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
            <Stack direction={"column"}>
                <Box
                    borderRadius={2}
                    border={"dashed 2px"}
                    borderColor={(theme) => theme.palette.primary.dark}
                >
                    {children}
                </Box>
            </Stack>
            
            {/* <Stack direction={"column"}>

            </Stack> */}

        </Stack>
    </Stack>
  );
}
export default Card;