export async function downloadFromUrl(fileUrl, fileName) {
    try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();

        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Download failed:', error);
    }
}