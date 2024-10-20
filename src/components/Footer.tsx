import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.700" py={4} textAlign="center">
      <Text color="white">© 2024 Restaurant Name. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
