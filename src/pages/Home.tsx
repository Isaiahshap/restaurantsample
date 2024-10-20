import { Box, Heading, Text, Button, VStack, HStack, Icon, Image, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { FaUtensils, FaGlassCheers, FaMusic, FaCalendarAlt } from "react-icons/fa";

const Home = () => {
  return (
    <ParallaxProvider>
      <Box>
        <ParallaxBanner
          layers={[
            {
              children: (
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src="/bbq.mp4" type="video/mp4" />
                </video>
              ),
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
              <Text as="span" color="pink.400" fontFamily="Fredericka the Great" fontWeight="bold">
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


        <Box bg="gray.900" py={16} px={8}>
          <VStack spacing={8} maxW="1200px" mx="auto">
            <Heading color="white" size="2xl" textAlign="center">
              Join Us for a Smokin' Good Time!
            </Heading>
            <Divider
              borderColor="pink.400"
              borderWidth="1px"
              width="70%"
              opacity={0.6}
              css={{
                boxShadow: '0 0 10px #D53F8C',
              }}
            />

            <Text color="gray.300" fontSize="xl" textAlign="center">
              Open daily from 11 AM to 10 PM
            </Text>
            <Divider
              borderColor="pink.400"
              borderWidth="1px"
              width="30%"
              opacity={0.6}
              css={{
                boxShadow: '0 0 10px #D53F8C',
              }}
            />

            <HStack spacing={20} wrap="wrap" justify="center">
              <Image src="/mic.jpg" alt="Microphone" boxSize="250px" objectFit="cover" borderRadius="md" />
              <VStack>
                <Icon as={FaUtensils} w={8} h={8} color="pink.400" />
                <Text color="white" fontWeight="bold">Mouthwatering BBQ</Text>
              </VStack>
              <VStack>
                <Icon as={FaGlassCheers} w={8} h={8} color="pink.400" />
                <Text color="white" fontWeight="bold">Craft Cocktails</Text>
              </VStack>
              <VStack>
                <Icon as={FaMusic} w={8} h={8} color="pink.400" />
                <Text color="white" fontWeight="bold">Live Music</Text>
              </VStack>
              <Image src="/beer.jpg" alt="Beer" boxSize="250px" objectFit="cover" borderRadius="md" />
            </HStack>
            <Button
              as={Link}
              to="/reserve"
              size="lg"
              colorScheme="pink"
              _hover={{ bg: "pink.500" }}
              leftIcon={<Icon as={FaCalendarAlt} />}
            >
              Make a Reservation
            </Button>
          </VStack>
        </Box>
      </Box>
    </ParallaxProvider>
  );
};

export default Home;
