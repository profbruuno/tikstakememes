// ---------- Full Screen Chart Page ----------
function openChart(pairId) {
  const t = [...popularListings, ...newListings, ...highRiskListings].find(x => x.pairId === pairId);
  if (!t) return;

  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  const chartUrl = `https://www.dextools.io/widget-chart/en/solana/pe-light/${pairId}?theme=${theme}&chartType=1`;
  const solscanUrl = t.tokenAddress ? `https://solscan.io/token/${t.tokenAddress}` : '#';

  const html = `
    <html>
      <head>
        <title>${t.name} (${t.symbol})</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background: ${theme === 'dark' ? '#0b1020' : '#f9f9f9'};
            color: ${theme === 'dark' ? '#e6e7ea' : '#222'};
            min-height: 100vh;
            overflow: hidden;
          }
          
          .app-container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            transition: all 0.3s ease;
          }
          
          /* Normal mode styles */
          .normal-mode {
            padding: 15px;
            overflow-y: auto;
            flex: 1;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .header-controls {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          
          .back-button, .fullscreen-button {
            padding: 12px 18px;
            background: ${theme === 'dark' ? '#1f2937' : '#111827'};
            color: ${theme === 'dark' ? '#e6e7ea' : '#fff'};
            border: none;
            border-radius: 8px;
            font-weight: 500;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.2s;
          }
          
          .fullscreen-button {
            background: ${theme === 'dark' ? '#3b82f6' : '#2563eb'};
          }
          
          .back-button:hover, .fullscreen-button:hover {
            opacity: 0.9;
          }
          
          .token-header {
            margin-bottom: 20px;
          }
          
          .token-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: ${theme === 'dark' ? '#e6e7ea' : '#222'};
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 12px;
            margin-bottom: 20px;
          }
          
          .info-card {
            background: ${theme === 'dark' ? '#0f172a' : '#fff'};
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border: 1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'};
          }
          
          .info-card strong {
            display: block;
            margin-bottom: 5px;
            font-size: 0.9rem;
            color: ${theme === 'dark' ? '#9ca3af' : '#6b7280'};
          }
          
          .info-card span {
            font-size: 1rem;
            font-weight: 600;
          }
          
          .address-section {
            background: ${theme === 'dark' ? '#0f172a' : '#fff'};
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'};
          }
          
          .address-section strong {
            display: block;
            margin-bottom: 8px;
            color: ${theme === 'dark' ? '#9ca3af' : '#6b7280'};
          }
          
          .address-link {
            color: ${theme === 'dark' ? '#60a5fa' : '#3b82f6'};
            text-decoration: none;
            word-break: break-all;
            font-family: monospace;
            font-size: 0.9rem;
          }
          
          .listed-date {
            background: ${theme === 'dark' ? '#0f172a' : '#fff'};
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'};
            font-style: italic;
            color: ${theme === 'dark' ? '#9ca3af' : '#6b7280'};
          }
          
          .chart-container {
            width: 100%;
            margin-bottom: 20px;
            flex: 1;
          }
          
          .chart-iframe {
            width: 100%;
            border: 1px solid ${theme === 'dark' ? '#374151' : '#ddd'};
            border-radius: 8px;
            background: ${theme === 'dark' ? '#0b1020' : '#fff'};
          }
          
          /* Fullscreen mode styles */
          .fullscreen-mode {
            padding: 0 !important;
          }
          
          .fullscreen-mode .normal-content {
            display: none !important;
          }
          
          .fullscreen-mode .chart-container {
            margin: 0 !important;
            height: 100vh !important;
            width: 100vw !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            z-index: 9998 !important;
          }
          
          .fullscreen-mode .chart-iframe {
            border-radius: 0 !important;
            border: none !important;
            height: 100vh !important;
            width: 100vw !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            z-index: 9998 !important;
          }
          
          .fullscreen-controls {
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 10000;
            display: none;
          }
          
          .fullscreen-mode .fullscreen-controls {
            display: block !important;
          }
          
          .exit-fullscreen-button {
            padding: 8px 12px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            border-radius: 6px;
            font-weight: 500;
            font-size: 12px;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.2s;
            z-index: 10001;
          }
          
          .exit-fullscreen-button:hover {
            background: rgba(0, 0, 0, 0.9);
            transform: scale(1.05);
          }
          
          /* Mobile styles */
          @media (max-width: 768px) {
            .normal-mode {
              padding: 10px;
            }
            
            .token-title {
              font-size: 1.3rem;
            }
            
            .info-grid {
              grid-template-columns: 1fr 1fr;
              gap: 10px;
            }
            
            .info-card {
              padding: 12px;
            }
            
            .info-card strong {
              font-size: 0.8rem;
            }
            
            .info-card span {
              font-size: 0.9rem;
            }
            
            .header-controls {
              flex-direction: column;
            }
            
            .back-button, .fullscreen-button {
              width: 100%;
              text-align: center;
            }
            
            .chart-iframe {
              height: 400px;
            }
            
            .address-section, .listed-date {
              padding: 12px;
            }
            
            .fullscreen-controls {
              top: 10px;
              right: 10px;
            }
            
            .exit-fullscreen-button {
              padding: 6px 10px;
              font-size: 11px;
            }
          }
          
          @media (max-width: 480px) {
            .info-grid {
              grid-template-columns: 1fr;
            }
            
            .chart-iframe {
              height: 350px;
            }
          }
          
          /* Desktop styles */
          @media (min-width: 769px) {
            .chart-iframe {
              height: 500px;
            }
          }
        </style>
      </head>
      <body>
        <div class="app-container">
          <div class="normal-mode" id="normalMode">
            <div class="container">
              <div class="header-controls">
                <button class="back-button" onclick="window.close()">← Close Chart</button>
                <button class="fullscreen-button" onclick="enterFullscreen()">📈 Full Screen Chart</button>
              </div>
              
              <div class="normal-content">
                <div class="token-header">
                  <h1 class="token-title">${t.name} (${t.symbol})</h1>
                </div>
                
                <div class="info-grid">
                  <div class="info-card">
                    <strong>Price</strong>
                    <span>${fmtPrice(t.price)}</span>
                  </div>
                  <div class="info-card">
                    <strong>Liquidity</strong>
                    <span>${t.liquidityUsd != null ? '$' + t.liquidityUsd.toLocaleString() : '-'}</span>
                  </div>
                  <div class="info-card">
                    <strong>Market Cap</strong>
                    <span>${t.marketCap != null ? '$' + t.marketCap.toLocaleString() : '-'}</span>
                  </div>
                  <div class="info-card">
                    <strong>24h Change</strong>
                    <span>${fmtChange(t.change)}</span>
                  </div>
                </div>
                
                ${t.tokenAddress ? `
                <div class="address-section">
                  <strong>Mint Address</strong>
                  <a href="${solscanUrl}" target="_blank" class="address-link">
                    ${shortenAddress(t.tokenAddress)}
                  </a>
                </div>
                ` : ''}
                
                <div class="listed-date">
                  <strong>Listed on this dashboard:</strong> ${t.addedDate}
                </div>
              </div>
              
              <div class="chart-container">
                <iframe 
                  src="${chartUrl}" 
                  class="chart-iframe"
                  frameborder="0"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
          
          <div class="fullscreen-controls" id="fullscreenControls">
            <button class="exit-fullscreen-button" onclick="exitFullscreen()">✕ Exit</button>
          </div>
        </div>
        
        <script>
          let isFullscreen = false;
          
          function enterFullscreen() {
            const appContainer = document.querySelector('.app-container');
            const normalMode = document.getElementById('normalMode');
            const fullscreenControls = document.getElementById('fullscreenControls');
            const iframe = document.querySelector('.chart-iframe');
            
            // Add fullscreen classes
            appContainer.classList.add('fullscreen-mode');
            normalMode.classList.add('fullscreen-mode');
            
            // Force iframe to take full viewport
            iframe.style.height = '100vh';
            iframe.style.width = '100vw';
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.zIndex = '9998';
            
            // Show fullscreen controls
            fullscreenControls.style.display = 'block';
            
            // Hide scrollbars
            document.body.style.overflow = 'hidden';
            
            isFullscreen = true;
            
            console.log('Entered fullscreen mode');
          }
          
          function exitFullscreen() {
            const appContainer = document.querySelector('.app-container');
            const normalMode = document.getElementById('normalMode');
            const fullscreenControls = document.getElementById('fullscreenControls');
            const iframe = document.querySelector('.chart-iframe');
            
            // Remove fullscreen classes
            appContainer.classList.remove('fullscreen-mode');
            normalMode.classList.remove('fullscreen-mode');
            
            // Reset iframe styles
            iframe.style.height = '';
            iframe.style.width = '';
            iframe.style.position = '';
            iframe.style.top = '';
            iframe.style.left = '';
            iframe.style.zIndex = '';
            
            // Hide fullscreen controls
            fullscreenControls.style.display = 'none';
            
            // Restore scroll
            document.body.style.overflow = 'auto';
            
            isFullscreen = false;
            
            console.log('Exited fullscreen mode');
          }
          
          // Handle ESC key to exit fullscreen
          document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && isFullscreen) {
              exitFullscreen();
            }
          });
          
          // Additional mobile handling
          function isMobile() {
            return window.innerWidth <= 768;
          }
          
          // Adjust iframe height on resize
          function adjustIframeHeight() {
            if (!isFullscreen) {
              const iframe = document.querySelector('.chart-iframe');
              if (iframe && isMobile()) {
                iframe.style.height = Math.min(window.innerHeight * 0.6, 500) + 'px';
              }
            }
          }
          
          window.addEventListener('resize', adjustIframeHeight);
          window.addEventListener('load', adjustIframeHeight);
          
          // Handle back button
          document.querySelector('.back-button').addEventListener('click', function() {
            window.close();
          });
        </script>
      </body>
    </html>
  `;

  const w = window.open('', '_blank');
  if (!w) {
    alert('Popup blocked. Please allow popups for this site.');
    return;
  }
  w.document.write(html);
  w.document.close();
}
