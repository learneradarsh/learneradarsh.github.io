(function() {
  const radarEl = document.getElementById('skillRadar');
  const barEl = document.getElementById('experienceBar');
  const codeRatioEl = document.getElementById('codeRatioChart');

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

  function buildCodeRatio() {
    if (!codeRatioEl) return;
    const data = JSON.parse(codeRatioEl.dataset.ratio);
    const labels = data.map(d => d.language);
    const values = data.map(d => d.percent);
    new Chart(codeRatioEl, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ]
        }]
      },
      options: {
        animation: { duration: 1000 },
        plugins: { legend: { position: 'bottom' } }
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

  function fetchGitHubStats() {
    const contributions = 120;
    const commitCount = 2181;
    const issueCount = 24;
    const starCount = 14;

    const chartEl = document.getElementById('github-stats-chart');
    if (chartEl) {
      new Chart(chartEl, {
        type: 'bar',
        data: {
          labels: ['Stars', 'Contributions'],
          datasets: [{
            data: [starCount, contributions],
            backgroundColor: ['rgba(54,162,235,0.6)', 'rgba(255,99,132,0.6)']
          }]
        },
        options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
      });
    }

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText('totalCommits', commitCount);
    setText('totalIssues', issueCount);
    setText('totalContributions', contributions);
    setText('totalStars', starCount);
  }

  function fetchLeetCodeStats(user) {
    fetch(`https://leetcode-stats-api.herokuapp.com/${user}`)
      .then(r => r.json())
      .then(d => {
        const solved = d.totalSolved || 0;
        const chartEl = document.getElementById('leetcode-stats-chart');
        if (chartEl) {
          new Chart(chartEl, {
            type: 'bar',
            data: {
              labels: ['Solved'],
              datasets: [{
                data: [solved],
                backgroundColor: 'rgba(75,192,192,0.6)'
              }]
            },
            options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
          });
        }
      })
      .catch(() => {});
  }

  onVisible(radarEl, buildRadar);
  onVisible(barEl, buildBar);
  onVisible(codeRatioEl, buildCodeRatio);

  fetchGitHubStats();
  fetchLeetCodeStats('learneradarsh');

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

  document.querySelectorAll('.project[data-repo]').forEach(project => {
    project.addEventListener('click', () => {
      const repo = project.dataset.repo;
      fetch(`https://api.github.com/repos/${repo}`)
        .then(r => r.json())
        .then(d => {
          alert(`${repo}\nStars: ${d.stargazers_count}\nForks: ${d.forks_count}`);
        })
        .catch(() => {});
    });
  });
})();
