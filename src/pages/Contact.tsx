import { Box, FormControl, FormLabel, Input, Textarea, Button, Heading, Stack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box py={10} px={6} maxW="lg" mx="auto">
      <Heading textAlign="center" mb={6}>
        Contact Us
      </Heading>
      <Stack spacing={6}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your email" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message" />
        </FormControl>

        <Button colorScheme="teal" size="lg">
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
