import { useContext, useEffect, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";

const SearchPageDistanceFilter = ({ filters, setFilters }) => {
  const {
    radius,
    setRadius,
    setBusinessResults,
    setCurrentBusinessResults,
    setLoading,
    setResultReviews,
  } = useContext(BusinessSearchContext);
  const [birdsEyeChecked, setBirdsEyeChecked] = useState(false);
  const [drivingChecked, setDrivingChecked] = useState(false);
  const [bikingChecked, setBikingChecked] = useState(false);
  const [walkingChecked, setWalkingChecked] = useState(false);
  const [blocksChecked, setBlocksChecked] = useState(false);

  const handleChange = (value) => {
    setCurrentBusinessResults([]);
    setResultReviews([]);
    const emptyResults = {};
    setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
    setLoading(true);
    setRadius(value);
  };

  useEffect(() => {
    if (radius === "null") {
      setBirdsEyeChecked(false);
      setDrivingChecked(false);
      setBikingChecked(false);
      setWalkingChecked(false);
      setBlocksChecked(false);
    }
  }, [radius]);

  const strArr = [
    "Bird's-eye View",
    "Driving (5 mi.)",
    "Biking (2 mi.)",
    "Walking (1 mi.)",
    "Within 4 blocks",
  ];

  const handleClick = (e, index, str) => {
    e.preventDefault();

    for (let i = 0; i < strArr.length; i++) {
      if (filters.includes(strArr[i])) {
        let strIdx = filters.indexOf(str);
        filters.splice(strIdx, 1);
      }
    }

    filters.push(str);
    setFilters(filters);

    switch (index) {
      case 0:
        setDrivingChecked(false);
        setBikingChecked(false);
        setWalkingChecked(false);
        setBlocksChecked(false);
        setBirdsEyeChecked(true);
        break;
      case 1:
        setBirdsEyeChecked(false);
        setBikingChecked(false);
        setWalkingChecked(false);
        setBlocksChecked(false);
        setDrivingChecked(true);
        break;
      case 2:
        setBirdsEyeChecked(false);
        setDrivingChecked(false);
        setWalkingChecked(false);
        setBlocksChecked(false);
        setBikingChecked(true);
        break;
      case 3:
        setBirdsEyeChecked(false);
        setDrivingChecked(false);
        setBikingChecked(false);
        setBlocksChecked(false);
        setWalkingChecked(true);
        break;
      case 4:
        setBirdsEyeChecked(false);
        setDrivingChecked(false);
        setBikingChecked(false);
        setWalkingChecked(false);
        setBlocksChecked(true);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="search-distance-input-btn"
      onChange={(e) => handleChange(e.target.value)}
    >
      <label>
        <input
          type="radio"
          value={16093}
          name="distanceInput"
          checked={birdsEyeChecked ? true : false}
          onClick={(e) => handleClick(e, 0, "Bird's-eye View")}
        />
        Bird's-eye View
      </label>
      <label>
        <input
          type="radio"
          value={8046}
          name="distanceInput"
          checked={drivingChecked ? true : false}
          onClick={(e) => handleClick(e, 1, "Driving (5 mi.)")}
        />
        Driving (5 mi.)
      </label>
      <label>
        <input
          type="radio"
          value={3216}
          name="distanceInput"
          checked={bikingChecked ? true : false}
          onClick={(e) => handleClick(e, 2, "Biking (2 mi.)")}
        />
        Biking (2 mi.)
      </label>
      <label>
        <input
          type="radio"
          value={1609}
          name="distanceInput"
          checked={walkingChecked ? true : false}
          onClick={(e) => handleClick(e, 3, "Walking (1 mi.)")}
        />
        Walking (1 mi.)
      </label>
      <label>
        <input
          type="radio"
          value={800}
          name="distanceInput"
          checked={blocksChecked ? true : false}
          onClick={(e) => handleClick(e, 4, "Within 4 blocks")}
        />
        Within 4 blocks
      </label>
    </div>
  );
};

export default SearchPageDistanceFilter;
