import React, { useState } from 'react';

const AppwriteTest: React.FC = () => {
  const [testResult, setTestResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const testAppwriteConnection = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      // Test direct API call to Appwrite
      const endpoint = (import.meta as any).env?.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
      const projectId = (import.meta as any).env?.VITE_APPWRITE_PROJECT_ID || '66cf1e960032fa93109c';
      
      const response = await fetch(`${endpoint}/health`, {
        method: 'GET',
        headers: {
          'X-Appwrite-Project': projectId,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.text();
      
      setTestResult({
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        data: data,
        endpoint: endpoint,
        projectId: projectId,
        headers: Object.fromEntries(response.headers.entries()),
      });
    } catch (error: any) {
      setTestResult({
        success: false,
        error: {
          message: error.message,
          name: error.name,
          stack: error.stack,
        },
        endpoint: (import.meta as any).env?.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1',
        projectId: (import.meta as any).env?.VITE_APPWRITE_PROJECT_ID || '66cf1e960032fa93109c',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      left: '10px', 
      background: 'rgba(0,0,0,0.9)', 
      color: 'white', 
      padding: '15px', 
      borderRadius: '8px',
      fontSize: '12px',
      maxWidth: '400px',
      zIndex: 9999,
      maxHeight: '300px',
      overflow: 'auto'
    }}>
      <h4>Appwrite Connection Test</h4>
      
      <button 
        onClick={testAppwriteConnection}
        disabled={isLoading}
        style={{ 
          background: isLoading ? '#666' : '#007bff', 
          color: 'white', 
          border: 'none', 
          padding: '8px 12px', 
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          marginBottom: '10px'
        }}
      >
        {isLoading ? 'Testing...' : 'Test Appwrite API'}
      </button>
      
      {testResult && (
        <div style={{ marginTop: '10px' }}>
          <div style={{ color: testResult.success ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
            Status: {testResult.success ? 'SUCCESS' : 'FAILED'}
          </div>
          <pre style={{ 
            whiteSpace: 'pre-wrap', 
            wordBreak: 'break-word',
            fontSize: '10px',
            background: 'rgba(255,255,255,0.1)',
            padding: '5px',
            borderRadius: '3px',
            marginTop: '5px'
          }}>
            {JSON.stringify(testResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AppwriteTest;
