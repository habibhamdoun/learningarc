import image7 from '../../assets/image7.png';
import image13 from '../../assets/image13.jpeg';
import gmail from '../../assets/gmailIcon.svg';
import github from '../../assets/github.svg';

const Contact = () => {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: `url(${image13})`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content flex justify-center items-center text-neutral-content'>
          <div className='card w-full max-w-5xl shadow-xl rounded-xl bg-white transition-transform transform hover:scale-105 mb-12 mt-12'>
            <div className='grid lg:grid-cols-2'>
              <div className='flex items-center justify-center p-10'>
                <img
                  src={image7}
                  alt='Contact Illustration'
                  className='max-w-full h-auto rounded-lg shadow-lg'
                />
              </div>
              <div className='pt-4 pr-5'>
                <h2 className='text-center text-4xl font-bold text-gray-700 mb-6'>
                  Get in Touch
                </h2>
                <p className='text-center text-gray-500 mb-8 text-lg'>
                  {
                    "Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
                  }
                </p>
                <div className='flex flex-col p-3 gap-3'>
                  <div className='flex items-center text-2xl text-black'>
                    <a
                      className='underline text-base  flex gap-3'
                      href='mailto:HabibHamdoun@gmail.com.com'
                    >
                      <img src={gmail} alt='' className='w-6 h-6' />
                      HabibHamdoun@gmail.com.com
                    </a>
                  </div>
                  <div className='flex items-center text-2xl text-black'>
                    <a
                      className='underline text-base  flex gap-3'
                      href='mailto:mhmdmarshoud34@gmail.com'
                    >
                      <img src={gmail} alt='' className='w-6 h-6' />
                      Mhmdmarshoud34@gmail.com
                    </a>
                  </div>
                  <div className='flex items-center text-2xl text-black'>
                    <a
                      className='underline text-base  flex gap-3'
                      target='_blank'
                      href='https://github.com/habibhamdoun/learningarc'
                    >
                      <img
                        src={github}
                        alt=''
                        className='w-6 h-6 bg-black rounded-full'
                      />
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>

              {/* <Form /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
