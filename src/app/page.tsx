"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <>
      <Box p={10}>
        <VStack spacing={6}>
          <Heading>Lorem Ipsum</Heading>
          <Text fontSize="lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </VStack>
      </Box>
    </>
  );
}
