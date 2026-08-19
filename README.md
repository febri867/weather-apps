# 🌦️ Weather Apps

A modern weather dashboard built with **React**, **TypeScript**, and **Vite**, integrating data from **OpenStreetMap Nominatim** and **wttr.in**.

This project was developed with a strong focus on:

- Clean Architecture
- Separation of Concerns
- Reusable Components
- Testability
- Responsive Design
- Type Safety
- Developer Experience

---

## ✨ Features

### Weather Search

Search weather information by city name using OpenStreetMap Nominatim.

### Real-Time Weather Data

Retrieve current weather conditions from wttr.in including:

- Temperature
- Feels Like
- Humidity
- Wind Speed
- Weather Description

### Location Information

Display location metadata:

- Full Location Name
- Latitude
- Longitude
- Timezone
- Local Time

### Responsive UI

Fully responsive layout optimized for:

- Mobile Devices
- Tablets
- Desktop Screens

### Unit Testing

Comprehensive test coverage using:

- Jest
- React Testing Library

---

# 🏗️ Architecture

The project follows a lightweight domain-driven structure.

```text
src
│
├── component
│   ├── header
│   └── searchInput
│
├── domain
│   └── weather.ts
│
├── pages
│   └── home
│       ├── components
│       │   ├── TemperatureCard.tsx
│       │   ├── LocationCard.tsx
│       │   └── Stats.tsx
│       │
│       ├── __test__
│       │   ├── TemperatureCard.test.tsx
│       │   ├── LocationCard.test.tsx
│       │   ├── Stats.test.tsx
│       │   └── useHooks.test.tsx
│       │
│       ├── useHooks.ts
│       └── index.tsx
│
├── App.tsx
├── main.tsx
└── setupTests.ts
```

---

# 📂 Folder Responsibilities

## domain

Contains business entities and type definitions.

```typescript
weather.ts
```

Responsibilities:

- Weather Interfaces
- Domain Models
- Shared Type Definitions

This layer contains no UI logic.

---

## component

Reusable UI components shared across pages.

### Header

Responsible for:

- Application Branding
- Page Title

### SearchInput

Responsible for:

- User Input
- Search Trigger

Designed to be reusable and independent.

---

## pages/home

Feature-based module for Weather Dashboard.

Contains:

### TemperatureCard

Responsible for:

- Current Temperature
- Weather Description
- Feels Like Temperature

### LocationCard

Responsible for:

- Location Information
- Coordinates
- Timezone
- Local Time

### Stats

Responsible for:

- Humidity
- Wind Speed
- Additional Metrics

### useHooks

Responsible for:

- API Calls
- State Management
- Data Transformation
- Error Handling

This keeps UI components purely presentational.

---

# 🔄 Data Flow

```text
User Input
     │
     ▼
SearchInput
     │
     ▼
useHooks
     │
     ├── OpenStreetMap Nominatim
     │
     └── wttr.in
     │
     ▼
Weather Domain Model
     │
     ▼
Presentation Components
     │
     ├── TemperatureCard
     ├── LocationCard
     └── Stats
```

---

# 🌐 External APIs

## OpenStreetMap Nominatim

Used for geocoding.

Example:

```http
GET https://nominatim.openstreetmap.org/search?q=jakarta&format=jsonv2
```

Returns:

```json
{
  "lat": "-6.1753942",
  "lon": "106.827183"
}
```

---

## wttr.in

Used for weather information.

Example:

```http
GET https://wttr.in/Jakarta?format=j1
```

Returns:

```json
{
  "current_condition": []
}
```

---

# 🧪 Testing Strategy

The project includes unit tests for:

## Components

### TemperatureCard

Tests:

- Temperature rendering
- Weather description rendering
- Feels-like rendering

### LocationCard

Tests:

- City display
- Coordinate display
- Timezone display

### Stats

Tests:

- Humidity rendering
- Wind speed rendering

---

## Hooks

### useHooks

Tests:

- Successful API fetch
- Loading states
- Error states
- Data transformation
- API failure handling

---

## Current Result

```bash
Test Suites: 6 passed, 6 total
Tests:       19 passed, 19 total
Snapshots:   0 total
```

Achieving:

✅ 100% successful execution

---

# 🎨 UI Design Principles

The interface was designed following modern dashboard patterns inspired by:

- Linear
- Vercel
- Stripe Dashboard
- Apple Weather

Design considerations:

### Visual Hierarchy

Large temperature section to emphasize primary information.

### Information Grouping

Separate cards for:

- Temperature
- Location
- Statistics

### Mobile First

Responsive breakpoints:

```text
Mobile
↓
Tablet
↓
Desktop
```

### Accessibility

Considerations include:

- Semantic HTML
- Readable contrast
- Consistent spacing
- Clear visual grouping

---

# ⚙️ Tech Stack

| Category | Technology |
|-----------|------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | CSS / Tailwind Ready |
| Testing | Jest |
| Testing Library | React Testing Library |
| Linting | ESLint |
| Formatting | Prettier |

---

# 🚀 Installation

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

---

# 🧪 Run Tests

```bash
pnpm test
```

Watch mode:

```bash
pnpm test --watch
```

Coverage:

```bash
pnpm test --coverage
```

---

# 📈 Future Improvements

Potential enhancements:

### Weather Forecast

- Hourly Forecast
- 7-Day Forecast

### Data Visualization

- Temperature Trend Charts
- Humidity Charts
- Wind Speed Charts

### User Experience

- Dark Mode
- Theme Switching
- Skeleton Loading

### Performance

- API Caching
- Debounced Search
- React Query Integration

### Maps

- OpenStreetMap Integration
- Interactive Location Selection

---

# 🔥 Engineering Decisions

### Why Custom Hook?

To separate:

```text
Business Logic
        ≠
Presentation Logic
```

Benefits:

- Easier Testing
- Better Reusability
- Cleaner Components

---

### Why Small Presentational Components?

Instead of one large page component:

```text
TemperatureCard
LocationCard
Stats
```

Benefits:

- Better Maintainability
- Easier Unit Testing
- Improved Readability

---

### Why Domain Layer?

To avoid coupling API responses directly to UI.

Benefits:

- Strong Type Safety
- Easier Refactoring
- Better Scalability

---

# 👨‍💻 Author

Febri Ramadhan