import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../layouts'

import SEO from '../components/seo'
import Header from '../components/header'
import TeamMember from '../components/teamMember'
import MovingElements from '../components/movingElements'

import OksinPhoto from '../images/team/oskin.jpeg'
import UsovPhoto from '../images/team/usov.jpeg'
import BlackPhoto from '../images/team/black.jpeg'
import GusevPhoto from '../images/team/gusev.jpeg'
import RomanovskyPhoto from '../images/team/romanovsky.jpeg'
import SafonovPhoto from '../images/team/safonov.jpeg'

import DoneIcon from '../images/done.inline.svg'

const StyledTeamList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 50px;
  
  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`

const StyledLink = styled(Link)`
  color: #FF5135;
  text-decoration: none;
  font-weight: 700;
  
  :hover {
    color: #FF0080;
  }
`

const team = [
  {
    name: 'Ilya Oskin',
    role: 'Lead Developer',
    profile: `
        Software Engineer, Core Developer of Ergo, Lead Developer at Mail.ru Group, Degree in Economics.
      `,
    photo: OksinPhoto,
    links: {
      github: 'https://github.com/oskin1'
    }
  },
  {
    name: 'Dmitriy Usov',
    role: 'Lead UI Developer',
    profile: `
        Software Engineer, Developer of Ergo, ex. Frontend Team Lead at CityMobil, Degree in computer science.
      `,
    photo: UsovPhoto,
    links: {
      github: 'https://github.com/deadit'
    }
  },
  {
    name: 'Yasha Black',
    role: 'Product Manager',
    profile: `
        Product manager at Ergo, Frontend Developer at Mail.ru Group, Masters degree in management.
      `,
    photo: BlackPhoto,
    links: {
      linkedin: 'https://www.linkedin.com/in/yasha-black-25852018a/',
      telegram: 'https://t.me/yashablack',
      github: 'https://github.com/yasha-black'
    }
  },
  {
    name: 'Timofey Gusev',
    role: 'Core Developer',
    profile: `
        Software Engineer, Developer at Mail.ru Group, FP enthusiast, ex. Blockchain Core Dev., Degree in cyber security.
      `,
    photo: GusevPhoto,
    links: {
      github: 'https://github.com/GusevTimofey'
    }
  },
  {
    name: 'Alexander Romanovskiy',
    role: 'Core developer',
    profile: `
        Software engineer. One of the creators of Encry blockchain and smart contract language Prism. FP enthusiast. Has expertise in cybersecurity. Ergo ecosystem developer.
      `,
    photo: RomanovskyPhoto,
    links: {
      github: 'https://github.com/Bromel777'
    }
  },
  {
    name: 'Vadim Safonov',
    role: 'Frontend Developer',
    profile: `
        Software Engineer, Team lead at Rbc.ru. Degree in computer science.
      `,
    photo: SafonovPhoto,
    links: {
      github: 'https://github.com/imamatory'
    }
  }
]

const IndexPage = props => {
  return (
    <Layout>
      <SEO
        title='Home'
        path={props.location.pathname}
        description={'Swap and exchange on top of Ergo and Cardano blockchains'}
      />
      <Header />
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 is-revealing">Decentralized exchange <br/> on Ergo and Cardano
            </h1>
            <p className="hero-paragraph is-revealing" style={{margin: 0}}>A non-custodial, decentralised
              exchange that allows a quick, effortless and secure transfer of liquidity between the
              Ergo and Cardano networks.
            </p>
            <a
              className="button button-primary button-align-items beta-button glow-on-hover "
              href="https://beta.ergodex.io"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-8">Try beta now</span>
            </a>
            <a className="ml-8 button button-primary button-align-items github-button"
               href="https://github.com/ergolabs" target="_blank" rel="noreferrer">
              <span className="mr-8">Github</span>
              <svg className="eg-footer__social-icon eg-footer__social-icon--github" width="25"
                   height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"
                   >
                <title>Github</title>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g className="eg-social__icon--github"
                     transform="translate(-70.000000, -395.000000)" fill="#fff">
                    <g transform="translate(70.000000, 395.000000)">
                      <path
                        d="M12.3398485-.000378787879C5.52545455-.000378787879-.000303030303 5.52537879-.000303030303 12.3412879-.000303030303 17.792803 3.53530303 22.4185606 8.43984848 24.0503788 9.05727273 24.1632576 9.28227273 23.7829545 9.28227273 23.4556818 9.28227273 23.1625 9.27166667 22.3867424 9.26560606 21.3564394 5.8330303 22.1026515 5.10878788 19.7026515 5.10878788 19.7026515 4.54742424 18.2768939 3.73833333 17.8973485 3.73833333 17.8973485 2.61787879 17.1314394 3.82318182 17.1473485 3.82318182 17.1473485 5.06181818 17.2344697 5.71333333 18.4185606 5.71333333 18.4185606 6.81409091 20.3049242 8.60121212 19.7602273 9.305 19.4443182 9.41712121 18.6465909 9.73530303 18.1026515 10.0883333 17.7943182 7.34818182 17.4829545 4.46712121 16.4246212 4.46712121 11.6950758 4.46712121 10.3481061 4.94818182 9.24659091 5.73757576 8.38371212 5.61030303 8.07159091 5.18681818 6.81704545 5.8580303 5.11856061 5.8580303 5.11856061 6.89439394 4.78598485 9.2519697 6.38295455 10.2360606 6.1094697 11.2921212 5.97234848 12.3413636 5.96780303 13.3890909 5.97234848 14.4451515 6.1094697 15.4307576 6.38295455 17.7868182 4.78598485 18.8209091 5.11856061 18.8209091 5.11856061 19.4943939 6.81704545 19.0709091 8.07159091 18.9436364 8.38371212 19.7345455 9.24659091 20.2125758 10.3481061 20.2125758 11.6950758 20.2125758 16.4359848 17.3269697 17.4791667 14.5777273 17.7852273 15.0209091 18.1655303 15.4156061 18.9193182 15.4156061 20.0700758 15.4156061 21.7200758 15.4004545 23.0511364 15.4004545 23.4556818 15.4004545 23.7852273 15.6224242 24.1693182 16.2489394 24.0488636 21.1481818 22.4140152 24.6815152 17.7912879 24.6815152 12.3412879 24.6815152 5.52537879 19.1557576-.000378787879 12.3398485-.000378787879">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <MovingElements />
        </div>
      </section>
      <section className="features section">
          <div className="features-inner">
            <div className="features-wrap">
              <div className="feature">
                <div className="feature-inner">
                  <div className="feature-header mb-16">
                    <div className="feature-icon mr-16">
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="nonzero">
                          <path
                            d="M16 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                            fill="#FF5135" />
                          <path
                            d="M27 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                            fill="#FF8C00" />
                          <path
                            d="M27 12c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                            fill="#FF5135" />
                          <path
                            d="M5 23c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                            fill="#FF8C00" />
                          <path
                            d="M27 23c-1.859 0-3.41 1.28-3.858 3h-3.284A3.994 3.994 0 0 0 17 23.142v-3.284c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4-1.859 0-3.41 1.28-3.858 3H8.858A3.994 3.994 0 0 0 6 12.142V8.858c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S1 2.794 1 5c0 1.858 1.28 3.41 3 3.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284A3.994 3.994 0 0 0 15 19.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284c.447 1.72 2 3 3.858 3 2.206 0 4-1.794 4-4s-1.794-4-4-4z"
                            fill="#FF5135" />
                        </g>
                      </svg>
                    </div>
                    <h4 className="feature-title m-0">Cross-chain exchange</h4>
                  </div>
                  <p className="text-sm mb-0">eUTXO model gives unique possibility to have shared
                    liquidity among different types of exchanges on top of Ergo and Cardano
                    ecosystems.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-inner">
                  <div className="feature-header mb-16">
                    <div className="feature-icon mr-16">
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M7 8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM19 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF5135" />
                          <path
                            d="M19 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF8C00" />
                          <path
                            d="M31 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF5135" />
                          <path
                            d="M7 20H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF8C00" />
                          <path
                            d="M7 32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF5135" />
                          <path
                            d="M29.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                            fill="#FF8C00" />
                          <path
                            d="M17.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM29.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                            fill="#FF5135" />
                        </g>
                      </svg>

                    </div>
                    <h4 className="feature-title m-0">AMM and Orderbook</h4>
                  </div>
                  <p className="text-sm mb-0">Classic AMM on the Ergo ecosystem have already been
                    developed and tested. Decentralized Orderbook coming soon.</p>
                  <p className="text-sm mb-0">
                    <StyledLink
                      href="https://github.com/ergolabs/ergo-dex/blob/master/README.md"
                      target="_blank"
                      style={{ padding: '0', border: 'none' }}
                      rel="noreferrer"
                    >
                      Read more about protocol
                    </StyledLink>
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-inner">
                  <div className="feature-header mb-16">
                    <div className="feature-icon mr-16">
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                        <g fillRule="nonzero" fill="none">
                          <path d="M4 12H0V5a5.006 5.006 0 0 1 5-5h7v4H5a1 1 0 0 0-1 1v7z"
                                fill="#FF8C00" />
                          <path
                            d="M32 12h-4V5a1 1 0 0 0-1-1h-7V0h7a5.006 5.006 0 0 1 5 5v7zM12 32H5a5.006 5.006 0 0 1-5-5v-7h4v7a1 1 0 0 0 1 1h7v4z"
                            fill="#FF5135" />
                          <path d="M27 32h-7v-4h7a1 1 0 0 0 1-1v-7h4v7a5.006 5.006 0 0 1-5 5z"
                                fill="#FF8C00" />
                        </g>
                      </svg>
                    </div>
                    <h4 className="feature-title m-0">Transparent tokenomics</h4>
                  </div>
                  <p className="text-sm mb-0">In ErgoDEX each actor is incentivized to fulfill his role as
                    best as possible. Users benefit from DEX services, Liquidity providers from
                    protocol fees and the DEX benefits from transaction fixed fees.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="roadmap">
        <h3>Roadmap</h3>
        <div className="roadmap__container">
          <ul className="roadmap__stages">
            <li className="roadmap__stage done">
              <div className="bullet">
                <DoneIcon />
              </div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 1. OrderBook DEX: Core development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    Order Book DEX RnD
                  </li>
                  <li className="stage-content__item done">
                    Order Book DEX contracts implementation (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Order Book DEX contracts: public audit (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Order Book Matcher development (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Order Book DEX testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage done">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 2. AMM DEX: Core development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    AMM DEX RnD
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX contracts (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX contracts: public audit (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX Bots (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX contracts testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage done">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 3. AMM DEX: Frontend development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    JavaScript AMM DEX SDK (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Minimal viable AMM UI (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    ErgoDEX UI guidelines
                  </li>
                  <li className="stage-content__item done">
                    AMM UI design
                  </li>
                  <li className="stage-content__item done">
                    Public AMM DEX testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage active">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 4. OrderBook DEX: Frontend development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item">
                    JavaScript Order Book DEX SDK implementation (Ergo Network)
                  </li>
                  <li className="stage-content__item">
                    Order Book UI design
                  </li>
                  <li className="stage-content__item">
                    Order Book UI development (Ergo Network)
                  </li>
                  <li className="stage-content__item">
                    Public Order Book DEX testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 5. ErgoDEX for Cardano</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    AMM DEX contracts (Plutus)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX Bots (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    JavaScript AMM DEX SDK (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    Order Book DEX contracts (Plutus)
                  </li>
                  <li className="stage-content__item">
                    Order Book DEX Matcher (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    JavaScript Order Book DEX SDK (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    ErgoDEX UI update for Cardano network
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 6: Grand testing</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item">
                    Public AMM testing (Cardano network)
                  </li>
                  <li className="stage-content__item">
                    Public Order Book testing (Cardano network)
                  </li>
                  <li className="stage-content__item">
                    Bug fixes and improvements
                  </li>
                  <li className="stage-content__item">
                    Stable ErgoDEX release
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="roadmap__line" />
        </div>
      </section>
      <section>
        <h3>
          Team
        </h3>
        <StyledTeamList>
          {team.map(({name,
            role,
            profile,
            photo,
            links}, index) =>
            <TeamMember
              name={name}
              role={role}
              profile={profile}
              photo={photo}
              links={links}
              key={index}
            />)}
        </StyledTeamList>
      </section>
      <section className='social'>
        <div className="hero-inner">
          <div className="hero-copy">
            <h3>Join us</h3>
            <ul className="social-list">
              <li className="social-item">
                <a href="https://twitter.com/ErgoDex" target="_blank"
                   className="social-link social-square" rel="noreferrer">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8375 40C30.4421 40 39.5225 26.1512 39.5225 14.142C39.5225 13.7486 39.5146 13.3571 39.497 12.9672C41.2637 11.6802 42.7885 10.0867 44 8.26117C42.3825 8.98506 40.6419 9.47232 38.816 9.69201C40.6797 8.56678 42.1105 6.78707 42.7856 4.66533C41.0134 5.72371 39.0748 6.46977 37.0533 6.87135C35.4059 5.10487 33.0608 4 30.4638 4C25.4786 4 21.436 8.07001 21.436 13.0869C21.436 13.8001 21.5153 14.4938 21.6702 15.1591C14.1674 14.779 7.51445 11.1627 3.06195 5.66377C2.26002 7.05059 1.83819 8.62689 1.83956 10.2316C1.83956 13.3846 3.43328 16.1681 5.85679 17.7965C4.42327 17.7525 3.02119 17.3627 1.76839 16.6598C1.76706 16.698 1.76706 16.7352 1.76706 16.7759C1.76706 21.1773 4.87877 24.852 9.0094 25.6847C8.23359 25.8975 7.43306 26.005 6.629 26.0046C6.05957 26.0042 5.49147 25.9493 4.93236 25.8407C6.08166 29.4517 9.41425 32.0794 13.3653 32.1528C10.2756 34.5909 6.38346 36.043 2.15331 36.043C1.42555 36.043 0.706648 36.0013 0 35.9172C3.99523 38.4953 8.7392 39.9996 13.838 39.9996"
                      fill="#FFF"/>
                  </svg>
                </a>
              </li>
              <li className="social-item">
                <a href="https://t.me/ergodex" target="_blank" className="social-link" rel="noreferrer">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.69753 19.8127L28.9069 9.03556C31.494 7.91294 40.268 4.32055 40.268 4.32055C40.268 4.32055 44.3175 2.74888 43.98 6.56579C43.8675 8.13746 42.9676 13.6383 42.0678 19.5882L39.2556 37.2133C39.2556 37.2133 39.0306 39.7954 37.1184 40.2444C35.2061 40.6935 32.0565 38.6728 31.494 38.2237C31.0441 37.8869 23.0576 32.8351 20.1329 30.3654C19.3455 29.6918 18.4456 28.3446 20.2454 26.773C24.2949 23.0683 29.1318 18.4656 32.0565 15.5468C33.4063 14.1996 34.7561 11.0563 29.1318 14.8732L13.2712 25.5381C13.2712 25.5381 11.4715 26.6607 8.09688 25.6503C4.72228 24.64 0.78526 23.2928 0.78526 23.2928C0.78526 23.2928 -1.91441 21.6089 2.69753 19.8127V19.8127Z"
                      fill="#FFF"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
