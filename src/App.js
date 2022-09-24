import './App.css'
import React from 'react'
import { Flex, Heading, Input, Wrap, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import RickItem from './RickItem'

function App() {
  const [allRicks, setAllRicks] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState()

  useEffect(() => {
    const fetchData = async () => {
      let ricks = []
      const data = await fetch(
        'https://rickandmortyapi.com/api/character/?name=rick'
      )
      const result = await data.json()
      ricks = [...ricks, ...result.results]

      const pages = result.info.pages
      for (let i = 2; i < pages; i++) {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character/?name=rick&page=${i}`
        )
        const result = await data.json()
        ricks = [...ricks, ...result.results]
      }
      setAllRicks(ricks)

      setLoading(false)
    }

    fetchData()
  }, [])

  const getRicks = () => {
    if (!search) return allRicks
    const ricks = []
    allRicks.map((rick) =>
      rick.name.toLowerCase().includes(search.toLowerCase())
        ? ricks.push(rick)
        : null
    )
    return ricks
  }

  return (
    <div className="App">
      <Flex
        direction="column"
        bg="#282c34"
        color="white"
        minH="100vh"
        align="center"
        pb="80px"
      >
        <Heading fontSize="80px" my="20px">
          Rick and Ricks
        </Heading>
        <Flex
          gap="10px"
          align="center"
          my="40px"
          direction={'column'}
          maxW="400px"
        >
          <Heading>Search by name: </Heading>
          <Input
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            textAlign="center"
            fontSize="21px"
          />
        </Flex>
        <Wrap w="80%" justify="center" spacing="20px" h="100%">
          {allRicks &&
            getRicks().map((rick) => {
              return <RickItem key={rick.id} rick={rick} />
            })}
          {loading && <Text fontSize="35px">LOADING</Text>}
        </Wrap>
      </Flex>
    </div>
  )
}

export default App
