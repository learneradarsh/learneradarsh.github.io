const chatData = [
  { keywords: ['hi', 'hello'], text: 'Hey there!' },
  { keywords: ['name'], text: "I'm Adarsh Pandey, a full stack developer." },
  { keywords: ['skills'], text: 'I work with JavaScript, TypeScript, React, Angular and more.' },
  { keywords: ['experience', 'work'], text: 'Currently Senior Developer 1 at Delta Airlines. Previously at Publicis Sapient and ThoughtWorks.' },
  { keywords: ['hobbies', 'interests'], text: 'I enjoy traveling and playing squash when not coding.' }
];

function getResponse(message) {
  const msg = message.toLowerCase();
  for (const item of chatData) {
    if (item.keywords.some(k => msg.includes(k))) {
      return item.text;
    }
  }
  return "I'm not sure how to respond to that.";
}

function addMessage(sender, text) {
  const container = document.getElementById('chat-messages');
  const el = document.createElement('div');
  el.className = 'message ' + sender;
  el.textContent = text;
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}

document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;
  addMessage('user', message);
  input.value = '';
  setTimeout(() => {
    const reply = getResponse(message);
    addMessage('bot', reply);
  }, 400);
});

const toggle = document.getElementById('chat-toggle');
const box = document.getElementById('chatbot');
toggle.addEventListener('click', function() {
  box.classList.toggle('open');
});
