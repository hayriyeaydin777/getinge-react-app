import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => {
  const data = useStaticQuery(graphql`
  query {
    heroImageBackgroundSmall: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImageBackgroundMedium: file(relativePath: { eq: "hero@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImageBackgroundLarge: file(relativePath: { eq: "hero@3x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4320, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  const sources = [
    data.heroImageBackgroundSmall.childImageSharp.fluid,
    {
      ...data.heroImageBackgroundMedium.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.heroImageBackgroundLarge.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  return (
    <>
      <Img fluid={sources} />
    </>
  )

} 

export default HeroImage
