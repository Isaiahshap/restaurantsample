import { Box, Heading, SimpleGrid, Image, Text, VStack, Divider, Icon, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";
import MenuItemModal from '../components/MenuItemModal';

export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
  ingredients?: string[];
  allergens?: string[];
  calories?: number;
}

const menuCategories = [
  {
    category: "Signature BBQ",
    items: [
      {
        title: "Smoked Brisket",
        description: "Slow-smoked for 12 hours, served with our house BBQ sauce",
        price: "$18.99",
        image: "/brisket.jpg",
        ingredients: ["Beef brisket", "House BBQ sauce", "Spices"],
        allergens: ["None"],
        calories: 450,
      },
      {
        title: "Pulled Pork",
        description: "Tender pulled pork with Carolina-style vinegar sauce",
        price: "$16.99",
        image: "/pork.jpg",
        ingredients: ["Pork shoulder", "Carolina-style vinegar sauce", "Spices"],
        allergens: ["None"],
        calories: 380,
      },
      {
        title: "BBQ Ribs",
        description: "Fall-off-the-bone ribs with our secret dry rub",
        price: "$21.99",
        image: "/ribs.jpg",
        ingredients: ["Pork ribs", "Secret dry rub", "BBQ sauce"],
        allergens: ["None"],
        calories: 520,
      },
    ],
  },
  {
    category: "Sides",
    items: [
      {
        title: "Mac 'n' Cheese",
        description: "Creamy three-cheese blend with a crispy top",
        price: "$5.99",
        image: "/mac.jpg",
        ingredients: ["Elbow macaroni", "Cheddar cheese", "Gouda cheese", "Parmesan cheese", "Milk", "Butter", "Breadcrumbs"],
        allergens: ["Milk", "Wheat"],
        calories: 450,
      },
      {
        title: "Coleslaw",
        description: "Crunchy cabbage slaw with a tangy dressing",
        price: "$3.99",
        image: "/coleslaw.jpg",
        ingredients: ["Cabbage", "Carrots", "Mayonnaise", "Apple cider vinegar", "Sugar", "Celery seeds"],
        allergens: ["Eggs"],
        calories: 180,
      },
      {
        title: "Cornbread",
        description: "Sweet and savory cornbread with honey butter",
        price: "$4.99",
        image: "/corn.jpg",
        ingredients: ["Cornmeal", "Flour", "Milk", "Eggs", "Butter", "Honey"],
        allergens: ["Milk", "Eggs", "Wheat"],
        calories: 320,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        title: "Peach Cobbler",
        description: "Warm peach cobbler with vanilla ice cream",
        price: "$7.99",
        image: "/peach.jpg",
        ingredients: ["Fresh peaches", "Sugar", "Cinnamon", "Butter", "Flour", "Vanilla ice cream"],
        allergens: ["Milk", "Wheat"],
        calories: 480,
      },
      {
        title: "Banana Pudding",
        description: "Classic Southern banana pudding with wafers",
        price: "$6.99",
        image: "/banana.jpg",
        ingredients: ["Bananas", "Vanilla wafers", "Milk", "Sugar", "Eggs", "Vanilla extract"],
        allergens: ["Milk", "Eggs", "Wheat"],
        calories: 390,
      },
      {
        title: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center",
        price: "$8.49",
        image: "/lava.jpg",
        ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla extract"],
        allergens: ["Milk", "Eggs", "Wheat"],
        calories: 550,
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        title: "Sweet Tea",
        description: "Classic Southern sweet tea",
        price: "$2.99",
        image: ""
      },
      {
        title: "Pink Lemonade",
        description: "Freshly squeezed lemonade with a hint of strawberry",
        price: "$3.49",
        image: ""
      },
      {
        title: "Coca-Cola",
        description: "Ice-cold classic Coke",
        price: "$2.49",
        image: ""
      },
      {
        title: "Sparkling Water",
        description: "Refreshing seltzer water",
        price: "$1.99",
        image: ""
      },
      {
        title: "Still Water",
        description: "Chilled bottled water",
        price: "$1.49",
        image: ""
      },
      {
        title: "Craft Beer",
        description: "Rotating selection of local craft beers",
        price: "$5.99",
        image: ""
      },
      {
        title: "Bourbon BBQ Old Fashioned",
        description: "Our signature cocktail with bourbon and a touch of BBQ sauce",
        price: "$8.99",
        image: ""
      },
      {
        title: "Smoky Margarita",
        description: "Tequila, lime, and a hint of mezcal for a smoky twist",
        price: "$7.99",
        image: ""
      }
    ]
  }
];

const AnimatedMenuItem = ({ item, category }: { item: MenuItem; category: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={category !== "Drinks" ? onOpen : undefined}
        style={{ cursor: category !== "Drinks" ? 'pointer' : 'default' }}
      >
        <Box
          bg="gray.800"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          position="relative"
          h="100%"
        >
          {item.image && (
            <Image src={item.image} alt={item.title} h="200px" w="100%" objectFit="cover" />
          )}
          <VStack p={4} align="start" spacing={2} h={item.image ? "auto" : "100%"} justify="space-between">
            <Box>
              <Heading as="h3" size="md" color="white">
                {item.title}
              </Heading>
              <Text color="gray.300" fontSize="sm">
                {item.description}
              </Text>
            </Box>
            <Text color="pink.400" fontWeight="bold">
              {item.price}
            </Text>
          </VStack>
        </Box>
      </motion.div>
      {category !== "Drinks" && <MenuItemModal isOpen={isOpen} onClose={onClose} item={item} />}
    </>
  );
};

const MenuCategory = ({ category, items }: { category: string; items: MenuItem[] }) => (
  <Box mb={12}>
    <Heading as="h2" size="xl" color="pink.400" mb={6}>
      {category}
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {items.map((item, index) => (
        <AnimatedMenuItem key={index} item={item} category={category} />
      ))}
    </SimpleGrid>
  </Box>
);

const Menu = () => {
  return (
    <Box bg="gray.900" pt={32} pb={16} px={8}>
      <VStack spacing={12} maxW="1200px" mx="auto">
        <Box 
          w="full" 
          borderRadius="lg" 
          p={8}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundImage="url('/fire.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            filter="brightness(0.4)"
          />
          <Box
            position="relative"
            zIndex={1}
          >
            <Heading as="h1" size="4xl" color="white" mb={4} textAlign="center">
              <Icon as={FaUtensils} color="pink.400" mr={2} />
              Our Menu
              <Icon as={FaUtensils} color="pink.400" ml={2} />
            </Heading>
            <Text color="pink.400" fontSize="2xl" fontStyle="italic" textAlign="center">
              Smokin' Hot Flavors Await
            </Text>
          </Box>
        </Box>
        <Text color="gray.300" fontSize="lg" textAlign="center" maxW="800px">
          Indulge in our mouthwatering selection of slow-smoked meats, homestyle sides, and delectable desserts. All our dishes are crafted with love and the finest ingredients.
        </Text>
        <Divider borderColor="pink.400" />
        {menuCategories.map((category, index) => (
          <MenuCategory key={index} category={category.category} items={category.items} />
        ))}
      </VStack>
    </Box>
  );
};

export default Menu;
