async function insertDoc() {
  try {
    const res = await fetch('/insert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: document.getElementById('insertInput').value
    });
    document.getElementById('results').textContent = JSON.stringify(await res.json());
  } 
  catch (err) {
    document.getElementById('results').textContent = 'Error Occured While Inserting Data ' + err.message;
  }
}

async function searchDocs() {
  try {
    const res = await fetch('/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: document.getElementById('searchInput').value
    });
    document.getElementById('results').textContent = JSON.stringify(await res.json());
  } 
  catch (err) {
    document.getElementById('results').textContent = 'Error occured while searching data: ' + err.message;
  }
}