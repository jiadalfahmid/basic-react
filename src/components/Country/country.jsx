import './country.css';
const Country = ({country}) => {
   return (
      <div className = "country">
         <img src={country?.flags?.png} alt="" />
         <h4>{country?.name?.common}</h4>
      </div>
   );
};

export default Country;