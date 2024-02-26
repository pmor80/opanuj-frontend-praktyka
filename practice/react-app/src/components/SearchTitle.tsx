function SearchTitle({ name = 'Country' }: { name?: string }) {
  return <h1 className="text-2xl">Search {name}</h1>;
}

export default SearchTitle;
