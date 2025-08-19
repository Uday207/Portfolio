import { FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const timelineItems = [
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2021 Apr - 2023 Apr </span>,
    position: 'right',
    icon: <FaBriefcase />,
    title: 'Border Security Force',
    subTitle: 'GD Constable',
    description: 'Served as a General Duty Constable in the Border Security Force (BSF), responsible for maintaining border security, performing patrol duties, and ensuring national safety. Developed strong discipline, teamwork, and crisis management skills during the tenure.'
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>2022 Aug - 2023 Aug</span>,
    position: 'left',
    icon: <FaGraduationCap />,
    title: 'Coding Ninjas',
    subTitle: 'Full Stack Develoment with Java and Data Structures',
    description: 'It is an online Course Platform To learn Java, Java Script, Data Structures, Forntend, React and also backend nodejs,MySQL Data Base, Also MongoDB',
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
