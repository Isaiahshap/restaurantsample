import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box bg="gray.900" py={20} px={8} pt={32}>
      <Container maxW="1200px">
        <VStack spacing={8} align="start">
          <Heading as="h1" size="2xl" color="pink.400">
            Privacy Policy
          </Heading>
          <Text color="gray.300">
            This is a sample Privacy Policy for Pink Pitmaster, a fictional restaurant website.
          </Text>
          <Text color="gray.300">
            1. Information Collection: We do not collect any personal information as this is a fictional website.
          </Text>
          <Text color="gray.300">
            2. Use of Information: No real information is collected or used on this sample website.
          </Text>
          <Text color="gray.300">
            3. Data Security: As this is a fictional website, no actual data security measures are in place.
          </Text>
          <Text color="gray.300">
            4. Cookies: This sample website does not use cookies or tracking technologies.
          </Text>
          <Text color="gray.300">
            5. Third-Party Links: Any links to third-party websites are for demonstration purposes only.
          </Text>
          <Text color="gray.300" fontWeight="bold">
            This is a sample website. Visit yeshaya.dev for more information about the developer.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
