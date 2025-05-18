const loader = document.getElementById('loader');
const userList = document.getElementById('user-list');

function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch('data.json')
        .then(res => res.json())
        .then(data => resolve(data));
    }, 3000); // 3 sekund loading
  });
}

function renderUsers(users) {
  loader.style.display = 'none';
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-card';
    userDiv.innerHTML = `
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Job:</strong> ${user.job}</p>
      <p><strong>Salary:</strong> ${user.salary}</p>
      <div class="actions">
        <button onclick="editUser(${user.id}, this)">Edit</button>
        <button onclick="deleteUser(${user.id}, this)">Delete</button>
      </div>
    `;

    userDiv.onclick = () => {
      location.href = `user.html?id=${user.id}`;

      user.id.stopPropagation()
    };
    userList.appendChild(userDiv);
  });
}

function deleteUser(id, btn) {
  btn.innerText = 'Deleting...';
  setTimeout(() => {
    btn.closest('.user-card').remove();
  }, 2000);
}

function editUser(id, btn) {
  btn.innerText = 'Editing...';
  setTimeout(() => {
    alert(`Edit mode for user ID ${id}`);
    btn.innerText = 'Edit';
  }, 2000);
} 

fetchUsers().then(renderUsers);




function renderUsers(users) {
  loader.style.display = 'none';
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-card';
    userDiv.innerHTML = `
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Job:</strong> ${user.job}</p>
      <p><strong>Salary:</strong> ${user.salary}</p>
      <div class="actions">
        <button onclick="editUser(${user.id}, this); event.stopPropagation();">Edit</button>
        <button onclick="deleteUser(${user.id}, this); event.stopPropagation();">Delete</button>
      </div>
    `;

    userDiv.addEventListener('click', () => {
      location.href = `user.html?id=${user.id}`;
    });

    userList.appendChild(userDiv);
  });
}
