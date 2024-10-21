import React from "react";
import {
  Box,
  Flex,
  Link,
  HStack,
  Button,
  Text,
  Image,
  IconButton,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconType } from "react-icons";

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const CenteredIcon = ({ icon, ...props }: { icon: IconType; [key: string]: any }) => (
  <Icon
    as={icon}
    w={5}
    h={5}
    display="flex"
    alignItems="center"
    justifyContent="center"
    {...props}
  />
);

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgGradient="linear(to-r, rgba(0,0,0,0.6), rgba(23,25,35,0.6))"
      px={6}
      py={4}
      position="fixed"
      width="100%"
      zIndex="999"
      boxShadow="md"
      backdropFilter="blur(8px)"
    >
      <Flex h={20} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            <Box
              position="relative"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Image
                src="/logo.png"
                alt="Pink Pitmaster Logo"
                boxSize={["60px", "80px"]}
                opacity={0.8}
                transition="opacity 0.3s ease-in-out"
                _hover={{ opacity: 1 }}
              />
            </Box>
          </Link>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            <Text
              fontWeight="bold"
              fontSize={["xl", "2xl"]}
              color="pink.400"
              fontFamily="Fredericka the Great"
              _hover={{ animation: `${bounceAnimation} 1s ease`, color: "pink.300" }}
            >
              Pink Pitmaster
            </Text>
          </Link>
          <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
            <NavLink to="/menu">Our Menu</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button
            as={RouterLink}
            to="/reserve"
            bgGradient="linear(to-r, pink.400, pink.600)"
            color="white"
            fontFamily="Fredericka the Great"
            rounded="full"
            boxShadow="sm"
            _hover={{ bgGradient: "linear(to-r, pink.500, pink.700)", boxShadow: "md" }}
            _active={{ bgGradient: "linear(to-r, pink.600, pink.800)", boxShadow: "lg" }}
          >
            Reserve Now
          </Button>
          <IconButton
            size="md"
            icon={
              <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
                {isOpen ? <CenteredIcon icon={FaTimes} /> : <CenteredIcon icon={FaBars} />}
              </Box>
            }
            aria-label="Open Menu"
            display={{ md: "none" }}
            ml={2}
            onClick={isOpen ? onClose : onOpen}
            variant="outline"
            borderColor="pink.400"
            color="pink.400"
            _hover={{
              bg: "pink.400",
              color: "white",
            }}
            _active={{
              bg: "pink.500",
              color: "white",
            }}
            transition="all 0.2s"
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <NavLink to="/menu" onClick={onClose}>Our Menu</NavLink>
            <NavLink to="/about" onClick={onClose}>About Us</NavLink>
            <NavLink to="/contact" onClick={onClose}>Contact</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to, onClick }) => (
  <Link
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    rounded="md"
    color="white"
    _hover={{
      textDecoration: "none",
      bg: "pink.700",
    }}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
