

function Filters() {
  return (
    <div className='filters'>
      <ul>
        <li><h3>Genre</h3>
          <ul>
            <li><button type='button'>All</button></li>
            <li><button type='button'>Jig</button></li>
            <li><button type='button'>Polka</button></li>
            <li><button type='button'>Reel</button></li>
            <li><button type='button'>Waltz</button></li>
          </ul>
        </li>
        <li><h3>Key</h3>
          <ul>
            <li><button type='button'>All</button></li>
            <li><button type='button'>A</button></li>
            <li><button type='button'>C</button></li>
            <li><button type='button'>D</button></li>
            <li><button type='button'>G</button></li>
          </ul>
        </li>
        <li><h3>Time</h3>
           <ul>
            <li><button type='button'>All</button></li>
            <li><button type='button'>2 / 4</button></li>
            <li><button type='button'>3 / 4</button></li>
            <li><button type='button'>4 / 4</button></li>
            <li><button type='button'>6 / 8</button></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Filters;