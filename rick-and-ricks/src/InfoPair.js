import { Flex, Text } from "@chakra-ui/react";

const InfoPair = ({ title, value, color="black" }) => {
  return (
    <Flex flex="1" gap="40px" justifyContent="space-between" mt="-10px">
      <Text>{title}</Text>
      <Text color={color}>{value}</Text>
    </Flex>
  );
};

export default InfoPair;
