// ---------- Config: curated lists ----------
const popularPairs = [
  'GH8Ers4yzKR3UKDvgVu8cqJfGzU4cU62mTeg9bcJ7ug6', // $michi
  '3ne4mWqdYuNiYrYZC9TrA3FcfuFdErghH97vNPbjicr1', // 
  'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx',  // Example
  'YrrUStgPugDp8BbfosqDeFssen6sA75ZS1QJvgnHtmY',
  'FAqh648xeeaTqL7du49sztp9nfj5PjRQrfvaMccyd9cz',
  '4AZRPNEfCJ7iw28rJu5aUyeQhYcvdcNm8cswyL51AY9i',
  '9t1H1uDJ558iMPNkEPSN1fqkpC4XSPQ6cqSf6uEsTfTR',
  '8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt',
  'FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo',
  '9ViX1VductEoC2wERTSp2TuDxXPwAf69aeET8ENPJpsN',
  '4w2cysotX6czaUGmmWg13hDpY4QEMG2CzeKYEQyK9Ama',
  
  
];

const newPairs = [
  '4w2cysotX6czaUGmmWg13hDpY4QEMG2CzeKYEQyK9Ama',// Troll
  '7ccKzmrXBpFHwyZGPqPuKL6bEyWAETSnHwnWe3jEneVc',
  '8oopi6gVFh4FA1mL5Jj35yRetfpmWiUDTfhCv31gkA3v',
  '5wNu5QhdpRGrL37ffcd6TMMqZugQgxwafgz477rShtHy',
'UKSPrYDU4veB4cAfV9HkzNg9gNP1jsoch8oySMG9tcJ',
'Q2sPHPdUWFMg7M7wwrQKLrn619cAucfRsmhVJffodSp',
];

const highRiskPairs = [
  '9czr2MVyxgPCnDrbA7ywaqG3K1fgCkCQYbwSBKxnMJFS', // Example high risk token
  'KSeAucEoqTBB4ttakHYE1encbxjn2u9zUa9ursDLe1E', // Example high risk token
  '6HfaJiUuTXFZEfmdkQSNbvfe6i95Nh2wUVJ5dWMf7gtw',
  '6GDrReNVfyjQDCuGMrKdG2JU7Uj8NCvBt2ukaL2mDj1L',
  'EPVwQEJCnenVSNYECMA2955BGTqJk2ptXuggrvtiFFG2',
];

// Added dates for each token
const tokenAddedDates = {
 
 '6HfaJiUuTXFZEfmdkQSNbvfe6i95Nh2wUVJ5dWMf7gtw':'2025-09-20',
   'GH8Ers4yzKR3UKDvgVu8cqJfGzU4cU62mTeg9bcJ7ug6': '2024-05-15',
  '3ne4mWqdYuNiYrYZC9TrA3FcfuFdErghH97vNPbjicr1': '2024-05-16',
  'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx': '2024-05-17',
  'YrrUStgPugDp8BbfosqDeFssen6sA75ZS1QJvgnHtmY': '2024-05-18',
  'FAqh648xeeaTqL7du49sztp9nfj5PjRQrfvaMccyd9cz': '2024-05-19',
  '4AZRPNEfCJ7iw28rJu5aUyeQhYcvdcNm8cswyL51AY9i': '2024-05-20',
  '9t1H1uDJ558iMPNkEPSN1fqkpC4XSPQ6cqSf6uEsTfTR': '2024-05-21',
  '8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt': '2024-05-22',
  'FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo': '2024-05-23',
  '9ViX1VductEoC2wERTSp2TuDxXPwAf69aeET8ENPJpsN': '2024-05-24',
  '4qGs3cNRr48UWcCyDwJKr1EYCZXd1MGjco2qPr8YHKAm': '2024-05-25',
  'D4XW4v4W6VcDmzX5c6F5mxERdSL2I1veo7QyEaVjnK7g': '2024-05-26',
  '8WRYFLCrC6sL8L3oKc4v7qQyKErUyKQ8JvJqyf7qyKErU': '2024-05-27',
  '7GCihgDB8fe6KN1R7QJ4VQJ1B1RyPK6Ubamw5xWzLL7W': '2024-05-28',
  'HZRC4FNGtyvBaRgYVY6f7WIsWcf2pLjXbBfsBQFsmgXq': '2024-05-29',
  'GfJ3Vq2nUMRA4sneEMwJ3q84P6JNTc7xZ1qL7xTFX9U9': '2024-05-30',
  '4w2cysotX6czaUGmmWg13hDpY4QEMG2CzeKYEQyK9Ama': '2025-09-21',
  '9czr2MVyxgPCnDrbA7ywaqG3K1fgCkCQYbwSBKxnMJFS': '2025-09-24',
  '6GDrReNVfyjQDCuGMrKdG2JU7Uj8NCvBt2ukaL2mDj1L': '2025-09-24', 
  'EPVwQEJCnenVSNYECMA2955BGTqJk2ptXuggrvtiFFG2': '2025-09-24',
  '7ccKzmrXBpFHwyZGPqPuKL6bEyWAETSnHwnWe3jEneVc':'2025-09-30',
  '8oopi6gVFh4FA1mL5Jj35yRetfpmWiUDTfhCv31gkA3v':'2025-09-30',
  '5wNu5QhdpRGrL37ffcd6TMMqZugQgxwafgz477rShtHy':'2025-09-30',
  'UKSPrYDU4veB4cAfV9HkzNg9gNP1jsoch8oySMG9tcJ':'2025-09-30',
  'Q2sPHPdUWFMg7M7wwrQKLrn619cAucfRsmhVJffodSp':'2025-09-30',
};

