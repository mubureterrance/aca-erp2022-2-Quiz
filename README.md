# Quiz App

A modern, interactive quiz application built with React and TypeScript featuring persistent progress tracking, performance analytics, and a responsive design.
This project was part of the Africa Code Acadamy Engineering Residency program 

## Features

### Core Functionality

- **Interactive Quiz Interface**: Clean, modern UI with smooth animations
- **Progress Persistence**: Automatically saves progress in localStorage - resume where you left off
- **Smart Navigation**: Prevents accidental quiz resets with confirmation dialogs
- **Performance Tracking**: Tracks correct/incorrect answers per question
- **Leaderboard**: Maintains top 10 scores with dates and percentages

### User Experience

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded correct/incorrect answers with animations
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Accessibility**: Focus states and semantic HTML for screen readers
- **Smooth Animations**: Subtle hover effects and state transitions

### Data Management

- **LocalStorage Integration**: Safely handles browser storage with fallbacks
- **Type Safety**: Full TypeScript implementation for robust data handling
- **Performance Analytics**: Per-question performance tracking
- **Score History**: Maintains historical performance data

## Technology Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Custom CSS with CSS Grid/Flexbox
- **State Management**: React Hooks (useState, custom hooks)
- **Data Persistence**: LocalStorage
- **Build Tool**: Vite/Create React App (based on your setup)

## Project Structure

```
src/
├── components/
|   └── Welcome/
|       ├── WelcomePage.tsx              # Welcome page on quiz initial start up
│       ├── WelcomePage.css              # Styling and responsive design
│   └── Quiz/
│       ├── Quiz.tsx              # Main quiz component
│       ├── Quiz.css              # Styling and responsive design
│       └── hooks/
│           ├── useLocalStorage.js         # LocalStorage utilities
│           ├── useQuizProgress.js         # Progress tracking
│           └── useQuestionPerformance.js  # Performance analytics
├── assets/
│   └── Images/
│       └── aca_logo-rb.png       # Application logo
└── Data.tsx                      # Quiz questions data
└── App.tsx
└── App.css
└── Index.tsx
└── Index.css
```

**Clone the repository**

```bash
git clone [https://github.com/mubureterrance/aca-erp2022-2-Quiz]
cd aca-erp2022-2-Quiz
```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Configuration

### Adding Quiz Questions

Edit the `Data.tsx` file to add or modify quiz questions:

```javascript
export const data = [
  {
    question: "Your question here?",
    option1: "First option",
    option2: "Second option",
    option3: "Third option",
    option4: "Fourth option",
    ans: 1, // Correct answer (1-4)
  },
  // Add more questions...
];
```

### Customizing Styles

The app uses CSS custom properties for easy theming. Key variables in `Quiz.css`:

```css
:root {
  --primary-color: #1e40af;
  --secondary-color: #3b82f6;
  --success-color: #10b981;
  --error-color: #ef4444;
}
```

## Usage

### Taking a Quiz

1. Click on answer options to select your choice
2. Click "Next" to proceed to the next question
3. Your progress is automatically saved
4. View results and leaderboard upon completion

### Progress Management

- **Auto-save**: Progress saves automatically after each answer
- **Resume**: Refresh the page to continue where you left off
- **Reset**: Use the "Reset Quiz" button with confirmation dialog
- **Performance**: Track your improvement over time

### Viewing Results

- **Score Summary**: See your final score and percentage
- **Performance Message**: Get encouraging feedback based on your score
- **Leaderboard**: Compare with your previous attempts
- **Retake**: Start over anytime with the reset functionality

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: Requires localStorage support for progress persistence

## Performance Features

- **Lazy Loading**: Efficient component initialization
- **Memory Management**: Proper cleanup of event listeners
- **Responsive Images**: Optimized loading for different screen sizes
- **CSS Optimization**: Minimal reflows and repaints

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant color schemes
- **Focus Management**: Clear visual focus indicators

## Local Development

### Development Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run test       # Run test suite
npm run lint       # Check code quality
```

### Environment Setup

- **Node.js**: 16.0 or higher recommended
- **Package Manager**: npm or yarn
- **Editor**: VS Code with TypeScript extension recommended

## Data Storage

The app uses browser localStorage to persist:

- **Quiz Progress**: Current question, selected answers, score
- **Performance Data**: Per-question analytics
- **Score History**: Top 10 scores with timestamps
- **User Preferences**: Theme and display settings

## Customization Options

### Styling

- Modify `Quiz.css` for visual customization
- Update CSS custom properties for quick theme changes
- Responsive breakpoints can be adjusted in media queries

### Functionality

- Add new question types by extending the `QuizQuestion` interface
- Implement additional analytics in the performance hooks
- Customize scoring algorithms in the quiz logic

## Troubleshooting

### Common Issues

**Quiz not saving progress:**

- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Ensure you're not in incognito/private browsing mode

**Styling issues:**

- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Check if custom CSS is being cached
- Verify CSS file paths are correct

**Questions not loading:**

- Verify `Data.tsx` file format matches the expected structure
- Check browser console for JavaScript errors
- Ensure all required question properties are present

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Project was initially forked from Africa Code Academy official github repository as part of a assignment.
- Built with React and modern web technologies
- Responsive design inspired by modern UI/UX principles
- Accessibility features following WCAG guidelines

## Access project

- licensed under the MIT License
- github repository [https://github.com/mubureterrance/aca-erp2022-2-Quiz]
- Live deployed and live on [https://aca-erp2022-2-quiz-rho.vercel.app/]

---

## Quick Start Guide

1. **Install dependencies**: `npm install`
2. **Add your questions**: Edit `Data.tsx`
3. **Start developing**: `npm start`
4. **Customize styling**: Modify `Quiz.css`
5. **Build for production**: `npm run build`

For more detailed information, see the sections above or check the inline code documentation.
