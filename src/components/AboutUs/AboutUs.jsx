import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import RightSided from './RightSided';
import LeftSided from './LeftSided';
import { motion } from 'motion/react';

const AboutUs = () => {
  const stats = [
    { value: '15K+', label: 'Students' },
    { value: '75%', label: 'Total success' },
    { value: '35', label: 'Main questions' },
    { value: '26', label: 'Chief experts' },
    { value: '16', label: 'Years of experience' },
  ];

  return (
    <main className='px-11'>
      <div className='hero bg-white mt-12'>
        <div className='hero-content text-center'>
          <div>
            <h1 className='text-5xl font-bold text-primary'>Our Success</h1>
            <p className='py-6 text-gray-600'>
              Our success lies in empowering over 15,000 students with
              knowledge, achieving a 75% success rate through expert guidance,
              tackling 35 critical questions, and leveraging the expertise of 26
              chief professionals over 16 years of excellence.
            </p>
            <div className='flex justify-center flex-wrap gap-3 md:gap-20'>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index / 10 }}
                  className='text-center flex flex-col items-center justify-center'
                >
                  <p className='md:text-7xl text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient'>
                    {stat.value}
                  </p>
                  <p className='text-gray-600 md:text-lg text-sm italic '>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LeftSided
        imageSrc={image4}
        headingText={
          <>
            A <span className='text-black'>user interface</span> designed <br />
            for the classroom
          </>
        }
        paragraphText='Teachers don’t get lost in the grid view and have a dedicated Podium space. TA’s and presenters can be moved to the front of the class.
            Teachers can easily see all students and class data at one time.'
      />

      <RightSided
        imageSrc={image2}
        headingText={
          <>
            <span className='text-black'>Tools</span> For Teachers <br />
            And Learners
          </>
        }
        paragraphText='Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can hand out assignments in real-time for students to complete and submit.'
      />

      <LeftSided
        imageSrc={image3}
        headingText={
          <>
            Assessments, <br />
            <span className='text-black'>Quizzes</span>, Tests
          </>
        }
        paragraphText='Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.'
      />

      <RightSided
        imageSrc={image5}
        headingText={
          <>
            <span className='text-black'>Class Management</span> <br />
            Tools for Educators
          </>
        }
        paragraphText='Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, 
        teachers can review and grade tests and quizzes in real-time.'
      />

      <LeftSided
        imageSrc={image6}
        headingText={
          <>
            One-on-One <br /> <span className='text-black'>Discussions</span>
          </>
        }
        paragraphText='Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.'
      />
    </main>
  );
};

export default AboutUs;
