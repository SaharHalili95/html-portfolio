import Section from "./Section";
import { experienceData, militaryData } from "../data/portfolioData";

const Experience = () => {
  return (
    <>
      <Section id="experience" title="Work Experience">
        {experienceData.map((job, index) => (
          <div key={index} className="job">
            <h3>
              {job.title} – {job.company} | {job.period}
            </h3>
            <ul>
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section id="military" title="Military Service">
        <p>
          <strong>{militaryData.service.organization}</strong> |{" "}
          {militaryData.service.period}
        </p>
        <ul>
          {militaryData.service.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
        <p>
          <strong>Reserve Service</strong> | {militaryData.reserve.period}
        </p>
      </Section>
    </>
  );
};

export default Experience;
