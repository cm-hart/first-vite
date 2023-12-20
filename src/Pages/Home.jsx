import "../App.css";
import { useState } from "react";

function Home() {
  //   console.log(import.meta.env.VITE_APP_API_KEY);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [data, setData] = useState(null);
  const [isData, setIsData] = useState(false);
  const [formData, setFromData] = useState({
    cover: "",
    category: "",
  });

  function apiCall() {
    let coverLocal = formData.cover;
    let catLocal = formData.category;
    console.log(formData.cover, formData.category, "here");
    let url = `https://api.nytimes.com/svc/books/v3/lists/current/${coverLocal}-${catLocal}.json?api-key=${API_KEY}`;
    console.log(url, "URL");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsData(true);
        console.log(data, "DATA");
      })
      .catch((error) => console.log(error));
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsData(false);
    setData(formData);
    apiCall();
  }

  return (
    <div className="page-wrapper">
      <h1>Check out the New York Times Best Seller's Lists for Books!</h1>
      <form>
        <div className="formInput">
          <label htmlFor="cover">Paperback or Hardcover?</label>
          <select required name="cover" id="cover" onChange={handleChange}>
            <option value="paperback">Select a cover type</option>
            <option value="paperback">Paperback</option>
            <option value="hardcover">Hardcover</option>
          </select>
        </div>
        <div className="formInput">
          <label htmlFor="category">Fiction or Nonfiction?</label>
          <select
            required
            name="category"
            id="category"
            onChange={handleChange}
          >
            <option value="fiction">Select a category</option>
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Nonfiction</option>
          </select>
        </div>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>

      {isData ? (
        <div className="cards-wrapper">
          {data.results &&
            data.results.books.map((item, key) => {
              return (
                <div className="card" key={key}>
                  <p>{item.rank}</p>
                  <p>{item.title}</p>
                  <img src={item.book_image} alt="" />
                </div>
              );
            })}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
