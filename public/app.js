async function insertDoc() {
  const val = document.getElementById('insertInput').value;
  try {
    JSON.parse(val);
  } catch (err) {
    document.getElementById('results').textContent = 'Error: ' + err.message;
    return;
  }
  const res = await fetch('/insert?doc=' + encodeURIComponent(val));
  document.getElementById('results').textContent = JSON.stringify(await res.json(), null, 2);
}

async function searchDocs() {
  const val = document.getElementById('searchInput').value;
  try {
    JSON.parse(val);
  } catch (err) {
    document.getElementById('results').textContent = 'Error: ' + err.message;
    return;
  }
  const res = await fetch('/search?doc=' + encodeURIComponent(val));
  document.getElementById('results').textContent = JSON.stringify(await res.json(), null, 2);
}