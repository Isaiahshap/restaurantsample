import React from "react";
import { Box, Flex, Link, HStack, Button, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";

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

const Navbar: React.FC = () => {
  return (
    <Box
      bgGradient="linear(to-r, black, gray.800)"
      px={6}
      py={4}
      position="fixed"
      width="100%"
      zIndex="999"
      boxShadow="md"
    >
      <Flex h={20} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Text
              fontWeight="bold"
              fontSize="2xl"
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
        <Button
          as={RouterLink}
          to="/reserve"
          bgGradient="linear(to-r, pink.400, pink.600)"
          color="white"
          rounded="full"
          boxShadow="sm"
          _hover={{ bgGradient: "linear(to-r, pink.500, pink.700)", boxShadow: "md" }}
          _active={{ bgGradient: "linear(to-r, pink.600, pink.800)", boxShadow: "lg" }}
        >
          Reserve Now
        </Button>
      </Flex>
    </Box>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => (
  <Link
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    rounded="md"
    color="white"
    _hover={{
      textDecoration: 'none',
      bg: 'pink.800',
    }}
  >
    {children}
  </Link>
);

export default Navbar;
