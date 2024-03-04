function showDashboard() {
    window.location.href='index.html';
}

function showUserList() {
    
    
    document.getElementById('emp').innerHTML = `
       
        <input type="text" id="searchInput" placeholder="Search by name">
        <button onclick="searchByName()">Search</button>
        <div id="userList"></div>
    `;
    document.getElementById('saa').innerHTML='';
}

function searchByName() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const userList = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' }
        // Add more users as needed
    ];

    const filteredUser = userList.find(user => user.name.toLowerCase() === searchInput);

    if (filteredUser) {
        document.getElementById('userList').innerHTML = `
            <div>
                <h3>User Details</h3>
                <p>ID: ${filteredUser.id}</p>
                <p>Name: ${filteredUser.name}</p>
            </div>
        `;
    } else {
        document.getElementById('userList').innerHTML = '<p>User not found.</p>';
    }
}