import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { JobDetailsProps } from 'types';

const JobDetails = ({ job }: JobDetailsProps): JSX.Element => {
  return (
    <article className='job-info'>
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>
      <p className='job-date'>{job.dates}</p>
      {job.duties.map((singleDuty: string) => {
        return (
          <div className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{singleDuty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default JobDetails;
