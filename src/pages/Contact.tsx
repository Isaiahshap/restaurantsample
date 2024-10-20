import { Box, FormControl, FormLabel, Input, Textarea, Button, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Box bg="gray.900" py={20} px={8}>
      <VStack spacing={12} maxW="1200px" mx="auto">
        <Heading as="h1" size="3xl" color="pink.400" textAlign="center">
          Get in Touch
        </Heading>
        <Text fontSize="xl" color="gray.300" textAlign="center" maxW="800px">
          Have a question or want to make a reservation? We'd love to hear from you!
        </Text>
        
        <HStack spacing={8} w="full" flexWrap="wrap" justify="center">
          <VStack align="start" bg="gray.800" p={6} borderRadius="md" flex="1" minW="250px">
            <Heading as="h2" size="lg" color="white" mb={4}>
              Contact Information
            </Heading>
            <HStack spacing={4}>
              <Icon as={FaPhone} color="pink.400" />
              <Text color="gray.300">(555) 123-4567</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaEnvelope} color="pink.400" />
              <Text color="gray.300">info@pinkpitmaster.com</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaMapMarkerAlt} color="pink.400" />
              <Text color="gray.300">123 BBQ Lane, Smokey City, ST 12345</Text>
            </HStack>
          </VStack>
          
          <VStack align="start" bg="gray.800" p={6} borderRadius="md" flex="1" minW="250px">
            <Heading as="h2" size="lg" color="white" mb={4}>
              Send Us a Message
            </Heading>
            <FormControl isRequired>
              <FormLabel color="gray.300">Name</FormLabel>
              <Input type="text" placeholder="Your name" bg="gray.700" border="none" _placeholder={{ color: "gray.500" }} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.300">Email</FormLabel>
              <Input type="email" placeholder="Your email" bg="gray.700" border="none" _placeholder={{ color: "gray.500" }} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.300">Message</FormLabel>
              <Textarea placeholder="Your message" bg="gray.700" border="none" _placeholder={{ color: "gray.500" }} />
            </FormControl>
            <Button colorScheme="pink" size="lg" mt={4} w="full">
              Send Message
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Contact;
