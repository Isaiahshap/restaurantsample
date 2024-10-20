import { Box, Heading, SimpleGrid, Image, Text, VStack, Divider } from "@chakra-ui/react";

interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
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
      },
      {
        title: "Pulled Pork",
        description: "Tender pulled pork with Carolina-style vinegar sauce",
        price: "$16.99",
        image: "/pork.jpg",
      },
      {
        title: "BBQ Ribs",
        description: "Fall-off-the-bone ribs with our secret dry rub",
        price: "$21.99",
        image: "/ribs.jpg",
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
      },
      {
        title: "Coleslaw",
        description: "Crunchy cabbage slaw with a tangy dressing",
        price: "$3.99",
        image: "/coleslaw.jpg",
      },
      {
        title: "Cornbread",
        description: "Sweet and savory cornbread with honey butter",
        price: "$4.99",
        image: "/corn.jpg",
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
      },
      {
        title: "Banana Pudding",
        description: "Classic Southern banana pudding with wafers",
        price: "$6.99",
        image: "/banana.jpg",
      },
    ],
  },
];

const MenuCategory = ({ category, items }: { category: string; items: MenuItem[] }) => (
  <Box mb={12}>
    <Heading as="h2" size="xl" color="pink.400" mb={6}>
      {category}
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {items.map((item, index) => (
        <Box key={index} bg="gray.800" borderRadius="lg" overflow="hidden" boxShadow="md">
          <Image src={item.image} alt={item.title} h="200px" w="100%" objectFit="cover" />
          <VStack p={4} align="start" spacing={2}>
            <Heading as="h3" size="md" color="white">
              {item.title}
            </Heading>
            <Text color="gray.300" fontSize="sm">
              {item.description}
            </Text>
            <Text color="pink.400" fontWeight="bold">
              {item.price}
            </Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

const Menu = () => {
  return (
    <Box bg="gray.900" pt={24} pb={16} px={8}>
      <VStack spacing={12} maxW="1200px" mx="auto">
        <Box textAlign="center">
          <Heading as="h1" size="4xl" color="white" mb={4}>
            Our Menu
          </Heading>
          <Text color="pink.400" fontSize="2xl" fontStyle="italic">
            Smokin' Hot Flavors Await
          </Text>
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
