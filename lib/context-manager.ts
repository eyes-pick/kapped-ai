// Utility for managing prompt history per project using localStorage

const STORAGE_KEY = "kapped-prompts";

/** Record of prompts for each project ID */
type PromptHistory = Record<string, string[]>;

/** Load prompt history from localStorage */
function loadHistory(): PromptHistory {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PromptHistory) : {};
  } catch {
    return {};
  }
}

/** Persist prompt history back to localStorage */
function saveHistory(history: PromptHistory): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // Ignore persistence errors
  }
}

/**
 * Add a prompt entry for a given project.
 * @param projectId Unique ID of the project
 * @param prompt User prompt text
 */
export function addPrompt(projectId: string, prompt: string): void {
  const history = loadHistory();
  history[projectId] = [...(history[projectId] || []), prompt];
  saveHistory(history);
}

/**
 * Retrieve stored prompts for a project.
 * @param projectId Unique ID of the project
 * @returns Array of prompts or an empty array
 */
export function getContext(projectId: string): string[] {
  const history = loadHistory();
  return history[projectId] || [];
}

/**
 * Remove all stored prompts for a project.
 * @param projectId Unique ID of the project
 */
export function clearContext(projectId: string): void {
  const history = loadHistory();
  delete history[projectId];
  saveHistory(history);
}
