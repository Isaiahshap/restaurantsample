import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

const Home = () => {
  return (
    <ParallaxProvider>
      <Box>
        <ParallaxBanner
          layers={[
            {
              image: '/bbq.jpg',
              speed: -20,
            },
          ]}
          style={{ height: '100vh' }}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0,0,0,0.6)"
          />
          <VStack
            spacing={8}
            justify="center"
            align="center"
            h="100%"
            position="relative"
            zIndex="1"
          >
            <Heading
              size="4xl"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.4)"
            >
              Welcome to{" "}
              <Text as="span" color="pink.400" fontFamily="cursive" fontWeight="bold">
                Pink Pitmaster
              </Text>
            </Heading>
            <Text fontSize="2xl" color="white" textAlign="center" maxW="600px">
              Experience the best BBQ in town, where smoke meets flavor!
            </Text>
            <Button
              as={Link}
              to="/menu"
              size="lg"
              colorScheme="pink"
              _hover={{ bg: "pink.500" }}
            >
              View Our Menu
            </Button>
          </VStack>
        </ParallaxBanner>


        <Box bg="black" py={16} textAlign="center">
          <Heading color="white" size="xl" mb={4}>
            Join Us for a Smokin' Good Time!
          </Heading>
          <Text color="gray.300" fontSize="lg" mb={8}>
            Open daily from 11 AM to 10 PM
          </Text>
          <Button
            as={Link}
            to="/contact"
            size="lg"
            colorScheme="pink"
            _hover={{ bg: "pink.500" }}
          >
            Make a Reservation
          </Button>
        </Box>
      </Box>
    </ParallaxProvider>
  );
};

export default Home;
