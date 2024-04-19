// Function to determine the appropriate image size based on screen width
function getImageUrlForScreen(imageUrl, screenWidth) {
    if (screenWidth > 1920) {
        return `${imageUrl}?size=large`;
    } else if (screenWidth > 768) {
        return `${imageUrl}?size=medium`;
    } else {
        return `${imageUrl}?size=small`;
    }
}

// Export the function for use in other parts of your application
export default getImageUrlForScreen;
