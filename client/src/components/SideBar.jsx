import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import dashboardIcon from "../assets/dashboard/dashboard-sidebar-icon.svg";
// import {ReactComponent as DashboardIcon} from "../assets/dashboard/dashboard-sidebar-icon.svg";
import courseIcon from "../assets/dashboard/course-sidebar-icon.svg";
import productIcon from "../assets/dashboard/product-sidebar-icon.svg";
import purchasedIcon from "../assets/dashboard/purchased-sidebar-icon.svg";
import enrollmentIcon from "../assets/dashboard/enrollment-sidebar-icon.svg";
import balanceIcon from "../assets/dashboard/balance-sidebar-icon.svg";
import settingIcon from "../assets/dashboard/setting-sidebar-icon.svg";
import SideBarItem from "./SideBarItem";
import { useLocation } from "react-router-dom";

// import {DashboardLayout} from '@mui/material'

export default function SideBar() {
  const sidebarList = [
    { title: "Dashboard", icon: dashboardIcon, route: "/dashboard" },
    { title: "Course", icon: courseIcon, route: "/course" },
    { title: "Product", icon: productIcon, route: "/product" },
    { title: "Purchased", icon: purchasedIcon, route: "/purchased" },
    { title: "Enrollment", icon: enrollmentIcon, route: "/enrollment" },
    { title: "Balance", icon: balanceIcon, route: "/balance" },
    { title: "Setting", icon: settingIcon, route: "/setting" },
  ];
  const { pathname } = useLocation();
  const drawerWidth = 240;
  console.log(pathname);
  const content = (
    <>
      {sidebarList.map((item, id) => (
        <SideBarItem title={item.title} icon={item.icon} key={id} />
      ))}
    </>
  );
  const sideBarContent = (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        Icon
        <Toolbar />
        <Divider />
        <List>
          {sidebarList.map(({ title, icon, route }, index) => (
            <ListItem key={title} disablePadding selected={route === pathname}>
              <ListItemButton>
                <ListItemIcon>
                  <Box
                    component="img"
                    sx={{
                      height: 25,
                      width: 25,
                    }}
                    alt={title}
                    src={icon}
                  />
                  {/* <img src={icon} /> */}
                </ListItemIcon>
                <ListItemText primary={title} sx={{ color: "dark.300" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}
    </Box>
  );
  return sideBarContent;
}
