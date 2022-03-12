import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import mock from "../data.json";
import React from "react";

export default function Home() {
  const [timeframe, setTimeframe] = React.useState("daily");
  const [opac, setOpac] = React.useState(0);

  React.useEffect(() => {
    setOpac(1);
  }, []);

  return (
    <Stack
      height={{ base: "100vh", md: "75vh", "2xl": "60vh" }}
      width={{ base: "90vw", md: "70vw" }}
      direction={{ base: "column", md: "row" }}
      padding={{ base: 6, md: 0 }}
    >
      <Flex
        backgroundColor="hsl(235, 46%, 20%)"
        flex={0.25}
        direction="column"
        borderRadius={12}
      >
        <Flex
          borderRadius={12}
          direction={{ base: "row", md: "column" }}
          align="center"
          backgroundColor="hsl(246, 80%, 60%)"
          flex={{ base: 0, md: 0.8 }}
          padding={{ base: 4, md: 0 }}
        >
          <Image
            border="3px solid white"
            borderRadius="50%"
            src="/images/image-jeremy.png"
            w={{ base: 24, md: 32 }}
            h={{ base: 24, md: 32 }}
            alt="profile picture"
            marginY={6}
          />
          <Flex
            direction={{ base: "column" }}
            justify="center"
            align="center"
            w="100%"
          >
            <Text marginY={2} color="gray.300">
              Report for
            </Text>
            <Text
              fontSize={{ base: 20, md: 40 }}
              color="white"
              textAlign="center"
            >
              Jeremy Robson
            </Text>
          </Flex>
        </Flex>
        <Flex
          color="gray.400"
          direction={{ base: "row", md: "column" }}
          padding={6}
          flex={0.3}
          align="center"
          justify="space-evenly"
        >
          <Text _hover={{ color: "white" }}>
            <a href="#" onClick={() => setTimeframe("daily")}>
              Daily
            </a>
          </Text>
          <Text _hover={{ color: "white" }}>
            <a href="#" onClick={() => setTimeframe("weekly")}>
              Weekly
            </a>
          </Text>
          <Text _hover={{ color: "white" }}>
            <a href="#" onClick={() => setTimeframe("monthly")}>
              Monthly
            </a>
          </Text>
        </Flex>
      </Flex>
      <Flex
        flex={{ base: 1, md: 0.75 }}
        direction={{ base: "column", md: "row" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          width="100%"
          height={{ base: "1200px", md: "100%" }}
          marginLeft={{ base: 0, md: 12 }}
          marginTop={{ base: 6, md: 0 }}
          marginBottom={{ base: 8, md: 0 }}
        >
          {mock.map((card) => {
            return (
              <Stack key={card.title}>
                <Card
                  opacit={opac}
                  type={card.title}
                  currentHours={card.timeframes[timeframe].current}
                  lastHours={card.timeframes[timeframe].previous}
                  bg={
                    card.title === "Work"
                      ? "hsl(43, 84%, 65%)"
                      : card.title === "Play"
                      ? "hsl(195, 74%, 62%)"
                      : card.title === "Study"
                      ? "hsl(348, 100%, 68%)"
                      : card.title === "Exercise"
                      ? "hsl(145, 58%, 55%)"
                      : card.title === "Social"
                      ? "hsl(264, 64%, 52%)"
                      : "hsl(43, 84%, 65%)"
                  }
                />
              </Stack>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
