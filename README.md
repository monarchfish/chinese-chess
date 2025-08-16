# Chinese Chess Game

A Chinese Chess (Xiangqi) game built with Electron, React, and TypeScript.

## Features

- Traditional Chinese Chess gameplay
- Cross-platform desktop application
- Modern UI with Tailwind CSS and shadcn/ui components
- Built with Electron and React

## Installation

### Prerequisites

- Node.js LTS/Iron (v20 or higher)
- npm

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd chinese-chess
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development

Start the development server:
```bash
npm run dev
```

### Build

Build for different platforms:

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

## Development Plan

### Phase 1: Basic UI and Core Game Logic
- [x] Project setup with Electron + React + TypeScript
- [ ] Implement basic chess board layout
- [ ] Add essential UI components (start button, restart, turn indicator)
- [ ] Integrate shadcn/ui components as needed
- [ ] Create game state management

### Phase 2: Local 1v1 Player vs Player
- [ ] Implement mouse-based piece movement
- [ ] Add move validation (legal moves, occupied squares)
- [ ] Implement win/loss detection
- [ ] Add basic Xiangqi rules:
  - Red side moves first
  - Soldiers cannot move backward
  - Soldiers can only move sideways after crossing the river
  - All other traditional Xiangqi movement rules

### Phase 3: Enhanced Interface
- [ ] Add move history display
- [ ] Implement separate timers for each player
- [ ] Show captured pieces for each side
- [ ] Improve UI/UX with additional shadcn/ui components

### Phase 4: AI Opponent
- [ ] Implement AI player
- [ ] Add difficulty levels
- [ ] Create AI move calculation algorithms

### Phase 5: Online Multiplayer
- [ ] Add online matchmaking
- [ ] Implement real-time game synchronization
- [ ] Add chat functionality
- [ ] Optimize network performance

### Phase 6: Advanced Features
- [ ] Add game statistics and analytics
- [ ] Implement tutorial mode
- [ ] Add sound effects and animations
- [ ] Create customizable themes

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui (planned)
- **Desktop**: Electron
- **Build Tool**: Vite
- **Package Manager**: npm

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
