// import { useState } from "react";
// import AudioStream from "./AudioStream";
// import { FaBeer } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";


// const apiKey = "sk_5a79ddd30310abe53352a30ec9c7763ee02c71d342c32492";
// const defaultVoiceId = "t0jbNlBVZ17f02VDIeMI"; 
// const defaultVoiceSettings = {
//   stability: 0.5,
//   similarity_boost: 0.5,
// };

// function App() {
//   const [message, setMessage] = useState(""); 
//   const [language, setLanguage] = useState("en"); 
//   const [voiceSettings, setVoiceSettings] = useState(defaultVoiceSettings); 

//   const handleGenerateAnnouncement = () => {
//     // Logic to handle announcement generation (can add more complex logic here)
//   };

//   return (
//     <div className="app">
    
     

//       {/* Announcement Form Section */}
//       <section className="announcement-form py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 mx-auto">
//               <div className="card p-4 shadow">
//                 <h3 className="text-center mb-4">Create Your Announcement</h3>
//                 {/* Input for Announcement Message */}
//                 <div className="form-group mb-3">
//                   <label htmlFor="announcementMessage" className="form-label">
//                     Announcement Message:
//                   </label>
//                   <FaBeer />
//                   <textarea
//                     id="announcementMessage"
//                     className="form-control"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Enter the public announcement message"
//                     rows={5}
//                   />
//                 </div>

//                 {/* Dropdown for Language Selection */}
//                 <div className="form-group mb-3">
//                   <label htmlFor="languageSelection" className="form-label">
//                     Language:
//                   </label>
//                   <select
//                     id="languageSelection"
//                     className="form-control"
//                     value={language}
//                     onChange={(e) => setLanguage(e.target.value)}
//                   >
//                     <option value="en">English</option>
//                     <option value="es">Spanish</option>
//                     <option value="fr">French</option>
//                     {/* Add more languages here */}
//                   </select>
//                 </div>

//                 {/* Voice Stability Slider */}
//                 <div className="form-group mb-3">
//                   <label htmlFor="voiceStability" className="form-label">
//                     Voice Stability:
//                   </label>
//                   <input
//                     id="voiceStability"
//                     type="range"
//                     className="form-range"
//                     min="0"
//                     max="1"
//                     step="0.1"
//                     value={voiceSettings.stability}
//                     onChange={(e) =>
//                       setVoiceSettings({
//                         ...voiceSettings,
//                         stability: parseFloat(e.target.value),
//                       })
//                     }
//                   />
//                 </div>

//                 {/* Similarity Boost Slider */}
//                 <div className="form-group mb-4">
//                   <label htmlFor="similarityBoost" className="form-label">
//                     Similarity Boost:
//                   </label>
//                   <input
//                     id="similarityBoost"
//                     type="range"
//                     className="form-range"
//                     min="0"
//                     max="1"
//                     step="0.1"
//                     value={voiceSettings.similarity_boost}
//                     onChange={(e) =>
//                       setVoiceSettings({
//                         ...voiceSettings,
//                         similarity_boost: parseFloat(e.target.value),
//                       })
//                     }
//                   />
//                 </div>

              
//                 {/* <button
//                   className="btn btn-primary btn-lg w-100"
//                   onClick={handleGenerateAnnouncement}
//                 >
//                   Generate Announcement
//                 </button> */}

//                 {/* Pass data to AudioStream component for playing the audio */}
//                 <AudioStream
//                   voiceId={defaultVoiceId}
//                   text={message}
//                   apiKey={apiKey}
//                   voiceSettings={voiceSettings}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="text-center text-white bg-dark py-4">
//         <p className="mb-0">AI Public Announcement System &copy; 2024</p>
//         <p>Powered by ElevenLabs Technology</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import AudioStream from "./AudioStream";
import { FaDownload, FaMicrophone } from "react-icons/fa";
import img1 from '../src/assets/cc.webp'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const apiKey = "sk_5a79ddd30310abe53352a30ec9c7763ee02c71d342c32492";
const defaultVoiceId = "t0jbNlBVZ17f02VDIeMI";
const defaultVoiceSettings = {
  stability: 0.5,
  similarity_boost: 0.5,
};

function App() {
  const [message, setMessage] = useState(""); 
  const [language, setLanguage] = useState("en"); 
  const [voiceSettings, setVoiceSettings] = useState(defaultVoiceSettings); 
  const [imageGenerated, setImageGenerated] = useState(false);

  const handleGenerateAnnouncement = () => {
   
    setImageGenerated(true);
  };

return (
    <div className="app">
      <div className="container py-1 ">
      
        <h2 className="text-left">Annoucement Text</h2>
        <textarea
          id="announcementMessage"
          className="form-control w-50 mx-auto"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter the public announcement message"
          rows={3}
        />
      
        <button
          className="btn btn-primary mt-3"
          onClick={handleGenerateAnnouncement}
        >
          Generate Image & Voice
        </button>

       
        <div className="row mt-5">
       
          <div className="col-6">
            <div className="card">
           
              <h2>Annoucement Image</h2>
              <img
                src={img1}
                alt="Generated"
                className="card-img-top"
                style={{height:"277px"}}
              />
             
              <div className="card-body text-end">
                <FaDownload className="text-primary" />
              </div>
            </div>
          </div>

        
          <div className="col-6">
            <div className="card p-4">
              <h2>Generated Voice</h2>
             
              <div className="form-group mb-3">
                <label htmlFor="languageSelection" className="form-label">
                  Language:
                </label>
                <select
                  id="languageSelection"
                  className="form-control"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
   
                </select>
              </div>

              {/* Voice Stability Slider */}
              <div className="form-group mb-3">
                <label htmlFor="voiceStability" className="form-label">
                  Voice Stability:
                </label>
                <input
                  id="voiceStability"
                  type="range"
                  className="form-range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={voiceSettings.stability}
                  onChange={(e) =>
                    setVoiceSettings({
                      ...voiceSettings,
                      stability: parseFloat(e.target.value),
                    })
                  }
                />
              </div>

              {/* Similarity Boost Slider */}
              <div className="form-group mb-3">
                <label htmlFor="similarityBoost" className="form-label">
                  Similarity Boost:
                </label>
                <input
                  id="similarityBoost"
                  type="range"
                  className="form-range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={voiceSettings.similarity_boost}
                  onChange={(e) =>
                    setVoiceSettings({
                      ...voiceSettings,
                      similarity_boost: parseFloat(e.target.value),
                    })
                  }
                />
              </div>

          
              <AudioStream
                voiceId={defaultVoiceId}
                text={message}
                apiKey={apiKey}
                voiceSettings={voiceSettings}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-white bg-dark py-4">
        <p className="mb-0">AI Public Announcement System &copy; 2024</p>
        <p>Powered by ElevenLabs Technology</p>
      </footer>
    </div>
  );
}

export default App;
