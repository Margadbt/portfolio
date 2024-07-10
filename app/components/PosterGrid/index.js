import posters from '../../../public/posters/posters.js';
import SinglePosterPreview from '../SinglePosterPreview';

export default function PosterGrid() {
    return (
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {posters.map((item, index) => (
                <SinglePosterPreview key={index} imageSrc={item} />
            ))}
        </div>
    );
}
