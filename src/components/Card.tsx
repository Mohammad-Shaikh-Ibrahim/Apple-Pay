import { Box, Stack, Typography } from "@mui/material";
import type { CardProps } from "../types/index";

const Card: React.FC<CardProps> = ({ cardTitle, items }) => {
  return (
    <Stack direction={"column"}>
      <Typography variant="caption" fontWeight={700} fontSize={18} my={3}>
        {cardTitle}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Box
          borderRadius={2}
          border="dashed 2px"
          borderColor={(theme) => theme.palette.primary.dark}
          padding={2}
          display="flex"
          flexDirection="column"
          flex={1}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              sx={{
                marginBottom: index < items.length - 1 ? 1 : 0,
                width: "100%",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>{item.miniCard}</Box>
            </Box>
          ))}
        </Box>
        <Stack direction="column">
          {items.map((item, index) => (
            <Box
              key={index}
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              sx={{
                marginBottom: index < items.length - 1 ? 1 : 0,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                {item.caption}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