// ---------- Theme handling ----------
const THEME_KEY = 'tikstake_theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  
  if (theme === 'dark') {
    btn.textContent = 'Light Mode';
  } else {
    btn.textContent = 'Dark Mode';
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
  
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
}

// ---------- Formatting helpers ----------
const fmtPrice = (n) => {
  if (n === null || n === undefined || isNaN(n)) return '-';
  if (n >= 1) return '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 0.0001) return '$' + n.toFixed(6);
  return '$' + n.toExponential(4);
};

const fmtChange = (n) => {
  if (n === null || n === undefined || isNaN(n)) return '-';
  const sign = n > 0 ? '+' : '';
  const className = n >= 0 ? 'change-positive' : 'change-negative';
  return `<span class="${className}">${sign}${n.toFixed(2)}%</span>`;
};

const fmtMoney = (n) => {
  if (n === null || n === undefined || isNaN(n)) return '-';
  if (n >= 1_000_000_000) return '$' + (n / 1_000_000_000).toFixed(2) + 'B';
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(2) + 'M';
  if (n >= 1_000) return '$' + (n / 1_000).toFixed(2) + 'K';
  return '$' + n.toFixed(0);
};

const shortenAddress = (addr) => (addr ? `${addr.slice(0, 6)}...${addr.slice(-6)}` : '-');

// ---------- Data state ----------
let popularListings = [];
let newListings = [];
let highRiskListings = [];
let lastUpdated = null;
let autoRefreshInterval = null;

