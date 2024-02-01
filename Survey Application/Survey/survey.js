function saveData() {
    const surveyData = {
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      initials: document.getElementById('initials').value,
      dob: document.getElementById('dob').value,     
      gender: document.getElementById('gender').value,
      race: document.getElementById('race').value,
      address: document.getElementById('address').value,
      married: document.getElementById('married').value,
      secret: document.getElementById('secret').value,
      crush: document.getElementById('crush').value,
      dream: document.getElementById('dream').value,
      fear: document.getElementById('fear').value,
      politics: document.getElementById('politics').value,
    };

    // Store data in LocalStorage
    localStorage.setItem('surveyData', JSON.stringify(surveyData));

    // Optionally, you can redirect to another page or display a success message
    alert('Survey submitted successfully!');
  }