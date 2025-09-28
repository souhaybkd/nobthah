import React, { useState, useEffect } from 'react';
import { account } from '../appwrite/appwrite.config';

const DebugInfo: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const gatherDebugInfo = async () => {
      const info = {
        environment: {
          NODE_ENV: (import.meta as any).env?.NODE_ENV,
          VITE_APPWRITE_ENDPOINT: (import.meta as any).env?.VITE_APPWRITE_ENDPOINT,
          VITE_APPWRITE_PROJECT_ID: (import.meta as any).env?.VITE_APPWRITE_PROJECT_ID,
          MODE: (import.meta as any).env?.MODE,
        },
        location: {
          hostname: window.location.hostname,
          origin: window.location.origin,
          protocol: window.location.protocol,
        },
        timestamp: new Date().toISOString(),
      };

      // Test Appwrite connection
      try {
        const user = await account.get();
        info.appwrite = {
          connected: true,
          user: user ? 'Logged in' : 'Not logged in'
        };
      } catch (error: any) {
        info.appwrite = {
          connected: false,
          error: {
            message: error.message,
            type: error.type,
            code: error.code,
          }
        };
      }

      setDebugInfo(info);
    };

    gatherDebugInfo();
  }, []);

  if (!debugInfo) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '5px',
      fontSize: '12px',
      maxWidth: '300px',
      zIndex: 9999
    }}>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        style={{ 
          background: 'blue', 
          color: 'white', 
          border: 'none', 
          padding: '5px 10px', 
          borderRadius: '3px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        {isVisible ? 'Hide Debug' : 'Show Debug Info'}
      </button>
      
      {isVisible && (
        <pre style={{ 
          whiteSpace: 'pre-wrap', 
          wordBreak: 'break-word',
          maxHeight: '200px',
          overflow: 'auto'
        }}>
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DebugInfo;
