const Properties = ({ properties }) => {
  return (
    <>
      {properties.map((property) => (
        <Property property={property} key={property._id} />
      ))}
    </>
  );
};

export default Properties;

//
export const Property = ({ property }) => {
  return (
    <div className="property_card">
      <div className="property_images">
        <img src={property.img} alt="" className="property_image" />
      </div>
    </div>
  );
};
