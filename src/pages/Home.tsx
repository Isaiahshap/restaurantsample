import { Box, Heading, Text, Button, VStack, HStack, Icon, Image, Divider, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { FaUtensils, FaGlassCheers, FaMusic, FaCalendarAlt } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
`;

const SmokinText = styled.span`
  display: inline-block;
  font-family: 'Fredericka the Great', cursive;
  font-size: 4rem;
  color: #FFA07A;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #FFA07A, transparent);
  }
`;

const SmokeEffect = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ${smokeAnimation} 3s infinite;
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
              fontFamily="Fredericka the Great"
              _hover={{ bg: "pink.500" }}
            >
              View Our Menu
            </Button>
          </VStack>
        </ParallaxBanner>


        <Box bg="gray.900" py={16} px={8}>
          <Box position="relative" textAlign="center" py={16}>
            <SmokinText>
              Join Us for a Smokin' Good Time!
            </SmokinText>
            {[...Array(10)].map((_, i) => (
              <SmokeEffect
                key={i}
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
            <Text
              fontFamily="'Fredericka the Great', cursive"
              fontSize="xl"
              color="gray.300"
              mt={4}
            >
              Open daily from 11 AM to 10 PM
            </Text>
          </Box>


          <ParallaxBanner
            layers={[
              {
                image: '/beer.jpg',
                speed: -20,
                expanded: false,
                translateY: [0, 50],
                scale: [1.05, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
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
            style={{ height: '600px', borderRadius: 'lg', overflow: 'hidden' }}
          >
            <Flex
              position="relative"
              height="100%"
              justifyContent="space-around"
              alignItems="center"
              px={4}
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
          <VStack spacing={8} align="center" mt={12} mb={16}>
            <StyledButton
              as={Link}
              to="/reserve"
              leftIcon={<Icon as={FaCalendarAlt} w={6} h={6} />}
            >
              Make a Reservation
            </StyledButton>
          </VStack>
        </Box>
      </Box>
    </ParallaxProvider>
  );
};

export default Home;