// ---------- Dexscreener fetch with improved error handling ----------
async function fetchDexToken(pairId) {
  const url = `https://api.dexscreener.com/latest/dex/pairs/solana/${pairId}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Dexscreener fetch failed');
    const data = await res.json();
    const p = data?.pair;
    if (!p) throw new Error('Pair not found');

    return {
      pairId,
      addedDate: tokenAddedDates[pairId] || 'Unknown',
      name: p.baseToken?.name || 'Unknown',
      symbol: p.baseToken?.symbol || '',
      price: p.priceUsd ? parseFloat(p.priceUsd) : null,
      volume: p.volume?.h24 ? parseFloat(p.volume.h24) : 0,
      change: p.priceChange?.h24 ? parseFloat(p.priceChange.h24) : 0,
      tokenAddress: p.baseToken?.address,
      liquidityUsd: p.liquidity?.usd ? Number(p.liquidity.usd) : null,
      marketCap: p.marketCap != null ? Number(p.marketCap) : (p.fdv != null ? Number(p.fdv) : null)
    };
  } catch (error) {
    console.error('Error fetching token data:', error);
    return {
      pairId,
      addedDate: tokenAddedDates[pairId] || 'Unknown',
      name: 'Error',
      symbol: 'ERR',
      price: null,
      volume: 0,
      change: 0,
      tokenAddress: null,
      liquidityUsd: null,
      marketCap: null
    };
  }
}

// ---------- Rendering with improved filtering ----------
function renderTable(array, containerId, withSearchSort, isHighRisk = false) {
  const tbody = document.getElementById(containerId);
  if (!tbody) return;

  let rows = [...array];

  if (withSearchSort) {
    const searchId = isHighRisk ? 'highriskSearchInput' : 'searchInput';
    const sortId = isHighRisk ? 'highriskSortSelect' : 'sortSelect';
    const filterId = isHighRisk ? 'highriskFilterSelect' : 'filterSelect';
    
    const search = (document.getElementById(searchId)?.value || '').toLowerCase();
    const sort = document.getElementById(sortId)?.value || '';
    const filter = document.getElementById(filterId)?.value || '';

    // Filter by search
    rows = rows.filter(t =>
      t.name.toLowerCase().includes(search) || 
      t.symbol.toLowerCase().includes(search)
    );

    // Filter by gainers/losers
    if (filter === 'gainers') rows = rows.filter(t => t.change > 0);
    if (filter === 'losers') rows = rows.filter(t => t.change < 0);

    // Sort by selected option
    if (sort === 'price') rows.sort((a, b) => (b.price || 0) - (a.price || 0));
    if (sort === 'volume') rows.sort((a, b) => b.volume - a.volume);
    if (sort === 'change') rows.sort((a, b) => b.change - a.change);
    if (sort === 'liquidity') rows.sort((a, b) => (b.liquidityUsd || 0) - (a.liquidityUsd || 0));
    if (sort === 'marketCap') rows.sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));
  }

  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;">No tokens found</td></tr>';
    return;
  }

  tbody.innerHTML = rows.map(t => `
    <tr onclick="openChart('${t.pairId}')">
      <td>${t.name}</td>
      <td><strong>${t.symbol}</strong></td>
      <td class="price-cell">${fmtPrice(t.price)}</td>
      <td>$${(t.volume || 0).toLocaleString()}</td>
      <td>${fmtChange(t.change)}</td>
      <td>${t.liquidityUsd != null ? fmtMoney(t.liquidityUsd) : '-'}</td>
      <td>${t.marketCap != null ? fmtMoney(t.marketCap) : '-'}</td>
    </tr>
  `).join('');
}

// ---------- Interactions ----------
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
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 20px;
            background: ${theme === 'dark' ? '#0b1020' : '#f9f9f9'};
            color: ${theme === 'dark' ? '#e6e7ea' : '#222'};
          }
          .back-button {
            display: inline-block;
            margin-bottom: 20px;
            padding: 10px 16px;
            background: ${theme === 'dark' ? '#1f2937' : '#111827'};
            color: ${theme === 'dark' ? '#e6e7ea' : '#fff'};
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 20px;
          }
          .info-card {
            background: ${theme === 'dark' ? '#0f172a' : '#fff'};
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          iframe {
            border: 1px solid ${theme === 'dark' ? '#374151' : '#ddd'};
            border-radius: 8px;
            background: ${theme === 'dark' ? '#0b1020' : '#fff'};
          }
          .listed-date {
            margin-top: 10px;
            font-style: italic;
            color: ${theme === 'dark' ? '#9ca3af' : '#6b7280'};
          }
        </style>
      </head>
      <body>
        <a href="/" class="back-button">← Return to Dashboard</a>

        <h2>${t.name} (${t.symbol})</h2>
        
        <div class="info-grid">
          <div class="info-card">
            <strong>Price:</strong> ${fmtPrice(t.price)}
          </div>
          <div class="info-card">
            <strong>Liquidity:</strong> ${t.liquidityUsd != null ? '$' + t.liquidityUsd.toLocaleString() : '-'}
          </div>
          <div class="info-card">
            <strong>Market Cap:</strong> ${t.marketCap != null ? '$' + t.marketCap.toLocaleString() : '-'}
          </div>
          <div class="info-card">
            <strong>24h Change:</strong> ${fmtChange(t.change)}
          </div>
        </div>
        
        ${t.tokenAddress ? `
        <p><strong>Mint Address:</strong> 
          <a href="${solscanUrl}" target="_blank" style="color: #3b82f6;">
            ${shortenAddress(t.tokenAddress)}
          </a>
        </p>
        ` : ''}
        
        <p class="listed-date"><strong>Listed on this dashboard:</strong> ${t.addedDate}</p>
        
        <iframe src="${chartUrl}" width="100%" height="500"></iframe>
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

// ---------- Modal functionality ----------
function setupModal() {
  const modal = document.getElementById("tradeModal");
  const btn = document.getElementById("tradeBtn");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// ---------- Loading with improved state management ----------
async function loadPopularTokens() {
  const tbody = document.getElementById('popular-tokens');
  if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="loading">Loading popular tokens...</td></tr>';
  
  popularListings = [];
  for (const pid of popularPairs) {
    try {
      const t = await fetchDexToken(pid);
      popularListings.push(t);
    } catch (e) {
      console.warn('Failed to load popular pair:', pid, e);
    }
  }
  renderTable(popularListings, 'popular-tokens', false);
  updateLastUpdated();
}

async function loadNewTokens() {
  const tbody = document.getElementById('new-tokens');
  if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="loading">Loading new tokens...</td></tr>';
  
  newListings = [];
  for (const pid of newPairs) {
    try {
      const t = await fetchDexToken(pid);
      newListings.push(t);
    } catch (e) {
      console.warn('Failed to load new pair:', pid, e);
    }
  }
  renderTable(newListings, 'new-tokens', true);
  updateLastUpdated();
}

async function loadHighRiskTokens() {
  const tbody = document.getElementById('highrisk-tokens');
  if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="loading">Loading high risk tokens...</td></tr>';
  
  highRiskListings = [];
  for (const pid of highRiskPairs) {
    try {
      const t = await fetchDexToken(pid);
      highRiskListings.push(t);
    } catch (e) {
      console.warn('Failed to load high risk pair:', pid, e);
    }
  }
  renderTable(highRiskListings, 'highrisk-tokens', true, true);
  updateLastUpdated();
}

function updateLastUpdated() {
  lastUpdated = new Date();
  const elem = document.getElementById('lastUpdated');
  if (elem) {
    elem.textContent = lastUpdated.toLocaleTimeString();
  }
}

function refreshAll() {
  loadPopularTokens();
  loadNewTokens();
  loadHighRiskTokens();
}

// Connection status monitoring
function monitorConnection() {
  const statusElem = document.getElementById('connectionStatus');
  const dotElem = statusElem.querySelector('.status-dot');
  const textElem = statusElem.querySelector('span:last-child');
  
  function updateStatus(online) {
    if (online) {
      dotElem.className = 'status-dot online';
      textElem.textContent = 'Connected';
      statusElem.style.background = 'var(--card)';
    } else {
      dotElem.className = 'status-dot offline';
      textElem.textContent = 'Offline - Data may be outdated';
      statusElem.style.background = 'var(--change-negative)';
      statusElem.style.color = 'white';
    }
  }
  
  // Initial check
  updateStatus(navigator.onLine);
  
  // Listen for changes
  window.addEventListener('online', () => updateStatus(true));
  window.addEventListener('offline', () => updateStatus(false));
}

// Setup auto refresh
function setupAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
  }
  
  autoRefreshInterval = setInterval(() => {
    refreshAll();
  }, 120000); // 2 minutes
}

// ---------- Init ----------
function init() {
  initTheme();
  monitorConnection();
  setupModal();
  
  const search = document.getElementById('searchInput');
  const sort = document.getElementById('sortSelect');
  const filter = document.getElementById('filterSelect');
  const refreshBtn = document.getElementById('refreshBtn');
  
  const highriskSearch = document.getElementById('highriskSearchInput');
  const highriskSort = document.getElementById('highriskSortSelect');
  const highriskFilter = document.getElementById('highriskFilterSelect');
  
  if (search) search.addEventListener('input', () => renderTable(newListings, 'new-tokens', true));
  if (sort) sort.addEventListener('change', () => renderTable(newListings, 'new-tokens', true));
  if (filter) filter.addEventListener('change', () => renderTable(newListings, 'new-tokens', true));
  
  if (highriskSearch) highriskSearch.addEventListener('input', () => renderTable(highRiskListings, 'highrisk-tokens', true, true));
  if (highriskSort) highriskSort.addEventListener('change', () => renderTable(highRiskListings, 'highrisk-tokens', true, true));
  if (highriskFilter) highriskFilter.addEventListener('change', () => renderTable(highRiskListings, 'highrisk-tokens', true, true));
  
  if (refreshBtn) refreshBtn.addEventListener('click', refreshAll);
  
  // Add sort handlers to table headers
  document.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const sortBy = th.getAttribute('data-sort');
      const tableSection = th.closest('.section');
      
      if (tableSection.querySelector('#highrisk-tokens')) {
        document.getElementById('highriskSortSelect').value = sortBy;
        renderTable(highRiskListings, 'highrisk-tokens', true, true);
      } else if (tableSection.querySelector('#new-tokens')) {
        document.getElementById('sortSelect').value = sortBy;
        renderTable(newListings, 'new-tokens', true);
      } else if (tableSection.querySelector('#popular-tokens')) {
        // For popular tokens table, we don't have sort select, so we'll sort directly
        popularListings.sort((a, b) => {
          if (sortBy === 'price') return (b.price || 0) - (a.price || 0);
          if (sortBy === 'volume') return b.volume - a.volume;
          if (sortBy === 'change') return b.change - a.change;
          if (sortBy === 'liquidity') return (b.liquidityUsd || 0) - (a.liquidityUsd || 0);
          if (sortBy === 'marketCap') return (b.marketCap || 0) - (a.marketCap || 0);
          if (sortBy === 'name') return a.name.localeCompare(b.name);
          if (sortBy === 'symbol') return a.symbol.localeCompare(b.symbol);
          return 0;
        });
        renderTable(popularListings, 'popular-tokens', false);
      }
    });
  });
  
  refreshAll();
  setupAutoRefresh();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

// Expose for inline handler
window.openChart = openChart;


//my stuff

[file name]: script.js
[file content begin]
// ---------- Config: curated lists ----------
const popularPairs = [
  'GH8Ers4yzKR3UKDvgVu8cqJfGzU4cU62mTeg9bcJ7ug6', // $michi
  '3ne4mWqdYuNiYrYZC9TrA3FcfuFdErghH97vNPbjicr1', // 
  'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx',  // Example
  'YrrUStgPugDp8BbfosqDeFssen6sA75ZS1QJvgnHtmY',
  'FAqh648xeeaTqL7du49sztp9nfj5PjRQrfvaMccyd9cz',
  '4AZRPNEfCJ7iw28rJu5aUyeQhYcvdcNm8cswyL51AY9i',
  '9t1H1uDJ558iMPNkEPSN1fqkpC4XSPQ6cqSf6uEsTfTR',
  '8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt',
  'FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo',
  '9ViX1VductEoC2wERTSp2TuDxXPwAf69aeET8ENPJpsN'
];

const newPairs = [
  '4qGs3cNRr48UWcCyDwJKr1EYCZXd1MGjco2qPr8YHKAm',
  'D4XW4v4W6VcDmzX5c6F5mxERdSL2I1veo7QyEaVjnK7g', // Example
  '8WRYFLCrC6sL8L3oKc4v7qQyKErUyKQ8JvJqyf7qyKErU'  // Example
];

const highRiskPairs = [
  '9czr2MVyxgPCnDrbA7ywaqG3K1fgCkCQYbwSBKxnMJFS', // Example high risk token
  'KSeAucEoqTBB4ttakHYE1encbxjn2u9zUa9ursDLe1E', // Example high risk token
  
  '6HfaJiUuTXFZEfmdkQSNbvfe6i95Nh2wUVJ5dWMf7gtw',
  'q4oggBDyBgQrCR8XbpjxULzehaTUokLYTZMnnJfVC6e',
];

// Added dates for each token
const tokenAddedDates = {
 
 '6HfaJiUuTXFZEfmdkQSNbvfe6i95Nh2wUVJ5dWMf7gtw':'2025-09-20',
  'q4oggBDyBgQrCR8XbpjxULzehaTUokLYTZMnnJfVC6e': '2025-09-20',
   'GH8Ers4yzKR3UKDvgVu8cqJfGzU4cU62mTeg9bcJ7ug6': '2024-05-15',
  '3ne4mWqdYuNiYrYZC9TrA3FcfuFdErghH97vNPbjicr1': '2024-05-16',
  'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx': '2024-05-17',
  'YrrUStgPugDp8BbfosqDeFssen6sA75ZS1QJvgnHtmY': '2024-05-18',
  'FAqh648xeeaTqL7du49sztp9nfj5PjRQrfvaMccyd9cz': '2024-05-19',
  '4AZRPNEfCJ7iw28rJu5aUyeQhYcvdcNm8cswyL51AY9i': '2024-05-20',
  '9t1H1uDJ558iMPNkEPSN1fqkpC4XSPQ6cqSf6uEsTfTR': '2024-05-21',
  '8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt': '2024-05-22',
  'FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo': '2024-05-23',
  '9ViX1VductEoC2wERTSp2TuDxXPwAf69aeET8ENPJpsN': '2024-05-24',
  '4qGs3cNRr48UWcCyDwJKr1EYCZXd1MGjco2qPr8YHKAm': '2024-05-25',
  'D4XW4v4W6VcDmzX5c6F5mxERdSL2I1veo7QyEaVjnK7g': '2024-05-26',
  '8WRYFLCrC6sL8L3oKc4v7qQyKErUyKQ8JvJqyf7qyKErU': '2024-05-27',
  '7GCihgDB8fe6KN1R7QJ4VQJ1B1RyPK6Ubamw5xWzLL7W': '2024-05-28',
  'HZRC4FNGtyvBaRgYVY6f7WIsWcf2pLjXbBfsBQFsmgXq': '2024-05-29',
  'GfJ3Vq2nUMRA4sneEMwJ3q84P6JNTc7xZ1qL7xTFX9U9': '2024-05-30'
};

// ---------- Theme handling ----------
const THEME_KEY = 'tikstake_theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  
  if (theme === 'dark') {
    btn.textContent = 'Light Mode';
  } else {
    btn.textContent = 'Dark Mode';
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
  
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
}

// ---------- Formatting helpers ----------
const fmtPrice = (n) => {
  if (n === null || n === undefined || isNaN(n)) return '-';
  if (n >= 1) return '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 0.0001) return '$' + n.toFixed(6);
  return '$' + n.toExponential(4);
};

const fmtChange = (n) => {
  if (n === null || n === undefined || isNaN(n)) return '-';
  const sign = n > 0 ? '+' : '';
  const className = n >= 0 ? 'change-positive' : 'change-negative';
  return `<span class="${className}">${sign}${n.toFixed(2)}%</span>`;
};

const fmtMoney = (n) => {
  if (n === null || n === undefined || isNaN(n)) return '-';
  if (n >= 1_000_000_000) return '$' + (n / 1_000_000_000).toFixed(2) + 'B';
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(2) + 'M';
  if (n >= 1_000) return '$' + (n / 1_000).toFixed(2) + 'K';
  return '$' + n.toFixed(0);
};

const shortenAddress = (addr) => (addr ? `${addr.slice(0, 6)}...${addr.slice(-6)}` : '-');

// ---------- Data state ----------
let popularListings = [];
let newListings = [];
let highRiskListings = [];
let lastUpdated = null;
let autoRefreshInterval = null;

// ---------- Dexscreener fetch with improved error handling ----------
async function fetchDexToken(pairId) {
  const url = `https://api.dexscreener.com/latest/dex/pairs/solana/${pairId}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Dexscreener fetch failed');
    const data = await res.json();
    const p = data?.pair;
    if (!p) throw new Error('Pair not found');

    return {
      pairId,
      addedDate: tokenAddedDates[pairId] || 'Unknown',
      name: p.baseToken?.name || 'Unknown',
      symbol: p.baseToken?.symbol || '',
      price: p.priceUsd ? parseFloat(p.priceUsd) : null,
      volume: p.volume?.h24 ? parseFloat(p.volume.h24) : 0,
      change: p.priceChange?.h24 ? parseFloat(p.priceChange.h24) : 0,
      tokenAddress: p.baseToken?.address,
      liquidityUsd: p.liquidity?.usd ? Number(p.liquidity.usd) : null,
      marketCap: p.marketCap != null ? Number(p.marketCap) : (p.fdv != null ? Number(p.fdv) : null)
    };
  } catch (error) {
    console.error('Error fetching token data:', error);
    return {
      pairId,
      addedDate: tokenAddedDates[pairId] || 'Unknown',
      name: 'Error',
      symbol: 'ERR',
      price: null,
      volume: 0,
      change: 0,
      tokenAddress: null,
      liquidityUsd: null,
      marketCap: null
    };
  }
}

