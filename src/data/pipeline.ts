// REFACTORED
export interface PipelineScenario {
  id: string;
  request: string;
  stages: string[]; // correct order, top → bottom
  explanation: string;
}

export const pipelineScenarios: PipelineScenario[] = [
  {
    id: 'authed-write',
    request: 'POST /api/messages — an authenticated user sends a chat message',
    stages: [
      'Rate limiter',
      'Auth / JWT verify',
      'Validate body',
      'Route handler',
      'Service layer',
      'DB write',
      'Response',
    ],
    explanation:
      'Edge protection first (rate limit), then authenticate, then validate input. The handler delegates to the service layer, which writes to the database before the response is returned.',
  },
  {
    id: 'public-read',
    request: 'GET /api/classify?name=James — a public, cached lookup',
    stages: [
      'Rate limiter',
      'Validate query',
      'Route handler',
      'Check cache',
      'Upstream API call',
      'Cache result',
      'Response',
    ],
    explanation:
      'No auth needed. After rate-limiting and validating the query, the handler checks the cache; on a miss it calls the upstream API, caches the result, then responds.',
  },
  {
    id: 'file-upload',
    request: 'POST /api/profile/avatar — an authenticated image upload',
    stages: [
      'Rate limiter',
      'Auth / JWT verify',
      'Validate file type & size',
      'Route handler',
      'Stream to storage',
      'Save URL to DB',
      'Response',
    ],
    explanation:
      'Authenticate, then validate the file before doing expensive work. The handler streams the file to object storage, persists the resulting URL, and returns it.',
  },
];
