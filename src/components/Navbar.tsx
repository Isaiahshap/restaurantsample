import React from "react";
import { Box, Flex, Link, HStack, Button, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Box bg="black" px={4} position="fixed" width="100%" zIndex="999">
      <Flex h={20} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Text fontWeight="bold" fontSize="2xl" color="pink.400" fontFamily="cursive">
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
          colorScheme="pink"
          variant="outline"
          size="md"
          _hover={{ bg: "pink.500", color: "white" }}
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
