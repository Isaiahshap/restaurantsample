import { Box, Text, Flex, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { keyframes } from "@emotion/react";

const moveBBQSmoke = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" py={8} px={4}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="space-between">
        <VStack align="start" mb={8}>
          <Text fontWeight="bold" fontSize="2xl" color="pink.400" fontFamily="cursive">
            Pink Pitmaster
          </Text>
          <Text color="gray.300">Smokin' hot flavors since 2010</Text>
        </VStack>
        <HStack spacing={6} mb={8}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} w={6} h={6} color="pink.400" _hover={{ color: "pink.300" }} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} w={6} h={6} color="pink.400" _hover={{ color: "pink.300" }} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} w={6} h={6} color="pink.400" _hover={{ color: "pink.300" }} />
          </Link>
        </HStack>
      </Flex>
      <Box borderTop="1px solid" borderColor="gray.700" pt={4} mt={4}>
        <Flex maxW="1200px" mx="auto" justifyContent="space-between" flexWrap="wrap">
          <Text color="gray.400" fontSize="sm">
            © {new Date().getFullYear()} Pink Pitmaster. All rights reserved.
          </Text>
          <HStack spacing={4} color="gray.400" fontSize="sm">
            <Link href="/privacy" _hover={{ color: "pink.400" }}>Privacy Policy</Link>
            <Link href="/terms" _hover={{ color: "pink.400" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
      <Box position="relative" overflow="hidden" height="4px" mt={4}>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-r, pink.400, pink.600, pink.400)"
          animation={`${moveBBQSmoke} 10s linear infinite`}
        />
      </Box>
    </Box>
  );
};

export default Footer;
