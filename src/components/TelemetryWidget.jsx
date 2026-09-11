import { useState, useEffect } from 'react';
import { Clock, Cloud, Music, MapPin } from 'lucide-react';

export default function TelemetryWidget() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState("Scanning...");

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute:'2-digit', 
        second:'2-digit' 
      });
      setTime(now);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Free Weather Fetch for Ratlam, MP (Lat: 23.33, Lon: 75.03)
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=23.33&longitude=75.03&current_weather=true")
      .then(res => res.json())
      .then(data => setWeather(`${data.current_weather.temperature}°C`))
      .catch(() => setWeather("Optimal"));
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md mt-16 w-full max-w-4xl mx-auto md:mx-0">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/50 text-[11px] font-mono text-zinc-300 border border-zinc-800/50">
        <MapPin className="h-3.5 w-3.5 text-cyan-400" /> Ratlam, IN
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/50 text-[11px] font-mono text-zinc-300 border border-zinc-800/50">
        <Clock className="h-3.5 w-3.5 text-emerald-400" /> {time}
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/50 text-[11px] font-mono text-zinc-300 border border-zinc-800/50">
        <Cloud className="h-3.5 w-3.5 text-blue-400" /> {weather}
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/50 text-[11px] font-mono text-zinc-300 border border-zinc-800/50 w-full sm:w-auto justify-center">
        <Music className="h-3.5 w-3.5 text-[#1DB954]" /> 
        <span><span className="text-zinc-500">Listening to:</span> <span className="animate-pulse text-zinc-200">Lofi Coding Beats</span></span>
      </div>
    </div>
  );
}