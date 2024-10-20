import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box py={10} px={6}>
      <Stack spacing={6}>
        <Heading textAlign="center">About Us</Heading>
        <Image
          src="/images/restaurant-interior.jpg"
          alt="Restaurant Interior"
          borderRadius="lg"
          w="full"
          maxH="400px"
          objectFit="cover"
        />
        <Text fontSize="lg" textAlign="justify">
          Welcome to our restaurant, where we bring you the best in authentic Mexican cuisine.
          Established in 2010, we have been serving the community with fresh, locally sourced
          ingredients, providing a unique dining experience for all.
        </Text>
        <Text fontSize="lg" textAlign="justify">
          Our mission is to deliver delicious, high-quality food in a warm and friendly environment.
          Whether you're here for a quick bite or a full meal, we aim to make every visit memorable.
        </Text>
      </Stack>
    </Box>
  );
};

export default About;
