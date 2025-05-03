document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('introForm');
    const resultContainer = document.getElementById('resultContainer');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      // Gather all values
      const data = new FormData(form);
      const name         = data.get('name');
      const mascot       = data.get('mascot');
      const fileInput    = form.querySelector('input[name="image"]');
      const imageFile    = fileInput.files[0];
      const caption      = data.get('caption');
      const personal     = data.get('personal');
      const professional = data.get('professional');
      const academic     = data.get('academic');
      const webdev       = data.get('webdev');
      const platform     = data.get('platform');
      const funny        = data.get('funny');
      const other        = data.get('other');
  
      
      const courseInputs = [...document.querySelectorAll('#courses input[name="course"]')];
      const courses = courseInputs.map(i => i.value.trim()).filter(v => v);
  
      
      let html = '';
  
      // Basic info
      html += '<ul>';
      html += `<li><strong>Name:</strong> ${name}</li>`;
      html += `<li><strong>Mascot:</strong> ${mascot}</li>`;
      html += '</ul>';
  
      
      if (imageFile) {
        const imgURL = URL.createObjectURL(imageFile);
        html += `
          <figure>
            <img src="${imgURL}" alt="${caption}" />
            <figcaption>${caption}</figcaption>
          </figure>
        `;
      }
  
      html += '<ul>';
      html += `<li><strong>Personal Background:</strong> ${personal}</li>`;
      html += `<li><strong>Professional Background:</strong> ${professional}</li>`;
      html += `<li><strong>Academic Background:</strong> ${academic}</li>`;
      html += `<li><strong>Background in Web Development:</strong> ${webdev}</li>`;
      html += `<li><strong>Primary Computer Platform:</strong> ${platform}</li>`;
  
      if (courses.length) {
        html += '<li><strong>Courses Currently Taking:</strong><ul>';
        courses.forEach(c => {
          html += `<li>${c}</li>`;
        });
        html += '</ul></li>';
      }
  
      if (funny) html += `<li><strong>Funny Thing:</strong> ${funny}</li>`;
      if (other) html += `<li><strong>Anything Else:</strong> ${other}</li>`;
      html += '</ul>';
  
      resultContainer.innerHTML = html;
      form.style.display = 'none';
    });
  });
  