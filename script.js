// script.js
const directoryList = document.getElementById('directory-list');

function displayDirectoryContents(directoryPath) {
    // Simulating directory contents (replace with actual file system access)
    const directoryContents = [
        { name: "Folder 1", type: "folder" },
        { name: "File 1.txt", type: "file" },
        { name: "Folder 2", type: "folder" },
        { name: "File 2.pdf", type: "file" }
    ];

    directoryList.innerHTML = '';
    
    directoryContents.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = `directory-item ${item.type}`;
        
        const itemName = document.createTextNode(item.name);
        listItem.appendChild(itemName);

        // Add click event listener for folders
        if (item.type === 'folder') {
            listItem.addEventListener('click', () => {
                // Implement folder navigation logic here
                console.log(`Navigating to ${item.name}`);
            });
        }

        directoryList.appendChild(listItem);
    });
}

// Initial display of root directory
displayDirectoryContents('/');