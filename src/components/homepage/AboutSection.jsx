import instImg from '../../assets/aboutInstructor.png';
import stuImg from '../../assets/aboutStudents.png';
import AboutCard from './AboutCard';

const AboutSection = () => {
  return (
    <div className='my-4 px-11 flex flex-col items-center gap-8'>
      <div className='text-center flex flex-col items-center gap-4'>
        <h2 className='text-accent text-4xl font-semibold'>
          What is <span className='text-primary'>LearningArc</span>
        </h2>
        <p className='w-3/4 text-center text-lg'>
          LearningArc is an intuitive platform designed to empower educators and
          enhance the online learning experience. It allows instructors to
          easily post and manage course-related videos and threads, providing a
          seamless space to share lecture content, discussions, and resources.
          Educators can engage with students by posting instructional videos and
          facilitating meaningful conversations through threaded discussions.
          The platform enables efficient content management, allowing
          instructors to keep track of their posts and interact with students in
          real-time. With a focus on content sharing and student engagement,
          LearningArc helps educators deliver valuable learning experiences
          without the complexity of managing full-scale online classes.
        </p>
      </div>
      <div className='flex items-center justify-center gap-7 flex-wrap'>
        <AboutCard
          imgSrc={instImg}
          text={'For Instructors'}
          btnText={'Upload Courses'}
          btnClass={'btn-outline border-white text-white'}
        />
        <AboutCard
          imgSrc={stuImg}
          text={'For Students'}
          btnText={'Take Lessons'}
          btnClass={'btn-primary'}
        />
      </div>
    </div>
  );
};

export default AboutSection;
