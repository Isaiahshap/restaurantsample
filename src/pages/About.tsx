import { Box, Heading, Text, Image, Stack, VStack, Icon, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFire, FaUtensils, FaHeart, FaLeaf } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const flicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 0.99;
    text-shadow: 0 0 20px #EC4899, 0 0 30px #EC4899, 0 0 40px #EC4899, 0 0 50px #EC4899;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
    text-shadow: none;
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const signatureDishes = [
  {
    name: "Pink Pitmaster's Vegan tofu Ribs",
    description: "Our award-winning tofu ribs, slow-smoked for 6 hours and glazed with our secret pink BBQ sauce.",
    image: "/tofu.jpg"
  },
  {
    name: "Smokey's Seitan Brisket Platter",
    description: "Melt-in-your-mouth seitan, smoked for 12 hours and served with our homemade pickles and slaw.",
    image: "/seitan.jpg"
  }
];

const About = () => {
  const location = useLocation();
  const veganMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#vegan-menu' && veganMenuRef.current) {
      const yOffset = -100; // Adjust this value to control how much higher it scrolls
      const element = veganMenuRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Box bg="gray.900" py={20} px={8} pt={32}>
      <VStack spacing={16} maxW="1200px" mx="auto">
        <Heading
          as="h1"
          size="4xl"
          color="pink.400"
          textAlign="center"
          fontFamily="Fredericka the Great"
          textShadow="0 0 20px #EC4899, 0 0 30px #EC4899, 0 0 40px #EC4899, 0 0 50px #EC4899"
          animation="neon 1.5s ease-in-out infinite alternate"
          _hover={{
            animation: `${flicker} 2s linear infinite`,
            cursor: "pointer",
          }}
          transition="all 0.3s"
        >
          The Pink Pitmaster Story
        </Heading>
        
        <Box position="relative" w="full" maxW="1200px" h={["600px", "500px"]} overflow="hidden" borderRadius="lg" mx="auto">
          <Image
            src="/pit.jpg"
            alt="Pink Pitmaster in action"
            objectFit="cover"
            w="full"
            h="full"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
            backdropFilter="blur(5px)"
          />
          <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            align="center"
            justify="center"
          >
            <Box
              bg="rgba(0,0,0,0.8)"
              p={8}
              borderRadius="lg"
              maxW="600px"
              border="2px solid"
              borderColor="pink.400"
              boxShadow="0 0 20px rgba(236, 72, 153, 0.5), 0 0 30px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)"
            >
              <Text
                fontSize="xl"
                color="white"
                textAlign="center"
                lineHeight="tall"
              >
                Born from a passion for perfectly smoked meats and a love for all things pink, 
                Pink Pitmaster has been serving up mouthwatering BBQ since 2015. Our journey 
                began with a small food truck and a big dream, and has since grown into the 
                sizzling hot spot you see today.
              </Text>
              <Flex justifyContent="center" mt={6}>
                <Button
                  as={RouterLink}
                  to="/menu"
                  size="lg"
                  colorScheme="pink"
                  leftIcon={<Icon as={FaUtensils} />}
                  _hover={{ bg: "pink.500", transform: "translateY(-2px)" }}
                  transition="all 0.3s"
                  boxShadow="0 0 10px #EC4899, 0 0 20px #EC4899"
                >
                  Explore Our Menu
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        
        <Stack direction={["column", "row"]} spacing={12} align="center">
          <VStack
            transition="all 0.3s"
            _hover={{ 
              transform: "scale(1.05)",
              "& > *": { animation: `${bounce} 0.5s ease-in-out` }
            }}
          >
            <Icon as={FaFire} w={12} h={12} color="pink.400" />
            <Heading as="h3" size="lg" color="white">
              Smokin' Hot Flavors
            </Heading>
            <Text color="gray.300" textAlign="center">
              We use a blend of hickory and applewood to create our signature smoke flavor.
            </Text>
          </VStack>
          <VStack
            transition="all 0.3s"
            _hover={{ 
              transform: "scale(1.05)",
              "& > *": { animation: `${bounce} 0.5s ease-in-out` }
            }}
          >
            <Icon as={FaUtensils} w={12} h={12} color="pink.400" />
            <Heading as="h3" size="lg" color="white">
              Quality Ingredients
            </Heading>
            <Text color="gray.300" textAlign="center">
              We source only the finest, locally-raised meats and fresh produce.
            </Text>
          </VStack>
          <VStack
            transition="all 0.3s"
            _hover={{ 
              transform: "scale(1.05)",
              "& > *": { animation: `${bounce} 0.5s ease-in-out` }
            }}
          >
            <Icon as={FaHeart} w={12} h={12} color="pink.400" />
            <Heading as="h3" size="lg" color="white">
              Community Love
            </Heading>
            <Text color="gray.300" textAlign="center">
              We're proud to support local charities and host community events.
            </Text>
          </VStack>
        </Stack>
        
        <Box bg="gray.800" py={16} px={8} borderRadius="lg" w="full" position="relative" overflow="hidden">
          <Box position="absolute" top={0} left={0} right={0} h="4px" bgGradient="linear(to-r, pink.400, pink.600)" />
          <Heading 
            as="h2" 
            size="2xl" 
            color="pink.400" 
            mb={8} 
            textAlign="center"
            fontFamily="Fredericka the Great"
          >
            Meet the Pitmaster
          </Heading>
          <Flex direction={["column", "row"]} align="center" justify="space-between">
            <Box flexShrink={0} mb={[6, 0]} mr={[0, 8]}>
              <Image
                src="/cheff.jpg"
                alt="Chef Sarah 'Smokey' Johnson"
                borderRadius="full"
                boxSize={["200px", "250px"]}
                objectFit="cover" 
                border="4px solid"
                borderColor="pink.400"
              />
            </Box>
            <VStack align="start" spacing={4} flex={1}>
              <Heading as="h3" size="xl" color="white">
                Chef Sarah <Text as="span" fontFamily="Fredericka the Great" color="gray.300">"Smokey"</Text> Johnson
              </Heading>
              <Text color="gray.300" fontSize="lg" lineHeight="tall">
                With over 15 years of experience and multiple BBQ championship titles, 
                Chef Sarah brings her passion for perfect smoke rings and fall-off-the-bone 
                tenderness to every dish at Pink Pitmaster. Her secret? A blend of traditional 
                techniques, innovative flavors, and a whole lot of love.
              </Text>
              <Button
                as={RouterLink}
                to="/menu"
                size="lg"
                colorScheme="pink"
                leftIcon={<Icon as={FaUtensils} />}
                _hover={{ bg: "pink.500" }}
              >
                Explore Sarah's Creations
              </Button>
            </VStack>
          </Flex>
        </Box>
        
        <Box 
          id="vegan-menu"
          ref={veganMenuRef}
          bg="gray.800" 
          py={16} 
          px={8} 
          borderRadius="lg" 
          w="full" 
          position="relative" 
          overflow="hidden"
          boxShadow="0 0 20px rgba(72, 187, 120, 0.2)"
          border="1px solid"
          borderColor="green.400"
        >
          <Box 
            position="absolute" 
            top={0} 
            left={0} 
            right={0} 
            h="4px" 
            bgGradient="linear(to-r, green.400, pink.400)" 
          />
          <VStack spacing={12}>
            <Heading as="h2" size="2xl" color="green.400" textAlign="center">
              Signature <Text as="span" color="pink.400" fontFamily="Fredericka the Great">Vegan</Text> Dish Spotlight
            </Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={8}>
              {signatureDishes.map((dish, index) => (
                <Box 
                  key={index} 
                  bg="gray.900" 
                  borderRadius="lg" 
                  overflow="hidden"
                  border="1px solid"
                  borderColor="green.400"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 0 20px rgba(72, 187, 120, 0.3)"
                  }}
                >
                  <Image src={dish.image} alt={dish.name} h="300px" w="100%" objectFit="cover" />
                  <VStack p={6} align="start" spacing={3}>
                    <Flex align="center">
                      <Icon as={FaLeaf} color="green.400" mr={2} />
                      <Heading as="h3" size="lg" color="white">
                        {dish.name}
                      </Heading>
                    </Flex>
                    <Text color="gray.300">{dish.description}</Text>
                    <Text color="green.400" fontWeight="bold" mt={2}>$14.99</Text>
                    <Text color="green.400" fontStyle="italic" mt={2}>Available upon request</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default About;
