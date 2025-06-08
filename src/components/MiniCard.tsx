import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { MiniCardProps } from "../types/index";
import { styled } from '@mui/material/styles';

const CardIcon= styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,             
    borderRadius: '10px',         
    padding: '6px',              
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',     
    width: 32,
    height: 32,
}));

const MiniCard: React.FC<MiniCardProps> = ({
  miniCardTitle,
  miniCardSubtitle1,
  miniCardSubtitle2,
  miniCardSubtitle3,
  miniCardIcon,
  miniCardBgColor,
}) => {
  return (
    <Box bgcolor={miniCardBgColor} borderRadius={2} p={4}>    
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
      >
        <Stack 
          direction="row" 
          alignItems="flex-start" 
          justifyContent="flex-start" 
          spacing={2}
        >
          {/* Icon Box */}
            {miniCardIcon && (
            <Box display="flex" alignItems="center">
                {typeof miniCardIcon === "string" ? (
                <img 
                    src={miniCardIcon} 
                    alt={miniCardTitle} 
                    style={{ width: 40, height: 25 }}
                />
                ) : (
                <CardIcon>
                    {miniCardIcon}
                </CardIcon>
                )}
            </Box>
            )}


          {/* Text Box */}
          <Box>
            <Typography variant="body1" color="textPrimary">
              {miniCardTitle}
            </Typography>
            <Stack direction="column" spacing={0.5}>
              <Typography variant="body2" color="textSecondary">
                {miniCardSubtitle1}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {miniCardSubtitle2}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {miniCardSubtitle3}
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Arrow Icon */}
        <Box>
          <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default MiniCard;
