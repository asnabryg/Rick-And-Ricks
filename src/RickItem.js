import { Flex, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import InfoPair from './InfoPair'

const RickItem = ({ rick }) => {
  console.log('rick', rick)
  return (
    <Flex
      bg="white"
      w="450px"
      color="black"
      borderRadius={15}
      p="20px 30px"
      justify="center"
      direction="column"
      fontSize="30px"
    >
      <Flex align="center" gap="10px" justifyContent="space-around">
        <Img src={rick.image} boxSize="150px" borderRadius={50} />
        <Heading>{rick.name}</Heading>
      </Flex>
      <Flex mt="20px" direction="column">
        <InfoPair
          title="Status"
          value={rick.status}
          color={
            rick.status === 'Alive'
              ? 'green'
              : rick.status === 'Dead'
                ? 'red'
                : 'orange'
          }
        />
        <InfoPair title="Gender" value={rick.gender} />
        <InfoPair title="Species" value={rick.species} />
        <InfoPair
          title="Origin"
          value={rick.origin.name}
          color={rick.origin.name !== 'unknown' ? 'black' : 'orange'}
        />
        <InfoPair
          title="Appeared in"
          value={`${rick.episode.length} episode${
            rick.episode.length !== 1 ? 's' : ''
          }`}
        />
      </Flex>
    </Flex>
  )
}

export default RickItem
