import type { NextApiRequest, NextApiResponse } from 'next';

type ApiResponse = {
  weatherData: any | null;
  error?: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    const { city } = req.query;

    if (!city) {
      res.status(400).json({ error: 'City parameter is required', weatherData: null });
      return;
    }

    // fetching city information
    const cityResponse = await fetch(`https://api.clear-skies.ca/locations/search?q=${city}`);
    if (!cityResponse.ok) {
      throw new Error('Failed to fetch city information');
    }
    const cityData = await cityResponse.json();

    // extracting necessary information for weather data fetch
    const { province_or_territory, slug } = cityData;

    // fetching weather data
    const weatherResponse = await fetch(`https://api.clear-skies.ca/weather/${province_or_territory}/${slug}`);
    if (!weatherResponse.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const weatherData = await weatherResponse.json();

    // sending weather data back to the client
    res.status(200).json({ weatherData, error: null });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal server error', weatherData: null });
  }
}
