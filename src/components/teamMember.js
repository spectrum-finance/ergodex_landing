import { Link } from "gatsby";
import isEmpty from "lodash/isEmpty";
import React from "react";
import styled from "styled-components";

import GithubIcon from "../images/github.inline.svg";
import LinkedinIcon from "../images/linkedin.inline.svg";
import TelegramIcon from "../images/telegram.inline.svg";

const teamIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: TelegramIcon,
};

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const StyledTeamMemberImageContainer = styled.div`
  margin-right: 1em;
`;

const StyledTeamMemberName = styled.h4`
  font-size: 28px;
  line-height: 28px;
  margin: 0;
`;
const StyledTeamMemberRole = styled.sub``;

const StyledTeamMemberLinks = styled.div`
  display: flex;
  margin-top: 10px;
`;

const StyledTeamMemberLink = styled(Link)`
  margin-right: 15px;
  color: #ffffff;

  svg {
    width: 24px;
    height: 24px;
    color: #ffffff;

    path {
      fill: #ffffff;
    }
  }
`;

const StyledTeamMemberProfile = styled.div``;

const TeamMember = ({ photo, name, role, profile, links }) => {
  const hasLinks = !isEmpty(links);

  return (
    <li>
      <StyledTitleContainer>
        <StyledTeamMemberImageContainer>
          <img
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            src={photo}
            alt={`Team member photo: ${name}`}
          />
        </StyledTeamMemberImageContainer>
        <div>
          <StyledTeamMemberName>{name}</StyledTeamMemberName>
          <StyledTeamMemberRole>{role}</StyledTeamMemberRole>
          {hasLinks ? (
            <StyledTeamMemberLinks>
              {Object.keys(links).map((key, index) => {
                return links[key] ? (
                  <StyledTeamMemberLink
                    key={key + index}
                    href={links[key]}
                    target="_blank"
                  >
                    {teamIcons[key]()}
                  </StyledTeamMemberLink>
                ) : null;
              })}
            </StyledTeamMemberLinks>
          ) : null}
        </div>
      </StyledTitleContainer>
      <StyledTeamMemberProfile>{profile}</StyledTeamMemberProfile>
    </li>
  );
};

export default TeamMember;
