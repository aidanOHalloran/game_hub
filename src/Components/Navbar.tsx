import { HStack, Image  } from '@chakra-ui/react';
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='15px'>
        <Image src={logo} boxSize='60px'/>
        {/* <h1>Navbar</h1> */}
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar;