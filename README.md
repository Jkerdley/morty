# Morty - Rick and Morty Universe Explorer

## О проекте

Morty - это веб-приложение для исследования вселенной Rick and Morty. Проект позволяет:

- Просматривать информацию о персонажах

- Изучать локации и эпизоды

## Технологии

- **Frontend**: React, TypeScript, Vite, AntDesign

- **Styling**: CSS Modules

- **Routing**: React Router DOM
-
- **Arhitecture**: FSD

## Установка

1. Клонируйте репозиторий:

```bash

git  clone  https://github.com/Jkerdley/morty.git

```

2. Установите зависимости:

```bash

cd  morty

npm  install

```

3. Запустите проект:

```bash

npm run dev

```

## Структура проекта

```
Использована архитектура FSD

src/

├── app/ # Основные файлы проекта, глобальные стили, контекст, роуты и провайдеры

├── pages/ # Страницы приложения

├── widgets/ # Готовые модули/виджеты (списки героев, навигация и т.д.)

├── features/ # Фичи проекта (login, authStatus)

├── entities/ # Сущности приложения (episode, heroe, location)

├── shared/ # Общие ресурсы(types, ui, e.t.c)


```

## Скрипты

- `dev` - запуск dev сервера

- `build` - сборка проекта
