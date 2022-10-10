import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayPause = ({ activeSong, isPlaying, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle onClick={handlePause} className="text-gray-300" />
  ) : (
    <FaPlayCircle onClick={handlePlay} className="text-gray-300" />
  );

export default PlayPause;
