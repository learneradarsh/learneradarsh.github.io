(function() {
  const radarEl = document.getElementById('skillRadar');
  const barEl = document.getElementById('experienceBar');

  function buildRadar() {
    if (!radarEl) return;
    const data = JSON.parse(radarEl.dataset.skills);
    const labels = data.map(s => s.item);
    const values = data.map(s => s.level);
    new Chart(radarEl, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Proficiency',
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        animation: {
          duration: 1000
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }

  function buildBar() {
    if (!barEl) return;
    const data = JSON.parse(barEl.dataset.skills);
    const labels = data.map(s => s.item);
    const values = data.map(s => s.years);
    new Chart(barEl, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Years of Experience',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          duration: 1000
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  function onVisible(el, callback) {
    if (!el) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    });
    observer.observe(el);
  }

  onVisible(radarEl, buildRadar);
  onVisible(barEl, buildBar);

  // GitHub heatmap
  if (document.getElementById('github-heatmap')) {
    GitHubCalendar('#github-heatmap', 'learneradarsh');
  }

  // timeline interaction
  document.querySelectorAll('.timeline__node').forEach(node => {
    node.addEventListener('click', () => {
      node.parentElement.classList.toggle('active');
    });
  });
})();
