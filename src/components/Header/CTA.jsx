import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        data-aos="fade-right"
        target="_blank"
        href="https://docs.google.com/gview?url=https://obsidi-assets-prd.s3.amazonaws.com/uploads/eb21b7a9-133d-4ce9-85f7-d3c019b8f305/docs/resume-1701151587082.pdf"
        className="btn"
        rel="noreferrer"
      >
        Resume
      </a>
      <a data-aos="fade-left" href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;
