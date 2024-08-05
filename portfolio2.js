document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Josika_resume.pdf'; // Replace with the path to your document
    link.download = 'Josika_resume.pdf'; // The name you want for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
