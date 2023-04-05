interface Props {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const TimelineItem = ({ year, title, duration, details }: Props) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-1 border-stone-200">
      <li className="mb-10 ml-4 border-2">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
        <div>
          <p className="">{year}</p>
          <p>{title}</p>
          <p>{duration}</p>
          <p>{details}</p>
        </div>
      </li>
    </ol>
  );
};

export default TimelineItem;
