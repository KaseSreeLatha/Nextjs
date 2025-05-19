import { useEffect, useState } from "react";
import { MapPinIcon } from '@heroicons/react/24/outline'

const GeolocationComponent = () => {
  const [address, setAddress] = useState<string | null>(null);

  const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
    const apiKey = "42b5427e3f0c4a45a9a28cab43fd781c";
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const state = result.components.state || result.components.province;
        const country = result.components.country;
        const postcode = result.components.postcode;
        if (state && country && postcode) {
          setAddress(`${state} - ${postcode}`);
        }
      }
    } catch (err) {
      console.log("Failed to fetch address",err);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddressFromCoordinates(latitude, longitude);
        }
      );
    }
  }, []);

  return (
    <div>
      {address ? (
        <div>
        <p className="text-xs text-gray-400 ml-8">Delivering to:</p>
        <div className="flex items-center">
        <MapPinIcon className="w-4 h-4 mr-1"/>
        <p className="text-sm">{address}</p>
        </div>
        <button className="text-sm text-blue-500 ml-7 hover:underline">Update Location</button>
        </div>
      ) : (
        <p className="text-sm font-bold text-[#f08804]">Enable Location...</p>
      )}
    </div>
  );
};

export default GeolocationComponent;