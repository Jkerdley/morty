# Morty - Rick and Morty Universe Explorer

![Rick and Morty Logo](https://example.com/rick-and-morty-logo.png)

## О проекте

Morty - это веб-приложение для исследования вселенной Rick and Morty. Проект позволяет:

- Просматривать информацию о персонажах
- Изучать локации и эпизоды

## Технологии

- **Frontend**: React, TypeScript, Vite
- **Styling**: CSS Modules
- **Routing**: React Router DOM

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Jkerdley/morty.git
```

2. Установите зависимости:

```bash
cd morty
npm install
```

3. Запустите проект:

```bash
npm run dev
```

## Структура проекта

```
src/
├── api/          # API и данные(mock data)
├── modules/      # Готовые модули/компоненты
├── hooks/        # Кастомные хуки
├── pages/        # Страницы приложения
├── shared/       # Общие ресурсы(types, ui, e.t.c)
└── styles/       # Глобальные стили
```

## Скрипты

- `dev` - запуск dev сервера
- `build` - сборка проекта
