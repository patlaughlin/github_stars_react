/**
 * Challenge:
 * Complete the React component below to fetch repositories from GitHub's API for a given username.
 *
 * Requirements:
 * - Fetch repositories from GitHub's API for a given username.
 * - Display the repository name and star count.
 * - Sort the repositories by star count in descending order.
 * - Cicking a repo's row should expand with the url to the repo.
 *   - Clicking the repo url should open in a new tab
 *   - Clicking the repo url should close any other open row
 * - Handle loading and error states appropriately.
 *
 * Instructions:
 * - Fill in the missing parts of the code where indicated.
 * - You may add any additional helper functions or state variables as needed.
 * - Do not change the component's name or its export.
 *
 * How to Run:
 * 1. Run the project using `npm start` or `yarn start`.
 * 2. The component should display a list of repositories for a given GitHub username sorted by stars.
 */

// Example Output:
// GitHub Repository Viewer
//
//     [Enter GitHub username] [Fetch Repositories]
//
// Repositories of facebook
//
// - react (Stars: 200000)
// - react-native (Stars: 100000)
// - jest (Stars: 35000)

import React, { useState, useEffect } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = 'facebook';

  useEffect(() => {
    // TODO: Fetch repositories from GitHub API and update the state
  }, [username]);

  if (loading) {
    return <div>Loading repositories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Repositories of {username}</h1>
      <ul>
        {/* TODO: Render the list of repositories sorted by stars */}
      </ul>
    </div>
  );
}

export default App;
