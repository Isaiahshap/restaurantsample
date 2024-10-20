import { Box, FormControl, FormLabel, Input, Textarea, Button, Heading, Text, VStack, HStack, Icon, Flex, useToast } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box bg="gray.900" py={20} px={8} pt={32}>
      <VStack spacing={8} maxW="1200px" mx="auto">
        <Box position="relative" width="100%" textAlign="center">
          <Icon 
            as={FaPhone} 
            color="pink.400" 
            boxSize={40} 
            position="absolute" 
            top="80%" 
            left="20%" 
            transform="translate(-50%, -50%)" 
            opacity={0.3}
          />
          <VStack spacing={2} position="relative" zIndex={1}>
            <Heading
              as="h1"
              size="4xl"
              color="white"
              fontFamily="Fredericka the Great"
            >
              Get in Touch
            </Heading>
            <Text color="pink.400" fontSize="2xl" fontStyle="italic">
              Let's Fire Up a Conversation!
            </Text>
          </VStack>
        </Box>
        <Text fontSize="xl" color="gray.300" textAlign="center" maxW="800px">
          Have a question or want to make a reservation? We'd love to hear from you! 
          Drop us a line, and we'll get back to you faster than you can say "BBQ"!
        </Text>
        
        <Flex direction={["column", "column", "row"]} w="full" gap={8} mt={8}>
          <VStack align="start" bg="gray.800" p={8} borderRadius="lg" flex="1" spacing={6}>
            <Heading as="h2" size="xl" color="white" mb={4}>
              Contact Information
            </Heading>
            <HStack spacing={4}>
              <Icon as={FaPhone} color="pink.400" boxSize={6} />
              <Text color="gray.300" fontSize="lg">(555) 123-4567</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaEnvelope} color="pink.400" boxSize={6} />
              <Text color="gray.300" fontSize="lg">info@pinkpitmaster.com</Text>
            </HStack>
            <HStack spacing={4} alignItems="flex-start">
              <Icon as={FaMapMarkerAlt} color="pink.400" boxSize={6} mt={1} />
              <Text color="gray.300" fontSize="lg">123 BBQ Lane,<br />Smokey City, ST 12345</Text>
            </HStack>
          </VStack>
          
          <VStack as="form" onSubmit={handleSubmit} align="start" bg="gray.800" p={8} borderRadius="lg" flex="1" spacing={6}>
            <Heading as="h2" size="xl" color="white" mb={4}>
              Send Us a Message
            </Heading>
            <FormControl isRequired>
              <FormLabel color="gray.300">Name</FormLabel>
              <Input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name" 
                bg="gray.700" 
                border="none" 
                _placeholder={{ color: "gray.500" }} 
                _focus={{ borderColor: "pink.400", boxShadow: "0 0 0 1px #D53F8C" }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.300">Email</FormLabel>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
                bg="gray.700" 
                border="none" 
                _placeholder={{ color: "gray.500" }} 
                _focus={{ borderColor: "pink.400", boxShadow: "0 0 0 1px #D53F8C" }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.300">Message</FormLabel>
              <Textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message" 
                bg="gray.700" 
                border="none" 
                _placeholder={{ color: "gray.500" }} 
                _focus={{ borderColor: "pink.400", boxShadow: "0 0 0 1px #D53F8C" }}
                rows={5}
              />
            </FormControl>
            <Button 
              type="submit"
              colorScheme="pink" 
              size="lg" 
              width="full"
              leftIcon={<Icon as={FaPaperPlane} />}
            >
              Send Message
            </Button>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Contact;
