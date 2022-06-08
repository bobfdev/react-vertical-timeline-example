import TimelineItem from './TimelineItem';
import data from '../data/timeline-data';

const Timeline = () => data.length > 0 && (
    <div className="timeline-container">
        {data.map((data, index) => {
            return (
                <TimelineItem data={data} key={index} />
            )
        })}
    </div>
)

export default Timeline;
