export interface BtnContainerProps {
  companies: string[];
  handleClick: (i: number) => void;
}

export interface JobType {
  id: string;
  dates: string;
  duties: string[];
  company: string;
  order: number;
  title: string;
}

export interface JobDetailsProps {
  job: JobType;
}
