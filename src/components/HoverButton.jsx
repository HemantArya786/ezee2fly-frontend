const HoverButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group
        inline-flex items-center gap-3 px-6 py-3 pl-5
        text-white font-semibold rounded-full
        whitespace-nowrap overflow-hidden overflow-ellipsis
        transition-colors duration-300
        hover:bg-black bg-primary
      `}
    >
      <span
        className={`
        relative flex-shrink-0 w-[25px] h-[25px]
        bg-white rounded-full
        flex items-center justify-center
        overflow-hidden text-primary
      `}
      >
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`
            w-[10px] absolute
            transition-transform duration-300 ease-in-out
            group-hover:translate-x-[150%] group-hover:-translate-y-[150%]
          `}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`
            w-[10px] absolute
            transition-transform duration-300 ease-in-out delay-100
            translate-x-[-150%] translate-y-[150%]
            group-hover:translate-x-0 group-hover:translate-y-0
          `}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </span>
      {title}
      <style jsx>{`
        .group:hover span {
          color: black;
        }
      `}</style>
    </button>
  );
};

export default HoverButton;
