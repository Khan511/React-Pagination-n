import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePages = (index) => {
    setPage(index);
  };

  const handlePrev = () => {
    setPage(page - 1);
    if (page === 0) {
      setPage(data.length - 1);
    }
  };
  const handleNext = () => {
    setPage(page + 1);
    if (page === data.length - 1) {
      setPage(0);
    }
  };

  return (
    <main>
      <div className="section-title">
        <h1> {loading ? "Loading..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="btn" onClick={handlePrev}>
              prev
            </button>

            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? `active-btn` : null}`}
                  onClick={() => handlePages(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="btn" onClick={handleNext}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
export default App;
