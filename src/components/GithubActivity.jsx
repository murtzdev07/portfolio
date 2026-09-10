import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Activity, TerminalSquare } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export default function GithubActivity() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // This calls our secure Vercel function
        const response = await fetch('/api/github');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch GitHub stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchGitHubStats, 300000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mt-12 rounded-2xl border border-zinc-800/80 bg-[#0d0d0f] p-1 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-zinc-950/80 backdrop-blur-xl p-5 rounded-xl border border-zinc-800/50">
        
        {/* Left Side: Branding */}
        <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto border-b md:border-b-0 border-zinc-800 md:border-r md:pr-6 pb-4 md:pb-0">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">
            <SiGithub className="h-6 w-6 text-white" />
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-zinc-950"></span>
            </span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Live System Telemetry
              <Activity className="h-3 w-3 text-emerald-500" />
            </h3>
            <p className="text-xs text-zinc-500 font-mono">@murtzdev07</p>
          </div>
        </div>

        {/* Right Side: Data Feed */}
        <div className="flex-1 w-full md:pl-6 flex flex-col justify-center">
          {loading ? (
            <div className="space-y-2">
              <div className="h-3 w-1/3 bg-zinc-800 rounded animate-pulse"></div>
              <div className="h-3 w-2/3 bg-zinc-800 rounded animate-pulse"></div>
            </div>
          ) : stats ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">Total Contributions (1Y)</span>
                <span className="text-2xl font-bold text-emerald-400 font-mono">{stats.totalCommits.toLocaleString()}</span>
              </div>
              
              <div className="flex-1 max-w-md bg-zinc-900/50 rounded-lg p-3 border border-zinc-800/50 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2 mb-1 text-zinc-500">
                  <TerminalSquare className="h-3 w-3" />
                  <span>Latest Commit // {stats.latestRepo}</span>
                </div>
                <div className="flex items-start gap-2 text-zinc-300">
                  <GitCommit className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="truncate">{stats.latestCommitMessage}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-red-400 font-mono">Error connecting to GitHub API...</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}