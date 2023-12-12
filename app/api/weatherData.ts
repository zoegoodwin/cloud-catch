import { z } from 'zod';

const CoordinatesSchema = z.object({
  lat: z.number(),
  lon: z.number()
});

const WeatherConditionSchema = z.object({
  condition: z.string().nullable(),
  temperature_c: z.number().nullable(),
  humidity_pct: z.number().nullable(),
  wind_speed_kph: z.number().nullable(),
  wind_direction: z.string().nullable(),
  air_quality_index: z.number().nullable(),
  dewpoint_c: z.number().nullable(),
  humidex_c: z.number().nullable(),
  observed_at: z.string().nullable(),
  pressure_kpa: z.number().nullable(),
  pressure_tendency: z.string().nullable(),
  visibility_km: z.number().nullable(),
  wind_chill_c: z.number().nullable(),
  issued_at: z.string().nullable(),
  summary: z.string().nullable(),
});

const WeatherReportSchema = z.object({
  city: z.string(),
  coordinates: CoordinatesSchema,
  current_conditions: WeatherConditionSchema,
});

const validateWeatherData = (data: any) => {
  return WeatherReportSchema.safeParse(data);
};

export { WeatherReportSchema, validateWeatherData };
