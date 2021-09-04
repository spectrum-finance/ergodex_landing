import React from "react"
import { Link } from 'gatsby'
import Layout from '../layouts'

import Header from '../components/header'
import MovingElements from '../components/movingElements'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #FF5135;
  text-decoration: none;
  
  :hover {
    color: #FF0080;
  }
`

const CareersPage = () => {
  return (
    <Layout>
      <Header />
      <section className="pt-16 mb-32">
        <div className="hero-inner">
          <div className="hero-copy">
            <h2 className="hero-title mt-0 is-revealing">
              Senior Frontend Engineer
            </h2>
            <div className="mb-32" style={{display: 'flex'}}>
              <p className="hero-paragraph" style={{margin: 0, marginRight: '15px'}}>
                Full time
              </p>
              <p className="hero-paragraph is-revealing" style={{margin: 0, marginRight: '15px'}}>
                |
              </p>
              <p className="hero-paragraph is-revealing" style={{margin: 0}}>
                Remote
              </p>
            </div>
            <p className="text-sm mb-16">
              ErgoDEX is the first cross-chain decentralized exchange on top of Ergo and Cardano blockchains.
              Our mission is to provide the best decentralized financial tools for a continuously extended crypto community around the world.
            </p>
            <p className="text-sm mb-16">
              We are looking for a brilliant engineer who is self-motivated and interested in developing disruptive financial products.
            </p>
          </div>
          <MovingElements />
        </div>
      </section>
      <section>
        <h3 className="hero-title mt-0 is-revealing">
          Responsibilities
        </h3>
        <p className="text-sm mb-16">
          <ul>
            <li>
              Create a unified component library for use across all ErgoDEX products
            </li>
            <li>
              Rapidly implement functional UI elements from design mocks, with an eye<br/> toward performance and accessibility
            </li>
            <li>
              Develop business logic for AMM and Order Book using wallets dApp connectors
            </li>
            <li>
              Know when to create abstractions vs. one-off features
            </li>
            <li>
              Ensure that components are functional, elegant, performant, and mobile-friendly
            </li>
          </ul>
        </p>
        <h3 className="hero-title mt-32 is-revealing">
          Requirements
        </h3>
        <p className="text-sm mb-16">
          <ul>
            <li>
              At least 3 years experience on the same position;
            </li>
            <li>
              Experience with TypeScript and React;
            </li>
            <li>
              A deep understanding of the architecture of modern client-side React applications
            </li>
            <li>
              Solid experience with JavaScript testing tools
            </li>
            <li>
              Discuss with team and make strong decisions in terms of UI/UX
            </li>
            <li>
              Experienced working with browser extensions
            </li>
          </ul>
        </p>
        <h3 className="hero-title mt-32 is-revealing">
          Cool if you
        </h3>
        <p className="text-sm mb-16">
          <ul>
            <li>
              Have experience in UX/UI development and the Figma tool
            </li>
            <li>
              Familiar with eUTXO, UTXO models
            </li>
            <li>
              Familiar with Scala, Haskell or Solidity
            </li>
            <li>
              Have Degree in computer science
            </li>
          </ul>
        </p>
        <p className="text-sm mb-16">
          ErgoDEX welcomes all qualified persons to apply for this job regardless of race, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.
          Compensation will be competitive and commensurate with experience.
        </p>
      </section>
      <section style={{marginBottom: '172px'}}>
        If you are interested just send your CV to{' '}
        <StyledLink href="mailto:hello@ergodex.io">
          hello@ergodex.io
        </StyledLink>{' '}
        and we will immediately contact you!
      </section>
    </Layout>
  )
}

export default CareersPage