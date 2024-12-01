const Form = () => {
  return (
    <div className='p-10'>
      <h2 className='text-center text-4xl font-bold text-gray-700 mb-6'>
        Get in Touch
      </h2>
      <p className='text-center text-gray-500 mb-8 text-lg'>
        {
          "Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
        }
      </p>
      <form>
        <div className='form-control mb-6'>
          <label className='label'>
            <span className='label-text text-gray-600'>Your Name</span>
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='input input-bordered focus:ring-2 focus:ring-primary focus:outline-none'
            required
          />
        </div>
        <div className='form-control mb-6'>
          <label className='label'>
            <span className='label-text text-gray-600'>Email Address</span>
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            className='input input-bordered focus:ring-2 focus:ring-primary focus:outline-none'
            required
          />
        </div>
        <div className='form-control mb-8'>
          <label className='label'>
            <span className='label-text text-gray-600'>Message</span>
          </label>
          <textarea
            placeholder='Write your message'
            className='textarea textarea-bordered focus:ring-2 focus:ring-primary focus:outline-none'
            rows='6'
            required
          ></textarea>
        </div>
        <div className='form-control'>
          <button
            type='submit'
            className='btn btn-primary w-full text-white font-semibold text-lg'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
