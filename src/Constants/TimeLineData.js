import { FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const timelineItems = [
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2023 MAY - Present </span>,
    position: 'right',
    icon: <FaBriefcase />,
    title: 'NOWON Technologies Private Limited',
    subTitle: 'Software Developer',
    description: 'React JS, Redux Toolkit, React-Router, TailWindCSS, GraphQL, NextJS, MySQL'
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>2021 APR - 2023 APR</span>,
    position: 'left',
    icon: <FaBriefcase />,
    title: 'Border Security Force',
    subTitle: 'GD Constable (Central Govt Job)',
    description: 'Ensured the security and integrity of the Indian border areas under para military Force',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2018 - 2020 </span>,
    position: 'right',
    icon: <FaGraduationCap />,
    title: 'Madanaplle Institute Of Technology And Science College, JNTUA',
    subTitle: 'Master Of Computer Applications',
    description: 'Post Graduation CGPA: 8.03 (80%)',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2015 - 2018 </span>,
    position: 'left',
    icon: <FaBuilding />,
    title: 'SG Govt Degree College, SV University',
    subTitle: 'Bachelor Of Science',
    description: 'B.Sc (M.S.Cs) Total CGPA: 8.31 (83%)',
  },
];


export default timelineItems