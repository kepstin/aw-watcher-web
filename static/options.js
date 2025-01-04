"use strict";

async function saveOptions(e) {
  e.preventDefault();
  await chrome.storage.local.set({
    hostname: document.querySelector('#hostname').value
  });
}

async function restoreOptions() {
  chrome.storage.local.get('hostname', function(res) {
    document.querySelector('#hostname').value = res.hostname || '';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
