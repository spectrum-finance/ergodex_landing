import React from "react";

import DoneIcon from "../../images/done.inline.svg";

const RoadmapStageContent = ({ content }) => {
  return (
    <li className={`stage-content__item ${content.isDone ? "done" : ""}`}>
      {content.title}
    </li>
  );
};

const RoadmapStage = ({ stage }) => {
  const isDoneStage = stage.contents
    ? stage.contents.every((c) => c.isDone === true)
    : false;
  return (
    <li
      className={`roadmap__stage ${isDoneStage ? "done" : ""} ${
        !isDoneStage && stage.active ? "active" : ""
      }`}
    >
      <div className="bullet">
        <DoneIcon />
      </div>
      <div className="stage-content">
        <h4 className="stage-content__title">{stage.title}</h4>
        {stage.contents && (
          <ul className="stage-content__list">
            {stage.contents.map((content, i) => (
              <RoadmapStageContent key={i} content={content} />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

const Roadmap = () => {
  const roadmapStages = [
    {
      title: "Stage 1. OrderBook DEX: Core development",
      active: false,
      contents: [
        {
          isDone: true,
          title: "Order Book DEX research and development (Ergo Network)",
        },
        {
          isDone: true,
          title: "Order Book DEX contracts implementation (Ergo Network)",
        },
        {
          isDone: true,
          title: "Order Book DEX contracts: public audit (Ergo Network)",
        },
        {
          isDone: true,
          title: "Order Book Matcher development (Ergo Network)",
        },
        {
          isDone: true,
          title: "Order Book DEX testing (Ergo Network)",
        },
      ],
    },

    {
      title: "Stage 2. AMM DEX: Core development",
      active: false,
      contents: [
        {
          isDone: true,
          title: "AMM DEX RnD",
        },
        {
          isDone: true,
          title: "AMM DEX contracts (Ergo Network)",
        },
        {
          isDone: true,
          title: "AMM DEX contracts: public audit (Ergo Network)",
        },
        {
          isDone: true,
          title: "AMM DEX Bots (Ergo Network)",
        },
        {
          isDone: true,
          title: "AMM DEX contracts testing (Ergo Network)",
        },
      ],
    },

    {
      title: "Stage 3. AMM DEX: Frontend development",
      active: false,
      contents: [
        {
          isDone: true,
          title: "JavaScript AMM DEX SDK (Ergo Network)",
        },
        {
          isDone: true,
          title: "Minimal viable AMM UI (Ergo Network)",
        },
        {
          isDone: true,
          title: "ErgoDEX UI guidelines",
        },
        {
          isDone: true,
          title: "AMM UI design",
        },
        {
          isDone: true,
          title: "Public AMM DEX testing (Ergo Network)",
        },
      ],
    },

    {
      title: "Stage 4. ErgoDEX on Cardano. Preparation",
      active: false,
      contents: [
        {
          isDone: true,
          title: "AMM DEX contracts (Cardano Network)",
        },
        {
          isDone: true,
          title: "AMM DEX Bots (Cardano Network)",
        },
        {
          isDone: true,
          title: "JavaScript AMM DEX SDK (Cardano Network)",
        },
        {
          isDone: true,
          title: "User interface development",
        },
      ],
    },

    {
      title: "Stage 5: Cardano Launch",
      active: true,
      contents: [
        {
          isDone: false,
          title: "Launch ErgoDEX on Cardano testnet",
        },
        {
          isDone: false,
          title: "Bug fixes and improvements",
        },
        {
          isDone: false,
          title: "Stable ErgoDEX release on Cardano",
        },
      ],
    },

    {
      title: "Roadmap prolongation... Updates soon",
    },
  ];

  return (
    <section className="roadmap">
      <h3>Roadmap</h3>
      <div className="roadmap__container">
        <ul className="roadmap__stages">
          {roadmapStages.map((stage, i) => (
            <RoadmapStage key={i} stage={stage} />
          ))}
        </ul>
        <div className="roadmap__line" />
      </div>
    </section>
  );
};

export { Roadmap };
