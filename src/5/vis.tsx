import { useEffect, useState } from "react";
import { INGREDIENT_DATA } from "./input";

import { assignIdRanges, mergeRanges, sleep } from "./index";

import "./styles.css";

export default function App() {
  const [ranges, setRanges] = useState<[number, number][]>([]);
  const [statusText, setStatusText] = useState("");
  const [total, setTotal] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handle = async () => {
      const [idsRangesString] = INGREDIENT_DATA.split("\n\n");
      const idRanges = idsRangesString.split("\n");

      const freshIds = assignIdRanges(idRanges);
      const freshIdsArray = Array.from(freshIds);
      setRanges(freshIdsArray);

      setStatusText("Merging the ranges");

      const mergedIds = await mergeRanges(freshIds, (newIds: Map<number, number>, index: number) => {
        setRanges(Array.from(newIds));
        setActiveIndex(index);
      });
      setActiveIndex(-1);

      setStatusText("Counting the sum of ranges:");

      let index = 0;
      for (const currentMin of mergedIds.keys()) {
        const currentMax = freshIds.get(currentMin);
        index++;

        if (currentMax === undefined) {
          continue;
        }

        const diff = currentMax + 1 - currentMin;
        setActiveIndex(index);
        await sleep(70);
        setTotal((total: number) => (total += diff));
      }
      setActiveIndex(-1);
    };
    handle();
  }, []);

  return (
    <div className="App">
      <div className="status">
        {statusText}
        {statusText === "Counting the sum of ranges:" && (
          <span className="total"> {total}</span>
        )}
      </div>
      <div className="ranges">
        {ranges.map((range, index) => (
          <div
            key={range.toString()}
            className={index === activeIndex ? "active" : ""}
          >
            {JSON.stringify(range, null, 2)}
          </div>
        ))}
      </div>
    </div>
  );
}
