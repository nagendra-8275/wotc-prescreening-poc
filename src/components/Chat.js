// import React, { useState } from "react";

// export default function Chat() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const handleIframeLoad = (event) => {
//     try {
//       setIsLoading(false);
//     } catch (err) {
//       handleIframeError();
//     }
//   };

//   const handleIframeError = () => {
//     setError(true);
//     setIsLoading(false);
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         <h2 className="chat-title">WOTC Screening Assistant</h2>
//         <div className="chat-placeholder">
//           {isLoading && <div className="loading-message">Loading chatbot...</div>}
//           {error && <div className="error-message">Failed to load chatbot. Please try again later.</div>}
//           <iframe
//             title="WOTC Chatbot Interface"
//             allow="microphone;"
//             width="100%"
//             height="100%"
//             style={{ border: 'none', display: isLoading ? 'none' : 'block' }}
//             src="https://console.dialogflow.com/api-client/demo/embedded/bc780ec8-b9bd-4233-a065-bfeb7f290359"
//             onLoad={handleIframeLoad}
//             onError={handleIframeError}
//             sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
//           />
//         </div>
//       </div>
//     </div>
//   );
// } 