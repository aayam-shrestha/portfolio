import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline";

const Timeline = () => {
  return (
    <div className="border-black border-width-2 padding-10">
      {timeline.map((item) => (
        <TimelineItem
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Timeline;
