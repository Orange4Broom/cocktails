import './loader.scss';

export const Loader = () => (
  <div className='loader__container'>
    <div className="pyramid__loader">
      <div className="wrapper">
        <span className="side side1"></span>
        <span className="side side2"></span>
        <span className="side side3"></span>
        <span className="side side4"></span>
        <span className="shadow"></span>
      </div>
    </div>
    <h1>Loading Cocktails...</h1>
  </div>
)
