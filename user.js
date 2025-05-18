// const params = new URLSearchParams(window.location.search);
// const userId = params.get('id');
// const loader = document.getElementById('loader');
// const detail = document.getElementById('user-detail');
// // =====================


// //======== 

// function fetchUser(id) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       fetch('data.json')
//         .then(res => res.json())
//         .then(users => {
//           const user = users.find(u => u.id == id);
//           resolve(user);
//         });
//     }, 2000); // 2 sekund loading
//   });
// }

// function showUser(user) {
//   loader.style.display = 'none';
//   detail.innerHTML = `
//     <h2>${user.name}</h2>
//     <p><strong>ID:</strong> ${user.id}</p>
//     <p><strong>Job:</strong> ${user.job}</p>
//     <p><strong>Salary:</strong> ${user.salary}</p>
//   `;
// }

// fetchUser(userId).then(showUser);







// ==========================


const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

const loader = document.getElementById('loader-user');
const detail = document.getElementById('user-detail');

// Skeleton elementlarini olish
const skeletons = document.querySelectorAll('.skeleton-line');

function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      fetch('data.json')
        .then(res => res.json())
        .then(users => {
          const user = users.find(u => u.id == id);
          resolve(user);
        });
    }, 2000);
  });
}

function showUser(user) {
  // Skeleton va loaderni yashirish
  loader.style.display = 'none';
  skeletons.forEach(s => s.style.display = 'none');

  // Haqiqiy ma'lumotlarni ko'rsatish
  detail.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>ID:</strong> ${user.id}</p>
    <p><strong>Job:</strong> ${user.job}</p>
    <p><strong>Salary:</strong> ${user.salary}</p>
  `;
}

fetchUser(userId).then(showUser);
