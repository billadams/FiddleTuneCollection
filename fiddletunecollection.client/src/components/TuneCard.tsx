function TuneCard() {


  return (
    <div className='card'>
      <div className='card__image card__video-player'>
        <img />
      </div>
      <div>
        <h3>Title</h3>
        <div className='card__favorite'></div>
      </div>
      <div className='card__filters'>
        <div className='card__filter-key'></div>
        <div className='card__filter-genre'></div>
        <div className='card__filter-time'></div>
      </div>
      <div className='card__audio-player'></div>
      <div className='card__downloads'></div>
    </div>
  );
}

export default TuneCard;