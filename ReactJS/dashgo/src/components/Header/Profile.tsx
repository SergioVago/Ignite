import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Sergio Vago</Text>
          <Text color="gray.300">
            sergio.vago.melo@gmail.com
          </Text>
        </Box>
      )}


      <Avatar size="md" name="Sergio Vago" src="https://github.com/sergiovago.png" />
    </Flex>
  )
}