import { Scheduler } from "@bryntum/scheduler";
import { useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const schedulerContainerRef = useRef(null);

  useEffect(() => {
    const scheduler = new Scheduler({
      appendTo: schedulerContainerRef.current,
      columns: [
        {
          field: "name",
          text: "Name",
        },
      ],
      resources: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ],
      events: [
        {
          id: 1,
          resourceId: 1,
          startDate: new Date(),
          duration: 2,
          name: "Meeting",
        },
      ],
      startDate: new Date(),
      endDate: new Date().setHours(new Date().getHours() + 8),
      viewPreset: "hourAndDay",
    });

    // Clean up Scheduler instance on component unmount
    return () => scheduler.destroy();
  }, []);

  return (
    <div>
      <h1>React Scheduler App</h1>
      {/* Using shallow DOM rendering */}
      <div ref={schedulerContainerRef} style={{ height: "400px" }}></div>
    </div>
  );
};

export default App;
