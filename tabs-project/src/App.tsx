import BtnContainer from './BtnContainer';
import { useEffect, useState } from 'react';
import JobDetails from './JobDetails';
import { JobType } from 'types';

const URL: string = 'https://course-api.com/react-tabs-project';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);

  function handleClick(i: number): void {
    setValue(i);
  }

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(URL);
      if (res.status >= 400 && res.status < 500) {
        throw new Error('Error');
      }
      const data = (await res.json()) as JobType[];
      setLoading(false);
      setJobs(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className='loader-container'>
        <div className='loading-msg'>Loading . . .</div>
        <div className='loader'></div>
      </div>
    );
  }

  if (error) {
    return (
      <main className='App'>
        <h2>Can't fetch data</h2>
      </main>
    );
  }

  const allCompanies: string[] = [
    ...new Set(jobs.map((singleJob) => singleJob.company)),
  ];

  const job: JobType = jobs[value];

  return (
    <main className='App'>
      <section className='jobs'>
        <div className='title'>
          <h2>experience</h2>
          <div className='title-underline'></div>
        </div>

        <div className='jobs-center'>
          <BtnContainer companies={allCompanies} handleClick={handleClick} />
          <JobDetails job={job} />
        </div>
      </section>

      <button className='btn'>more info</button>
    </main>
  );
}

export default App;
