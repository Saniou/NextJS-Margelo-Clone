import type { NextApiRequest } from 'next'
import axios from 'axios'

type Data = {
    commits: number
}

const ghAccounts: { readonly [ userName: string ]: number } = {
    mrousavy: 1
}

async function getNumOfCommits {
    
    
    
}