function WorkGallery() {
    // Vite's dynamic import
    const images = Object.values(import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }));

    return (
        <div className="w-full px-4 py-10 bg-bgprime">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-md shadow-none rounded-md"
                    >
                        <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-[200px] md:h-[300px] object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkGallery