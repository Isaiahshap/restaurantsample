import { Box, Heading, Text, Button, VStack, Icon, Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { FaUtensils, FaGlassCheers, FaMusic, FaCalendarAlt } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { IconType } from 'react-icons';


const smokeAnimation = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0; }
  50% { opacity: 0.4; }
  100% { transform: translateY(-20px) scale(1.2); opacity: 0; }
`;

const StyledIcon = styled(Icon)`
  filter: drop-shadow(0 0 10px ${props => props.color});
`;

const FeatureColumn = styled(VStack)`
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
  @media (max-width: 768px) {
    max-width: 100% !important;
    padding: 0 16px;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #FF1493, #FF69B4);
  color: white;
  font-family: 'Fredericka the Great', cursive;
  font-size: 1.2rem;
  padding: 1.5rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background: linear-gradient(45deg, #FF69B4, #FF1493);
  }
`;

const FeatureCard = ({ icon, title, description }: { icon: IconType, title: string, description: string }) => (
  <FeatureColumn maxW="300px" spacing={4}>
    <StyledIcon as={icon} w={20} h={20} color="pink.400" />
    <Text color="white" fontWeight="bold" fontSize="2xl" fontFamily="'Fredericka the Great', cursive" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
      {title}
    </Text>
    <Text color="gray.300" textAlign="center" fontFamily="'Franklin Gothic Medium', sans-serif">
      {description}
    </Text>
  </FeatureColumn>
);

const Home = () => {
  return (
    <ParallaxProvider>
      <Box bg="pink.900">
        {/* Existing ParallaxBanner for desktop */}
        <Box display={["none", "none", "block"]}>
          <ParallaxBanner
            layers={[
              {
                speed: -20,
                children: (
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    overflow="hidden"
                  >
                    <Box
                      as="video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      position="absolute"
                      top="50%"
                      left="50%"
                      minWidth="100%"
                      minHeight="100%"
                      width="auto"
                      height="auto"
                      transform="translate(-50%, -50%)"
                      objectFit="cover"
                      zIndex="-1"
                    >
                      <source src="/bbq.mp4" type="video/mp4" />
                    </Box>
                  </Box>
                ),
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
              spacing={4}
              justify="flex-end"
              align="center"
              h="100%"
              position="relative"
              zIndex="1"
              pb={[8, 32]}
            >
              <Heading
                size={["xl", "2xl", "3xl", "4xl"]}
                color="white"
                textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                textAlign="center"
                px={4}
              >
                Welcome to{" "}
                <Text as="span" color="pink.400" fontFamily="Fredericka the Great" fontWeight="bold">
                  Pink Pitmaster
                </Text>
              </Heading>
              <Text fontSize={["lg", "xl", "2xl"]} color="white" textAlign="center" maxW="600px" px={4}>
                Experience the best BBQ in town, where flavor has lived since 1946!
              </Text>
              <Box h={["20px", "40px"]} />
              <Button
                as={Link}
                to="/menu"
                size="md"
                colorScheme="pink"
                fontFamily="Fredericka the Great"
                _hover={{ bg: "pink.500" }}
              >
                View Our Menu
              </Button>
            </VStack>
          </ParallaxBanner>


          <Box 
            bg="gray.900"
            py={[8, 16]}
            px={[4, 8]}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bgImage="url('/bbq-pattern.svg')"
              bgSize="100px"
              bgRepeat="repeat"
              opacity={0.1}
            />
            <Box
              position="absolute"
              top="-10px"
              left="0"
              right="0"
              height="80px"
              bgGradient="linear(to-b, rgba(236, 72, 153, 0.3), transparent)"
              filter="blur(15px)"
            />
            <VStack spacing={6} position="relative" zIndex={1}>
              <Heading
                as="h2"
                fontSize={["3xl", "4xl", "5xl", "6xl"]}
                fontFamily="'Fredericka the Great', cursive"
                color="pink.300"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                textAlign="center"
              >
                Join Us for a Smokin' Good Time!
              </Heading>
              <Text
                fontSize={["xl", "2xl"]}
                color="gray.300"
                fontFamily="'Franklin Gothic Medium', sans-serif"
                textAlign="center"
              >
                Open daily from 11 AM to 10 PM
              </Text>
            </VStack>
          </Box>


          <ParallaxBanner
            layers={[
              {
                image: '/beer.jpg',
                speed: -20,
                expanded: false,
                translateY: [-20, 0],
                scale: [1.05, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
                style: {
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                },
              },
              {
                children: (
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
                  />
                ),
              },
            ]}
            style={{ height: '400px', borderRadius: 'lg', overflow: 'hidden' }}
          >
            <Flex
              position="relative"
              height="100%"
              justifyContent="space-around"
              alignItems="center"
              px={4}
              flexDirection={["column", "column", "row"]}
              py={[4, 0]}
            >
              <FeatureColumn maxW="300px" spacing={4}>
                <StyledIcon as={FaUtensils} w={20} h={20} color="pink.400" />
                <Text color="white" fontWeight="bold" fontSize="2xl" fontFamily="'Fredericka the Great', cursive" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
                  Mouthwatering BBQ
                </Text>
                <Text color="gray.300" textAlign="center" fontFamily="'Franklin Gothic Medium', sans-serif">
                  Savor the smoky perfection of our slow-cooked meats, each bite a 
                  testament to our pitmaster's passion. From tender brisket to 
                  fall-off-the-bone ribs, our BBQ will transport your taste buds to 
                  flavor paradise.
                </Text>
              </FeatureColumn>
              <FeatureColumn maxW="300px" spacing={4}>
                <StyledIcon as={FaGlassCheers} w={20} h={20} color="pink.400" />
                <Text color="white" fontWeight="bold" fontSize="2xl" fontFamily="'Fredericka the Great', cursive" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
                  Craft Cocktails
                </Text>
                <Text color="gray.300" textAlign="center" fontFamily="'Franklin Gothic Medium', sans-serif">
                  Sip on liquid artistry with our handcrafted cocktails. Our mixologists 
                  blend premium spirits with house-made syrups and fresh ingredients, 
                  creating unique drinks that complement our smoky flavors and ignite 
                  your senses.
                </Text>
              </FeatureColumn>
              <FeatureColumn maxW="300px" spacing={4}>
                <StyledIcon as={FaMusic} w={20} h={20} color="pink.400" />
                <Text color="white" fontWeight="bold" fontSize="2xl" fontFamily="'Fredericka the Great', cursive" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
                  Live Music
                </Text>
                <Text color="gray.300" textAlign="center" fontFamily="'Franklin Gothic Medium', sans-serif">
                  Let the rhythm move you as local artists set the perfect soundtrack 
                  to your dining experience. From soulful blues to foot-stomping 
                  country, our live music nights add that extra sizzle to your 
                  evening at Pink Pitmaster.
                </Text>
              </FeatureColumn>
            </Flex>
            {[...Array(10)].map((_, i) => (
              <Box
                key={i}
                position="absolute"
                top={`${Math.random() * 100}%`}
                left={`${Math.random() * 100}%`}
                width="50px"
                height="50px"
                borderRadius="50%"
                bg="rgba(255,255,255,0.1)"
                animation={`${smokeAnimation} ${5 + Math.random() * 5}s infinite`}
              />
            ))}
          </ParallaxBanner>
          <VStack spacing={[4, 8]} align="center" mt={[6, 12]} mb={[8, 16]} position="relative" px={4}>
            <Box position="absolute" top="-30px" left="0" right="0" zIndex="0">
              <svg
                width="100%"
                height="120px"
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                    M0,60 
                    C150,120 350,0 500,60 
                    C650,120 850,0 1000,60 
                    L1000,120 L0,120 Z
                  "
                  fill="rgba(236, 72, 153, 0.3)"  // Adjusted pink color with transparency
                />
                <path
                  d="
                    M0,60 
                    C200,120 300,0 500,60 
                    C700,120 800,0 1000,60 
                    L1000,120 L0,120 Z
                  "
                  fill="rgba(236, 72, 153, 0.2)"  // Second layer with less opacity
                />
              </svg>
            </Box>
            <StyledButton
              as={Link}
              to="/reserve"
              leftIcon={<Icon as={FaCalendarAlt} w={5} h={5} />}
              zIndex="1"
              fontSize={["1rem", "1.2rem"]}
              padding={["1rem 1.5rem", "1.5rem 2rem"]}
            >
              Make a Reservation
            </StyledButton>
          </VStack>
        </Box>

        {/* Updated mobile-specific hero section */}
        <Box display={["block", "block", "none"]} position="relative" height="100vh">
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            overflow="hidden"
          >
            <Box
              as="video"
              autoPlay
              loop
              muted
              playsInline
              position="absolute"
              top="50%"
              left="50%"
              minWidth="100%"
              minHeight="100%"
              width="auto"
              height="auto"
              transform="translate(-50%, -50%)"
              objectFit="cover"
              zIndex="-1"
            >
              <source src="/bbq.mp4" type="video/mp4" />
            </Box>
          </Box>
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0,0,0,0.6)"
          />
          <VStack
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            justify="center"
            align="center"
            spacing={6}
            px={4}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                color="white"
                fontSize="4xl"
                textAlign="center"
                fontFamily="'Fredericka the Great', cursive"
              >
                Pink Pitmaster
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Text color="white" fontSize="xl" textAlign="center">
                Smokin' hot flavors since 1946
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                as={Link}
                to="/menu"
                size="lg"
                colorScheme="pink"
                fontFamily="'Fredericka the Great', cursive"
              >
                View Our Menu
              </Button>
            </motion.div>
          </VStack>
        </Box>

        {/* Mobile-specific features section */}
        <Box display={["block", "block", "none"]} bg="gray.900" py={8} px={4}>
          <VStack spacing={8}>
            <Heading
              color="pink.400"
              fontSize="3xl"
              textAlign="center"
              fontFamily="'Fredericka the Great', cursive"
            >
              Experience the Best
            </Heading>
            <SimpleGrid columns={2} spacing={6}>
              <FeatureCard
                icon={FaUtensils}
                title="Mouthwatering BBQ"
                description="Savor our slow-cooked meats"
              />
              <FeatureCard
                icon={FaGlassCheers}
                title="Craft Cocktails"
                description="Sip on liquid artistry"
              />
              <FeatureCard
                icon={FaMusic}
                title="Live Music"
                description="Enjoy local artists"
              />
              <FeatureCard
                icon={FaCalendarAlt}
                title="Open Daily"
                description="11 AM to 10 PM"
              />
            </SimpleGrid>
            <Button
              as={Link}
              to="/reserve"
              size="lg"
              colorScheme="pink"
              fontFamily="'Fredericka the Great', cursive"
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
