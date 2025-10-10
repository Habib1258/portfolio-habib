import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
          <title>404 - My Portfolio</title>
          <meta name="description" content="Welcome to my homepage" />
        </Helmet>
      <section className='text-center flex flex-col h-96 justify-center items-center'>
        <h1 className='text-black text-4xl mt-4'>404 Not Found</h1>  {/* Added margin-top for spacing */}
        <p className='text-black text-xl mt-2'>This page does not exist</p>  {/* Corrected text */}
        <Link to="/" className='text-white text-xl bg-lime-400 rounded py-2 px-4 mt-4 inline-block'>Go Back</Link>  {/* Added padding and margin */}
      </section>
    </>
  );
}

export default NotFoundPage;
