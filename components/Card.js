import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Work from "../public/images/icon-work.svg";
import Exercise from "../public/images/icon-exercise.svg";
import Social from "../public/images/icon-social.svg";
import Study from "../public/images/icon-study.svg";
import SelfCare from "../public/images/icon-self-care.svg";
import Play from "../public/images/icon-play.svg";
import React from "react";

export default function Card({ type, currentHours, lastHours, bg, opacit }) {
  return (
    <Stack
      transition="1s"
      opacity={opacit}
      backgroundColor={bg}
      flex={1}
      width="100%"
      borderRadius={12}
      justify="flex-end"
      position="relative"
    >
      <Box position="absolute" top={0} right={0} zIndex={0}>
        {type === "Work" ? (
          <Work />
        ) : type === "Social" ? (
          <Social />
        ) : type === "Study" ? (
          <Study />
        ) : type === "Exercise" ? (
          <Exercise />
        ) : type === "Play" ? (
          <Play />
        ) : (
          <SelfCare />
        )}
      </Box>
      <Flex
        position="absolute"
        zIndex={2}
        w="100%"
        direction="column"
        padding={6}
        h="80%"
        flex={0.8}
        borderRadius={10}
        backgroundColor="hsl(235, 46%, 20%)"
      >
        <Flex justify="space-between" flex={0.1}>
          <Text color="white">{type}</Text>
          <Flex w="40px" h="20px" align="center">
            <Box
              w={2}
              h={2}
              borderRadius="50%"
              backgroundColor="gray.100"
              marginRight={1}
            ></Box>
            <Box
              w={2}
              h={2}
              borderRadius="50%"
              backgroundColor="gray.100"
              marginRight={1}
            ></Box>
            <Box
              w={2}
              h={2}
              borderRadius="50%"
              backgroundColor="gray.100"
            ></Box>
          </Flex>
        </Flex>
        <Flex
          direction={{ base: "row", md: "column" }}
          flex={{ base: 1, md: 1 }}
        >
          <Flex flex={0.8} color="white" align="center" fontSize={48}>
            {currentHours}hrs
          </Flex>
          <Flex
            flex={{ base: 0.8, md: 0.2 }}
            color="gray.300"
            justify={{ base: "center", md: "flex-end" }}
            align={{ base: "center", md: "flex-start" }}
            direction={{ base: "row", md: "column" }}
          >
            Last Week - {lastHours}hrs
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}
