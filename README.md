# 🌦️ Weather Dashboard

A production-oriented weather dashboard built with React, TypeScript, and Vite.

The application retrieves geolocation data from OpenStreetMap Nominatim and current weather conditions from wttr.in, transforming external API responses into stable domain models through a dedicated service and repository layer.

The project emphasizes maintainability, scalability, testability, and separation of concerns while keeping the user experience fast and responsive.

---

# ✨ Key Features

## Weather Search

Search weather information by city name.

## Current Weather Conditions

Display:

- Temperature
- Feels Like Temperature
- Humidity
- Wind Speed
- Weather Description

## Location Intelligence

Display:

- Full Location Name
- Latitude
- Longitude
- Timezone
- Local Time

## Responsive Experience

Optimized for:

- Mobile
- Tablet
- Desktop

## Error Resilience

Includes:

- API Error Handling
- Runtime Error Boundary
- Request Cancellation
- Graceful UI Recovery

## Performance Optimization

Includes:

- React Query
- Request Deduplication
- Automatic Retry Strategy
- Smart Caching
- Memoized Presentation Components

---

# 🏛️ Architecture

The application follows a layered architecture inspired by Domain-Driven Design and Clean Architecture principles.

```text
src
│
├── components
│   ├── ErrorBoundary
│   ├── Header
│   ├── SearchInput
│   └── WeatherSkeleton
│
├── constants
│   ├── queryKeys.ts
│   └── weather.ts
│
├── config
│   └── env.ts
│
├── domain
│   └── weather.ts
│
├── errors
│   ├── LocationNotFoundError.ts
│   └── WeatherApiError.ts
│
├── hooks
│   └── useWeather.ts
│
├── repositories
│   └── weather.repository.ts
│
├── services
│   ├── interfaces
│   │   └── WeatherService.ts
│   │
│   ├── mappers
│   │   └── weather.mapper.ts
│   │
│   ├── geocoding.service.ts
│   └── weather.service.ts
│
├── types
│   ├── geocoding.ts
│   └── weather.ts
│
├── utils
│   ├── logger.ts
│   └── weatherIcon.ts
│
├── pages
│   └── home
│       ├── components
│       └── index.tsx
│
├── App.tsx
├── main.tsx
└── setupTests.ts
```

---

# 📦 Layer Responsibilities

## Domain Layer

Contains application business models.

```ts
WeatherData
```

The UI never consumes raw API responses directly.

Benefits:

- Stable contracts
- Type safety
- Easier refactoring
- Decoupled presentation layer

---

## Service Layer

Responsible for external integrations.

### geocoding.service.ts

Handles:

- OpenStreetMap requests
- Response validation
- Error mapping

### weather.service.ts

Handles:

- wttr.in requests
- Weather DTO retrieval
- Transport concerns

Services know how to communicate with external systems.

They do not contain presentation logic.

---

## Repository Layer

Responsible for orchestrating multiple services.

```text
Weather Repository
        │
        ├── Geocoding Service
        └── Weather Service
```

Responsibilities:

- Aggregate external data
- Coordinate multiple APIs
- Return domain models

This keeps hooks and UI independent from infrastructure details.

---

## Mapper Layer

Responsible for transforming:

```text
External DTO
       ↓
Domain Entity
```

Example:

```text
WeatherDto
       ↓
WeatherData
```

Benefits:

- API changes remain isolated
- UI contracts remain stable

---

## Hook Layer

### useWeather

Responsible for:

- User interactions
- Request execution
- Loading states
- Error states
- React Query integration

No API implementation details exist in the UI.

---

## Presentation Layer

Contains pure components.

Examples:

```text
TemperatureCard
LocationCard
Stats
```

Responsibilities:

- Render data
- User interaction
- Accessibility

No business logic.

---

# 🔄 Request Flow

```text
User Search
      │
      ▼
useWeather
      │
      ▼
Weather Repository
      │
      ├── Geocoding Service
      │
      └── Weather Service
      │
      ▼
DTO Mapper
      │
      ▼
Domain Entity
      │
      ▼
Presentation Components
```

---

# ⚡ State Management Strategy

The application follows a single source of truth approach.

