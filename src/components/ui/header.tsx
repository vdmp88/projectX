import { useState } from 'react'
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react'
import { HiCash } from 'react-icons/hi'

const NAV_ITEMS = [
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'About', href: '#' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { colorMode } = useColorMode()

  return (
    <Box
      as="header"
      bgGradient={colorMode === 'dark' ? 'linear(to-r, teal.400, purple.600)' : 'linear(to-r, teal.50, purple.50)'}
      color={colorMode === 'dark' ? 'white' : 'gray.900'}
      boxShadow="sm"
      borderBottomWidth={0}
    >
      <Container mx='auto' maxW="container.xl" py={6}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 600px 1fr' }} alignItems="center">    
          <Box justifySelf={{ base: 'start', md: 'start' }}>
            <Link href="#" _hover={{ textDecoration: 'none' }} display="inline-flex" alignItems="center">
              <Icon as={HiCash} boxSize={6} color={colorMode === 'dark' ? 'white' : 'gray.900'} mr={2} />
              <Text fontWeight="bold" fontSize="lg">
                ProjectX
              </Text>
            </Link>
          </Box>

          <Box justifySelf="center" display={{ base: 'none', md: 'block' }}>
            <Flex as="nav" gap={8} align="center">
              {NAV_ITEMS.map((nav) => (
                <Link
                  key={nav.label}
                  href={nav.href}
                  color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
                  _hover={{ textDecoration: 'none', color: colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.900' }}
                >
                  {nav.label}
                </Link>
              ))}
            </Flex>
          </Box>

          <Box justifySelf={{ base: 'end', md: 'end' }}>
            <Flex align="center" gap={3}>
              <Box display={{ base: 'none', sm: 'block' }}>
                <ColorModeButton />
              </Box>

              <Box display={{ base: 'block', md: 'none' }}>
                <Button variant="ghost" colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'gray'} onClick={() => setMenuOpen((s) => !s)}>
                  Menu
                </Button>
              </Box>
            </Flex>
          </Box>

          {menuOpen && (
            <Box gridColumn="1/-1" mt={3} display={{ base: 'block', md: 'none' }}>
              <Box display="flex" flexDirection="column" gap={3}>
                {NAV_ITEMS.map((nav) => (
                  <Link key={nav.label} href={nav.href} onClick={() => setMenuOpen(false)} color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}>
                    {nav.label}
                  </Link>
                ))}
                <Box>
                  <ColorModeButton />
                </Box>
              </Box>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  )
}
