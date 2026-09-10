// api/github.js
// This runs securely on Vercel's servers, hiding your token.

export default async function handler(req, res) {
  // We use the GitHub GraphQL API because it easily aggregates private & public stats
  const query = `
    query {
      user(login: "murtzdev07") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
        repositories(first: 10, orderBy: {field: PUSHED_AT, direction: DESC}) {
          nodes {
            name
            pushedAt
            defaultBranchRef {
              target {
                ... on Commit {
                  message
                  history(first: 1) {
                    nodes {
                      message
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    
    // Format the response for our frontend
    const totalCommits = data.data.user.contributionsCollection.contributionCalendar.totalContributions;
    const latestRepo = data.data.user.repositories.nodes[0];
    
    res.status(200).json({
      totalCommits,
      latestRepo: latestRepo.name,
      latestCommitMessage: latestRepo.defaultBranchRef.target.history.nodes[0].message,
      lastPush: latestRepo.pushedAt
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}