```text
useWeather
      │
      ▼
Parent Component
      │
      ▼
Presentational Components
```

No duplicated state exists across components.

This avoids:

- State divergence
- Unnecessary re-renders
- Hidden side effects

---

# 🌐 External Services

## OpenStreetMap Nominatim

Used for geocoding.

Example:

```http
GET /search?q=jakarta&format=jsonv2
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
GET /Jakarta?format=j1
```

Returns weather metadata including:

- Temperature
- Humidity
- Wind Speed
- Description

---

# 🚀 Performance Optimizations

## React Query

Provides:

- Caching
- Request deduplication
- Automatic retries
- Background updates

---

## AbortController

Cancels stale requests when users perform multiple searches rapidly.

Prevents:

- Race conditions
- Unnecessary network usage

---

## Memoized Components

Presentation components use memoization where appropriate to reduce unnecessary renders.

---

## Lazy Loading Ready

Architecture supports route-level and component-level code splitting.

---

# 🛡 Error Handling Strategy

## Custom Domain Errors

```text
LocationNotFoundError
WeatherApiError
```

Allows error-specific UI behavior.

---

## Error Boundary

Protects the application from runtime rendering failures.

```text
Unexpected Render Error
        ↓
Fallback UI
```

---

## API Failure Recovery

The application gracefully handles:

- Network failures
- Invalid responses
- Empty results
- Service unavailability

---

# 🧪 Testing Strategy

The project prioritizes testing business behavior rather than implementation details.

## Unit Tests

### Repository Layer

Tests:

- Service orchestration
- Data aggregation
- Domain mapping

### Mapper Layer

Tests:

- DTO transformations
- Domain consistency

### Hook Layer

Tests:

- Loading states
- Error handling
- Successful requests

### Presentation Layer

Tests:

- User-visible rendering
- Accessibility behavior

---

# ⚙️ Developer Experience

## TypeScript

Strict typing across all layers.

## ESLint

Static code analysis.

## Prettier

Consistent formatting.

## Environment Variables

Configuration is isolated through:

```env
VITE_GEOCODING_API_URL
VITE_WEATHER_API_URL
```

## CI/CD

GitHub Actions pipeline validates:

```bash
pnpm lint
pnpm __test__
pnpm build
```

before changes are merged.

---

# 📊 Tech Stack

| Category | Technology |
|-----------|------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| State Management | React Query |
| Styling | Tailwind CSS |
| Testing | Jest |
| Testing Utilities | React Testing Library |
| Linting | ESLint |
| Formatting | Prettier |
| CI/CD | GitHub Actions |

---

# 🚀 Getting Started

## Installation

```bash
pnpm install
```

## Environment Variables

Create:

```env
.env
```

```env
VITE_GEOCODING_API_URL=https://nominatim.openstreetmap.org
VITE_WEATHER_API_URL=https://wttr.in
```

## Start Development Server

```bash
pnpm dev
```

## Production Build

```bash
pnpm build
```

## Run Tests

```bash
pnpm __test__
```

## Coverage

```bash
pnpm __test__ --coverage
```

---

# 🔮 Roadmap

## Near-Term Improvements

### Search Experience

- Debounced Search
- Search History
- Recent Locations

### Weather Enhancements

- Hourly Forecast
- 7-Day Forecast
- Weather Alerts

### Mapping

- Interactive OpenStreetMap
- Reverse Geocoding
- Current User Location

### User Experience

- Dark / Light Theme
- Persistent Preferences
- Animated Weather States

---

## Engineering Improvements

### Observability

- Sentry Integration
- Datadog Logging
- Performance Monitoring

### Data Validation

- Runtime Schema Validation
- Contract Testing
- API Response Guards

### Performance

- Route-Based Code Splitting
- Virtualized Lists
- Service Worker Caching

### Quality Assurance

- E2E Testing with Playwright
- Visual Regression Testing
- Accessibility Auditing

### Architecture

- Dependency Injection Container
- Repository Interfaces
- Multi Weather Provider Support
- Offline First Capability

---

# 👨‍💻 Author

**Febri Ramadhan**

React • TypeScript • Next.js • Frontend Architecture