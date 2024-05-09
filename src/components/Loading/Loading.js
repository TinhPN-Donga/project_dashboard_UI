import './Loading.css';

export default function Loading() {
    return (
      <div className='wrapper'>
        <h2>Loading...</h2>
        <div className='loader'>
          <div className='loader__bar' />
          <div className='loader__bar' />
          <div className='loader__bar' />
          <div className='loader__bar' />
          <div className='loader__bar' />
          <div className='loader__ball' />
        </div>
      </div>
    );
  }

