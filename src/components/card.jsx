const Card = ({ image, title }) => {
    return (
      <div className="flex flex-col items-center justify-center border rounded-lg p-4 shadow-md bg-white text-black hover:shadow-lg transition-shadow duration-300">
        <img src={image} alt={title} className="w-20 h-20 mb-4 object-contain" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    );
};
  
export default Card;
