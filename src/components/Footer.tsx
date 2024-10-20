import { Box, Text, Flex, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" py={8} px={4}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="space-between">
        <VStack align="start" mb={8}>
          <Text fontWeight="bold" fontSize="2xl" color="pink.400" fontFamily="Fredericka the Great">
            Pink Pitmaster
          </Text>
          <Text color="gray.300">Smokin' hot flavors since 2010</Text>
        </VStack>
        <HStack spacing={6} mb={8}>
          <Link href="https://github.com/isaiahshap" isExternal>
            <Icon as={FaGithub} w={6} h={6} color="pink.400" _hover={{ color: "pink.300" }} />
          </Link>
          <Link href="https://instagram.com/yeshaya_" isExternal>
            <Icon as={FaInstagram} w={6} h={6} color="pink.400" _hover={{ color: "pink.300" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/yeshaya-shapiro-973238221/" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} color="pink.400" _hover={{ color: "pink.300" }} />
          </Link>
        </HStack>
      </Flex>
      <Box borderTop="1px solid" borderColor="gray.700" pt={4} mt={4}>
        <Flex maxW="1200px" mx="auto" justifyContent="space-between" flexWrap="wrap">
          <Text color="gray.400" fontSize="sm">
            © {new Date().getFullYear()} Pink Pitmaster. All rights reserved. THIS IS A SAMPLE WEBSITE. Visit yeshaya.dev for more info.
          </Text>
          <HStack spacing={4} color="gray.400" fontSize="sm">
            <Link href="/privacy" _hover={{ color: "pink.400" }}>Privacy Policy</Link>
            <Link href="/terms" _hover={{ color: "pink.400" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
