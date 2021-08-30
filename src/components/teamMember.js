import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import isEmpty from 'lodash/isEmpty'

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`

const StyledTeamMemberImageContainer = styled.div`
  margin-right: 1em;
`

const StyledTeamMemberName = styled.h4`

`
const StyledTeamMemberRole = styled.sub`

`

const StyledTeamMemberLinks = styled.div`

`

const StyledTeamMemberLink = styled(Link)`

`

const StyledTeamMemberProfile = styled.div`

`

const TeamMember = ({ photo, name, role, profile, links}) => {
  const hasLinks = !isEmpty(links)

  return (
    <li>
      <StyledTitleContainer>
        <StyledTeamMemberImageContainer>
          <img
            style={{borderRadius: '50%', width: '150px'}}
            src={`../images/${photo}.jpeg`}
            alt={`Team member photo: ${name}`}
          />
        </StyledTeamMemberImageContainer>
        <div>
          <StyledTeamMemberName>
            {name}
          </StyledTeamMemberName>
          <StyledTeamMemberRole>
            {role}
          </StyledTeamMemberRole>
          {
            hasLinks
              ? <StyledTeamMemberLinks>
                { Object.keys(links).map((key, index) => {
                  return (
                    links[key]
                      ? <StyledTeamMemberLink key={key + index} href={links[key]} target="_blank">
                        <StaticImage src={`../static/${key}.svg`} alt={key}/>
                      </StyledTeamMemberLink>
                      : null
                  )
                })}
              </StyledTeamMemberLinks>
              : null
          }
        </div>
      </StyledTitleContainer>
      <StyledTeamMemberProfile>
        {profile}
      </StyledTeamMemberProfile>
    </li>
  )
}

export default TeamMember
