import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaUtensils, FaCalendarAlt, FaClock, FaUsers, FaFireAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

const flameAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// Define the background pattern
const backgroundPattern = css`
  background-color: #000;
  background-image: 
    radial-gradient(#EC4899 0.5px, transparent 0.5px),
    radial-gradient(#EC4899 0.5px, #000 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  opacity: 0.65;
`;

const Reserve = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Reservation Submitted!',
      description: `Get ready for a smokin' good time, ${name}! Your table for ${guests} on ${date} at ${time} is all fired up!`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // Reset form fields
    setDate('');
    setTime('');
    setGuests('');
    setName('');
    setEmail('');
  };

  return (
    <Box
      bg="gray.900"
      minH="100vh"
      pt={32}
      pb={20}
      px={8}
      backgroundImage="url('/grill-bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        css={backgroundPattern}
      />
      <Box maxW="600px" mx="auto" position="relative" zIndex={1}>
        <VStack spacing={12}>
          <Heading
            as={motion.h1}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            size="3xl"
            color="pink.400"
            textAlign="center"
            fontFamily="'Fredericka the Great', cursive"
            textShadow="2px 2px 4px rgba(0,0,0,0.4)"
          >
            Fire Up Your Reservation!
          </Heading>
          <Text
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            fontSize="xl"
            color="yellow.300"
            textAlign="center"
            fontStyle="italic"
          >
            Join us for a sizzlin' hot experience at{' '}
            <Text
              as="span"
              color="pink.400"
              fontFamily="'Fredericka the Great', cursive"
            >
              Pink Pitmaster
            </Text>
            !
          </Text>
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="rgba(0,0,0,0.8)"
            p={8}
            borderRadius="lg"
            w="full"
            boxShadow="xl"
            border="2px solid"
            borderColor="pink.400"
          >
            <VStack spacing={6}>
              <FormControl>
                <FormLabel color="white">
                  <Flex align="center">
                    <Icon as={FaUsers} color="pink.400" mr={2} />
                    Your Name <Text as="span" color="pink.400" ml={1}>*</Text>
                  </Flex>
                </FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  bg="gray.700"
                  color="white"
                  _hover={{ bg: "gray.600" }}
                  _focus={{ borderColor: "pink.400" }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">
                  <Flex align="center">
                    <Icon as={FaUtensils} color="pink.400" mr={2} />
                    Email Address <Text as="span" color="pink.400" ml={1}>*</Text>
                  </Flex>
                </FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  bg="gray.700"
                  color="white"
                  _hover={{ bg: "gray.600" }}
                  _focus={{ borderColor: "pink.400" }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">
                  <Flex align="center">
                    <Icon as={FaCalendarAlt} color="pink.400" mr={2} />
                    Date <Text as="span" color="pink.400" ml={1}>*</Text>
                  </Flex>
                </FormLabel>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  bg="gray.700"
                  color="white"
                  _hover={{ bg: "gray.600" }}
                  _focus={{ borderColor: "pink.400" }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">
                  <Flex align="center">
                    <Icon as={FaClock} color="pink.400" mr={2} />
                    Time <Text as="span" color="pink.400" ml={1}>*</Text>
                  </Flex>
                </FormLabel>
                <Select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Select time"
                  bg="gray.700"
                  color="white"
                  _hover={{ bg: "gray.600" }}
                  _focus={{ borderColor: "pink.400" }}
                >
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel color="white">
                  <Flex align="center">
                    <Icon as={FaUsers} color="pink.400" mr={2} />
                    Number of Guests <Text as="span" color="pink.400" ml={1}>*</Text>
                  </Flex>
                </FormLabel>
                <Select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="Select number of guests"
                  bg="gray.700"
                  color="white"
                  _hover={{ bg: "gray.600" }}
                  _focus={{ borderColor: "pink.400" }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7+">7+ Guests</option>
                </Select>
              </FormControl>
              <Button
                type="submit"
                size="lg"
                colorScheme="pink"
                leftIcon={<Icon as={FaFireAlt} />}
                _hover={{ bg: "pink.500" }}
                w="full"
                fontFamily="'Fredericka the Great', cursive"
                fontSize="xl"
                py={6}
                animation={`${flameAnimation} 2s infinite`}
              >
                Light the Grill!
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Reserve;
