const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('taskName').value.trim();
  const deadline = document.getElementById('taskDeadline').value;
  const assigned = document.getElementById('assignedTo').value.trim();

  const nameError = document.getElementById('taskNameError');
  const deadlineError = document.getElementById('taskDeadlineError');
  const assignedError = document.getElementById('assignedToError');

  // Reset errors
  nameError.classList.add('hidden');
  deadlineError.classList.add('hidden');
  assignedError.classList.add('hidden');

  let isValid = true;
  const today = new Date().toISOString().split('T')[0];

  if (!name) {
    nameError.classList.remove('hidden');
    isValid = false;
  }

  if (!deadline || deadline < today) {
    deadlineError.classList.remove('hidden');
    isValid = false;
  }

  if (!assigned) {
    assignedError.classList.remove('hidden');
    isValid = false;
  }

  if (!isValid) return;

  const li = document.createElement('li');
  li.className = 'p-3 bg-gray-50 border rounded flex justify-between items-center';
  li.innerHTML = `
    <div>
      <strong>${name}</strong><br/>
      <span class="text-sm text-gray-600">Due: ${deadline} | Assigned to: ${assigned}</span>
    </div>
    <button class="text-red-500 hover:text-red-700" onclick="this.parentElement.remove()">✖</button>
  `;
  taskList.appendChild(li);

  taskForm.reset();
  alert('Task added successfully!');
});
