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

  function fetchGitHubStats(user) {
    const repoReq = fetch(`https://api.github.com/users/${user}`).then(r => r.json()).catch(() => ({}));
    const contribReq = fetch(`https://github-contributions-api.jogruber.de/v4/${user}`).then(r => r.json()).catch(() => ({}));

    Promise.all([repoReq, contribReq]).then(([u, c]) => {
      const repoCount = u.public_repos || 0;
      let contributions = 0;
      let commitCount = 0;
      let prCount = 0;
      let issueCount = 0;
      let longestStreak = 0;

      if (c.years && c.years.length) {
        const latest = c.years[c.years.length - 1];
        contributions = latest.total || 0;
        longestStreak = latest.longestStreak || 0;
        if (latest.contributions) {
          commitCount = latest.contributions.commitContributions || 0;
          prCount = latest.contributions.pullRequestContributions || 0;
          issueCount = latest.contributions.issueContributions || 0;
        }
      }

      const chartEl = document.getElementById('github-stats-chart');
      if (chartEl) {
        new Chart(chartEl, {
          type: 'bar',
          data: {
            labels: ['Repos', 'Contributions'],
            datasets: [{
              data: [repoCount, contributions],
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
      setText('totalPRs', prCount);
      setText('totalIssues', issueCount);
      setText('totalContributions', contributions);
      setText('longestStreak', longestStreak);
    });
  }

  fetchGitHubStats('learneradarsh');

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