// ---------- Rendering with improved filtering ----------
function renderTable(array, containerId, withSearchSort, isHighRisk = false) {
  const tbody = document.getElementById(containerId);
  if (!tbody) return;

  let rows = [...array];

  if (withSearchSort) {
    const searchId = isHighRisk ? 'highriskSearchInput' : 'searchInput';
    const sortId = isHighRisk ? 'highriskSortSelect' : 'sortSelect';
    const filterId = isHighRisk ? 'highriskFilterSelect' : 'filterSelect';
    
    const search = (document.getElementById(searchId)?.value || '').toLowerCase();
    const sort = document.getElementById(sortId)?.value || '';
    const filter = document.getElementById(filterId)?.value || '';

    // Filter by search
    rows = rows.filter(t =>
      t.name.toLowerCase().includes(search) || 
      t.symbol.toLowerCase().includes(search)
    );

    // Filter by gainers/losers
    if (filter === 'gainers') rows = rows.filter(t => t.change > 0);
    if (filter === 'losers') rows = rows.filter(t => t.change < 0);

    // Sort by selected option
    if (sort === 'price') rows.sort((a, b) => (b.price || 0) - (a.price || 0));
    if (sort === 'volume') rows.sort((a, b) => b.volume - a.volume);
    if (sort === 'change') rows.sort((a, b) => b.change - a.change);
    if (sort === 'liquidity') rows.sort((a, b) => (b.liquidityUsd || 0) - (a.liquidityUsd || 0));
    if (sort === 'marketCap') rows.sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));
  }

  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;">No tokens found</td></tr>';
    return;
  }

  tbody.innerHTML = rows.map(t => `
    <tr onclick="openChart('${t.pairId}')">
      <td>${t.name}</td>
      <td><strong>${t.symbol}</strong></td>
      <td class="price-cell">${fmtPrice(t.price)}</td>
      <td>$${(t.volume || 0).toLocaleString()}</td>
      <td>${fmtChange(t.change)}</td>
      <td>${t.liquidityUsd != null ? fmtMoney(t.liquidityUsd) : '-'}</td>
      <td>${t.marketCap != null ? fmtMoney(t.marketCap) : '-'}</td>
    </tr>
  `).join('');
}

