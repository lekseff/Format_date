import DateTimePretty from './DateTimePretty';

function Video(props) {
  return (
    <div className='video'>
      <iframe
        src={props.url}
        allow={'autoplay; encrypted-media'}
        allowfullreen
        title={'This Title'}
      ></iframe>
      {/*<TimeLabel date={props.date} />*/}
      <DateTimePretty date={props.date} />
    </div>
  );
}

export default Video;
