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
import { FaUtensils, FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';

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
      description: `Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been reserved.`,
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
    <Box bg="gray.900" pt={32} pb={16} px={8}>
      <Box maxW="600px" mx="auto">
        <VStack spacing={12}>
          <Heading as="h1" size="3xl" color="pink.400" textAlign="center">
            Make a Reservation
          </Heading>
          <Text fontSize="xl" color="gray.300" textAlign="center">
            Join us for a smokin' hot experience at Pink Pitmaster!
          </Text>
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="gray.800"
            p={8}
            borderRadius="lg"
            w="full"
            boxShadow="xl"
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel color="white" _after={{ content: '""' }}>
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
                  _hover={{ bg: 'gray.600' }}
                  _focus={{ borderColor: 'pink.400' }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="white">
                  <Flex align="center">
                    <Icon as={FaUsers} color="pink.400" mr={2} />
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
                  _hover={{ bg: 'gray.600' }}
                  _focus={{ borderColor: 'pink.400' }}
                />
              </FormControl>
              <FormControl isRequired>
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
                  _hover={{ bg: 'gray.600' }}
                  _focus={{ borderColor: 'pink.400' }}
                />
              </FormControl>
              <FormControl isRequired>
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
                  _hover={{ bg: 'gray.600' }}
                  _focus={{ borderColor: 'pink.400' }}
                >
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
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
                  _hover={{ bg: 'gray.600' }}
                  _focus={{ borderColor: 'pink.400' }}
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
                leftIcon={<Icon as={FaUtensils} />}
                _hover={{ bg: 'pink.500' }}
                w="full"
              >
                Reserve Table
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Reserve;
