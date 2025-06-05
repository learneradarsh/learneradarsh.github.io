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

  function fetchGitHubStats(user) {
    if (!document.getElementById('repo-count')) return;
    fetch(`https://api.github.com/users/${user}`)
      .then(r => r.json())
      .then(d => {
        document.getElementById('repo-count').textContent = d.public_repos;
      })
      .catch(() => {});

    fetch(`https://github-contributions-api.jogruber.de/v4/${user}`)
      .then(r => r.json())
      .then(d => {
        if (d.years && d.years.length) {
          const latest = d.years[d.years.length - 1];
          document.getElementById('contrib-count').textContent = latest.total;
        }
      })
      .catch(() => {});
  }

  function fetchLeetCodeStats(user) {
    fetch(`https://leetcode-stats-api.herokuapp.com/${user}`)
      .then(r => r.json())
      .then(d => {
        const solved = document.getElementById('leetcode-solved');
        if (solved) solved.textContent = d.totalSolved;
        const solved2 = document.getElementById('leetcode-solved-2');
        if (solved2) solved2.textContent = d.totalSolved;
        const rank = document.getElementById('leetcode-rank');
        if (rank) rank.textContent = d.ranking;
        const rank2 = document.getElementById('leetcode-rank-2');
        if (rank2) rank2.textContent = d.ranking;
      })
      .catch(() => {});
  }

  onVisible(radarEl, buildRadar);
  onVisible(barEl, buildBar);
  onVisible(codeRatioEl, buildCodeRatio);

  fetchGitHubStats('learneradarsh');
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
