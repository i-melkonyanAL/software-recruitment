import JobsCard from '../../reusable/JobsCard';
import { latestJobsList } from '@/utils/contants';
import CustomSwiperSlide from '../../slider/CustomSwiperSlide';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const CustomSwiper = dynamic(() => import('../../slider/CustomSwiper'), {
  ssr: false
})

const LatestJobs = () => {
  return (
    <div className="latest-job-content d-flex justify-content-center align-items-center ">
      <div className="latest-job position-relative">
        <h2 className="latest-job-title">Latest Jobs</h2>
        <CustomSwiper>
          {latestJobsList.map((elem) => (
            <CustomSwiperSlide key={elem.id}>
              <JobsCard {...elem} />
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
        <div className='d-flex justify-content-end view-more-link'>
          <Link href='/'>View more jobs</Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
