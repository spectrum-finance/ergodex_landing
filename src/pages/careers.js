import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Header from "../components/header";
import MovingElements from "../components/movingElements";
import SEO from "../components/seo";
import Layout from "../layouts";

const StyledJobsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledJobsLink = styled(Link)`
  max-width: 300px;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 20px;
  display: block;
  text-decoration: none;
  text-align: center;
  border-radius: 24px;
  margin-bottom: 10px;

  :hover {
    color: #ff5135;
    border: 2px solid #ff5135;
  }
`;

const jobs = [
  {
    role: "Senior Frontend Engineer",
    to: "/frontend",
  },
];

const JobItem = ({ role, to }) => {
  return (
    <li style={{ maxWidth: "300px", marginBottom: "30px" }}>
      <StyledJobsLink to={to}>{role}</StyledJobsLink>
    </li>
  );
};

const CareersPage = (props) => {
  return (
    <Layout>
      <SEO
        title="Careers"
        path={props.location.pathname}
        description={"Jop opportunities in ErgoDEX"}
      />
      <Header />
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 is-revealing">ErgoDEX Careers</h1>
          </div>
          <MovingElements />
        </div>
      </section>
      <div style={{ marginTop: "20px" }}>
        <section>
          <StyledJobsList>
            {jobs.map((job, index) => (
              <JobItem key={index} {...job} />
            ))}
          </StyledJobsList>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;
