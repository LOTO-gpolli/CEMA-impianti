module.exports = {
  "disableEmoji": false,
  "list": [
    "feat",
    "fix",
    "test",
    "style",
    "perf",
    "refactor",
    "chore",
    "ci",
    "docs",
  ],
  "maxMessageLength": 64,
  "minMessageLength": 3,
  "questions": [
    "type",
    "scope",
    "subject",
    "body",
    "issues",
  ],
  "scopes": [],
  "types": {
    "feat": {
      "description": "A new feature",
      "emoji": "🎸",
      "value": "feat"
    },
    "fix": {
      "description": "A bug fix",
      "emoji": "🐛",
      "value": "fix"
    },
    "style": {
      "description": "Markup, white-space, formatting, missing semi-colons...",
      "emoji": "💄",
      "value": "style"
    },
    "test": {
      "description": "Adding missing tests",
      "emoji": "💍",
      "value": "test"
    },
    "perf": {
      "description": "A code change that improves performance",
      "emoji": "⚡️",
      "value": "perf"
    },
    "refactor": {
      "description": "A code change that neither fixes a bug or adds a feature",
      "emoji": "💡",
      "value": "refactor"
    },
    "release": {
      "description": "Create a release commit",
      "emoji": "🏹",
      "value": "release"
    },
    "chore": {
      "description": "Build process or auxiliary tool changes",
      "emoji": "🤖",
      "value": "chore"
    },
    "ci": {
      "description": "CI related changes",
      "emoji": "🎡",
      "value": "ci"
    },
    "docs": {
      "description": "Documentation only changes",
      "emoji": "✏️",
      "value": "docs"
    },
  }
};