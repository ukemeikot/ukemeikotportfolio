// REFACTORED
export interface IncidentChoice {
  label: string;
  to: string;
}

export interface IncidentScene {
  id: string;
  status?: string;
  text: string;
  choices?: IncidentChoice[];
  ending?: {
    title: string;
    verdict: string;
    tone: 'good' | 'ok' | 'bad';
  };
}

export const INCIDENT_START = 's0';

export const incident: Record<string, IncidentScene> = {
  s0: {
    id: 's0',
    status: '03:00 · investigating',
    text: 'PagerDuty wakes you up: the API you promoted to canary an hour ago is throwing errors on 14% of requests. Coffee can wait.',
    choices: [
      { label: 'Check /metrics and recent deploys', to: 'invest' },
      { label: 'Roll back to stable immediately', to: 'rb_blind' },
      { label: 'Scale up and hope it settles', to: 'scale' },
    ],
  },
  invest: {
    id: 'invest',
    status: '03:05 · root-causing',
    text: "Metrics tell the story: p99 latency spiked and errors began the moment the canary went live. The logs are screaming 'connection pool exhausted' — the new build opens far more DB connections than stable.",
    choices: [
      { label: 'Roll back the canary to stable', to: 'rb_informed' },
      { label: 'Raise the DB pool size and restart the canary', to: 'pool' },
      { label: 'Page the database owner', to: 'page' },
    ],
  },
  rb_blind: {
    id: 'rb_blind',
    status: '03:03 · mitigating',
    text: 'You roll straight back to stable. Within a minute errors fall to near zero. The bleeding stopped — but you still have no idea what caused it.',
    choices: [
      { label: 'Investigate now that it is calm', to: 'invest_calm' },
      { label: 'Write a one-line note and go back to bed', to: 'end_ok' },
    ],
  },
  scale: {
    id: 'scale',
    status: '03:06 · escalating',
    text: 'You add three more instances. They all hammer the same database — which was the real bottleneck. Error rate climbs to 40%. That made it worse.',
    choices: [
      { label: 'Roll back to stable, now', to: 'end_messy' },
      { label: 'Finally check the logs', to: 'invest' },
    ],
  },
  invest_calm: {
    id: 'invest_calm',
    status: '03:12 · root-causing',
    text: 'With traffic safe on stable, you read the canary logs properly: a connection-pool leak. Easy to miss live, obvious in hindsight.',
    choices: [
      { label: 'Open a PR to fix the pool and add an alert', to: 'end_best' },
      { label: 'Leave it for the morning team', to: 'end_ok' },
    ],
  },
  rb_informed: {
    id: 'rb_informed',
    status: '03:08 · recovering',
    text: 'You roll back to stable and the graphs flatten. This time you know exactly why: pool exhaustion in the canary build.',
    choices: [
      { label: 'Ship a fix raising the pool + add a regression alert', to: 'end_best' },
      { label: 'Call it — note the cause and head to bed', to: 'end_ok' },
    ],
  },
  pool: {
    id: 'pool',
    status: '03:09 · recovering',
    text: "You bump the pool size and restart the canary. Errors drop, latency settles. Risky to fix forward at 3 AM, but it's holding.",
    choices: [
      { label: 'Watch a clean window, then promote to stable', to: 'end_good' },
      { label: 'Play it safe: roll back, ship the fix tomorrow', to: 'end_best' },
    ],
  },
  page: {
    id: 'page',
    status: '03:10 · coordinating',
    text: 'The DB owner picks up. A half-finished migration is holding a lock the canary trips over. You roll the canary back together and file the fix.',
    choices: [{ label: 'Roll back + coordinate the real fix', to: 'end_best' }],
  },
  end_best: {
    id: 'end_best',
    text: 'Incident closed.',
    ending: {
      title: 'Clean recovery',
      verdict:
        'Rolled back fast, found the root cause, and shipped a fix with an alert so it can’t sneak back. That’s senior on-call energy.',
      tone: 'good',
    },
  },
  end_good: {
    id: 'end_good',
    text: 'Incident closed.',
    ending: {
      title: 'Resolved',
      verdict: 'You fixed it forward and held the line. Bold at 3 AM — and it paid off this time.',
      tone: 'good',
    },
  },
  end_ok: {
    id: 'end_ok',
    text: 'Incident closed.',
    ending: {
      title: 'Stable, for now',
      verdict:
        'You stopped the bleeding but skipped the root cause. It will probably page you again next week.',
      tone: 'ok',
    },
  },
  end_messy: {
    id: 'end_messy',
    text: 'Incident closed.',
    ending: {
      title: 'Rough night',
      verdict:
        'It got worse before it got better — a longer outage and a tense post-mortem. But you will never scale into a DB bottleneck again.',
      tone: 'bad',
    },
  },
};
