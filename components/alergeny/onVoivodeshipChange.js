import React, { useState } from "react";
import VoivodeshipSelect from "./VoivodeshipSelect";
import { getPollenData } from "./pollenService"; // Importujemy serwis API

export default function App() {
  const [pollenData, setPollenData] = useState(null);

  const handleVoivodeshipChange = async ({ lat, lng }) => {
    try {
      const data = await getPollenData(lat, lng); // Pobieramy dane API dla wybranego województwa
      setPollenData(data);
    } catch (error) {
      console.error("Error fetching pollen data:", error);
    }
  };

  return (
    <div>
      <VoivodeshipSelect onVoivodeshipChange={handleVoivodeshipChange} />
      {pollenData && (
        <div>
          <h3>Aktualne dane o pyłkach:</h3>
          <pre>{JSON.stringify(pollenData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
