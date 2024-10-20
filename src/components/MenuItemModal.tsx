import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { MenuItem } from '../pages/Menu';

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ isOpen, onClose, item }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="gray.800" color="white">
        <ModalHeader>{item.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="start">
            <Image src={item.image} alt={item.title} borderRadius="md" w="100%" h="300px" objectFit="cover" />
            <Text fontSize="lg">{item.description}</Text>
            <Text fontWeight="bold" color="pink.400" fontSize="xl">
              {item.price}
            </Text>
            {item.ingredients && (
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold">Ingredients:</Text>
                <HStack wrap="wrap">
                  {item.ingredients.map((ingredient: string, index: number) => (
                    <Tag key={index} colorScheme="pink" variant="subtle">
                      {ingredient}
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            )}
            {item.allergens && (
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold">Allergens:</Text>
                <HStack wrap="wrap">
                  {item.allergens.map((allergen: string, index: number) => (
                    <Tag key={index} colorScheme="red" variant="subtle">
                      {allergen}
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            )}
            {item.calories && (
              <Text>
                <Text as="span" fontWeight="bold">Calories:</Text> {item.calories}
              </Text>
            )}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="pink" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MenuItemModal;