// ---------- Interactions ----------
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
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 20px;
            background: ${theme === 'dark' ? '#0b1020' : '#f9f9f9'};
            color: ${theme === 'dark' ? '#e6e7ea' : '#222'};
          }
          .back-button {
            display: inline-block;
            margin-bottom: 20px;
            padding: 10px 16px;
            background: ${theme === 'dark' ? '#1f2937' : '#111827'};
            color: ${theme === 'dark' ? '#e6e7ea' : '#fff'};
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 20px;
          }
          .info-card {
            background: ${theme === 'dark' ? '#0f172a' : '#fff'};
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          iframe {
            border: 1px solid ${theme === 'dark' ? '#374151' : '#ddd'};
            border-radius: 8px;
            background: ${theme === 'dark' ? '#0b1020' : '#fff'};
          }
          .listed-date {
            margin-top: 10px;
            font-style: italic;
            color: ${theme === 'dark' ? '#9ca3af' : '#6b7280'};
          }
        </style>
      </head>
      <body>
        <a href="/" class="back-button">← Return to Dashboard</a>

        <h2>${t.name} (${t.symbol})</h2>
        
        <div class="info-grid">
          <div class="info-card">
            <strong>Price:</strong> ${fmtPrice(t.price)}
          </div>
          <div class="info-card">
            <strong>Liquidity:</strong> ${t.liquidityUsd != null ? '$' + t.liquidityUsd.toLocaleString() : '-'}
          </div>
          <div class="info-card">
            <strong>Market Cap:</strong> ${t.marketCap != null ? '$' + t.marketCap.toLocaleString() : '-'}
          </div>
          <div class="info-card">
            <strong>24h Change:</strong> ${fmtChange(t.change)}
          </div>
        </div>
        
        ${t.tokenAddress ? `
        <p><strong>Mint Address:</strong> 
          <a href="${solscanUrl}" target="_blank" style="color: #3b82f6;">
            ${shortenAddress(t.tokenAddress)}
          </a>
        </p>
        ` : ''}
        
        <p class="listed-date"><strong>Listed on this dashboard:</strong> ${t.addedDate}</p>
        
        <iframe src="${chartUrl}" width="100%" height="500"></iframe>
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

// ---------- Modal functionality ----------
function setupModal() {
  const modal = document.getElementById("tradeModal");
  const btn = document.getElementById("tradeBtn");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// ---------- Loading with improved state management ----------
async function loadPopularTokens() {
  const tbody = document.getElementById('popular-tokens');
  if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="loading">Loading popular tokens...</td></tr>';
  
  popularListings = [];
  for (const pid of popularPairs) {
    try {
      const t = await fetchDexToken(pid);
      popularListings.push(t);
    } catch (e) {
      console.warn('Failed to load popular pair:', pid, e);
    }
  }
  renderTable(popularListings, 'popular-tokens', false);
  updateLastUpdated();
}

async function loadNewTokens() {
  const tbody = document.getElementById('new-tokens');
  if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="loading">Loading new tokens...</td></tr>';
  
  newListings = [];
  for (const pid of newPairs) {
    try {
      const t = await fetchDexToken(pid);
      newListings.push(t);
    } catch (e) {
      console.warn('Failed to load new pair:', pid, e);
    }
  }
  renderTable(newListings, 'new-tokens', true);
  updateLastUpdated();
}

async function loadHighRiskTokens() {
  const tbody = document.getElementById('highrisk-tokens');
  if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="loading">Loading high risk tokens...</td></tr>';
  
  highRiskListings = [];
  for (const pid of highRiskPairs) {
    try {
      const t = await fetchDexToken(pid);
      highRiskListings.push(t);
    } catch (e) {
      console.warn('Failed to load high risk pair:', pid, e);
    }
  }
  renderTable(highRiskListings, 'highrisk-tokens', true, true);
  updateLastUpdated();
}

function updateLastUpdated() {
  lastUpdated = new Date();
  const elem = document.getElementById('lastUpdated');
  if (elem) {
    elem.textContent = lastUpdated.toLocaleTimeString();
  }
}

function refreshAll() {
  loadPopularTokens();
  loadNewTokens();
  loadHighRiskTokens();
}

// Connection status monitoring
function monitorConnection() {
  const statusElem = document.getElementById('connectionStatus');
  const dotElem = statusElem.querySelector('.status-dot');
  const textElem = document.getElementById('statusText');
  
  function updateStatus(online) {
    if (online) {
      dotElem.className = 'status-dot online';
      statusElem.style.background = 'var(--card)';
    } else {
      dotElem.className = 'status-dot offline';
      textElem.textContent = 'Offline - Data may be outdated';
      statusElem.style.background = 'var(--change-negative)';
      statusElem.style.color = 'white';
    }
  }
  
  // Initial check
  updateStatus(navigator.onLine);
  
  // Listen for changes
  window.addEventListener('online', () => updateStatus(true));
  window.addEventListener('offline', () => updateStatus(false));
}

// Setup auto refresh
function setupAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
  }
  
  autoRefreshInterval = setInterval(() => {
    refreshAll();
  }, 120000); // 2 minutes
}

