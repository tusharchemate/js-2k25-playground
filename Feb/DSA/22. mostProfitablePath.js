/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
function mostProfitablePath(edges, bob, amount) {
    const n = amount.length;
    const adj = Array.from({ length: n }, () => []);
    const bobDist = new Array(n).fill(n);
    
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    function dfs(node, parent, depth) {
        if (node === bob) {
            bobDist[node] = 0;
        }
        
        let bestChildProfit = -Infinity;
        let profitHere = 0;
        
        for (let child of adj[node]) {
            if (child === parent) continue;
            const childProfit = dfs(child, node, depth + 1);
            bestChildProfit = childProfit > bestChildProfit ? childProfit : bestChildProfit;
            bobDist[node] = Math.min(bobDist[node], bobDist[child] + 1);
        }
       
        if (depth < bobDist[node]) {
            profitHere += amount[node];
        } else if (depth === bobDist[node]) {
            profitHere += (amount[node] >> 1); 
        }
        return bestChildProfit === -Infinity ? profitHere : profitHere + bestChildProfit;
    }
    
    return dfs(0, -1, 0);
}
