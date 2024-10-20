import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

const TermsOfService = () => {
  return (
    <Box bg="gray.900" py={20} px={8} pt={32}>
      <Container maxW="1200px">
        <VStack spacing={8} align="start">
          <Heading as="h1" size="2xl" color="pink.400">
            Terms of Service
          </Heading>
          <Text color="gray.300">
            This is a sample Terms of Service for Pink Pitmaster, a fictional restaurant website.
          </Text>
          <Text color="gray.300">
            1. Acceptance of Terms: By accessing and using the Pink Pitmaster website, you agree to be bound by these Terms of Service.
          </Text>
          <Text color="gray.300">
            2. Use of Website: You may use our website for lawful purposes only and in accordance with these Terms of Service.
          </Text>
          <Text color="gray.300">
            3. Intellectual Property: All content on this website is the property of Pink Pitmaster and protected by copyright laws.
          </Text>
          <Text color="gray.300">
            4. Disclaimer: This is a fictional website created for demonstration purposes. No real services or products are offered.
          </Text>
          <Text color="gray.300">
            5. Changes to Terms: We reserve the right to modify these terms at any time. Please review them periodically.
          </Text>
          <Text color="gray.300" fontWeight="bold">
            This is a sample website. Visit yeshaya.dev for more information about the developer.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default TermsOfService;
