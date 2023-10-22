import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import merrymatch01 from '../public/images/portfolio/merrymatch01.jpg'
import petsitter01 from '../public/images/portfolio/petsitter01.jpg'
import nikehome01 from '../public/images/portfolio/nikehome01.jpg'
import modern_thumbnail from '../public/images/portfolio/modern_thumbnail.jpg'
import resume_vite01 from '../public/images/portfolio/resume_vite01.jpg'
import responsive_tripp01 from '../public/images/portfolio/responsive_tripp01.jpg'
import tourist01 from '../public/images/portfolio/tourist01.jpg'

const Portfolio = () => (
  <Layout title="portfolio">
    <Container mt={10}>
      <Heading as="h3" fontSize={20} mb={4}>
        Full-Stack
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="merrymatch"
            title="MerryMatch"
            thumbnail={merrymatch01}
          >
            An online dating app that allows everyone to create their own dating
            profile and discover new people.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="petsitter"
            title="PetSitter"
            thumbnail={petsitter01}
          >
            An online app that allows pet owners to find trusted caregivers for
            their pets.
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Threads"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Other projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="nike"
            thumbnail={nikehome01}
            title="Nike-Home"
          ></WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="hoobank"
            thumbnail={modern_thumbnail}
            title="HooBank-Home"
          ></WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="viteresume"
            thumbnail={resume_vite01}
            title="Vite-Resume"
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="tripp"
            thumbnail={responsive_tripp01}
            title="Tripp-Home"
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="tourist"
            thumbnail={tourist01}
            title="Tourist-Attraction"
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../components/chakra'
