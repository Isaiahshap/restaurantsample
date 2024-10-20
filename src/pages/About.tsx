import { Box, Heading, Text, Image, Stack, VStack, HStack, Icon, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFire, FaUtensils, FaHeart } from "react-icons/fa";

const testimonials = [
  {
    quote: "The best BBQ I've ever had! The Pink Pitmaster knows how to smoke meat to perfection.",
    name: "John D."
  },
  {
    quote: "I dream about their pulled pork. It's that good!",
    name: "Sarah M."
  },
  {
    quote: "The atmosphere is amazing, and the food is even better. A must-visit!",
    name: "Mike R."
  }
];

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
  return (
    <Box bg="gray.900" py={20} px={8} pt={32}>
      <VStack spacing={16} maxW="1200px" mx="auto">
        <Heading as="h1" size="3xl" color="pink.400" textAlign="center">
          The Pink Pitmaster Story
        </Heading>
        
        <Image
          src="/pit.jpg"
          alt="Pink Pitmaster in action"
          borderRadius="lg"
          w="full"
          maxH="500px"
          objectFit="cover"
        />
        
        <Text fontSize="xl" color="gray.300" textAlign="center" maxW="800px">
          Born from a passion for perfectly smoked meats and a love for all things pink, 
          Pink Pitmaster has been serving up mouthwatering BBQ since 2015. Our journey 
          began with a small food truck and a big dream, and has since grown into the 
          sizzling hot spot you see today.
        </Text>
        
        <Stack direction={["column", "row"]} spacing={12} align="center">
          <VStack>
            <Icon as={FaFire} w={12} h={12} color="pink.400" />
            <Heading as="h3" size="lg" color="white">
              Smokin' Hot Flavors
            </Heading>
            <Text color="gray.300" textAlign="center">
              We use a blend of hickory and applewood to create our signature smoke flavor.
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaUtensils} w={12} h={12} color="pink.400" />
            <Heading as="h3" size="lg" color="white">
              Quality Ingredients
            </Heading>
            <Text color="gray.300" textAlign="center">
              We source only the finest, locally-raised meats and fresh produce.
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaHeart} w={12} h={12} color="pink.400" />
            <Heading as="h3" size="lg" color="white">
              Community Love
            </Heading>
            <Text color="gray.300" textAlign="center">
              We're proud to support local charities and host community events.
            </Text>
          </VStack>
        </Stack>
        
        <Box bg="gray.800" p={8} borderRadius="lg" w="full" position="relative" overflow="hidden">
          <Box position="absolute" top={0} left={0} right={0} h="4px" bgGradient="linear(to-r, pink.400, pink.600)" />
          <Heading as="h2" size="2xl" color="pink.400" mb={8} textAlign="center">
            Meet the Pitmaster
          </Heading>
          <Flex direction={["column", "row"]} align="center" justify="space-between">
            <Box flexShrink={0} mb={[6, 0]} mr={[0, 8]}>
              <Image
                src="/chef.jpg"
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
                Chef Sarah "Smokey" Johnson
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
        
        <Box bg="gray.800" py={16} px={8} borderRadius="lg" w="full">
          <VStack spacing={12}>
            <Heading as="h2" size="2xl" color="pink.400" textAlign="center">
              What Our Customers Say
            </Heading>
            <SimpleGrid columns={[1, null, 3]} spacing={8}>
              {testimonials.map((testimonial, index) => (
                <Box key={index} bg="gray.900" p={6} borderRadius="md" boxShadow="md">
                  <Text color="gray.300" fontSize="lg" fontStyle="italic" mb={4}>
                    "{testimonial.quote}"
                  </Text>
                  <Text color="pink.400" fontWeight="bold">
                    - {testimonial.name}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
            <Heading as="h2" size="2xl" color="pink.400" textAlign="center" mt={16}>
              Signature <Text as="span" color="green.400">Vegan</Text> Dish Spotlight
            </Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={8}>
              {signatureDishes.map((dish, index) => (
                <Box key={index} bg="gray.900" borderRadius="lg" overflow="hidden">
                  <Image src={dish.image} alt={dish.name} h="300px" w="100%" objectFit="cover" />
                  <VStack p={6} align="start" spacing={3}>
                    <Heading as="h3" size="lg" color="white">
                      {dish.name}
                    </Heading>
                    <Text color="gray.300">{dish.description}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
            
            <Button
              as={RouterLink}
              to="/menu"
              size="lg"
              colorScheme="pink"
              mt={8}
              _hover={{ bg: "pink.500" }}
            >
              Explore Our Full Menu
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default About;
