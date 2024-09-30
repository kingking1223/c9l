const fileListElement = document.getElementById('file-list');
const currentPathElement = document.getElementById('current-path');

let currentDirectory = '/';

// Simulated file system data
const fileSystem = {
    '/': ['documents', 'images', 'videos'],
    '/documents': ['/misc', 'presentation.pptx'],
    '/images': ['photo.jpg', 'screenshot.png'],
    '/videos': ['tutorial.mp4']
};

function renderFileSystem() {
    const currentDirContent = fileSystem[currentDirectory] || [];
    fileListElement.innerHTML = '';
    currentPathElement.textContent = `Current Path: ${currentDirectory}`;

    currentDirContent.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'file-item';
        
        if (item.includes('.')) {
            itemElement.className += ' file';
            itemElement.textContent = item;
        } else {
            itemElement.className += ' folder';
            itemElement.textContent = item;
            itemElement.addEventListener('click', () => {
                currentDirectory += item + '/';
                renderFileSystem();
            });
        }

        fileListElement.appendChild(itemElement);
    });
}

renderFileSystem();

// Handle back button
document.addEventListener('keydown', event => {
    if (event.key === 'Backspace' && currentDirectory !== '/') {
        currentDirectory = currentDirectory.substring(0, currentDirectory.lastIndexOf('/'));
        renderFileSystem();
    }
});
