// import React, { useState } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   IconButton,
//   Avatar,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   ListItemSecondaryAction,
//   Switch,
//   Slider,
//   Fab,
//   Badge,
//   Paper,
//   Container,
//   Divider,
//   LinearProgress,
//   CircularProgress,
//   BottomNavigation,
//   BottomNavigationAction,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
// } from '@mui/material';
// import {
//   Home,
//   Search,
//   Favorite,
//   Person,
//   Settings,
//   Phone,
//   Message,
//   Mail,
//   Camera,
//   Add,
//   ChevronRight,
//   Star,
//   PlayArrow,
//   Pause,
//   SkipNext,
//   SkipPrevious,
//   VolumeUp,
//   Battery80,
//   Wifi,
//   SignalCellularAlt,
// } from '@mui/icons-material';

// import Grid from '@mui/material/Grid';

// // Create iOS-inspired theme
// const iosTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#007AFF',
//     },
//     secondary: {
//       main: '#FF3B30',
//     },
//     background: {
//       default: '#F2F2F7',
//       paper: '#FFFFFF',
//     },
//     text: {
//       primary: '#000000',
//       secondary: '#8E8E93',
//     },
//   },
//   typography: {
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     h1: {
//       fontWeight: 700,
//       fontSize: '2.5rem',
//     },
//     h2: {
//       fontWeight: 600,
//       fontSize: '2rem',
//     },
//     body1: {
//       fontSize: '1rem',
//       lineHeight: 1.4,
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 16,
//           boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//           textTransform: 'none',
//           fontWeight: 600,
//         },
//       },
//     },
//     MuiListItem: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//           marginBottom: 4,
//         },
//       },
//     },
//   },
// });

// interface AppData {
//   name: string;
//   icon: React.ReactNode;
//   color: string;
//   badge?: number;
// }

// const IOS15UIKit: React.FC = () => {
//   const [bottomNavValue, setBottomNavValue] = useState<number>(0);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [volume, setVolume] = useState<number>(75);
//   const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);

//   const apps: AppData[] = [
//     { name: 'Phone', icon: <Phone />, color: '#34C759', badge: 3 },
//     { name: 'Messages', icon: <Message />, color: '#007AFF', badge: 12 },
//     { name: 'Mail', icon: <Mail />, color: '#FF3B30', badge: 5 },
//     { name: 'Camera', icon: <Camera />, color: '#8E8E93' },
//     { name: 'Settings', icon: <Settings />, color: '#8E8E93' },
//     { name: 'Music', icon: <PlayArrow />, color: '#FF2D92' },
//   ];

//   const contacts = [
//     { name: 'John Doe', status: 'Available', avatar: 'JD', color: '#007AFF' },
//     { name: 'Jane Smith', status: 'Busy', avatar: 'JS', color: '#FF3B30' },
//     { name: 'Mike Johnson', status: 'Away', avatar: 'MJ', color: '#34C759' },
//     { name: 'Sarah Wilson', status: 'Available', avatar: 'SW', color: '#FF9500' },
//   ];

//   return (
//     <ThemeProvider theme={iosTheme}>
//       <CssBaseline />
//       <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
//         {/* Status Bar */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             px: 2,
//             py: 0.5,
//             bgcolor: 'background.paper',
//             fontSize: '0.875rem',
//             fontWeight: 600,
//           }}
//         >
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//             <Typography variant="caption" fontWeight={600}>9:41</Typography>
//           </Box>
//           <SignalCellularAlt fontSize="small" />
//           <Wifi fontSize="small" />
//           <Battery80 fontSize="small" />
//         </Box>

//         <Container maxWidth="sm" sx={{ py: 2 }}>
//           {/* Header */}
//           <Box sx={{ mb: 3 }}>
//             <Typography variant="h1" sx={{ mb: 1, fontWeight: 700 }}>
//               Good Morning
//             </Typography>
//             <Typography variant="body1" color="text.secondary">
//               Saturday, June 7
//             </Typography>
//           </Box>

//           {/* App Grid */}
//           <Card sx={{ mb: 3 }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
//                 Quick Actions
//               </Typography>
//               <Grid container spacing={2}>
//                 {apps.map((app, index) => (
//                   <Grid item xs={4} key={index}>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         gap: 1,
//                         p: 1,
//                         borderRadius: 2,
//                         cursor: 'pointer',
//                         '&:hover': {
//                           bgcolor: 'rgba(0,0,0,0.04)',
//                         },
//                       }}
//                     >
//                       <Badge badgeContent={app.badge} color="error">
//                         <Box
//                           sx={{
//                             width: 56,
//                             height: 56,
//                             borderRadius: 2,
//                             bgcolor: app.color,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: 'white',
//                           }}
//                         >
//                           {app.icon}
//                         </Box>
//                       </Badge>
//                       <Typography variant="caption" textAlign="center">
//                         {app.name}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
//             </CardContent>
//           </Card>

//           {/* Music Player Card */}
//           <Card sx={{ mb: 3 }}>
//             <CardContent>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
//                 <Avatar
//                   sx={{
//                     width: 60,
//                     height: 60,
//                     bgcolor: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
//                   }}
//                 >
//                   <PlayArrow />
//                 </Avatar>
//                 <Box sx={{ flex: 1 }}>
//                   <Typography variant="subtitle1" fontWeight={600}>
//                     Summer Vibes
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Chill Playlist • 24 songs
//                   </Typography>
//                 </Box>
//               </Box>
              
//               <LinearProgress
//                 variant="determinate"
//                 value={65}
//                 sx={{ mb: 2, borderRadius: 2, height: 4 }}
//               />
              
//               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                 <IconButton>
//                   <SkipPrevious />
//                 </IconButton>
//                 <IconButton
//                   onClick={() => setIsPlaying(!isPlaying)}
//                   sx={{
//                     bgcolor: 'primary.main',
//                     color: 'white',
//                     '&:hover': { bgcolor: 'primary.dark' },
//                   }}
//                 >
//                   {isPlaying ? <Pause /> : <PlayArrow />}
//                 </IconButton>
//                 <IconButton>
//                   <SkipNext />
//                 </IconButton>
//               </Box>
              
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
//                 <VolumeUp fontSize="small" />
//                 <Slider
//                   value={volume}
//                   onChange={(_, value) => setVolume(value as number)}
//                   sx={{ flex: 1 }}
//                 />
//               </Box>
//             </CardContent>
//           </Card>

//           {/* Contacts List */}
//           <Card sx={{ mb: 3 }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
//                 Recent Contacts
//               </Typography>
//               <List disablePadding>
//                 {contacts.map((contact, index) => (
//                   <React.Fragment key={index}>
//                     <ListItem
//                       sx={{
//                         borderRadius: 2,
//                         '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
//                       }}
//                     >
//                       <ListItemAvatar>
//                         <Avatar sx={{ bgcolor: contact.color }}>
//                           {contact.avatar}
//                         </Avatar>
//                       </ListItemAvatar>
//                       <ListItemText
//                         primary={contact.name}
//                         secondary={contact.status}
//                       />
//                       <ListItemSecondaryAction>
//                         <IconButton>
//                           <ChevronRight />
//                         </IconButton>
//                       </ListItemSecondaryAction>
//                     </ListItem>
//                     {index < contacts.length - 1 && <Divider variant="inset" />}
//                   </React.Fragment>
//                 ))}
//               </List>
//             </CardContent>
//           </Card>

//           {/* Settings Card */}
//           <Card sx={{ mb: 3 }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
//                 Settings
//               </Typography>
//               <List disablePadding>
//                 <ListItem>
//                   <ListItemText primary="Notifications" secondary="Allow push notifications" />
//                   <ListItemSecondaryAction>
//                     <Switch
//                       checked={notificationsEnabled}
//                       onChange={(e) => setNotificationsEnabled(e.target.checked)}
//                     />
//                   </ListItemSecondaryAction>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                   <ListItemText primary="Dark Mode" secondary="Appearance settings" />
//                   <ListItemSecondaryAction>
//                     <Switch />
//                   </ListItemSecondaryAction>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                   <ListItemText primary="Privacy" secondary="App permissions" />
//                   <ListItemSecondaryAction>
//                     <IconButton>
//                       <ChevronRight />
//                     </IconButton>
//                   </ListItemSecondaryAction>
//                 </ListItem>
//               </List>
//             </CardContent>
//           </Card>

//           {/* Activity Progress */}
//           <Card sx={{ mb: 10 }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
//                 Today's Activity
//               </Typography>
//               <Grid container spacing={3}>
//                 <Grid item xs={4}>
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
//                       <CircularProgress
//                         variant="determinate"
//                         value={75}
//                         size={60}
//                         thickness={6}
//                         sx={{ color: '#FF3B30' }}
//                       />
//                       <Box
//                         sx={{
//                           top: 0,
//                           left: 0,
//                           bottom: 0,
//                           right: 0,
//                           position: 'absolute',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <Favorite fontSize="small" sx={{ color: '#FF3B30' }} />
//                       </Box>
//                     </Box>
//                     <Typography variant="caption" display="block">
//                       Move
//                     </Typography>
//                     <Typography variant="body2" fontWeight={600}>
//                       285/380
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={4}>
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
//                       <CircularProgress
//                         variant="determinate"
//                         value={60}
//                         size={60}
//                         thickness={6}
//                         sx={{ color: '#34C759' }}
//                       />
//                       <Box
//                         sx={{
//                           top: 0,
//                           left: 0,
//                           bottom: 0,
//                           right: 0,
//                           position: 'absolute',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <Star fontSize="small" sx={{ color: '#34C759' }} />
//                       </Box>
//                     </Box>
//                     <Typography variant="caption" display="block">
//                       Exercise
//                     </Typography>
//                     <Typography variant="body2" fontWeight={600}>
//                       18/30 min
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={4}>
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
//                       <CircularProgress
//                         variant="determinate"
//                         value={90}
//                         size={60}
//                         thickness={6}
//                         sx={{ color: '#007AFF' }}
//                       />
//                       <Box
//                         sx={{
//                           top: 0,
//                           left: 0,
//                           bottom: 0,
//                           right: 0,
//                           position: 'absolute',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <Typography variant="caption" fontWeight={600}>
//                           9
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Typography variant="caption" display="block">
//                       Stand
//                     </Typography>
//                     <Typography variant="body2" fontWeight={600}>
//                       9/12 hours
//                     </Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Container>

//         {/* Floating Action Button */}
//         <Fab
//           color="primary"
//           sx={{
//             position: 'fixed',
//             bottom: 90,
//             right: 20,
//           }}
//         >
//           <Add />
//         </Fab>

//         {/* Bottom Navigation */}
//         <Paper
//           sx={{
//             position: 'fixed',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             borderRadius: '20px 20px 0 0',
//             boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
//           }}
//           elevation={3}
//         >
//           <BottomNavigation
//             value={bottomNavValue}
//             onChange={(_, newValue) => setBottomNavValue(newValue)}
//             sx={{
//               borderRadius: '20px 20px 0 0',
//               py: 1,
//             }}
//           >
//             <BottomNavigationAction label="Home" icon={<Home />} />
//             <BottomNavigationAction label="Search" icon={<Search />} />
//             <BottomNavigationAction
//               label="Favorites"
//               icon={
//                 <Badge badgeContent={4} color="error">
//                   <Favorite />
//                 </Badge>
//               }
//             />
//             <BottomNavigationAction label="Profile" icon={<Person />} />
//           </BottomNavigation>
//         </Paper>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default IOS15UIKit;