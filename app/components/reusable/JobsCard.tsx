
interface IJobsCardProps {
  jobType: string;
  JobIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  jobTitle: string;
  location: string;
  salary: string;
  jobDescription: string;
  postedDate: string;
  color: string;
  id: number;
  SalaryIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  LocationIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const JobsCard = ({ color, jobType, JobIcon, jobDescription, jobTitle, location, salary, postedDate, LocationIcon, SalaryIcon }: IJobsCardProps) => {
  return (
    <div className={`${color} job-card d-flex flex-column`}>
      <div className="job-logo bg-white d-flex align-items-center justify-content-around">
        <JobIcon />
        <span className='job-type'>{jobType}</span>
      </div>
      <h2>{jobTitle}</h2>
      <div className='d-flex flex-column gap-2'>
        <div className='d-flex align-items-center loc-salary'>
          <LocationIcon />
          <p className="mb-0">{location}</p>
        </div>
        <div className='d-flex align-items-center loc-salary'>
          <SalaryIcon />
          <p className="mb-0">{salary}</p>
        </div>
      </div>
      <p>{jobDescription}</p>
      <button className='btn btn-view d-flex justify-content-center align-items-center'><span>View this job</span></button>
      <p className='job-date position-absolute bottom-0'>Posted on {postedDate}</p>
    </div>
  )
}

export default JobsCard