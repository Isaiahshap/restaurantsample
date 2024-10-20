import { Box, Text, Flex, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" py={8} px={4}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="space-between">
        <VStack align="start" mb={8}>
          <Text fontWeight="bold" fontSize="2xl" color="pink.400" fontFamily="Fredericka the Great">
            Pink Pitmaster
          </Text>
          <Text color="gray.300">Smokin' hot flavors since 1946</Text>
          <Text color="gray.400" fontSize="sm" fontStyle="italic">
            This is a sample website. Visit <Link href="https://yeshaya.dev" color="pink.400" isExternal>yeshaya.dev</Link> for more info.
          </Text>
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
            © {new Date().getFullYear()} Pink Pitmaster. All rights reserved.
          </Text>
          <HStack spacing={4} color="gray.400" fontSize="sm">
            <Link as={RouterLink} to="/privacy" _hover={{ color: "pink.400" }}>Privacy Policy</Link>
            <Link as={RouterLink} to="/terms" _hover={{ color: "pink.400" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
