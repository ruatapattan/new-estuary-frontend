import { createContext, useState } from 'react';

const SidebarContext = createContext();

function SidebarContextProvider(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chooseNavProfile, setChooseNavProfile] = useState('Profile');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <SidebarContext.Provider
      value={{ mobileOpen, setMobileOpen, handleDrawerToggle, chooseNavProfile, setChooseNavProfile }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
}
export { SidebarContext, SidebarContextProvider };
