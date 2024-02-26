import { Country } from '../types/Country';

function CountryList({ countries }: { countries: Country[] }) {
  return (
    <ol>
      {countries.map((country) => (
        <li key={country.cca2} className="flex flex-col items-center">
          <h3>{country.name.common}</h3>
          <p>
            <img src={country.flags.png} alt={country.name.common} />
          </p>
        </li>
      ))}
    </ol>
  );
}

export default CountryList;
