import React, { useState, useRef } from "react";
import axios from "axios";

interface VoiceSettings {
  stability: number;
  similarity_boost: number;
}

interface AudioStreamProps {
  voiceId: string;
  text: string;
  apiKey: string;
  voiceSettings: VoiceSettings;
}

const AudioStream: React.FC<AudioStreamProps> = ({
  voiceId,
  text,
  apiKey,
  voiceSettings,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startStreaming = async () => {
    setLoading(true);
    setError("");

    const baseUrl = "https://api.elevenlabs.io/v1/text-to-speech";
    const headers = {
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
    };

    const requestBody = {
      text,
      voice_settings: voiceSettings,
    };

    try {
      const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
        headers,
        responseType: "blob",
      });

      if (response.status === 200) {
        const url = URL.createObjectURL(response.data);
        setAudioUrl(url);
        if (audioRef.current) {
          audioRef.current.src = url;
          audioRef.current.play();
        }
      } else {
        setError("Error: Unable to stream audio.");
      }
    } catch (error) {
      setError("Error: Unable to stream audio.");
    } finally {
      setLoading(false);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const a = document.createElement("a");
      a.href = audioUrl;
      a.download = "announcement.mp3";
      a.click();
    }
  };

  return (
    <div>
      <button onClick={startStreaming} disabled={loading}>
        {loading ? "Generating..." : "Start Announcement"}
      </button>

     
      {error && <p>{error}</p>}

      <div className="volume-control">
        <label>Volume:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.volume = parseFloat(e.target.value);
            }
          }}
        />
      </div>

      <audio ref={audioRef} controls style={{ display: "none" }} />
    </div>
  );
};

export default AudioStream;