// ---------- Init ----------
function init() {
  initTheme();
  monitorConnection();
  setupModal();
  
  const search = document.getElementById('searchInput');
  const sort = document.getElementById('sortSelect');
  const filter = document.getElementById('filterSelect');
  const refreshBtn = document.getElementById('refreshBtn');
  
  const highriskSearch = document.getElementById('highriskSearchInput');
  const highriskSort = document.getElementById('highriskSortSelect');
  const highriskFilter = document.getElementById('highriskFilterSelect');
  
  if (search) search.addEventListener('input', () => renderTable(newListings, 'new-tokens', true));
  if (sort) sort.addEventListener('change', () => renderTable(newListings, 'new-tokens', true));
  if (filter) filter.addEventListener('change', () => renderTable(newListings, 'new-tokens', true));
  
  if (highriskSearch) highriskSearch.addEventListener('input', () => renderTable(highRiskListings, 'highrisk-tokens', true, true));
  if (highriskSort) highriskSort.addEventListener('change', () => renderTable(highRiskListings, 'highrisk-tokens', true, true));
  if (highriskFilter) highriskFilter.addEventListener('change', () => renderTable(highRiskListings, 'highrisk-tokens', true, true));
  
  if (refreshBtn) refreshBtn.addEventListener('click', refreshAll);
  
  // Add sort handlers to table headers
  document.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const sortBy = th.getAttribute('data-sort');
      const tableSection = th.closest('.section');
      
      if (tableSection.querySelector('#highrisk-tokens')) {
        document.getElementById('highriskSortSelect').value = sortBy;
        renderTable(highRiskListings, 'highrisk-tokens', true, true);
      } else if (tableSection.querySelector('#new-tokens')) {
        document.getElementById('sortSelect').value = sortBy;
        renderTable(newListings, 'new-tokens', true);
      } else if (tableSection.querySelector('#popular-tokens')) {
        // For popular tokens table, we don't have sort select, so we'll sort directly
        popularListings.sort((a, b) => {
          if (sortBy === 'price') return (b.price || 0) - (a.price || 0);
          if (sortBy === 'volume') return b.volume - a.volume;
          if (sortBy === 'change') return b.change - a.change;
          if (sortBy === 'liquidity') return (b.liquidityUsd || 0) - (a.liquidityUsd || 0);
          if (sortBy === 'marketCap') return (b.marketCap || 0) - (a.marketCap || 0);
          if (sortBy === 'name') return a.name.localeCompare(b.name);
          if (sortBy === 'symbol') return a.symbol.localeCompare(b.symbol);
          return 0;
        });
        renderTable(popularListings, 'popular-tokens', false);
      }
    });
  });
  
  refreshAll();
  setupAutoRefresh();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

// Expose for inline handler
window.openChart = openChart;
[file content end]
