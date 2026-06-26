# Movie Magic - Part 1

Готов Express + Handlebars проект по workshop условието.

## Стартиране

```bash
npm install
npm start
```

След това отвори:

```text
http://localhost:3000
```

## Реализирани маршрути

- `/` — начална страница с всички филми
- `/about` — About страница
- `/create` — форма за създаване на филм
- `POST /create` — записва филма в `config/database.json`
- `/details/:id` — детайли за избрания филм
- `/search` — търсене по част от title, genre и year, case-insensitive
- всички други адреси — 404 страница

## Структура

```text
config/database.json
controllers/
models/Movie.js
repositories/movieRepository.js
services/movieService.js
views/
static/
index.js
hbsConfig.js
expressConfig.js
routes.js
```
